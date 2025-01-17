from flask import Flask, jsonify, request
from flask_cors import CORS
from school_api.extensions import db, jwt, bcrypt, migrate
from school_api.controllers.user_controller import auth as auth_blueprint
from school_api.controllers.application_controller import application as application_blueprint
from school_api.controllers.event_controller import events_blueprint
from school_api.controllers.notification_controller import notifications as notifications_blueprint
from school_api.models.user import User
from school_api.controllers.admissions_controller import admissions_bp
from flask_jwt_extended import jwt_required, create_access_token, get_jwt_identity
import os

def create_app():
    app = Flask(__name__)
    CORS(app, supports_credentials=True, resources={r"/api/*": {"origins": "http://localhost:3000"}})

    app.config.from_object('config.Config')
    app.config['JWT_SECRET_KEY'] = 'inner_man'

    db.init_app(app)
    jwt.init_app(app)
    bcrypt.init_app(app)
    migrate.init_app(app, db)

    app.register_blueprint(auth_blueprint, url_prefix='/api/v1/auth')
    app.register_blueprint(application_blueprint, url_prefix='/api/v1/application')
    app.register_blueprint(events_blueprint, url_prefix='/api/v1/events')
    app.register_blueprint(notifications_blueprint, url_prefix='/api/v1/notifications')
    app.register_blueprint(admissions_bp, url_prefix='/api/v1/admissions')

    with app.app_context():
        create_admin()

    return app

def create_admin():
    ADMIN_EMAIL = os.getenv('ADMIN_EMAIL', 'innerman@gmail.com')
    ADMIN_PASSWORD = os.getenv('ADMIN_PASSWORD', 'innerman_school')

    admin = User.query.filter_by(email=ADMIN_EMAIL).first()
    if not admin:
        hashed_password = bcrypt.generate_password_hash(ADMIN_PASSWORD).decode('utf-8')
        admin = User(
            first_name='Admin',
            last_name='User',
            email=ADMIN_EMAIL,
            password=hashed_password,
            user_type='admin',
            isadmin=True
        )
        db.session.add(admin)
        db.session.commit()

@auth_blueprint.route('/refresh', methods=['POST', 'OPTIONS'])
@jwt_required(refresh=True)
def refresh():
    if request.method == 'OPTIONS':
        return jsonify({'message': 'CORS preflight'}), 200

    current_user = get_jwt_identity()
    new_access_token = create_access_token(identity=current_user)
    return jsonify(access_token=new_access_token), 200

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)

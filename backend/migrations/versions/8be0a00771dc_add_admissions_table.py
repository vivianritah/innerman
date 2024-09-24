"""Add admissions table

Revision ID: 8be0a00771dc
Revises: 912016230932
Create Date: 2024-07-15 22:02:37.666654

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8be0a00771dc'
down_revision = '912016230932'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('admissions',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('class_name', sa.String(length=50), nullable=False),
    sa.Column('tuition_day', sa.String(length=50), nullable=True),
    sa.Column('tuition_boarding', sa.String(length=50), nullable=True),
    sa.Column('registration_fees', sa.String(length=50), nullable=False),
    sa.Column('uniform_boarding', sa.String(length=50), nullable=True),
    sa.Column('uniform_day', sa.String(length=50), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('class_name')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('admissions')
    # ### end Alembic commands ###

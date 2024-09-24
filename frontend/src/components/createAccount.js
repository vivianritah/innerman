import React, { useState } from 'react';
import './createAccount.css'; 
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    user_type: ''
  });

  const [showSuccess, setShowSuccess] = useState(false); // New state for success message

  const navigate = useNavigate(); // Using useNavigate hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error:', errorData);
        return;
      }

      const data = await response.json();
      console.log('Success:', data);
      setShowSuccess(true); // Show success message
      setTimeout(() => {
        setShowSuccess(false); // Hide success message after 2 seconds
        navigate('/login'); // Redirect to login page
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="create-account">
      <h2>Create Account</h2>
      {showSuccess && <div className="success-message">Account created successfully!</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="user_type">User Type:</label>
          <select
            id="user_type"
            name="user_type"
            value={formData.user_type}
            onChange={handleChange}
            required
          >
            <option value="">Select User Type</option>
            <option value="student">Student</option>
            <option value="teacher">Parent</option>
            {/* <option value="admin">Admin</option> */}
          </select>
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccount;

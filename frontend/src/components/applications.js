import React, { useState, useEffect } from 'react';
import './application.css';
import { useNavigate } from 'react-router-dom';

function Applications() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    other_name: '',
    date_of_birth: '',
    name_of_previous_school: '',
    previous_math_grade: '',
    previous_english_grade: '',
    current_level: '',
    year_of_admission: '',
    guardian_full_name: '',
    guardian_contact: '',
    guardian_email: '',
  });
  
  const [userId, setUserId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Fetch user data from local storage
    const accessToken = localStorage.getItem('access_token');
    const storedUserId = localStorage.getItem('user_id');

    if (!accessToken) {
      navigate('/login');
    } else if (storedUserId) {
      setUserId(storedUserId);
    } else {
      console.error('User ID not found in local storage');
      navigate('/login');
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      console.error('User ID is required.');
      return;
    }

    const formDataWithUserId = { ...formData, user_id: userId };

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/application/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
        body: JSON.stringify(formDataWithUserId),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setSuccessMessage('Your application has been submitted successfully!');
      console.log('Success:', result);
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="application">
      <h1 className="application-title">Please Fill This Application Form</h1>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form className="application-form" onSubmit={handleSubmit}>
        <label>First Name:
          <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
        </label>
        <label>Last Name:
          <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} required />
        </label>
        <label>Other Name:
          <input type="text" name="other_name" value={formData.other_name} onChange={handleChange} />
        </label>
        <label>Date of Birth:
          <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} required />
        </label>
        <label>Name of Previous School:
          <input type="text" name="name_of_previous_school" value={formData.name_of_previous_school} onChange={handleChange} required />
        </label>
        <label>Previous Math Grade:
          <input type="number" name="previous_math_grade" value={formData.previous_math_grade} onChange={handleChange} required />
        </label>
        <label>Previous English Grade:
          <input type="number" name="previous_english_grade" value={formData.previous_english_grade} onChange={handleChange} required />
        </label>
        <label>Current Level:
          <input type="text" name="current_level" value={formData.current_level} onChange={handleChange} required />
        </label>
        <label>Year of Admission:
          <input type="number" name="year_of_admission" value={formData.year_of_admission} onChange={handleChange} required />
        </label>
        <label>Guardian Full Name:
          <input type="text" name="guardian_full_name" value={formData.guardian_full_name} onChange={handleChange} required />
        </label>
        <label>Guardian Contact:
          <input type="text" name="guardian_contact" value={formData.guardian_contact} onChange={handleChange} required />
        </label>
        <label>Guardian Email:
          <input type="email" name="guardian_email" value={formData.guardian_email} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Applications;

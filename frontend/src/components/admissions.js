import React, { useState, useEffect } from 'react';
import './admissions.css';

function Admissions() {
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/admissions/`)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="admissions">
      <h1>Fees Structure for Innerman Pre & Primary School</h1>
      <table className="fees-table">
        <thead>
          <tr>
            <th>Class</th>
            <th>Tuition Fees (Day)</th>
            <th>Tuition Fees (Boarding)</th>
            <th>Registration Fees</th>
            <th>Day Uniform Fees</th>
            <th>Boarding Uniform Fees</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="6">No fees data available.</td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.class}</td>
                <td>{item.fees.day || '-'}</td>
                <td>{item.fees.boarding || '-'}</td>
                <td>{item.fees.registration || '-'}</td>
                <td>{item.fees.uniformDay || '-'}</td>
                <td>{item.fees.uniformBoarding || '-'}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Admissions;

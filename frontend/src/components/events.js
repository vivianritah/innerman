import React, { useState, useEffect } from 'react';
import './events.css'; // Make sure you create and import a CSS file for styling

function Events() {
  const [eventsData, setEventsData] = useState([]);
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');

    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/events/get_event`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        if (!response.ok) {
          // Handle HTTP errors
          return response.json().then(errorData => {
            throw new Error(errorData.message || 'An error occurred');
          });
        }
        return response.json();
      })
      .then(data => setEventsData(data))
      .catch(err => setError(err.message)); // Update error state
  }, []);

  return (
    <div className="events-section">
      <h2>Upcoming Events</h2>
      {error && <p className="error">{error}</p>} {/* Display error if present */}
      <ul>
        {eventsData.length > 0 ? (
          eventsData.map((event, index) => {
            const eventDate = new Date(event.date);
            const isoDate = eventDate.toISOString().split('T')[0]; // Get the date part in ISO format

            return (
              <li key={index} className="event-item">
                <div className="event-date">
                  <div className="iso-date">{isoDate}</div>
                </div>
                <div className="event-details">
                  <strong>{event.name}</strong>
                  <p>{event.description}</p>
                  <p className="event-time">
                    {eventDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                  <p className="event-location">{event.location}</p>
                </div>
              </li>
            );
          })
        ) : (
          <p>No events available</p>
        )}
      </ul>
    </div>
  );
}

export default Events;

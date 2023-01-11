import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [enquiry, setEnquiry] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [showErrorBox, setShowErrorBox] = useState(false);
  const [showMessageBox, setShowMessageBox] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !enquiry || !message) {
      setError('Oops! Something went wrong, please fill in all fields');
      setShowErrorBox(true);
    } else {
      setMessageSent(true);
      setShowMessageBox(true);
    }
  }

  const handleCloseErrorBox = () => {
    setShowErrorBox(false);
  }

  const handleCloseMessageBox = () => {
    setShowMessageBox(false);
  }

  return (
    <div className="Contact">
      {showErrorBox && (
        <div className="error-box">
          <p>{error}</p>
          <button onClick={handleCloseErrorBox}>Close</button>
        </div>
      )}
      {showMessageBox && (
        <div className="message-box">
          <p>
            Thank you for the message, unfortunately at this time I have not yet finished implementation of server-side logic so I will not receive this message, please email it directly to me instead, if you wish to contact me. austinvarga1@protonmail.com, Thanks!
          </p>
          <button onClick={handleCloseMessageBox}>Close</button>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <h2>Contact Me</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="enquiry">Type of enquiry:</label>
        <select
          id="enquiry"
          name="enquiry"
          required
          value={enquiry}
          onChange={(e) => setEnquiry(e.target.value)}
        >
          <option value="" disabled selected>-- select --</option>
          <option value="freelance">Freelance project proposal</option>
          <option value="freelance">Freelance project proposal</option>
          <option value="employment">Employment proposal</option>
<option value="collaboration">Collaborations / Startups</option>
<option value="other">Other</option>
</select>
<br />
<label htmlFor="message">Message:</label>
<textarea
  id="message"
  name="message"
  required
  value={message}
  onChange={(e) => setMessage(e.target.value)}
/>
<br />
<button type="submit">Send Message</button>
</form>
</div>
);
};

export default Contact;

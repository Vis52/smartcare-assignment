import React from 'react';
import './Contact.css';

const Contact = () => {return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Get in Touch</h2>
      <form className="mx-auto p-4 shadow rounded bg-white" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label fw-bold">User Name</label>
          <input type="text" className="form-control" id="userName" placeholder="Vishal Sharma" />
        </div>
        <div className="mb-3">
          <label htmlFor="userEmail" className="form-label fw-bold">Email address</label>
          <input type="email" className="form-control" id="userEmail" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="userMessage" className="form-label fw-bold">Type Your Message</label>
          <textarea className="form-control" id="userMessage" rows="4" placeholder="Write your message here..."></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

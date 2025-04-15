
import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    
    setShowAlert(true);

    
    setName('');
    setEmail('');
    setMessage('');
    };

    return (
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
        <h2 className="mb-4">Contact Us</h2>
        <p>If you have any questions, feedback, or would like to reach out — we'd love to hear from you!</p>

        
        {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
            Thank you for your message! We will get back to you soon.
        </Alert>
        )}

        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
            />
        </div>

        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            />
        </div>

        <div className="mb-3">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea
            className="form-control"
            id="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
            required
            ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Send Message</button>
        </form>

        <hr className="my-4" />

        <div>
        <h5>📍 Visit Us</h5>
        <p>Ideal Café, MG Road, Mangalore, Karnataka, India</p>
        <h5>📞 Call</h5>
        <p>+91 98765 43210</p>
        <h5>📧 Email</h5>
        <p>support@idealcafe.com</p>
        </div>
    </div>
    );
}

export default Contact;

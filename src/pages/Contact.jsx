import React, { useState } from 'react';

export default function Contact() {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = form;

    if (!name || !email || !subject || !message) {
      setStatus('Please fill in all fields.');
      return;
    }

    fetch(`${BACKEND_URL}/api/send-email`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, subject, message }),
    })
      .then(() => {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', subject: '', message: '' });
      })
      .catch(() => setStatus('Failed to send message. Please try again later.'));
  }

  return (
    <section className="contact-page container">
      <h2>Contact Us</h2>
      <p className="lead">We would love to hear from you. Fill out the form to get in touch.</p>

      <div className="contact-layout">
        {/* Left column for contact info */}
        <div className="contact-info">
          <h3>Our Contact Info</h3>
          <p>📍 kimironko,Rwanda</p>
          <p>📞 +250 785 713 295</p>
          <p>📧sorlyjesai@gmail</p>
          <a
            href="https://wa.me/250785713295"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
            >
            💬 Chat on WhatsApp
          </a>
        </div>

        {/* Right column for the form */}
        <div className="contact-form-wrapper">
          {status && <p className="status">{status}</p>}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
            />
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
            />
            <button type="submit" className="btn primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

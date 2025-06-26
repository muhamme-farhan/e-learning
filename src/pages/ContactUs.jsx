import React, { useState } from 'react';
import Navbar from '../components/Navbar';


const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add backend API submission logic here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Hide message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <Navbar />
      <section className="contact-section py-5 bg-light" style={{ minHeight: '80vh' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5 text-primary">Get in Touch</h2>
            <p className="text-muted fs-5">We'd love to hear from you! Fill out the form below to reach our team.</p>
          </div>

          <div className="row g-5">
            <div className="col-md-5">
              <div className="bg-white p-4 shadow-lg rounded-4">
                <div className="d-flex align-items-start mb-4">
                  <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                  <div>
                    <h5 className="fw-bold">Location</h5>
                    <p className="text-muted">123 Main Street, Smart City, SC 45678</p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-4">
                  <i className="fas fa-phone fa-2x text-primary me-4"></i>
                  <div>
                    <h5 className="fw-bold">Call Us</h5>
                    <p className="text-muted">+1 (800) 987-6543</p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                  <div>
                    <h5 className="fw-bold">Email</h5>
                    <p className="text-muted">support@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-7">
              <div className="bg-white p-4 shadow-lg rounded-4">
                {submitted && (
                  <div
                    className="alert alert-success fade show"
                    role="alert"
                    style={{ transition: 'opacity 0.5s ease-in-out' }}
                  >
                    Thank you for your message! We will get back to you soon.
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg rounded-pill px-4"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        transition: 'box-shadow 0.3s ease',
                      }}
                      onFocus={(e) => e.target.style.boxShadow = '0 0 8px rgba(102, 126, 234, 0.7)'}
                      onBlur={(e) => e.target.style.boxShadow = 'none'}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control form-control-lg rounded-pill px-4"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        transition: 'box-shadow 0.3s ease',
                      }}
                      onFocus={(e) => e.target.style.boxShadow = '0 0 8px rgba(102, 126, 234, 0.7)'}
                      onBlur={(e) => e.target.style.boxShadow = 'none'}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg rounded-pill px-4"
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      style={{
                        transition: 'box-shadow 0.3s ease',
                      }}
                      onFocus={(e) => e.target.style.boxShadow = '0 0 8px rgba(102, 126, 234, 0.7)'}
                      onBlur={(e) => e.target.style.boxShadow = 'none'}
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control rounded-4 p-3"
                      rows="5"
                      placeholder="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{
                        transition: 'box-shadow 0.3s ease',
                      }}
                      onFocus={(e) => e.target.style.boxShadow = '0 0 8px rgba(102, 126, 234, 0.7)'}
                      onBlur={(e) => e.target.style.boxShadow = 'none'}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 rounded-pill shadow"
                    style={{
                      transition: 'background-color 0.3s ease, transform 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#556cd6';
                      e.target.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

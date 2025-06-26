import React, { useState } from 'react';
import { FaLock, FaUser, FaCreditCard, FaCheck, FaArrowRight, FaShieldAlt, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const EnrollmentPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
    agree: false
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="enrollment-container">
      <div className="enrollment-header">
        <h1>Data Science & Machine Learninge</h1>
        <p>Secure your future in Data Science & Machine Learning with our comprehensive program</p>
      </div>

      <div className="enrollment-progress">
        <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
          <div className="step-number">1</div>
          <span>Personal Info</span>
        </div>
        <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
          <div className="step-number">2</div>
          <span>Payment</span>
        </div>
        <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
          <div className="step-number">3</div>
          <span>Complete</span>
        </div>
      </div>

      <div className="enrollment-content">
        <div className="form-container">
          {step === 1 && (
            <div className="form-step">
              <h2><FaUser /> Personal Information</h2>
              <form>
                <div className="input-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                <div className="input-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="john@example.com" 
                    required 
                  />
                </div>
                <div className="input-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="+1 (123) 456-7890" 
                    required 
                  />
                </div>
                <button type="button" onClick={nextStep} className="next-btn">
                  Continue to Payment <FaArrowRight />
                </button>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="form-step">
              <h2><FaCreditCard /> Payment Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="payment-methods">
                  <div className="payment-method active">
                    <FaCreditCard /> Credit/Debit Card
                  </div>
                  <div className="payment-method">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
                  </div>
                </div>

                <div className="input-group">
                  <label>Card Number</label>
                  <input 
                    type="text" 
                    name="cardNumber" 
                    value={formData.cardNumber} 
                    onChange={handleChange} 
                    placeholder="1234 5678 9012 3456" 
                    required 
                  />
                </div>

                <div className="input-row">
                  <div className="input-group">
                    <label>Expiry Date</label>
                    <input 
                      type="text" 
                      name="expiry" 
                      value={formData.expiry} 
                      onChange={handleChange} 
                      placeholder="MM/YY" 
                      required 
                    />
                  </div>
                  <div className="input-group">
                    <label>Security Code</label>
                    <input 
                      type="text" 
                      name="cvc" 
                      value={formData.cvc} 
                      onChange={handleChange} 
                      placeholder="CVC" 
                      required 
                    />
                  </div>
                </div>

                <div className="checkbox-group">
                  <input 
                    type="checkbox" 
                    id="agree" 
                    name="agree" 
                    checked={formData.agree} 
                    onChange={handleChange} 
                    required 
                  />
                  <label htmlFor="agree">
                    I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                  </label>
                </div>

                <div className="form-actions">
                  <button type="button" onClick={prevStep} className="back-btn">
                    Back
                  </button>
                  <button type="submit" className="submit-btn">
                    Complete Enrollment <FaLock />
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="confirmation-step">
              <div className="confirmation-icon">
                <FaCheck />
              </div>
              <h2>Enrollment Confirmed!</h2>
              <p className="confirmation-text">
                Thank you for enrolling in our Ethical Hacking course. We've sent a confirmation to <strong>{formData.email}</strong>.
              </p>
              
              <div className="course-details">
                <div className="detail-item">
                  <FaCalendarAlt className="detail-icon" />
                  <div>
                    <h4>Course Start now</h4>
                    <p>all the best</p>
                  </div>
                </div>
                <div className="detail-item">
                  <FaShieldAlt className="detail-icon" />
                  <div>
                    <h4>Access Granted</h4>
                    <p>Within 24 hours</p>
                  </div>
                </div>
              </div>    
               <Link to="/Datascienceenroll">
              <button className="dashboard-btn">
                 
                Go to learn
              </button>
              </Link>
            </div>
          )}
        </div>

        <div className="summary-container">
          <div className="course-summary">
            <h3>Course Summary</h3>
            <div className="course-title"> Data Science & Machine Learning</div>
            <div className="price-container">
              <span className="original-price">$1,499</span>
              <span className="current-price">$999</span>
              <span className="discount">33% OFF</span>
            </div>
            
            <ul className="features-list">
              <li><FaCheck /> 16-Week Intensive Program</li>
              <li><FaCheck />  Certification Prep</li>
              <li><FaCheck /> 60+ Hands-on Labs</li>
              <li><FaCheck /> CTF Challenges</li>
              <li><FaCheck /> Career Support</li>
            </ul>
            
            <div className="support-info">
              <h4>Need Help?</h4>
              <p>Email us at <a href="mailto:support@ethicalhacking.edu">support@ethicalhacking.edu</a></p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :root {
          --primary: #4f46e5;
          --primary-light: #6366f1;
          --primary-dark: #4338ca;
          --success: #10b981;
          --text: #1e293b;
          --text-light: #64748b;
          --border: #e2e8f0;
          --bg-light: #f8fafc;
          --white: #ffffff;
          --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .enrollment-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
          color: var(--text);
        }
        
        .enrollment-header {
          text-align: center;
          margin-bottom: 2rem;
          padding: 3rem;
        }
        
        .enrollment-header h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--primary-dark);
        }
        
        .enrollment-header p {
          font-size: 1.1rem;
          color: var(--text-light);
        }
        
        .enrollment-progress {
          display: flex;
          justify-content: space-between;
          position: relative;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .enrollment-progress::before {
          content: '';
          position: absolute;
          top: 15px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--border);
          z-index: 1;
        }
        
        .progress-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        
        .step-number {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--border);
          color: var(--text-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          margin-bottom: 0.5rem;
          transition: all 0.3s ease;
        }
        
        .progress-step.active .step-number {
          background: var(--primary);
          color: var(--white);
        }
        
        .progress-step span {
          font-size: 0.875rem;
          color: var(--text-light);
          font-weight: 500;
        }
        
        .progress-step.active span {
          color: var(--text);
        }
        
        .enrollment-content {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }
        
        .form-container {
          flex: 2;
          min-width: 300px;
        }
        
        .summary-container {
          flex: 1;
          min-width: 300px;
        }
        
        .form-step, .confirmation-step {
          background: var(--white);
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: var(--shadow);
          margin-bottom: 2rem;
        }
        
        .form-step h2, .confirmation-step h2 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          color: var(--primary-dark);
        }
        
        .input-group {
          margin-bottom: 1.5rem;
        }
        
        .input-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--text);
        }
        
        .input-group input {
          width: 100%;
          padding: 0.875rem 1rem;
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          font-size: 1rem;
          transition: all 0.2s;
        }
        
        .input-group input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }
        
        .input-row {
          display: flex;
          gap: 1rem;
        }
        
        .input-row .input-group {
          flex: 1;
        }
        
        .payment-methods {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .payment-method {
          flex: 1;
          padding: 1rem;
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .payment-method.active {
          border-color: var(--primary);
          background: var(--bg-light);
        }
        
        .payment-method img {
          height: 24px;
        }
        
        .checkbox-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin: 1.5rem 0;
        }
        
        .checkbox-group input {
          width: auto;
        }
        
        .checkbox-group label {
          font-size: 0.875rem;
          color: var(--text-light);
        }
        
        .checkbox-group a {
          color: var(--primary);
          text-decoration: none;
        }
        
        .form-actions {
          display: flex;
          justify-content: space-between;
        }
        
        .back-btn, .next-btn, .submit-btn, .dashboard-btn {
          padding: 0.875rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .back-btn {
          background: none;
          border: 1px solid var(--border);
          color: var(--text-light);
        }
        
        .back-btn:hover {
          background: var(--bg-light);
        }
        
        .next-btn, .submit-btn, .dashboard-btn {
          background: var(--primary);
          color: var(--white);
          border: none;
        }
        
        .next-btn:hover, .submit-btn:hover, .dashboard-btn:hover {
          background: var(--primary-dark);
        }
        
        .confirmation-step {
          text-align: center;
        }
        
        .confirmation-icon {
          width: 80px;
          height: 80px;
          background: var(--success);
          color: var(--white);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 2rem;
        }
        
        .confirmation-text {
          color: var(--text-light);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        
        .course-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
          text-align: left;
        }
        
        .detail-item {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          background: var(--bg-light);
          border-radius: 0.5rem;
        }
        
        .detail-icon {
          font-size: 1.25rem;
          color: var(--primary);
          margin-top: 0.25rem;
        }
        
        .detail-item h4 {
          font-size: 0.875rem;
          color: var(--text-light);
          margin-bottom: 0.25rem;
        }
        
        .detail-item p {
          font-weight: 500;
          color: var(--text);
        }
        
        .course-summary {
          background: var(--white);
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: var(--shadow);
          position: sticky;
          top: 2rem;
        }
        
        .course-summary h3 {
          margin-bottom: 1.5rem;
          color: var(--primary-dark);
        }
        
        .course-title {
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .price-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .original-price {
          text-decoration: line-through;
          color: var(--text-light);
        }
        
        .current-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text);
        }
        
        .discount {
          background: var(--success);
          color: var(--white);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        .features-list {
          list-style: none;
          margin-bottom: 2rem;
        }
        
        .features-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          color: var(--text);
        }
        
        .features-list li svg {
          color: var(--success);
          flex-shrink: 0;
          margin-top: 0.25rem;
        }
        
        .support-info {
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
        }
        
        .support-info h4 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
        
        .support-info p {
          font-size: 0.875rem;
          color: var(--text-light);
        }
        
        .support-info a {
          color: var(--primary);
          text-decoration: none;
        }
        
        @media (max-width: 768px) {
          .enrollment-header h1 {
            font-size: 2rem;
          }
          
          .enrollment-progress {
            margin-bottom: 2rem;
          }
          
          .progress-step span {
            display: none;
          }
          
          .input-row {
            flex-direction: column;
            gap: 0;
          }
          
          .form-step, .confirmation-step, .course-summary {
            padding: 1.5rem;
          }
        }
        
        @media (max-width: 480px) {
          .enrollment-header h1 {
            font-size: 1.75rem;
          }
          
          .payment-methods {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default EnrollmentPage;
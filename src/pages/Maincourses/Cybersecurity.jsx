// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Cybersecurity() {
//   const [enrolled, setEnrolled] = useState(false);
//   const [showAnimation, setShowAnimation] = useState(false);

//   const handleEnroll = () => {
//     setShowAnimation(true);
//     setTimeout(() => {
//       setEnrolled(true);
//       setShowAnimation(false);
//     }, 1500);
//   };

//   return (
//     <div className="container py-5" style={{ maxWidth: '1200px' }}>
//       {/* Header */}
//       <div className="text-center mb-5">
//         <h1 className="display-5 fw-bold text-gradient">Cybersecurity Fundamentals</h1>
//         <p className="lead text-muted">Protect systems, data, and networks with expert-level cybersecurity skills</p>
//         <div className="d-flex justify-content-center gap-2">
//           <span className="badge bg-danger fs-6 px-3 py-2 rounded-pill">Advanced</span>
//           <span className="badge bg-primary fs-6 px-3 py-2 rounded-pill">12 Weeks</span>
//           <span className="badge bg-success fs-6 px-3 py-2 rounded-pill">Hot & New</span>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div className="row align-items-center mb-5 g-4">
//         <div className="col-lg-6">
//           <div className="position-relative">
//             <img
//               src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
//               alt="Cybersecurity Course"
//               className="img-fluid rounded-4 shadow-lg"
//               style={{ border: '3px solid #0d6efd' }}
//             />
//             <div className="position-absolute bottom-0 start-0 bg-primary text-white p-2 rounded-end">
//               <i className="bi bi-shield-lock-fill me-2"></i> Certified Course
//             </div>
//           </div>
//         </div>
//         <div className="col-lg-6">
//           <div className="p-4 bg-white rounded-4 shadow-sm">
//             <h3 className="fw-bold mb-4 text-primary">Why Learn Cybersecurity?</h3>
//             <p className="text-muted mb-4">
//               As technology evolves, so do threats. Cybersecurity is crucial for safeguarding personal, corporate, and
//               government systems from malicious attacks. With demand skyrocketing, cybersecurity professionals are some of
//               the most sought-after experts globally.
//             </p>
//             <ul className="list-group list-group-flush border-top border-bottom">
//               <li className="list-group-item d-flex align-items-center">
//                 <i className="bi bi-shield-check text-success me-3 fs-5"></i>
//                 <span>Ethical Hacking & Penetration Testing</span>
//               </li>
//               <li className="list-group-item d-flex align-items-center">
//                 <i className="bi bi-lock-fill text-primary me-3 fs-5"></i>
//                 <span>Network & Application Security</span>
//               </li>
//               <li className="list-group-item d-flex align-items-center">
//                 <i className="bi bi-binoculars-fill text-warning me-3 fs-5"></i>
//                 <span>Threat Analysis and Risk Management</span>
//               </li>
//               <li className="list-group-item d-flex align-items-center">
//                 <i className="bi bi-file-earmark-text-fill text-info me-3 fs-5"></i>
//                 <span>Compliance & Governance (GDPR, ISO 27001)</span>
//               </li>
//               <li className="list-group-item d-flex align-items-center">
//                 <i className="bi bi-award-fill text-danger me-3 fs-5"></i>
//                 <span>Industry-ready Certification Preparation (CEH, CISSP)</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* What You'll Learn */}
//       <div className="bg-gradient p-4 rounded-4 shadow-lg mb-5" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
//         <h4 className="fw-bold mb-4 text-center text-dark">What You'll Learn</h4>
//         <div className="row g-4">
//           <div className="col-md-4">
//             <div className="card h-100 border-0 shadow-sm">
//               <div className="card-body">
//                 <h5 className="card-title text-primary">
//                   <i className="bi bi-layers-half me-2"></i>Foundations
//                 </h5>
//                 <ul className="list-unstyled">
//                   <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Foundations of Cybersecurity</li>
//                   <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Types of Malware and Threats</li>
//                   <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Firewalls, IDS/IPS Systems</li>
//                   <li><i className="bi bi-check-circle-fill text-success me-2"></i>Security Policies & Frameworks</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card h-100 border-0 shadow-sm">
//               <div className="card-body">
//                 <h5 className="card-title text-primary">
//                   <i className="bi bi-bug-fill me-2"></i>Technical Skills
//                 </h5>
//                 <ul className="list-unstyled">
//                   <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Web App Security (OWASP Top 10)</li>
//                   <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Vulnerability Scanning Tools</li>
//                   <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Network Defense Mechanisms</li>
//                   <li><i className="bi bi-check-circle-fill text-success me-2"></i>Incident Response Techniques</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card h-100 border-0 shadow-sm">
//               <div className="card-body">
//                 <h5 className="card-title text-primary">
//                   <i className="bi bi-cloud-fill me-2"></i>Advanced Topics
//                 </h5>
//                 <ul className="list-unstyled">
//                   <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Cloud Security Basics</li>
//                   <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Cryptography & Encryption</li>
//                   <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Security Auditing</li>
//                   <li><i className="bi bi-check-circle-fill text-success me-2"></i>Real-world Case Studies</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Instructor */}
//       <div className="mb-5">
//         <h4 className="fw-bold mb-4 text-center">Meet Your Instructor</h4>
//         <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 p-4 bg-white rounded-4 shadow-sm">
//           <img
//             src="https://randomuser.me/api/portraits/men/45.jpg"
//             className="rounded-circle shadow"
//             alt="Instructor"
//             width="120"
//             style={{ border: '3px solid #0d6efd' }}
//           />
//           <div className="text-center text-md-start">
//             <h5 className="mb-1">Dr. Ankit Mehra</h5>
//             <p className="text-muted mb-2">Certified Ethical Hacker | 10+ Years in Cybersecurity Training</p>
//             <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-2">
//               <span className="badge bg-light text-dark border"><i className="bi bi-star-fill text-warning me-1"></i>4.9/5 Rating</span>
//               <span className="badge bg-light text-dark border"><i className="bi bi-people-fill text-primary me-1"></i>50K+ Students</span>
//               <span className="badge bg-light text-dark border"><i className="bi bi-patch-check-fill text-success me-1"></i>Verified Expert</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enrollment CTA */}
//       <div className="text-center mt-5 position-relative" style={{ minHeight: '100px' }}>
//         {showAnimation && (
//           <div className="enrollment-animation">
//             <div className="spinner-grow text-primary" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//             <p className="mt-2">Processing your enrollment...</p>
//           </div>
//         )}
        
//         {enrolled ? (
//           <div className="alert alert-success d-inline-block">
//             <h4 className="alert-heading">
//               <i className="bi bi-check-circle-fill me-2"></i> Enrollment Successful!
//             </h4>
//             <p>Welcome to Cybersecurity Fundamentals! .</p>
//           </div>
//         ) : (
//           <div className="cta-box p-4 rounded-4 shadow-lg bg-primary text-white">
//             <h3 className="mb-3">Ready to Secure Your Future?</h3>
//             <p className="mb-4">Join thousands of students mastering cybersecurity skills</p>
//             <button 
//               onClick={handleEnroll}
//               className="btn btn-light btn-lg px-4 py-2 fw-bold"
//             >
//               Enroll Now <i className="bi bi-arrow-right ms-2"></i>
//             </button>
//             <div className="mt-3 text-white-50">
//               <i className="bi bi-shield-lock me-2"></i> 7-day money-back guarantee
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Add some CSS for the animation and text gradient */}
//       <style>{`
//         .text-gradient {
//           background: linear-gradient(90deg, #0d6efd, #d63384);
//           -webkit-background-clip: text;
//           background-clip: text;
//           color: transparent;
//         }
//         .enrollment-animation {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           background-color: rgba(255, 255, 255, 0.8);
//           z-index: 10;
//         }
//         .cta-box {
//           background: linear-gradient(135deg, #0d6efd 0%, #6610f2 100%);
//           max-width: 600px;
//           margin: 0 auto;
//         }
//         .list-group-item {
//           transition: all 0.3s ease;
//         }
//         .list-group-item:hover {
//           background-color: #f8f9fa;
//           transform: translateX(5px);
//         }
//       `}</style>
//     </div>
//   );
// }



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// export default function Cybersecurity() {
//   const [enrolled, setEnrolled] = useState(false);

//   const handleEnroll = () => {
//     setEnrolled(true);
//     setTimeout(() => setEnrolled(false), 3000); // Hide after 3 seconds
//   };

//   return (
//     <div className="container py-5">
//       {/* Header */}
//       <div className="text-center mb-5">
//         <h1 className="display-4 fw-bold">
//           <span className="text-primary">Cyber</span>
//           <span className="text-danger">security</span> Fundamentals
//         </h1>
//         <p className="lead text-muted mt-3">
//           Protect systems, data, and networks with expert-level cybersecurity skills
//         </p>
//         <div className="mt-3">
//           <span className="badge bg-danger fs-6 me-2 px-3 py-2">
//             <i className="bi bi-shield-lock me-2"></i>Advanced
//           </span>
//           <span className="badge bg-dark fs-6 px-3 py-2">
//             <i className="bi bi-calendar-week me-2"></i>12 Weeks
//           </span>
//         </div>
//       </div>

//       {/* Image & Overview */}
//       <div className="row align-items-center mb-5 g-4">
//         <div className="col-lg-6">
//           <img
//             src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
//             alt="Cybersecurity"
//             className="img-fluid rounded-4 shadow-lg border border-primary border-opacity-25"
//           />
//           <div className="mt-4 d-flex justify-content-center gap-3">
//             <span className="badge bg-dark text-white">
//               <i className="bi bi-star-fill text-warning me-1"></i> 4.9/5.0
//             </span>
//             <span className="badge bg-dark text-white">
//               <i className="bi bi-people-fill me-1"></i> 12,500+ students
//             </span>
//           </div>
//         </div>
//         <div className="col-lg-6">
//           <div className="p-4 bg-light rounded-4">
//             <h3 className="fw-bold mb-4">
//               <i className="bi bi-shield-shaded text-primary me-2"></i>
//               Why Learn Cybersecurity?
//             </h3>
//             <p className="text-muted">
//               Cybersecurity is crucial in protecting systems and data. With demand increasing, professionals in this field are highly sought-after worldwide.
//             </p>
//             <ul className="list-group list-group-flush">
//               <li className="list-group-item bg-transparent d-flex align-items-center">
//                 <i className="bi bi-lock-fill text-primary me-3"></i>
//                 Ethical Hacking & Penetration Testing
//               </li>
//               <li className="list-group-item bg-transparent d-flex align-items-center">
//                 <i className="bi bi-shield-check text-primary me-3"></i>
//                 Network & Application Security
//               </li>
//               <li className="list-group-item bg-transparent d-flex align-items-center">
//                 <i className="bi bi-binoculars-fill text-primary me-3"></i>
//                 Threat Analysis and Risk Management
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Instructor Card */}
//       <div className="card mb-5">
//         <div className="card-body">
//           <h4 className="fw-bold mb-3">
//             <i className="bi bi-person-badge-fill text-primary me-2"></i>
//             Meet Your Instructor
//           </h4>
//           <div className="d-flex flex-column flex-md-row align-items-center gap-4">
//             <img
//               src="https://randomuser.me/api/portraits/men/45.jpg"
//               className="rounded-circle border border-3 border-primary shadow"
//               alt="Instructor"
//               width="120"
//             />
//             <div>
//               <h5>Dr. Ankit Mehra</h5>
//               <p className="text-muted">Certified Ethical Hacker | 10+ Years in Cybersecurity Training</p>
//               <p>Former CSO at TechDefense. Trained 5,000+ professionals. Author of cybersecurity bestsellers.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enroll Section */}
//       <div className="text-center mt-5">
//         <button className="btn btn-lg btn-primary px-5 py-3 fw-bold" onClick={handleEnroll}>
//           <i className="bi bi-shield-check me-2"></i> Enroll Now
//         </button>
//         <p className="text-muted mt-3">
//           <i className="bi bi-arrow-repeat me-1"></i> 30-day money-back guarantee
//         </p>

//         {enrolled && (
//           <div className="alert alert-success mt-4 fw-semibold" role="alert">
//             <i className="bi bi-check-circle-fill me-2"></i>Successfully joined the course!
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { FaShieldAlt, FaLock, FaUserSecret, FaCheck, FaArrowRight, FaCode, FaNetworkWired, FaBug } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { BsShieldLock } from 'react-icons/bs';

const CybersecurityCourse = () => {
  const [activeTab, setActiveTab] = useState('fundamentals');

  return (
    <div className="cybersecurity-course-container">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="hero-content">
          <div className="cybersecurity-badge">
            <BsShieldLock className="cybersecurity-icon" />
            <span>Secure Your Future</span>
          </div>
          <h1 className="hero-title">
            <span className="highlight">Cybersecurity</span> & Ethical Hacking
          </h1>
          <p className="hero-description">
            Master security fundamentals, penetration testing, and defense strategies to protect digital assets
          </p>
          
          <div className="hero-meta">
            <div className="meta-item">
              <IoMdTime className="meta-icon" />
              <div>
                <span className="meta-label">Duration</span>
                <span className="meta-value">14 Weeks</span>
              </div>
            </div>
            <div className="meta-item">
              <FaShieldAlt className="meta-icon" />
              <div>
                <span className="meta-label">Level</span>
                <span className="meta-value">Intermediate</span>
              </div>
            </div>
            <div className="meta-item">
              <FaLock className="meta-icon" />
              <div>
                <span className="meta-label">Certification</span>
                <span className="meta-value">Cybersecurity Analyst</span>
              </div>
            </div>
          </div>
          
          <div className="hero-cta">
            <a href="Hackingenroll" className="cta-button primary">
              Enroll Now <FaArrowRight className="cta-icon" />
            </a>
            <a href="#syllabus" className="cta-button secondary">
              Explore Syllabus
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="cybersecurity-animation">
            {/* This would be your cybersecurity visualization */}
            <div className="shield"></div>
            <div className="lock"></div>
            <div className="network"></div>
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section className="syllabus-section" id="syllabus">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-decorator">///</span> Course Syllabus
          </h2>
          <p className="section-subtitle">
            Comprehensive curriculum covering cybersecurity principles and ethical hacking techniques
          </p>
        </div>

        <div className="syllabus-tabs">
          <button 
            className={`tab-button ${activeTab === 'fundamentals' ? 'active' : ''}`}
            onClick={() => setActiveTab('fundamentals')}
          >
            <FaLock className="tab-icon" /> Security Fundamentals
          </button>
          <button 
            className={`tab-button ${activeTab === 'pentesting' ? 'active' : ''}`}
            onClick={() => setActiveTab('pentesting')}
          >
            <FaBug className="tab-icon" /> Penetration Testing
          </button>
          <button 
            className={`tab-button ${activeTab === 'defense' ? 'active' : ''}`}
            onClick={() => setActiveTab('defense')}
          >
            <FaShieldAlt className="tab-icon" /> Defense Strategies
          </button>
        </div>

        <div className="syllabus-content">
          {activeTab === 'fundamentals' && (
            <div className="module-grid">
              {/* Module 1 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">01</span>
                  <h3 className="module-title">Security Foundations</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 3 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> CIA Triad</li>
                  <li><FaCheck className="check-icon" /> Threat Modeling</li>
                  <li><FaCheck className="check-icon" /> Cryptography Basics</li>
                  <li><FaCheck className="check-icon" /> Security Policies</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">6 Lectures</span>
                  <span className="resource-pill">4 Labs</span>
                  <span className="resource-pill">1 Risk Assessment</span>
                </div>
              </div>

              {/* Module 2 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">02</span>
                  <h3 className="module-title">Network Security</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 2 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> TCP/IP Security</li>
                  <li><FaCheck className="check-icon" /> Firewalls & IDS/IPS</li>
                  <li><FaCheck className="check-icon" /> VPNs & Encryption</li>
                  <li><FaCheck className="check-icon" /> Wireless Security</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">5 Lectures</span>
                  <span className="resource-pill">3 Exercises</span>
                  <span className="resource-pill">1 Network Audit</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pentesting' && (
            <div className="module-grid">
              {/* Module 3 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">03</span>
                  <h3 className="module-title">Ethical Hacking</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 3 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Kali Linux Tools</li>
                  <li><FaCheck className="check-icon" /> Vulnerability Scanning</li>
                  <li><FaCheck className="check-icon" /> Exploitation Techniques</li>
                  <li><FaCheck className="check-icon" /> Metasploit Framework</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">7 Lectures</span>
                  <span className="resource-pill">5 Hands-on Labs</span>
                  <span className="resource-pill">1 PenTest Report</span>
                </div>
              </div>

              {/* Module 4 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">04</span>
                  <h3 className="module-title">Web Application Security</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 2 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> OWASP Top 10</li>
                  <li><FaCheck className="check-icon" /> SQL Injection</li>
                  <li><FaCheck className="check-icon" /> XSS & CSRF</li>
                  <li><FaCheck className="check-icon" /> Secure Coding</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">6 Lectures</span>
                  <span className="resource-pill">4 Web App Tests</span>
                  <span className="resource-pill">1 Security Audit</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'defense' && (
            <div className="project-showcase">
              <div className="project-card">
                <h3 className="project-title">Incident Response Project</h3>
                <p className="project-description">
                  Develop and implement an incident response plan for a simulated cyber attack scenario
                </p>
                <div className="project-tech">
                  <span>SIEM Tools</span>
                  <span>Forensics</span>
                  <span>Containment</span>
                </div>
              </div>
              
              <div className="project-card">
                <h3 className="project-title">Security Operations Center</h3>
                <p className="project-description">
                  Build a SOC environment with monitoring, alerting, and threat intelligence capabilities
                </p>
                <div className="project-tech">
                  <span>Splunk</span>
                  <span>ELK Stack</span>
                  <span>Threat Hunting</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="enrollment-cta" id="enroll">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Become a Cybersecurity Expert?</h2>
            <p className="cta-subtitle">
              Join our next cohort and develop critical security skills in high demand
            </p>
            <div className="cta-features">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Hands-on labs</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>CTF challenges</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Career support</span>
              </div>
            </div>
          </div>
          <div className="cta-action">
            <a href="Hackingenroll" className="enroll-button">
              Enroll Now <FaArrowRight className="button-icon" />
            </a>
            <p className="next-cohort">
              Next cohort starts: <strong>September 10, 2024</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        .cybersecurity-course-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #1a202c;
          line-height: 1.6;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        /* Hero Section */
        .course-hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 4rem 1rem;
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          color: white;
          border-radius: 1rem;
          margin: 2rem 0;
          position: relative;
          overflow: hidden;
        }
        
        .hero-content {
          max-width: 800px;
          text-align: center;
          z-index: 2;
        }
        
        .cybersecurity-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }
        
        .cybersecurity-icon {
          font-size: 1.2rem;
        }
        
        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        
        .highlight {
          color: #bfdbfe;
        }
        
        .hero-description {
          font-size: 1.25rem;
          opacity: 0.9;
          margin-bottom: 2rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .hero-meta {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        
        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.75rem 1.25rem;
          border-radius: 0.5rem;
        }
        
        .meta-icon {
          font-size: 1.25rem;
          color: #bfdbfe;
        }
        
        .meta-label {
          display: block;
          font-size: 0.85rem;
          opacity: 0.8;
        }
        
        .meta-value {
          font-weight: 600;
        }
        
        .hero-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.875rem 1.75rem;
          border-radius: 0.5rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .primary {
          background: white;
          color: #1e3a8a;
        }
        
        .primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .secondary {
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
        }
        
        .secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: white;
        }
        
        .cta-icon {
          transition: transform 0.2s ease;
        }
        
        .primary:hover .cta-icon {
          transform: translateX(3px);
        }
        
        .hero-visual {
          margin-top: 2rem;
          position: relative;
          height: 200px;
          width: 100%;
        }
        
        .cybersecurity-animation {
          position: relative;
          height: 100%;
          width: 100%;
          /* This would contain your actual cybersecurity visualization */
        }
        
        /* Syllabus Section */
        .syllabus-section {
          padding: 4rem 0;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }
        
        .title-decorator {
          color: #bfdbfe;
          font-weight: 400;
        }
        
        .section-subtitle {
          font-size: 1.25rem;
          color: #4a5568;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .syllabus-tabs {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        
        .tab-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          background: #bfdbfe;
          border: none;
          font-weight: 600;
          color: #1e3a8a;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .tab-button.active {
          background: #1e3a8a;
          color: white;
        }
        
        .tab-button:hover {
          transform: translateY(-2px);
        }
        
        .tab-icon {
          font-size: 1.1rem;
        }
        
        .module-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1.5rem;
        }
        
        .module-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border: 1px solid #bfdbfe;
          transition: all 0.2s ease;
        }
        
        .module-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          border-color: #3b82f6;
        }
        
        .module-header {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.25rem;
        }
        
        .module-number {
          background: #1e3a8a;
          color: white;
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          margin-right: 1rem;
          flex-shrink: 0;
        }
        
        .module-title {
          font-size: 1.25rem;
          font-weight: 700;
          flex-grow: 1;
        }
        
        .module-duration {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.875rem;
          color: #4a5568;
        }
        
        .time-icon {
          color: #718096;
        }
        
        .module-topics {
          list-style: none;
          margin-bottom: 1.5rem;
        }
        
        .module-topics li {
          margin-bottom: 0.75rem;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }
        
        .check-icon {
          color: #1e3a8a;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }
        
        .module-resources {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          padding-top: 1rem;
          border-top: 1px dashed #bfdbfe;
        }
        
        .resource-pill {
          background: #bfdbfe;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #1e3a8a;
        }
        
        /* Projects Showcase */
        .project-showcase {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        
        .project-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          border: 1px solid #bfdbfe;
        }
        
        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #1e3a8a;
        }
        
        .project-description {
          color: #4a5568;
          margin-bottom: 1rem;
        }
        
        .project-tech {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        
        .project-tech span {
          background: #bfdbfe;
          color: #1e3a8a;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        /* Enrollment CTA */
        .enrollment-cta {
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          border-radius: 1rem;
          padding: 3rem;
          margin: 2rem 0;
          color: white;
        }
        
        .cta-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .cta-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .cta-subtitle {
          font-size: 1.25rem;
          opacity: 0.9;
          margin-bottom: 2rem;
          max-width: 700px;
        }
        
        .cta-features {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }
        
        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.75rem 1.25rem;
          border-radius: 0.5rem;
        }
        
        .feature-icon {
          font-weight: 700;
          color: #bfdbfe;
        }
        
        .cta-action {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        
        .enroll-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: white;
          color: #1e3a8a;
          border-radius: 0.5rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .enroll-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .button-icon {
          transition: transform 0.2s ease;
        }
        
        .enroll-button:hover .button-icon {
          transform: translateX(3px);
        }
        
        .next-cohort {
          opacity: 0.9;
          font-size: 0.875rem;
        }
        
        /* Responsive Styles */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.25rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .module-grid {
            grid-template-columns: 1fr;
          }
          
          .enrollment-cta {
            padding: 2rem 1rem;
          }
          
          .cta-title {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CybersecurityCourse;

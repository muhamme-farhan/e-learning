// import React from 'react';



// export default function Fkullstac() {
//   return (
//     <div className="fullstack-page">
//       {/* Hero Section with Gradient Background */}
//       <div className="hero-section text-center py-5 text-white">
//         <div className="container py-5">
//           <h1 className="display-3 fw-bold mb-4">Master Full Stack Development</h1>
//           <p className="lead mb-4">Build complete web applications from frontend to backend with the most in-demand tech stack</p>
//           <div className="d-flex justify-content-center gap-3">
//             {/* <button className="btn btn-light btn-lg px-4">Start Learning</button>
//             <button className="btn btn-outline-light btn-lg px-4">View Curriculum</button> */}
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="stats-section py-4 bg-white">
//         <div className="container">
//           <div className="row text-center">
//             <div className="col-md-3">
//               <h3 className="fw-bold">12 Weeks</h3>
//               <p>Intensive Program</p>
//             </div>
//             <div className="col-md-3">
//               <h3 className="fw-bold">300+ Hours</h3>
//               <p>Hands-on Coding</p>
//             </div>
//             <div className="col-md-3">
//               <h3 className="fw-bold">5 Projects</h3>
//               <p>Portfolio Ready</p>
//             </div>
//             <div className="col-md-3">
//               <h3 className="fw-bold">1:1 Mentorship</h3>
//               <p>Expert Guidance</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Course Overview */}
//       <div className="container py-5">
//         <div className="row align-items-center mb-5">
//           <div className="col-lg-6">
//             <img 
//               src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" 
//               alt="Coding workspace" 
//               className="img-fluid rounded-3 shadow-lg" 
//             />
//           </div>
//           <div className="col-lg-6">
//             <h2 className="fw-bold mb-4">What You'll Learn</h2>
//             <div className="row">
//               <div className="col-md-6">
//                 <div className="card mb-3 border-0 shadow-sm">
//                   <div className="card-body">
//                     <h5 className="card-title">Frontend Mastery</h5>
//                     <ul className="list-unstyled">
//                       <li>✅ HTML5 & CSS3</li>
//                       <li>✅ JavaScript ES6+</li>
//                       <li>✅ React.js + Hooks</li>
//                       <li>✅ Responsive Design</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="card mb-3 border-0 shadow-sm">
//                   <div className="card-body">
//                     <h5 className="card-title">Backend Expertise</h5>
//                     <ul className="list-unstyled">
//                       <li>✅ Node.js & Express</li>
//                       <li>✅ RESTful APIs</li>
//                       <li>✅ MongoDB & Mongoose</li>
//                       <li>✅ Authentication (JWT)</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-3">
//               <div className="card border-0 shadow-sm">
//                 <div className="card-body">
//                   <h5 className="card-title">Bonus Skills</h5>
//                   <ul className="list-unstyled">
//                     <li>✅ Git & GitHub</li>
//                     <li>✅ Deployment (AWS, Vercel)</li>
//                     <li>✅ Testing (Jest)</li>
//                     <li>✅ Docker Basics</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Projects Section */}
//         <div className="projects-section py-5">
//           <h2 className="text-center fw-bold mb-5">Your Portfolio Projects</h2>
//           <div className="row g-4">
//             <div className="col-md-4">
//               <div className="card h-100 border-0 shadow-lg">
//                 <img src="https://images.unsplash.com/photo-1551434678-e076c223a692" className="card-img-top" alt="E-commerce" />
//                 <div className="card-body">
//                   <h5 className="card-title">E-Commerce Platform</h5>
//                   <p className="card-text">Build a complete store with cart, checkout, and admin dashboard.</p>
//                   <div className="tech-stack">
//                     <span className="badge bg-primary me-1">React</span>
//                     <span className="badge bg-success me-1">Node.js</span>
//                     <span className="badge bg-warning text-dark">MongoDB</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card h-100 border-0 shadow-lg">
//                 <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3" className="card-img-top" alt="Social Media" />
//                 <div className="card-body">
//                   <h5 className="card-title">Social Media App</h5>
//                   <p className="card-text">Create a platform with posts, comments, and user profiles.</p>
//                   <div className="tech-stack">
//                     <span className="badge bg-primary me-1">React</span>
//                     <span className="badge bg-success me-1">Express</span>
//                     <span className="badge bg-info text-dark">Socket.io</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card h-100 border-0 shadow-lg">
//                 <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" className="card-img-top" alt="Dashboard" />
//                 <div className="card-body">
//                   <h5 className="card-title">Analytics Dashboard</h5>
//                   <p className="card-text">Develop a data visualization dashboard with real-time updates.</p>
//                   <div className="tech-stack">
//                     <span className="badge bg-primary me-1">React</span>
//                     <span className="badge bg-danger me-1">Chart.js</span>
//                     <span className="badge bg-secondary">REST API</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Testimonials */}
//         <div className="testimonials py-5">
//           <h2 className="text-center fw-bold mb-5">Success Stories</h2>
//           <div className="row">
//             <div className="col-md-4 mb-4">
//               <div className="card h-100 border-0 shadow-sm p-3">
//                 <div className="d-flex align-items-center mb-3">
//                   <img src="https://randomuser.me/api/portraits/women/32.jpg" className="rounded-circle me-3" width="60" alt="Student" />
//                   <div>
//                     <h6 className="mb-0">Sarah Johnson</h6>
//                     <small className="text-muted">Frontend Developer @Google</small>
//                   </div>
//                 </div>
//                 <p>"This course gave me the confidence to build full applications. I landed my dream job within 2 months!"</p>
//               </div>
//             </div>
//             <div className="col-md-4 mb-4">
//               <div className="card h-100 border-0 shadow-sm p-3">
//                 <div className="d-flex align-items-center mb-3">
//                   <img src="https://randomuser.me/api/portraits/men/75.jpg" className="rounded-circle me-3" width="60" alt="Student" />
//                   <div>
//                     <h6 className="mb-0">Michael Chen</h6>
//                     <small className="text-muted">Full Stack Developer @Amazon</small>
//                   </div>
//                 </div>
//                 <p>"The project-based approach was exactly what I needed. The skills I learned were directly applicable to my current role."</p>
//               </div>
//             </div>
//             <div className="col-md-4 mb-4">
//               <div className="card h-100 border-0 shadow-sm p-3">
//                 <div className="d-flex align-items-center mb-3">
//                   <img src="https://randomuser.me/api/portraits/women/68.jpg" className="rounded-circle me-3" width="60" alt="Student" />
//                   <div>
//                     <h6 className="mb-0">Priya Patel</h6>
//                     <small className="text-muted">Software Engineer @Microsoft</small>
//                   </div>
//                 </div>
//                 <p>"The mentorship and community support were invaluable. I went from beginner to job-ready in record time."</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="cta-section bg-dark text-white p-5 rounded-3 text-center mb-5">
//           <h2 className="fw-bold mb-3">Ready to Transform Your Career?</h2>
//           <p className="mb-4">Join our next cohort and start building real-world applications today</p>
//           <div className="d-flex justify-content-center gap-3">
//             {/* <button className="btn btn-primary btn-lg px-4">Enroll Now</button>
//             <button className="btn btn-outline-light btn-lg px-4">Schedule a Call</button> */}
//           </div>
//         </div>

//         {/* FAQ Section */}
//         <div className="faq-section mb-5">
//           <h2 className="text-center fw-bold mb-5">Frequently Asked Questions</h2>
//           <div className="accordion" id="faqAccordion">
//             <div className="accordion-item">
//               <h3 className="accordion-header" id="headingOne">
//                 <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
//                   Do I need prior coding experience?
//                 </button>
//               </h3>
//               <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
//                 <div className="accordion-body">
//                   While some basic HTML/CSS knowledge helps, we start from the fundamentals. Our pre-course materials will get you up to speed if you're completely new to coding.
//                 </div>
//               </div>
//             </div>
//             <div className="accordion-item">
//               <h3 className="accordion-header" id="headingTwo">
//                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
//                   What's the time commitment?
//                 </button>
//               </h3>
//               <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo">
//                 <div className="accordion-body">
//                   The program is designed for 25-30 hours per week. We offer flexible scheduling options for working professionals.
//                 </div>
//               </div>
//             </div>
//             <div className="accordion-item">
//               <h3 className="accordion-header" id="headingThree">
//                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
//                   Will I get career support?
//                 </button>
//               </h3>
//               <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree">
//                 <div className="accordion-body">
//                   Yes! Our career services include resume reviews, interview preparation, portfolio building, and access to our hiring partners network.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .hero-section {
//           background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
//           border-radius: 0 0 20px 20px;
//           margin-bottom: 50px;
//         }
//         .stats-section {
//           margin-top: -30px;
//           border-radius: 15px;
//           box-shadow: 0 10px 30px rgba(0,0,0,0.1);
//         }
//         .card {
//           transition: transform 0.3s ease;
//         }
//         .card:hover {
//           transform: translateY(-5px);
//         }
//         .tech-stack {
//           margin-top: 15px;
//         }
//         .fullstack-page {
//           background-color: #f8f9fa;
//         }
//       `}</style>
//     </div>
//   );
// }

// i


import React, { useState } from 'react';
import { FaCode, FaServer, FaDatabase, FaCheck, FaArrowRight, FaLaptopCode, FaMobile, FaCloud } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { BsStack } from 'react-icons/bs';

const FullStackCourse = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <div className="fullstack-course-container">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="hero-content">
          <div className="fullstack-badge">
            <BsStack className="fullstack-icon" />
            <span>Complete Development</span>
          </div>
          <h1 className="hero-title">
            <span className="highlight">Full Stack</span> Development
          </h1>
          <p className="hero-description">
            Master both frontend and backend technologies to build complete, production-ready web applications
          </p>
          
          <div className="hero-meta">
            <div className="meta-item">
              <IoMdTime className="meta-icon" />
              <div>
                <span className="meta-label">Duration</span>
                <span className="meta-value">20 Weeks</span>
              </div>
            </div>
            <div className="meta-item">
              <FaCode className="meta-icon" />
              <div>
                <span className="meta-label">Level</span>
                <span className="meta-value">Intermediate</span>
              </div>
            </div>
            <div className="meta-item">
              <FaLaptopCode className="meta-icon" />
              <div>
                <span className="meta-label">Projects</span>
                <span className="meta-value">5 Portfolio Apps</span>
              </div>
            </div>
          </div>
          
          <div className="hero-cta">
            <a href="Fullstackenroll" className="cta-button primary">
              Enroll Now <FaArrowRight className="cta-icon" />
            </a>
            <a href="#syllabus" className="cta-button secondary">
              Explore Syllabus
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="fullstack-animation">
            {/* Development visualization elements */}
            <div className="code-editor"></div>
            <div className="server"></div>
            <div className="database"></div>
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
            Comprehensive curriculum covering modern full stack development technologies and best practices
          </p>
        </div>

        <div className="syllabus-tabs">
          <button 
            className={`tab-button ${activeTab === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveTab('frontend')}
          >
            <FaLaptopCode className="tab-icon" /> Frontend
          </button>
          <button 
            className={`tab-button ${activeTab === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveTab('backend')}
          >
            <FaServer className="tab-icon" /> Backend
          </button>
          <button 
            className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <FaCloud className="tab-icon" /> Projects
          </button>
        </div>

        <div className="syllabus-content">
          {activeTab === 'frontend' && (
            <div className="module-grid">
              {/* Module 1 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">01</span>
                  <h3 className="module-title">Modern JavaScript & React</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 4 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> ES6+ Features</li>
                  <li><FaCheck className="check-icon" /> React Fundamentals</li>
                  <li><FaCheck className="check-icon" /> State Management</li>
                  <li><FaCheck className="check-icon" /> Component Architecture</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">8 Lectures</span>
                  <span className="resource-pill">6 Exercises</span>
                  <span className="resource-pill">1 React App</span>
                </div>
              </div>

              {/* Module 2 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">02</span>
                  <h3 className="module-title">Advanced Frontend Development</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 3 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Responsive Design</li>
                  <li><FaCheck className="check-icon" /> CSS-in-JS</li>
                  <li><FaCheck className="check-icon" /> Performance Optimization</li>
                  <li><FaCheck className="check-icon" /> Progressive Web Apps</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">6 Lectures</span>
                  <span className="resource-pill">4 Projects</span>
                  <span className="resource-pill">1 Portfolio Site</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'backend' && (
            <div className="module-grid">
              {/* Module 3 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">03</span>
                  <h3 className="module-title">Node.js & Express</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 4 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> RESTful API Design</li>
                  <li><FaCheck className="check-icon" /> Authentication</li>
                  <li><FaCheck className="check-icon" /> Middleware</li>
                  <li><FaCheck className="check-icon" /> Error Handling</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">7 Lectures</span>
                  <span className="resource-pill">5 Labs</span>
                  <span className="resource-pill">1 API Project</span>
                </div>
              </div>

              {/* Module 4 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">04</span>
                  <h3 className="module-title">Databases & ORMs</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 3 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> SQL & NoSQL</li>
                  <li><FaCheck className="check-icon" /> MongoDB & Mongoose</li>
                  <li><FaCheck className="check-icon" /> PostgreSQL</li>
                  <li><FaCheck className="check-icon" /> Database Optimization</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">6 Lectures</span>
                  <span className="resource-pill">4 Exercises</span>
                  <span className="resource-pill">1 Data Modeling Project</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="project-showcase">
              <div className="project-card">
                <h3 className="project-title">E-commerce Platform</h3>
                <p className="project-description">
                  Build a complete online store with product listings, cart functionality, and payment processing
                </p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Stripe API</span>
                </div>
              </div>
              
              <div className="project-card">
                <h3 className="project-title">Social Media Dashboard</h3>
                <p className="project-description">
                  Create a responsive dashboard with real-time updates, user authentication, and data visualization
                </p>
                <div className="project-tech">
                  <span>Next.js</span>
                  <span>GraphQL</span>
                  <span>MongoDB</span>
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
            <h2 className="cta-title">Ready to Become a Full Stack Developer?</h2>
            <p className="cta-subtitle">
              Join our next cohort and build the skills needed to create complete web applications
            </p>
            <div className="cta-features">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Hands-on projects</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Code reviews</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Career support</span>
              </div>
            </div>
          </div>
          <div className="cta-action">
            <a href="/Fullstackenroll" className="enroll-button">
              Enroll Now <FaArrowRight className="button-icon" />
            </a>
            <p className="next-cohort">
              Next cohort starts: <strong>November 12, 2024</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        .fullstack-course-container {
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
          background: linear-gradient(135deg, #047857 0%, #10b981 100%);
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
        
        .fullstack-badge {
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
        
        .fullstack-icon {
          font-size: 1.2rem;
        }
        
        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        
        .highlight {
          color: #d1fae5;
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
          color: #d1fae5;
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
          color: #047857;
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
        
        .fullstack-animation {
          position: relative;
          height: 100%;
          width: 100%;
          /* Development visualization elements would go here */
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
          color: #a7f3d0;
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
          background: #a7f3d0;
          border: none;
          font-weight: 600;
          color: #047857;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .tab-button.active {
          background: #047857;
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
          border: 1px solid #a7f3d0;
          transition: all 0.2s ease;
        }
        
        .module-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          border-color: #10b981;
        }
        
        .module-header {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.25rem;
        }
        
        .module-number {
          background: #047857;
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
          color: #047857;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }
        
        .module-resources {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          padding-top: 1rem;
          border-top: 1px dashed #a7f3d0;
        }
        
        .resource-pill {
          background: #a7f3d0;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #047857;
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
          border: 1px solid #a7f3d0;
        }
        
        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #047857;
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
          background: #a7f3d0;
          color: #047857;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        /* Enrollment CTA */
        .enrollment-cta {
          background: linear-gradient(135deg, #047857 0%, #10b981 100%);
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
          color: #d1fae5;
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
          color: #047857;
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

export default FullStackCourse;
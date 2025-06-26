import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import CourseCard from '../components/CourseCard';


export default function Home() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 3000); // Hide after 3 seconds
  };


  return (
    <>
      <Navbar />
      <div className="container mt-4">
        Hero Section
        <section className="text-center mb-5 py-5 bg-gradient-primary rounded-3" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
          <div className="container py-5">
            <h1 className="display-4 fw-bold text-white mb-3">online education</h1>
            <p className="lead text-white-50 mb-4">Empowering Future Leaders with Cutting-Edge Education</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              {/* <button className="btn btn-light btn-lg px-4 gap-3">Explore Courses</button>
              <button className="btn btn-outline-light btn-lg px-4">Learn More</button> */}
            </div>
          </div>
        </section>

        
<section className="py-5 bg-light border-bottom position-relative overflow-hidden">
  {/* 3D Model Background Element (Placeholder - would use Three.js/React-Three-Fiber in practice) */}
  <div className="position-absolute top-0 end-0 w-50 h-100" style={{
    zIndex: 0,
    background: 'radial-gradient(circle at center, rgba(100, 115, 255, 0.1) 0%, transparent 70%)'
  }}>
    {/* This would be replaced with an actual 3D model component */}
    <div className="position-absolute" style={{
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '300px',
      height: '300px',
      background: 'rgba(255,255,255,0.2)',
      borderRadius: '50%',
      border: '2px dashed rgba(100, 115, 255, 0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6473ff',
      fontWeight: 'bold'
    }}>
      3D Model Placeholder
    </div>
  </div>

  <div className="container position-relative" style={{ zIndex: 1 }}>
    <div className="row align-items-center">
      <div className="col-lg-6">
        <h1 className="display-4 fw-bold mb-3">Learn from the World's Best <span className="text-primary">Universities</span> & <span className="text-primary">Companies</span></h1>
        <p className="lead text-muted mb-4">
          Join millions of learners on our platform. Flexible online courses to help you upskill, reskill, and thrive in your career.
        </p>
        <div className="d-flex gap-3 mb-4">
          <button className="btn btn-primary btn-lg px-4 py-3 shadow-sm" style={{
            
            background: 'linear-gradient(135deg, #667eea,rgb(254, 253, 255))',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            transformStyle: 'preserve-3d',
            boxShadow: '0 4px 20px rgba(100, 115, 255, 0.3)'
            
          }}>
           {/* <Link to="/courses"className="d-flex gap-3 mb-4">Browse Courses</Link> */}
            <Link to="/courses" className="text-white text-decoration-none">Browse Courses</Link>

           
          </button>
          {/* <button className="btn btn-outline-primary btn-lg px-4 py-3" style={{
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            borderWidth: '2px'
          }}>
            Get Started
          </button> */}
        </div>
        <div className="d-flex align-items-center gap-2">
          <div className="d-flex">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '2px solid white',
                marginLeft: i > 1 ? '-15px' : '0',
                background: `hsl(${i * 70}, 70%, 60%)`,
                zIndex: i
              }}></div>
            ))}
          </div>
          <span className="text-muted">Join 10M+ learners worldwide</span>
        </div>
      </div>
      <div className="col-lg-6 text-center mt-5 mt-lg-0">
        {/* 3D Model Container */}
        <div className="position-relative" style={{
          perspective: '1000px'
        }}>
          <div style={{
            borderRadius: '20px',
            background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
            boxShadow: '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff',
            padding: '20px',
            transform: 'rotateY(-15deg) rotateX(5deg)',
            transition: 'transform 0.5s ease',
            height: '350px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* This would be your actual 3D model */}
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.2rem'
            }}>
              Interactive 3D Learning Model
            </div>
          </div>
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{
            borderRadius: '20px',
            border: '2px solid rgba(100, 115, 255, 0.2)',
            transform: 'translate(20px, 20px) rotateY(-15deg) rotateX(5deg)',
            zIndex: -1
          }}></div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="py-5 bg-white">
  <div className="container">
    <h2 className="text-center mb-5 fw-bold">Why Learn With Us</h2>
    <div className="row">
      <div className="col-md-4 mb-4">
        <div className="p-4 h-100" style={{
          borderRadius: '15px',
          background: 'white',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          transition: 'transform 0.3s ease',
          transformStyle: 'preserve-3d',
          border: '1px solid rgba(0,0,0,0.05)'
        }}>
          <div className="mb-3" style={{
            width: '60px',
            height: '60px',
            borderRadius: '15px',
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.5rem',
            transform: 'translateZ(20px)'
          }}>
            <i className="bi bi-people-fill"></i>
          </div>
          <h5 className="fw-bold mb-3">World-Class Instructors</h5>
          <p className="text-muted">Learn from experts at top universities and companies.</p>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="p-4 h-100" style={{
          borderRadius: '15px',
          background: 'white',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          transition: 'transform 0.3s ease',
          transformStyle: 'preserve-3d'
        }}>
          <div className="mb-3" style={{
            width: '60px',
            height: '60px',
            borderRadius: '15px',
            background: 'linear-gradient(135deg, #2b5876, #4e4376)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.5rem',
            transform: 'translateZ(20px)'
          }}>
            <i className="bi bi-calendar-check"></i>
          </div>
          <h5 className="fw-bold mb-3">Flexible Learning</h5>
          <p className="text-muted">Study anytime, anywhere, at your own pace.</p>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="p-4 h-100" style={{
          borderRadius: '15px',
          background: 'white',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          transition: 'transform 0.3s ease',
          transformStyle: 'preserve-3d'
        }}>
          <div className="mb-3" style={{
            width: '60px',
            height: '60px',
            borderRadius: '15px',
            background: 'linear-gradient(135deg, #ff758c, #ff7eb3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.5rem',
            transform: 'translateZ(20px)'
          }}>
            <i className="bi bi-graph-up-arrow"></i>
          </div>
          <h5 className="fw-bold mb-3">Career Advancement</h5>
          <p className="text-muted">Gain skills to boost your career or start a new one.</p>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Courses Section */}
        <section id="courses" className="mb-5 py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Featured Courses</h2>
            <p className="text-muted">Designed to help you succeed in today's competitive landscape</p>
          </div>
          <div className="row g-4">
            <CourseCard 
              title="Full Stack Development" 
              desc="Master React, Node, MongoDB and build modern web applications." 
              icon="💻"
              bgColor="#f0f8ff"
            />
            <CourseCard 
              title="Digital Marketing" 
              desc="Learn SEO, Social Media strategies, and effective advertising techniques." 
              icon="📈"
              bgColor="#fff0f8"
            />
            <CourseCard 
              title="Cybersecurity" 
              desc="Explore network security, ethical hacking, and defensive tools." 
              icon="🔒"
              bgColor="#f8fff0"
            />
          </div>
          <div className="text-center mt-5">
            <Link to="/courses" className="btn btn-primary btn-lg px-4">View All Courses</Link>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-5 py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold">What Our Students Say</h2>
            <p className="text-muted">Hear from our successful alumni</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <div className="mb-3 text-warning">★★★★★</div>
                  <p className="card-text mb-4">"The Full Stack course transformed my career. I landed a job at a tech startup right after completion!"</p>
                  <div className="d-flex align-items-center">
                    <img src="https://randomuser.me/api/portraits/women/32.jpg" className="rounded-circle me-3" width="50" alt="Student" />
                    <div>
                      <h6 className="mb-0">Sarah Johnson</h6>
                      <small className="text-muted">Full Stack Graduate</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <div className="mb-3 text-warning">★★★★☆</div>
                  <p className="card-text mb-4">"The Digital Marketing program gave me practical skills I use every day in my business."</p>
                  <div className="d-flex align-items-center">
                    <img src="https://randomuser.me/api/portraits/men/45.jpg" className="rounded-circle me-3" width="50" alt="Student" />
                    <div>
                      <h6 className="mb-0">Michael Chen</h6>
                      <small className="text-muted">Digital Marketing Graduate</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <div className="mb-3 text-warning">★★★★★</div>
                  <p className="card-text mb-4">"The Cybersecurity course was challenging but worth it. I now work as a security analyst."</p>
                  <div className="d-flex align-items-center">
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" className="rounded-circle me-3" width="50" alt="Student" />
                    <div>
                      <h6 className="mb-0">Priya Patel</h6>
                      <small className="text-muted">Cybersecurity Graduate</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-5 py-5 bg-dark text-white rounded-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h2 className="fw-bold mb-4">Ready to Transform Your Career?</h2>
                <p className="lead mb-4">Contact us for more information about our programs.</p>
                <div className="mb-4">
                  <h5 className="mb-3">Contact Information</h5>
                  <p className="mb-2">📧 info@managementschool.com</p>
                  <p className="mb-2">📞 (123) 456-7890</p>
                  <p>📍 123 Education St, Learning City</p>
                </div>
                <div className="d-flex gap-3">
                  <a href="#" className="text-white fs-4">📱</a>
                  <a href="#" className="text-white fs-4">💬</a>
                  <a href="#" className="text-white fs-4">📘</a>
                  <a href="#" className="text-white fs-4">🐦</a>
                </div>
              </div>
              <div className="col-lg-6">
                <form className="bg-white text-dark p-4 rounded-3 shadow" onSubmit={handleSubmit}>
                  <h4 className="mb-4">Send us a message</h4>
                  {messageSent && (
                    <div className="alert alert-success">✅ Message received successfully!</div>
                  )}
                  <div className="mb-3">
                    <input type="text" className="form-control form-control-lg" placeholder="Your Name" required />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control form-control-lg" placeholder="Email Address" required />
                  </div>
                  <div className="mb-3">
                    <select className="form-select form-select-lg">
                      <option>Course Interest</option>
                      <option>Full Stack Development</option>
                      <option>Digital Marketing</option>
                      <option>Cybersecurity</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control form-control-lg" rows="4" placeholder="Your Message"></textarea>
                  </div>
                  <button className="btn btn-primary btn-lg w-100" type="submit">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}


// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import Navbar from '../components/Navbar';
// import CourseCard from '../components/CourseCard';

// export default function Home() {
//   const [messageSent, setMessageSent] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setMessageSent(true);
//     setTimeout(() => setMessageSent(false), 3000);
//   };

//   return (
//     <div className="corporate-theme">
//       <Navbar />
      
//       {/* Corporate Hero Section */}
//       <section className="corporate-hero">
//         <div className="hero-content">
//           <div className="hero-badge">
//             <span>Enterprise-Grade Learning Platform</span>
//           </div>
//           <h1>
//             <span className="gradient-text">Transform Your Workforce</span> with Digital Upskilling
//           </h1>
//           <p className="hero-subtitle">
//             Accredited professional development programs designed for enterprise needs
//           </p>
//           <div className="hero-cta">
//             <Link to="/courses" className="cta-primary">
//               Explore Corporate Solutions
//             </Link>
//             <Link to="/contact" className="cta-secondary">
//               Request Demo
//             </Link>
//           </div>
//           <div className="trusted-by">
//             <span>Trusted by Fortune 500 companies worldwide</span>
//             <div className="client-logos">
//               {['Microsoft', 'IBM', 'Deloitte', 'Amazon', 'Accenture'].map((company) => (
//                 <div key={company} className="client-logo">
//                   {company}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="hero-visual">
//           <div className="data-visualization">
//             <div className="chart-container">
//               <div className="chart-bar" style={{ height: '70%' }}></div>
//               <div className="chart-bar" style={{ height: '85%' }}></div>
//               <div className="chart-bar" style={{ height: '60%' }}></div>
//               <div className="chart-bar" style={{ height: '90%' }}></div>
//               <div className="chart-bar" style={{ height: '75%' }}></div>
//             </div>
//             <div className="network-visual"></div>
//           </div>
//         </div>
//       </section>

//       {/* Enterprise Solutions */}
//       <section className="enterprise-solutions">
//         <div className="section-header">
//           <h2>Enterprise Learning Solutions</h2>
//           <p className="section-subtitle">
//             Scalable training programs aligned with your business objectives
//           </p>
//         </div>
        
//         <div className="solution-cards">
//           <div className="solution-card">
//             <div className="card-icon">
//               <i className="bi bi-people-fill"></i>
//             </div>
//             <h3>Leadership Development</h3>
//             <p>
//               Executive education programs to cultivate your next generation of leaders
//             </p>
//             <Link to="/leadership" className="card-link">
//               Learn More →
//             </Link>
//           </div>
          
//           <div className="solution-card">
//             <div className="card-icon">
//               <i className="bi bi-code-square"></i>
//             </div>
//             <h3>Technical Upskilling</h3>
//             <p>
//               Cutting-edge technology training for your engineering teams
//             </p>
//             <Link to="/technical" className="card-link">
//               Learn More →
//             </Link>
//           </div>
          
//           <div className="solution-card">
//             <div className="card-icon">
//               <i className="bi bi-graph-up"></i>
//             </div>
//             <h3>Business Acumen</h3>
//             <p>
//               Essential business skills for non-technical teams
//             </p>
//             <Link to="/business" className="card-link">
//               Learn More →
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ROI Metrics */}
//       <section className="roi-metrics">
//         <div className="metric-item">
//           <div className="metric-value">94%</div>
//           <div className="metric-label">Completion Rate</div>
//         </div>
//         <div className="metric-item">
//           <div className="metric-value">3.2x</div>
//           <div className="metric-label">ROI on Training</div>
//         </div>
//         <div className="metric-item">
//           <div className="metric-value">500+</div>
//           <div className="metric-label">Enterprise Clients</div>
//         </div>
//         <div className="metric-item">
//           <div className="metric-value">100%</div>
//           <div className="metric-label">Compliance Ready</div>
//         </div>
//       </section>

//       {/* Featured Courses - Corporate Edition */}
//       <section className="corporate-courses">
//         <div className="section-header">
//           <h2>Accredited Professional Programs</h2>
//           <p className="section-subtitle">
//             Industry-recognized certifications for your workforce
//           </p>
//         </div>
        
//         <div className="course-grid">
//           <CourseCard 
//             title="Cloud Architecture" 
//             desc="AWS, Azure, and GCP certification paths for your cloud teams"
//             icon="☁️"
//             accreditation="AWS Accredited"
//           />
//           <CourseCard 
//             title="Data Science" 
//             desc="Machine learning and analytics for business applications"
//             icon="📊"
//             accreditation="IBM Partner"
//           />
//           <CourseCard 
//             title="Cybersecurity" 
//             desc="Security certification programs for IT professionals"
//             icon="🔐"
//             accreditation="CompTIA Approved"
//           />
//           <CourseCard 
//             title="Digital Transformation" 
//             desc="Leading organizational change in the digital era"
//             icon="🔄"
//             accreditation="MIT Collaboration"
//           />
//         </div>
//       </section>

//       {/* Enterprise Testimonials */}
//       <section className="enterprise-testimonials">
//         <div className="testimonial-slider">
//           <div className="testimonial-card">
//             <div className="testimonial-content">
//               "Our engineers' productivity increased by 40% after completing the cloud certification tracks."
//             </div>
//             <div className="testimonial-author">
//               <div className="author-avatar"></div>
//               <div className="author-info">
//                 <div className="author-name">Sarah Johnson</div>
//                 <div className="author-title">CTO, Fortune 500 Tech Company</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Corporate Contact Section */}
//       <section className="corporate-contact">
//         <div className="contact-container">
//           <div className="contact-info">
//             <h2>Enterprise Inquiries</h2>
//             <p>
//               Contact our corporate solutions team to discuss bulk licensing, 
//               custom learning paths, and integration with your HR systems.
//             </p>
//             <div className="contact-details">
//               <div className="contact-item">
//                 <i className="bi bi-telephone"></i>
//                 <span>+1 (888) 555-ENTERPRISE</span>
//               </div>
//               <div className="contact-item">
//                 <i className="bi bi-envelope"></i>
//                 <span>corporate@digitallearning.com</span>
//               </div>
//               <div className="contact-item">
//                 <i className="bi bi-building"></i>
//                 <span>Global headquarters: 123 Corporate Blvd, Suite 500</span>
//               </div>
//             </div>
//           </div>
          
//           <form className="contact-form" onSubmit={handleSubmit}>
//             {messageSent && (
//               <div className="form-success">Thank you! Our team will contact you shortly.</div>
//             )}
//             <div className="form-group">
//               <input type="text" placeholder="Company Name" required />
//             </div>
//             <div className="form-group">
//               <input type="text" placeholder="Your Name" required />
//             </div>
//             <div className="form-group">
//               <input type="email" placeholder="Work Email" required />
//             </div>
//             <div className="form-group">
//               <input type="tel" placeholder="Phone Number" required />
//             </div>
//             <div className="form-group">
//               <select required>
//                 <option value="">Number of Employees</option>
//                 <option>1-100</option>
//                 <option>101-500</option>
//                 <option>501-1000</option>
//                 <option>1000+</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <textarea placeholder="Tell us about your training needs"></textarea>
//             </div>
//             <button type="submit" className="submit-button">
//               Request Consultation
//             </button>
//           </form>
//         </div>
//       </section>

//       <style jsx>{`
//         .corporate-theme {
//           font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
//           color: #1a202c;
//           line-height: 1.6;
//         }
        
//         /* Corporate Hero */
//         .corporate-hero {
//           display: flex;
//           align-items: center;
//           min-height: 80vh;
//           padding: 4rem 2rem;
//           background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
//           position: relative;
//           overflow: hidden;
//         }
        
//         .hero-content {
//           max-width: 600px;
//           z-index: 2;
//         }
        
//         .hero-badge {
//           display: inline-block;
//           background: rgba(0, 82, 204, 0.1);
//           color: #0052cc;
//           padding: 0.5rem 1rem;
//           border-radius: 2rem;
//           margin-bottom: 1.5rem;
//           font-weight: 600;
//           font-size: 0.875rem;
//         }
        
//         .corporate-hero h1 {
//           font-size: 3rem;
//           font-weight: 700;
//           margin-bottom: 1.5rem;
//           line-height: 1.2;
//         }
        
//         .gradient-text {
//           background: linear-gradient(90deg, #0052cc 0%, #00aaff 100%);
//           -webkit-background-clip: text;
//           background-clip: text;
//           color: transparent;
//         }
        
//         .hero-subtitle {
//           font-size: 1.25rem;
//           color: #4a5568;
//           margin-bottom: 2rem;
//           max-width: 500px;
//         }
        
//         .hero-cta {
//           display: flex;
//           gap: 1rem;
//           margin-bottom: 3rem;
//         }
        
//         .cta-primary {
//           background: #0052cc;
//           color: white;
//           padding: 1rem 2rem;
//           border-radius: 0.5rem;
//           font-weight: 600;
//           text-decoration: none;
//           transition: all 0.2s ease;
//         }
        
//         .cta-primary:hover {
//           background: #0066ff;
//           transform: translateY(-2px);
//           box-shadow: 0 4px 12px rgba(0, 82, 204, 0.2);
//         }
        
//         .cta-secondary {
//           background: white;
//           color: #0052cc;
//           padding: 1rem 2rem;
//           border-radius: 0.5rem;
//           font-weight: 600;
//           text-decoration: none;
//           border: 1px solid #0052cc;
//           transition: all 0.2s ease;
//         }
        
//         .cta-secondary:hover {
//           background: rgba(0, 82, 204, 0.05);
//           transform: translateY(-2px);
//         }
        
//         .trusted-by {
//           margin-top: 3rem;
//         }
        
//         .trusted-by span {
//           display: block;
//           color: #718096;
//           margin-bottom: 1rem;
//           font-size: 0.875rem;
//         }
        
//         .client-logos {
//           display: flex;
//           gap: 1.5rem;
//           flex-wrap: wrap;
//         }
        
//         .client-logo {
//           color: #4a5568;
//           font-weight: 600;
//           opacity: 0.8;
//           font-size: 0.875rem;
//         }
        
//         .hero-visual {
//           position: absolute;
//           right: 0;
//           top: 0;
//           width: 50%;
//           height: 100%;
//           z-index: 1;
//         }
        
//         .data-visualization {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(135deg, rgba(0, 82, 204, 0.03) 0%, rgba(0, 170, 255, 0.03) 100%);
//         }
        
//         .chart-container {
//           position: absolute;
//           bottom: 20%;
//           left: 20%;
//           display: flex;
//           gap: 1rem;
//           align-items: flex-end;
//           height: 200px;
//         }
        
//         .chart-bar {
//           width: 40px;
//           background: linear-gradient(to top, #0052cc, #00aaff);
//           border-radius: 4px 4px 0 0;
//           transition: height 0.5s ease;
//         }
        
//         .network-visual {
//           position: absolute;
//           top: 20%;
//           right: 20%;
//           width: 300px;
//           height: 300px;
//           background: radial-gradient(circle, rgba(0, 82, 204, 0.1) 0%, transparent 70%);
//           border: 1px dashed rgba(0, 82, 204, 0.2);
//           border-radius: 50%;
//         }
        
//         /* Enterprise Solutions */
//         .enterprise-solutions {
//           padding: 6rem 2rem;
//           background: white;
//         }
        
//         .section-header {
//           text-align: center;
//           max-width: 800px;
//           margin: 0 auto 4rem;
//         }
        
//         .section-header h2 {
//           font-size: 2.5rem;
//           font-weight: 700;
//           margin-bottom: 1rem;
//           color: #1a202c;
//         }
        
//         .section-subtitle {
//           font-size: 1.125rem;
//           color: #718096;
//         }
        
//         .solution-cards {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 2rem;
//           max-width: 1200px;
//           margin: 0 auto;
//         }
        
//         .solution-card {
//           background: white;
//           border-radius: 1rem;
//           padding: 2rem;
//           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
//           border: 1px solid rgba(0, 0, 0, 0.05);
//           transition: all 0.3s ease;
//         }
        
//         .solution-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 10px 30px rgba(0, 82, 204, 0.1);
//         }
        
//         .card-icon {
//           width: 60px;
//           height: 60px;
//           background: linear-gradient(135deg, #0052cc 0%, #00aaff 100%);
//           border-radius: 1rem;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: white;
//           font-size: 1.5rem;
//           margin-bottom: 1.5rem;
//         }
        
//         .solution-card h3 {
//           font-size: 1.5rem;
//           font-weight: 600;
//           margin-bottom: 1rem;
//           color: #1a202c;
//         }
        
//         .solution-card p {
//           color: #4a5568;
//           margin-bottom: 1.5rem;
//           line-height: 1.6;
//         }
        
//         .card-link {
//           color: #0052cc;
//           font-weight: 600;
//           text-decoration: none;
//           display: inline-flex;
//           align-items: center;
//           gap: 0.5rem;
//         }
        
//         /* ROI Metrics */
//         .roi-metrics {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//           gap: 2rem;
//           padding: 4rem 2rem;
//           background: linear-gradient(135deg, #0052cc 0%, #00aaff 100%);
//           color: white;
//           text-align: center;
//         }
        
//         .metric-item {
//           padding: 1rem;
//         }
        
//         .metric-value {
//           font-size: 3rem;
//           font-weight: 700;
//           margin-bottom: 0.5rem;
//         }
        
//         .metric-label {
//           font-size: 1rem;
//           opacity: 0.9;
//         }
        
//         /* Corporate Courses */
//         .corporate-courses {
//           padding: 6rem 2rem;
//           background: #f8f9fa;
//         }
        
//         .course-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//           gap: 2rem;
//           max-width: 1200px;
//           margin: 0 auto;
//         }
        
//         /* Enterprise Testimonials */
//         .enterprise-testimonials {
//           padding: 6rem 2rem;
//           background: white;
//         }
        
//         .testimonial-slider {
//           max-width: 800px;
//           margin: 0 auto;
//         }
        
//         .testimonial-card {
//           background: #f8f9fa;
//           border-radius: 1rem;
//           padding: 3rem;
//           text-align: center;
//           position: relative;
//         }
        
//         .testimonial-content {
//           font-size: 1.5rem;
//           font-weight: 500;
//           font-style: italic;
//           color: #1a202c;
//           margin-bottom: 2rem;
//           line-height: 1.6;
//         }
        
//         .testimonial-author {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 1rem;
//         }
        
//         .author-avatar {
//           width: 60px;
//           height: 60px;
//           border-radius: 50%;
//           background: #0052cc;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: white;
//           font-weight: 600;
//         }
        
//         .author-name {
//           font-weight: 600;
//           color: #1a202c;
//         }
        
//         .author-title {
//           color: #718096;
//           font-size: 0.875rem;
//         }
        
//         /* Corporate Contact */
//         .corporate-contact {
//           padding: 6rem 2rem;
//           background: #f8f9fa;
//         }
        
//         .contact-container {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 4rem;
//           max-width: 1200px;
//           margin: 0 auto;
//           background: white;
//           border-radius: 1rem;
//           overflow: hidden;
//           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
//         }
        
//         .contact-info {
//           padding: 3rem;
//           background: linear-gradient(135deg, #0052cc 0%, #00aaff 100%);
//           color: white;
//         }
        
//         .contact-info h2 {
//           font-size: 2rem;
//           margin-bottom: 1.5rem;
//         }
        
//         .contact-info p {
//           margin-bottom: 2rem;
//           line-height: 1.6;
//         }
        
//         .contact-details {
//           display: grid;
//           gap: 1.5rem;
//         }
        
//         .contact-item {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//         }
        
//         .contact-item i {
//           font-size: 1.25rem;
//         }
        
//         .contact-form {
//           padding: 3rem;
//         }
        
//         .form-group {
//           margin-bottom: 1.5rem;
//         }
        
//         .form-group input,
//         .form-group select,
//         .form-group textarea {
//           width: 100%;
//           padding: 1rem;
//           border: 1px solid #e2e8f0;
//           border-radius: 0.5rem;
//           font-size: 1rem;
//         }
        
//         .form-group textarea {
//           min-height: 120px;
//         }
        
//         .submit-button {
//           width: 100%;
//           padding: 1rem;
//           background: #0052cc;
//           color: white;
//           border: none;
//           border-radius: 0.5rem;
//           font-weight: 600;
//           font-size: 1rem;
//           cursor: pointer;
//           transition: all 0.2s ease;
//         }
        
//         .submit-button:hover {
//           background: #0066ff;
//         }
        
//         .form-success {
//           background: rgba(0, 170, 255, 0.1);
//           color: #00aaff;
//           padding: 1rem;
//           border-radius: 0.5rem;
//           margin-bottom: 1.5rem;
//           text-align: center;
//         }
        
//         /* Responsive Styles */
//         @media (max-width: 1024px) {
//           .corporate-hero {
//             flex-direction: column;
//             text-align: center;
//           }
          
//           .hero-content {
//             max-width: 100%;
//             margin-bottom: 3rem;
//           }
          
//           .hero-cta {
//             justify-content: center;
//           }
          
//           .hero-visual {
//             position: relative;
//             width: 100%;
//             height: 400px;
//           }
          
//           .trusted-by {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//           }
//         }
        
//         @media (max-width: 768px) {
//           .corporate-hero h1 {
//             font-size: 2.5rem;
//           }
          
//           .section-header h2 {
//             font-size: 2rem;
//           }
          
//           .roi-metrics {
//             grid-template-columns: 1fr 1fr;
//           }
//         }
        
//         @media (max-width: 480px) {
//           .corporate-hero h1 {
//             font-size: 2rem;
//           }
          
//           .hero-cta {
//             flex-direction: column;
//           }
          
//           .roi-metrics {
//             grid-template-columns: 1fr;
//           }
//         }
//       `}</style>
//     </div>
//   );

// }


// import React from 'react';
// import Navbar from '../components/Navbar';

// const About = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="about-page">
//         {/* Hero Section */}
//         <section className="hero-section bg-primary text-white py-5">
//           <div className="container py-5">
//             <div className="row align-items-center">
//               <div className="col-lg-6">
//                 <h1 className="display-3 fw-bold mb-4">About ManagementSchool</h1>
//                 <p className="lead mb-4">Empowering your future through excellence in education</p>
//                 {/* <button className="btn btn-light btn-lg rounded-pill px-4 me-2">Explore Programs</button>
//                 <button className="btn btn-outline-light btn-lg rounded-pill px-4">Meet Our Faculty</button> */}
//               </div>
//               <div className="col-lg-6">
//                 <img 
//                   src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
//                   alt="Students studying" 
//                   className="img-fluid rounded-4 shadow-lg"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Why Choose Us Section */}
//         <section className="py-5 bg-light">
//           <div className="container py-5">
//             <div className="text-center mb-5">
//               <h2 className="display-5 fw-bold text-dark mb-3">Why Choose ManagementSchool?</h2>
//               <div className="underline mx-auto"></div>
//               <p className="text-muted fs-5 mt-3">We are committed to delivering career-focused education designed by industry leaders</p>
//             </div>

//             <div className="row g-4">
//               <div className="col-lg-4">
//                 <div className="card h-100 border-0 shadow-sm rounded-4">
//                   <div className="card-body p-4">
//                     <div className="icon-box bg-primary-light text-primary mb-4">
//                       <i className="fas fa-chart-line fa-2x"></i>
//                     </div>
//                     <h3 className="h4 fw-bold mb-3">Industry-Relevant Curriculum</h3>
//                     <p className="text-muted">Our programs are designed with direct input from industry leaders to ensure you learn the most in-demand skills.</p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="col-lg-4">
//                 <div className="card h-100 border-0 shadow-sm rounded-4">
//                   <div className="card-body p-4">
//                     <div className="icon-box bg-primary-light text-primary mb-4">
//                       <i className="fas fa-users fa-2x"></i>
//                     </div>
//                     <h3 className="h4 fw-bold mb-3">Expert Faculty</h3>
//                     <p className="text-muted">Learn from professors who are accomplished scholars and practitioners with real-world experience.</p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="col-lg-4">
//                 <div className="card h-100 border-0 shadow-sm rounded-4">
//                   <div className="card-body p-4">
//                     <div className="icon-box bg-primary-light text-primary mb-4">
//                       <i className="fas fa-briefcase fa-2x"></i>
//                     </div>
//                     <h3 className="h4 fw-bold mb-3">Career Support</h3>
//                     <p className="text-muted">Our dedicated career services team helps with internships, job placement, and professional development.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Stats Section */}
//         <section className="py-5 bg-dark text-white">
//           <div className="container py-5">
//             <div className="row g-4 text-center">
//               <div className="col-md-3">
//                 <div className="p-4">
//                   <h3 className="display-4 fw-bold text-primary">10K+</h3>
//                   <p className="mb-0">Students Enrolled</p>
//                 </div>
//               </div>
//               <div className="col-md-3">
//                 <div className="p-4">
//                   <h3 className="display-4 fw-bold text-primary">500+</h3>
//                   <p className="mb-0">Industry Experts</p>
//                 </div>
//               </div>
//               <div className="col-md-3">
//                 <div className="p-4">
//                   <h3 className="display-4 fw-bold text-primary">95%</h3>
//                   <p className="mb-0">Graduation Rate</p>
//                 </div>
//               </div>
//               <div className="col-md-3">
//                 <div className="p-4">
//                   <h3 className="display-4 fw-bold text-primary">100%</h3>
//                   <p className="mb-0">Placement Assistance</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Our History Section */}
//         <section className="py-5">
//           <div className="container py-5">
//             <div className="row align-items-center g-5">
//               <div className="col-lg-6">
//                 <img
//                   src="https://images.unsplash.com/photo-1571260898937-9c2498b6f9a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
//                   alt="Management School History"
//                   className="img-fluid rounded-4 shadow-lg"
//                 />
//               </div>
//               <div className="col-lg-6">
//                 <h2 className="fw-bold mb-4 text-dark">Our History & Mission</h2>
//                 <p className="text-muted mb-4">Founded in 1995, ManagementSchool has grown from a small business institute to a nationally recognized leader in management education.</p>
//                 <p className="text-muted mb-4">Our mission is to develop innovative, ethical, and globally-minded leaders who can navigate complex business challenges and create sustainable value for their organizations and communities.</p>
//                 <div className="d-flex align-items-center mb-4">
//                   <div className="me-4">
//                     <i className="fas fa-bullseye fa-3x text-primary"></i>
//                   </div>
//                   <div>
//                     <h4 className="fw-bold mb-2">Our Vision</h4>
//                     <p className="text-muted mb-0">To be the premier institution for transformative management education that drives positive change in the global business landscape.</p>
//                   </div>
//                 </div>
//                 <button className="btn btn-primary btn-lg rounded-pill shadow-sm px-4">Learn More About Our History</button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Testimonials */}
//         <section className="py-5 bg-light">
//           <div className="container py-5">
//             <div className="text-center mb-5">
//               <h2 className="display-5 fw-bold text-dark mb-3">What Our Students Say</h2>
//               <div className="underline mx-auto"></div>
//             </div>
            
//             <div className="row g-4">
//               <div className="col-lg-4">
//                 <div className="card h-100 border-0 shadow-sm rounded-4">
//                   <div className="card-body p-4">
//                     <div className="mb-4">
//                       <i className="fas fa-quote-left fa-2x text-primary opacity-25"></i>
//                     </div>
//                     <p className="mb-4">"The practical approach to learning at ManagementSchool gave me the confidence to start my own business immediately after graduation."</p>
//                     <div className="d-flex align-items-center">
//                       <img src="https://randomuser.me/api/portraits/women/32.jpg" className="rounded-circle me-3" width="50" alt="Student" />
//                       <div>
//                         <h6 className="mb-0 fw-bold">Sarah Johnson</h6>
//                         <small className="text-muted">MBA Graduate, Class of 2021</small>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="col-lg-4">
//                 <div className="card h-100 border-0 shadow-sm rounded-4">
//                   <div className="card-body p-4">
//                     <div className="mb-4">
//                       <i className="fas fa-quote-left fa-2x text-primary opacity-25"></i>
//                     </div>
//                     <p className="mb-4">"The industry connections I made through the school's networking events led directly to my current position at a Fortune 500 company."</p>
//                     <div className="d-flex align-items-center">
//                       <img src="https://randomuser.me/api/portraits/men/45.jpg" className="rounded-circle me-3" width="50" alt="Student" />
//                       <div>
//                         <h6 className="mb-0 fw-bold">Michael Chen</h6>
//                         <small className="text-muted">BBA Graduate, Class of 2022</small>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="col-lg-4">
//                 <div className="card h-100 border-0 shadow-sm rounded-4">
//                   <div className="card-body p-4">
//                     <div className="mb-4">
//                       <i className="fas fa-quote-left fa-2x text-primary opacity-25"></i>
//                     </div>
//                     <p className="mb-4">"The global perspective I gained through the international business program has been invaluable in my career as a management consultant."</p>
//                     <div className="d-flex align-items-center">
//                       <img src="https://randomuser.me/api/portraits/women/68.jpg" className="rounded-circle me-3" width="50" alt="Student" />
//                       <div>
//                         <h6 className="mb-0 fw-bold">Priya Patel</h6>
//                         <small className="text-muted">International Business, Class of 2020</small>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-5 bg-primary text-white">
//           <div className="container py-5 text-center">
//             <h2 className="display-5 fw-bold mb-4">Ready to Transform Your Future?</h2>
//             <p className="lead mb-5">Join thousands of successful alumni who launched their careers with ManagementSchool</p>
//             <div className="d-flex justify-content-center gap-3">
//               <button className="btn btn-light btn-lg rounded-pill px-4">Apply Now</button>
//               <button className="btn btn-outline-light btn-lg rounded-pill px-4">Request Information</button>
//             </div>
//           </div>
//         </section>
//       </div>

//       <style jsx>{`
//         .about-page {
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//         }
        
//         .hero-section {
//           background: linear-gradient(135deg, #0d6efd 0%, #084298 100%);
//         }
        
//         .underline {
//           width: 80px;
//           height: 4px;
//           background: #0d6efd;
//         }
        
//         .icon-box {
//           width: 60px;
//           height: 60px;
//           border-radius: 12px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
        
//         .bg-primary-light {
//           background-color: rgba(13, 110, 253, 0.1);
//         }
        
//         .card {
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }
        
//         .card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
//         }
        
//         @media (max-width: 768px) {
//           .display-3 {
//             font-size: 2.5rem;
//           }
          
//           .hero-section {
//             text-align: center;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default About;





import React from 'react';
import Navbar from '../components/Navbar';
import { FiAward, FiUsers, FiBriefcase, FiGlobe, FiBookOpen, FiTrendingUp } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1>About <span>EduHub</span></h1>
                <p className="subtitle">Empowering your future through excellence in education</p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">10K+</span>
                    <span className="stat-label">Students</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Experts</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">95%</span>
                    <span className="stat-label">Success Rate</span>
                  </div>
                </div>
              </div>
              <div className="hero-image">
                <div className="image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                    alt="Students studying" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="features-section">
          <div className="container">
            <div className="section-header">
              <h2>Why Choose <span>EduHub</span>?</h2>
              <p className="section-subtitle">We are committed to delivering career-focused education designed by industry leaders</p>
            </div>

            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <FiBookOpen />
                </div>
                <h3>Industry-Relevant Curriculum</h3>
                <p>Our programs are designed with direct input from industry leaders to ensure you learn the most in-demand skills.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <FiUsers />
                </div>
                <h3>Expert Faculty</h3>
                <p>Learn from professors who are accomplished scholars and practitioners with real-world experience.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <FiBriefcase />
                </div>
                <h3>Career Support</h3>
                <p>Our dedicated career services team helps with internships, job placement, and professional development.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our History Section */}
        <section className="history-section">
          <div className="container">
            <div className="history-content">
              <div className="history-image">
                <img
                  src="https://images.unsplash.com/photo-1571260898937-9c2498b6f9a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
                  alt="Management School History"
                />
              </div>
              <div className="history-text">
                <h2>Our History & Mission</h2>
                <p>Founded in 2010, EduHub has grown from a small online learning platform to a nationally recognized leader in digital education.</p>
                <p>Our mission is to develop innovative, ethical, and globally-minded professionals who can navigate complex challenges and create sustainable value.</p>
                
                <div className="mission-item">
                  <div className="mission-icon">
                    <FiGlobe />
                  </div>
                  <div>
                    <h4>Our Vision</h4>
                    <p>To be the premier platform for transformative education that drives positive change globally.</p>
                  </div>
                </div>
                
                <button className="primary-btn">Learn More About Our History</button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section">
          <div className="container">
            <div className="section-header">
              <h2>What Our <span>Students</span> Say</h2>
              <p className="section-subtitle">Real experiences from our learning community</p>
            </div>
            
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <p className="testimonial-text">"The practical approach to learning at EduHub gave me the confidence to start my own business immediately after completing my courses."</p>
                <div className="student-info">
                  <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Student" />
                  <div>
                    <h4>Sarah Johnson</h4>
                    <p>Web Development Graduate</p>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <p className="testimonial-text">"The industry connections I made through EduHub's network led directly to my current position at a leading tech company."</p>
                <div className="student-info">
                  <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Student" />
                  <div>
                    <h4>Michael Chen</h4>
                    <p>Data Science Graduate</p>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="quote-icon">
                  <FaQuoteLeft />
                </div>
                <p className="testimonial-text">"The global perspective I gained through the international business courses has been invaluable in my consulting career."</p>
                <div className="student-info">
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Student" />
                  <div>
                    <h4>Priya Patel</h4>
                    <p>Business Graduate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Transform Your Future?</h2>
              <p>Join thousands of successful learners who launched their careers with EduHub</p>
              <div className="cta-buttons">
                <button className="primary-btn">Explore Programs</button>
                <button className="secondary-btn">Contact Admissions</button>
              </div>
            </div>
          </div>
        </section>

        <style jsx>{`
          /* Base Styles */
          .about-page {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            color: #2d3748;
            line-height: 1.6;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          h1, h2, h3, h4 {
            font-weight: 700;
            line-height: 1.2;
          }

          h1 {
            font-size: 3rem;
          }

          h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }

          h3 {
            font-size: 1.5rem;
          }

          h4 {
            font-size: 1.25rem;
          }

          p {
            margin: 0 0 1rem;
            color: #4a5568;
          }

          span {
            color: #6c63ff;
          }

          /* Buttons */
          .primary-btn, .secondary-btn {
            display: inline-block;
            padding: 12px 24px;
            border-radius: 8px;
            font-weight: 600;
            text-align: center;
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .primary-btn {
            background-color: #6c63ff;
            color: white;
            box-shadow: 0 4px 15px rgba(108, 99, 255, 0.3);
          }

          .primary-btn:hover {
            background-color: #564fd1;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(108, 99, 255, 0.4);
          }

          .secondary-btn {
            background-color: white;
            color: #6c63ff;
            border: 2px solid #6c63ff;
          }

          .secondary-btn:hover {
            background-color: #f8f9fa;
            transform: translateY(-2px);
          }

          /* Hero Section */
          .hero-section {
            padding: 100px 0;
            background: linear-gradient(135deg, #f5f7fa 0%, #e2e8f0 100%);
          }

          .hero-content {
            display: flex;
            align-items: center;
            gap: 50px;
          }

          .hero-text {
            flex: 1;
          }

          .hero-text h1 {
            margin-bottom: 20px;
          }

          .subtitle {
            font-size: 1.25rem;
            color: #4a5568;
            margin-bottom: 30px;
          }

          .hero-stats {
            display: flex;
            gap: 30px;
            margin-top: 40px;
          }

          .stat-item {
            text-align: center;
          }

          .stat-number {
            display: block;
            font-size: 2rem;
            font-weight: 700;
            color: #6c63ff;
          }

          .stat-label {
            font-size: 0.9rem;
            color: #718096;
          }

          .hero-image {
            flex: 1;
          }

          .image-wrapper {
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          }

          .image-wrapper img {
            width: 100%;
            height: auto;
            display: block;
          }

          /* Features Section */
          .features-section {
            padding: 80px 0;
            background: white;
          }

          .section-header {
            text-align: center;
            margin-bottom: 60px;
          }

          .section-subtitle {
            max-width: 700px;
            margin: 0 auto;
            font-size: 1.1rem;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
          }

          .feature-card {
            background: white;
            border-radius: 15px;
            padding: 40px 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          }

          .feature-icon {
            width: 70px;
            height: 70px;
            background-color: rgba(108, 99, 255, 0.1);
            color: #6c63ff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.8rem;
            margin-bottom: 20px;
          }

          .feature-card h3 {
            margin-bottom: 15px;
          }

          /* History Section */
          .history-section {
            padding: 80px 0;
            background: #f8f9fa;
          }

          .history-content {
            display: flex;
            align-items: center;
            gap: 50px;
          }

          .history-image {
            flex: 1;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          }

          .history-image img {
            width: 100%;
            height: auto;
            display: block;
          }

          .history-text {
            flex: 1;
          }

          .history-text h2 {
            margin-bottom: 20px;
          }

          .history-text p {
            margin-bottom: 20px;
          }

          .mission-item {
            display: flex;
            gap: 20px;
            margin: 30px 0;
          }

          .mission-icon {
            width: 50px;
            height: 50px;
            background-color: rgba(108, 99, 255, 0.1);
            color: #6c63ff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            flex-shrink: 0;
          }

          /* Testimonials Section */
          .testimonials-section {
            padding: 80px 0;
            background: white;
          }

          .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
          }

          .testimonial-card {
            background: white;
            border-radius: 15px;
            padding: 40px 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          }

          .quote-icon {
            color: #6c63ff;
            opacity: 0.2;
            font-size: 2rem;
            margin-bottom: 20px;
          }

          .testimonial-text {
            font-style: italic;
            margin-bottom: 30px;
            position: relative;
          }

          .student-info {
            display: flex;
            align-items: center;
            gap: 15px;
          }

          .student-info img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
          }

          .student-info h4 {
            margin-bottom: 5px;
          }

          .student-info p {
            font-size: 0.9rem;
            color: #718096;
          }

          /* CTA Section */
          .cta-section {
            padding: 100px 0;
            background: linear-gradient(135deg, #6c63ff 0%, #564fd1 100%);
            color: white;
            text-align: center;
          }

          .cta-content h2 {
            color: white;
            margin-bottom: 20px;
          }

          .cta-content p {
            color: rgba(255,255,255,0.8);
            max-width: 700px;
            margin: 0 auto 30px;
            font-size: 1.1rem;
          }

          .cta-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
          }

          /* Responsive Styles */
          @media (max-width: 1024px) {
            .hero-content, .history-content {
              flex-direction: column;
            }

            .hero-text, .history-text {
              text-align: center;
            }

            .hero-stats, .cta-buttons {
              justify-content: center;
            }

            .mission-item {
              justify-content: center;
            }
          }

          @media (max-width: 768px) {
            h1 {
              font-size: 2.5rem;
            }

            h2 {
              font-size: 2rem;
            }

            .hero-section {
              padding: 80px 0;
            }

            .hero-stats {
              flex-direction: column;
              gap: 15px;
            }

            .cta-buttons {
              flex-direction: column;
              align-items: center;
            }
          }

          @media (max-width: 480px) {
            h1 {
              font-size: 2rem;
            }

            h2 {
              font-size: 1.8rem;
            }

            .primary-btn, .secondary-btn {
              width: 100%;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default About;
// import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../../components/Navbar";


// export default function AIDeepLearning() {
//   return (
//     <div className="ai-page">
//       {/* Hero Section with Gradient Background */}
//       <div className="hero-section text-center py-5 text-white">
//         <div className="container py-5">
//           <h1 className="display-3 fw-bold mb-4">Master AI & Deep Learning</h1>
//           <p className="lead mb-4">Build intelligent systems and neural networks with cutting-edge frameworks and techniques</p>
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
//               <h3 className="fw-bold">16 Weeks</h3>
//               <p>Comprehensive Program</p>
//             </div>
//             <div className="col-md-3">
//               <h3 className="fw-bold">400+ Hours</h3>
//               <p>Hands-on Training</p>
//             </div>
//             <div className="col-md-3">
//               <h3 className="fw-bold">6 Projects</h3>
//               <p>Portfolio Ready</p>
//             </div>
//             <div className="col-md-3">
//               <h3 className="fw-bold">GPU Access</h3>
//               <p>Cloud & Lab Resources</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Course Overview */}
//       <div className="container py-5">
//         <div className="row align-items-center mb-5">
//           <div className="col-lg-6">
//             <img 
//               src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485" 
//               alt="AI workspace" 
//               className="img-fluid rounded-3 shadow-lg" 
//             />
//           </div>
//           <div className="col-lg-6">
//             <h2 className="fw-bold mb-4">What You'll Learn</h2>
//             <div className="row">
//               <div className="col-md-6">
//                 <div className="card mb-3 border-0 shadow-sm">
//                   <div className="card-body">
//                     <h5 className="card-title">Core AI/ML</h5>
//                     <ul className="list-unstyled">
//                       <li>✅ Python for Data Science</li>
//                       <li>✅ Neural Networks</li>
//                       <li>✅ TensorFlow/PyTorch</li>
//                       <li>✅ Model Optimization</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-6">
//                 <div className="card mb-3 border-0 shadow-sm">
//                   <div className="card-body">
//                     <h5 className="card-title">Advanced Topics</h5>
//                     <ul className="list-unstyled">
//                       <li>✅ Computer Vision (CNN)</li>
//                       <li>✅ NLP (Transformers)</li>
//                       <li>✅ Reinforcement Learning</li>
//                       <li>✅ Generative Models</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-3">
//               <div className="card border-0 shadow-sm">
//                 <div className="card-body">
//                   <h5 className="card-title">Production Skills</h5>
//                   <ul className="list-unstyled">
//                     <li>✅ MLOps Fundamentals</li>
//                     <li>✅ Model Deployment</li>
//                     <li>✅ Cloud AI Services</li>
//                     <li>✅ Ethical AI Practices</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Projects Section */}
//         <div className="projects-section py-5">
//           <h2 className="text-center fw-bold mb-5">Your AI Portfolio Projects</h2>
//           <div className="row g-4">
//             <div className="col-md-4">
//               <div className="card h-100 border-0 shadow-lg">
//                 <img src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1" className="card-img-top" alt="Computer Vision" />
//                 <div className="card-body">
//                   <h5 className="card-title">Image Classification</h5>
//                   <p className="card-text">Build a CNN to classify medical images or detect objects in real-time.</p>
//                   <div className="tech-stack">
//                     <span className="badge bg-primary me-1">TensorFlow</span>
//                     <span className="badge bg-success me-1">OpenCV</span>
//                     <span className="badge bg-warning text-dark">CNN</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card h-100 border-0 shadow-lg">
//                 <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" className="card-img-top" alt="NLP" />
//                 <div className="card-body">
//                   <h5 className="card-title">Language Model</h5>
//                   <p className="card-text">Create a transformer-based model for text generation or translation.</p>
//                   <div className="tech-stack">
//                     <span className="badge bg-primary me-1">PyTorch</span>
//                     <span className="badge bg-success me-1">HuggingFace</span>
//                     <span className="badge bg-info text-dark">BERT/GPT</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card h-100 border-0 shadow-lg">
//                 <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" className="card-img-top" alt="Reinforcement Learning" />
//                 <div className="card-body">
//                   <h5 className="card-title">AI Game Agent</h5>
//                   <p className="card-text">Train an RL agent to master games using Q-learning or policy gradients.</p>
//                   <div className="tech-stack">
//                     <span className="badge bg-primary me-1">OpenAI Gym</span>
//                     <span className="badge bg-danger me-1">RLlib</span>
//                     <span className="badge bg-secondary">PyTorch</span>
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
//                   <img src="https://randomuser.me/api/portraits/women/45.jpg" className="rounded-circle me-3" width="60" alt="Student" />
//                   <div>
//                     <h6 className="mb-0">Dr. Elena Petrov</h6>
//                     <small className="text-muted">AI Researcher @DeepMind</small>
//                   </div>
//                 </div>
//                 <p>"The deep learning specialization gave me the tools to transition from academia to cutting-edge AI research."</p>
//               </div>
//             </div>
//             <div className="col-md-4 mb-4">
//               <div className="card h-100 border-0 shadow-sm p-3">
//                 <div className="d-flex align-items-center mb-3">
//                   <img src="https://randomuser.me/api/portraits/men/32.jpg" className="rounded-circle me-3" width="60" alt="Student" />
//                   <div>
//                     <h6 className="mb-0">Raj Patel</h6>
//                     <small className="text-muted">ML Engineer @Tesla</small>
//                   </div>
//                 </div>
//                 <p>"The computer vision projects were exactly what helped me land my role working on autonomous vehicles."</p>
//               </div>
//             </div>
//             <div className="col-md-4 mb-4">
//               <div className="card h-100 border-0 shadow-sm p-3">
//                 <div className="d-flex align-items-center mb-3">
//                   <img src="https://randomuser.me/api/portraits/women/68.jpg" className="rounded-circle me-3" width="60" alt="Student" />
//                   <div>
//                     <h6 className="mb-0">Nadia Zhang</h6>
//                     <small className="text-muted">NLP Specialist @OpenAI</small>
//                   </div>
//                 </div>
//                 <p>"The transformer architectures we built from scratch gave me unparalleled understanding of modern NLP."</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="cta-section bg-dark text-white p-5 rounded-3 text-center mb-5">
//           <h2 className="fw-bold mb-3">Ready to Build the Future with AI?</h2>
//           <p className="mb-4">Join our next cohort and start creating intelligent systems today</p>
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
//                   What math background do I need?
//                 </button>
//               </h3>
//               <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
//                 <div className="accordion-body">
//                   Linear algebra, calculus, and probability basics are helpful. We include optional math refreshers and explain concepts intuitively as we implement them in code.
//                 </div>
//               </div>
//             </div>
//             <div className="accordion-item">
//               <h3 className="accordion-header" id="headingTwo">
//                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
//                   Will I need special hardware?
//                 </button>
//               </h3>
//               <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo">
//                 <div className="accordion-body">
//                   We provide cloud GPU credits for all students. For local development, a modern laptop is sufficient for most coursework, with cloud resources available for larger models.
//                 </div>
//               </div>
//             </div>
//             <div className="accordion-item">
//               <h3 className="accordion-header" id="headingThree">
//                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
//                   How current is the curriculum?
//                 </button>
//               </h3>
//               <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree">
//                 <div className="accordion-body">
//                   We update content quarterly to include the latest architectures (like diffusion models and LLMs) and best practices. Alumni get free access to curriculum updates for 2 years.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .hero-section {
//           background: linear-gradient(135deg, #6e00ff 0%, #ff00f5 100%);
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
//         .ai-page {
//           background-color: #f8f9fa;
//         }
//       `}</style>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { FaClock, FaChartLine, FaCertificate, FaCheck, FaArrowRight, FaLaptopCode, FaRobot, FaBrain } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { GiArtificialIntelligence } from 'react-icons/gi';

const AIDeepLearningCourse = () => {
  const [activeTab, setActiveTab] = useState('core');

  return (
    <div className="ai-course-container">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="hero-content">
          <div className="ai-badge">
            <GiArtificialIntelligence className="ai-icon" />
            <span>Cutting-Edge Curriculum</span>
          </div>
          <h1 className="hero-title">
            AI & <span className="highlight">Deep Learning</span> Specialization
          </h1>
          <p className="hero-description">
            Master neural networks, computer vision, NLP and build production-ready AI systems
          </p>
          
          <div className="hero-meta">
            <div className="meta-item">
              <FaClock className="meta-icon" />
              <div>
                <span className="meta-label">Duration</span>
                <span className="meta-value">12 Weeks</span>
              </div>
            </div>
            <div className="meta-item">
              <FaChartLine className="meta-icon" />
              <div>
                <span className="meta-label">Level</span>
                <span className="meta-value">Advanced</span>
              </div>
            </div>
            <div className="meta-item">
              <FaCertificate className="meta-icon" />
              <div>
                <span className="meta-label">Certification</span>
                <span className="meta-value">Industry-recognized</span>
              </div>
            </div>
          </div>
          
          <div className="hero-cta">
            <a href="#enroll" className="cta-button primary">
              Enroll Now <FaArrowRight className="cta-icon" />
            </a>
            <a href="#syllabus" className="cta-button secondary">
              Explore Syllabus
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="neural-network-animation">
            {/* This would be your AI/neural network animation or image */}
            <div className="node"></div>
            <div className="node"></div>
            <div className="node"></div>
            <div className="connecting-line"></div>
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
            Comprehensive curriculum covering modern AI and Deep Learning techniques
          </p>
        </div>

        <div className="syllabus-tabs">
          <button 
            className={`tab-button ${activeTab === 'core' ? 'active' : ''}`}
            onClick={() => setActiveTab('core')}
          >
            <FaLaptopCode className="tab-icon" /> Core Concepts
          </button>
          <button 
            className={`tab-button ${activeTab === 'advanced' ? 'active' : ''}`}
            onClick={() => setActiveTab('advanced')}
          >
            <FaBrain className="tab-icon" /> Advanced Topics
          </button>
          <button 
            className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <FaRobot className="tab-icon" /> Real-World Projects
          </button>
        </div>

        <div className="syllabus-content">
          {activeTab === 'core' && (
            <div className="module-grid">
              {/* Module 1 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">01</span>
                  <h3 className="module-title">Neural Network Fundamentals</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 2 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Perceptrons and activation functions</li>
                  <li><FaCheck className="check-icon" /> Backpropagation and gradient descent</li>
                  <li><FaCheck className="check-icon" /> Implementing networks with TensorFlow/PyTorch</li>
                  <li><FaCheck className="check-icon" /> Training, validation, and testing</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">5 Lectures</span>
                  <span className="resource-pill">3 Labs</span>
                  <span className="resource-pill">1 Project</span>
                </div>
              </div>

              {/* Module 2 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">02</span>
                  <h3 className="module-title">Deep Learning Architectures</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 3 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> CNNs for computer vision</li>
                  <li><FaCheck className="check-icon" /> RNNs and LSTMs for sequences</li>
                  <li><FaCheck className="check-icon" /> Transformers and attention mechanisms</li>
                  <li><FaCheck className="check-icon" /> Autoencoders and GANs</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">8 Lectures</span>
                  <span className="resource-pill">5 Labs</span>
                  <span className="resource-pill">2 Projects</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'advanced' && (
            <div className="module-grid">
              {/* Module 3 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">03</span>
                  <h3 className="module-title">Computer Vision</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 2 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Image classification</li>
                  <li><FaCheck className="check-icon" /> Object detection (YOLO, Faster R-CNN)</li>
                  <li><FaCheck className="check-icon" /> Image segmentation</li>
                  <li><FaCheck className="check-icon" /> Transfer learning with ResNet, EfficientNet</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">6 Lectures</span>
                  <span className="resource-pill">4 Labs</span>
                  <span className="resource-pill">1 Project</span>
                </div>
              </div>

              {/* Module 4 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">04</span>
                  <h3 className="module-title">Natural Language Processing</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 2 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Word embeddings (Word2Vec, GloVe)</li>
                  <li><FaCheck className="check-icon" /> BERT and Transformer models</li>
                  <li><FaCheck className="check-icon" /> Text classification and generation</li>
                  <li><FaCheck className="check-icon" /> Named entity recognition</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">7 Lectures</span>
                  <span className="resource-pill">5 Labs</span>
                  <span className="resource-pill">1 Project</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="project-showcase">
              <div className="project-card">
                <h3 className="project-title">Medical Image Diagnosis System</h3>
                <p className="project-description">
                  Build a CNN-based system to detect abnormalities in X-ray images
                </p>
                <div className="project-tech">
                  <span>TensorFlow</span>
                  <span>DICOM Processing</span>
                  <span>Grad-CAM</span>
                </div>
              </div>
              
              <div className="project-card">
                <h3 className="project-title">Real-Time Object Detection</h3>
                <p className="project-description">
                  Implement YOLOv5 for real-time object detection in video streams
                </p>
                <div className="project-tech">
                  <span>PyTorch</span>
                  <span>OpenCV</span>
                  <span>ONNX Runtime</span>
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
            <h2 className="cta-title">Ready to Master AI & Deep Learning?</h2>
            <p className="cta-subtitle">
              Join our next cohort and get hands-on with cutting-edge technologies
            </p>
            <div className="cta-features">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Personalized mentorship</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Industry-relevant projects</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Career support</span>
              </div>
            </div>
          </div>
          <div className="cta-action">
            <a href="/enroll" className="enroll-button">
              Enroll Now <FaArrowRight className="button-icon" />
            </a>
            <p className="next-cohort">
              Next cohort starts: <strong>June 15, 2024</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        .ai-course-container {
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
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
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
        
        .ai-badge {
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
        
        .ai-icon {
          font-size: 1.2rem;
        }
        
        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        
        .highlight {
          color: #93c5fd;
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
          color: #93c5fd;
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
          color: #1e40af;
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
        
        .neural-network-animation {
          position: relative;
          height: 100%;
          width: 100%;
          /* This would contain your actual neural network visualization */
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
          color: #93c5fd;
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
          background: #edf2f7;
          border: none;
          font-weight: 600;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .tab-button.active {
          background: #1e40af;
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
          border: 1px solid #e2e8f0;
          transition: all 0.2s ease;
        }
        
        .module-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          border-color: #c7d2fe;
        }
        
        .module-header {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.25rem;
        }
        
        .module-number {
          background: #1e40af;
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
          color: #1e40af;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }
        
        .module-resources {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          padding-top: 1rem;
          border-top: 1px dashed #e2e8f0;
        }
        
        .resource-pill {
          background: #edf2f7;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #4a5568;
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
          border: 1px solid #e2e8f0;
        }
        
        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #1e40af;
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
          background: #ebf8ff;
          color: #3182ce;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        /* Enrollment CTA */
        .enrollment-cta {
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
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
          color: #93c5fd;
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
          color: #1e40af;
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

export default AIDeepLearningCourse;
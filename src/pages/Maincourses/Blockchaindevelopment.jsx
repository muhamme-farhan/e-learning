// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../../components/Navbar";

// export default function BlockchainDevelopment() {
//   const [showEnrollmentSuccess, setShowEnrollmentSuccess] = useState(false);

//   const handleEnrollClick = () => {
//     setShowEnrollmentSuccess(true);
//     // You would typically have an API call here to process enrollment
//   };

//   const handleCloseModal = () => {
//     setShowEnrollmentSuccess(false);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="bg-dark text-white pb-5">
//         {/* Hero Section */}
//         <div className="py-5 px-4 text-center bg-gradient-primary" style={{ 
//           background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
//           paddingBottom: '4rem'
//         }}>
//           <div className="container py-5">
//             <h1 className="display-4 fw-bold mb-3 text-white">Blockchain Development</h1>
//             <p className="lead mb-4" style={{ color: '#adb5bd' }}>
//               Master Solidity, Smart Contracts & Web3 DApps
//             </p>
//             <span className="badge bg-warning text-dark px-3 py-2 fs-6 mb-4">
//               Advanced • 16 Weeks • ₹13,299
//             </span>
//             <div className="mt-4">
//               <button 
//                 onClick={handleEnrollClick}
//                 className="btn btn-light btn-lg px-4 me-2"
//               >
//                 Enroll Now
//               </button>
//               <Link to="/courses" className="btn btn-outline-light btn-lg px-4">
//                 Explore All Courses
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="container mt-n5" style={{ position: 'relative', zIndex: 1 }}>
//           {/* Overview Card */}
//           <div className="card shadow-lg mb-5 border-0">
//             <div className="row g-0">
//               <div className="col-md-8 p-4">
//                 <h2 className="fw-bold mb-4" style={{ color: '#2c5364' }}>Course Overview</h2>
//                 <p className="text-muted mb-4">
//                   Dive deep into blockchain technology with a hands-on approach. Learn how to write and deploy smart contracts, build full-stack DApps using Solidity and Ethereum, and understand the underlying concepts of blockchain infrastructure.
//                 </p>
//                 <div className="row">
//                   <div className="col-md-6">
//                     <ul className="list-unstyled">
//                       <li className="mb-2"><span className="text-warning me-2">✓</span> Solidity Smart Contracts</li>
//                       <li className="mb-2"><span className="text-warning me-2">✓</span> Ethereum & Polygon</li>
//                       <li className="mb-2"><span className="text-warning me-2">✓</span> Hardhat Development</li>
//                     </ul>
//                   </div>
//                   <div className="col-md-6">
//                     <ul className="list-unstyled">
//                       <li className="mb-2"><span className="text-warning me-2">✓</span> Web3.js & Ethers.js</li>
//                       <li className="mb-2"><span className="text-warning me-2">✓</span> DApp Full Stack Projects</li>
//                       <li className="mb-2"><span className="text-warning me-2">✓</span> NFT Marketplace</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-4 d-flex align-items-center justify-content-center p-4" style={{ 
//                 background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
//               }}>
//                 <img
//                   src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-blockchain-cryptocurrency-flaticons-lineal-color-flat-icons.png"
//                   alt="Blockchain Icon"
//                   className="img-fluid"
//                   style={{ maxWidth: "220px" }}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Curriculum Section */}
//           <div className="card shadow-lg mb-5 border-0">
//             <div className="card-body p-4">
//               <h2 className="fw-bold mb-4" style={{ color: '#2c5364' }}>Course Curriculum</h2>
//               <div className="row">
//                 <div className="col-md-6">
//                   <div className="list-group list-group-flush">
//                     <div className="list-group-item d-flex align-items-center">
//                       <span className="badge bg-primary rounded-circle me-3">1</span>
//                       Introduction to Blockchain and Cryptography
//                     </div>
//                     <div className="list-group-item d-flex align-items-center">
//                       <span className="badge bg-primary rounded-circle me-3">2</span>
//                       Solidity Basics and Smart Contract Development
//                     </div>
//                     <div className="list-group-item d-flex align-items-center">
//                       <span className="badge bg-primary rounded-circle me-3">3</span>
//                       Ethereum, Gas Fees, and Test Networks
//                     </div>
//                     <div className="list-group-item d-flex align-items-center">
//                       <span className="badge bg-primary rounded-circle me-3">4</span>
//                       Web3.js and Ethers.js Integration
//                     </div>
//                     <div className="list-group-item d-flex align-items-center">
//                       <span className="badge bg-primary rounded-circle me-3">5</span>
//                       Hardhat & Truffle Workflow
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-md-6">
//                   <div className="list-group list-group-flush">
//                     <div className="list-group-item d-flex align-items-center">
//                       <span className="badge bg-primary rounded-circle me-3">6</span>
//                       Building a Decentralized Voting App
//                     </div>
//                     <div className="list-group-item d-flex align-items-center">
//                       <span className="badge bg-primary rounded-circle me-3">7</span>
//                       NFTs and ERC-721 Standards
//                     </div>
//                     <div className="list-group-item d-flex align-items-center">
//                       <span className="badge bg-primary rounded-circle me-3">8</span>
//                       Creating a Full Stack NFT Marketplace
//                     </div>
//                     <div className="list-group-item d-flex align-items-center">
//                       <span className="badge bg-primary rounded-circle me-3">9</span>
//                       Security Best Practices for Smart Contracts
//                     </div>
//                     <div className="list-group-item d-flex align-items-center">
//                       <span className="badge bg-primary rounded-circle me-3">10</span>
//                       Deploying DApps on Ethereum and Polygon
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Instructor Section */}
//           <div className="card shadow-lg border-0 overflow-hidden">
//             <div className="row g-0">
//               <div className="col-md-4" style={{ 
//                 background: 'linear-gradient(135deg, #0f2027, #203a43)',
//                 minHeight: '250px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center'
//               }}>
//                 <div className="text-center p-4">
//                   <div className="bg-white rounded-circle d-inline-block p-2 mb-3">
//                     <img 
//                       src="https://randomuser.me/api/portraits/men/32.jpg" 
//                       alt="Instructor" 
//                       className="rounded-circle"
//                       style={{ width: '120px', height: '120px', objectFit: 'cover' }}
//                     />
//                   </div>
//                   <h4 className="text-white mb-1">Rahul Singh</h4>
//                   <p className="text-warning mb-0">Blockchain Engineer</p>
//                 </div>
//               </div>
//               <div className="col-md-8">
//                 <div className="card-body p-4">
//                   <h3 className="fw-bold mb-3" style={{ color: '#2c5364' }}>About Your Instructor</h3>
//                   <p className="text-muted mb-4">
//                     With 6+ years of experience in blockchain development, Rahul has worked with leading Web3 companies including Polygon and ConsenSys. He specializes in Ethereum smart contracts, NFT marketplaces, and DeFi protocols.
//                   </p>
//                   <div className="d-flex flex-wrap gap-2 mb-3">
//                     <span className="badge bg-light text-dark">Solidity Expert</span>
//                     <span className="badge bg-light text-dark">Ethereum</span>
//                     <span className="badge bg-light text-dark">Smart Contracts</span>
//                     <span className="badge bg-light text-dark">NFTs</span>
//                     <span className="badge bg-light text-dark">DeFi</span>
//                   </div>
//                   <button 
//                     onClick={handleEnrollClick}
//                     className="btn btn-primary px-4 py-2 mt-2"
//                   >
//                     Enroll Now - ₹13,299
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enrollment Success Modal */}
//       {showEnrollmentSuccess && (
//         <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
//           <div className="modal-dialog modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header border-0">
//                 <h5 className="modal-title text-success">Enrollment Successful!</h5>
//                 <button 
//                   type="button" 
//                   className="btn-close" 
//                   onClick={handleCloseModal}
//                 ></button>
//               </div>
//               <div className="modal-body text-center py-4">
//                 <div className="mb-4">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#28a745" className="bi bi-check-circle" viewBox="0 0 16 16">
//                     <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
//                     <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
//                   </svg>
//                 </div>
//                 <h4 className="mb-3">Welcome to Blockchain Development!</h4>
//                 <p className="text-muted mb-4">
//                   You've successfully enrolled in the course. Check your email for confirmation and next steps.
//                 </p>
//                 <div className="d-flex justify-content-center gap-3">
//                   <button 
//                     onClick={handleCloseModal}
//                     className="btn btn-outline-secondary px-4"
//                   >
//                     Close
//                   </button>
//                   <Link 
//                     to="/my-courses" 
//                     className="btn btn-success px-4"
//                   >
//                     Go to My Courses
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// export default function BlockchainDevelopment() {
//   const [enrolled, setEnrolled] = useState(false);

//   const handleEnroll = () => {
//     setEnrolled(true);
//     setTimeout(() => setEnrolled(false), 3000);
//   };

//   return (
//     <div className="container py-5">
//       {/* Header */}
//       <div className="text-center mb-5">
//         <h1 className="display-4 fw-bold">
//           <span className="text-primary">Blockchain</span>{' '}
//           <span className="text-success">Development</span>
//         </h1>
//         <p className="lead text-muted">
//           Master decentralized apps and smart contracts using blockchain.
//         </p>
//         <div className="mt-3">
//           <span className="badge bg-danger fs-6 me-2 px-3 py-2">Advanced</span>
//           <span className="badge bg-dark fs-6 px-3 py-2">10 Weeks</span>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div className="row align-items-center mb-5 g-4">
//         <div className="col-lg-6">
//           <img
//             src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*kGrzLkfvVaZCtCI_6DV9qg.png"
//             alt="Blockchain"
//             className="img-fluid rounded-4 shadow-lg border border-primary border-opacity-25"
//           />
//           <div className="mt-4 d-flex justify-content-center gap-3">
//             <span className="badge bg-dark text-white">
//               <i className="bi bi-star-fill text-warning me-1"></i> 4.8/5.0
//             </span>
//             <span className="badge bg-dark text-white">
//               <i className="bi bi-people-fill me-1"></i> 9,000+ students
//             </span>
//           </div>
//         </div>
//         <div className="col-lg-6">
//           <div className="p-4 bg-light rounded-4">
//             <h3 className="fw-bold mb-4">
//               <i className="bi bi-info-circle text-primary me-2"></i>
//               Why Learn Blockchain?
//             </h3>
//             <ul className="list-group list-group-flush">
//               <li className="list-group-item bg-transparent">🌐 Decentralization is the future of tech</li>
//               <li className="list-group-item bg-transparent">💰 High-paying jobs globally</li>
//               <li className="list-group-item bg-transparent">⚙️ Build dApps and smart contracts</li>
//               <li className="list-group-item bg-transparent">🔗 Power behind cryptocurrencies (like Ethereum & Bitcoin)</li>
//               <li className="list-group-item bg-transparent">🚀 Startups & enterprises need blockchain experts</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* What You'll Learn */}
//       <div className="bg-light p-4 rounded shadow mb-5">
//         <h4 className="fw-bold mb-4">What You'll Learn</h4>
//         <div className="row">
//           <div className="col-md-4">
//             <ul className="list-unstyled">
//               <li>✔️ Blockchain architecture and types</li>
//               <li>✔️ Ethereum, Bitcoin, and other chains</li>
//               <li>✔️ Wallets, nodes, and consensus mechanisms</li>
//               <li>✔️ Smart contract development with Solidity</li>
//             </ul>
//           </div>
//           <div className="col-md-4">
//             <ul className="list-unstyled">
//               <li>✔️ Gas fees and optimization techniques</li>
//               <li>✔️ Deploying dApps on testnets</li>
//               <li>✔️ Metamask, Hardhat, Truffle tools</li>
//               <li>✔️ Security in smart contracts</li>
//             </ul>
//           </div>
//           <div className="col-md-4">
//             <ul className="list-unstyled">
//               <li>✔️ Real-world use cases: supply chain, voting, NFTs</li>
//               <li>✔️ Blockchain APIs & integrations</li>
//               <li>✔️ Working with Web3.js & Ether.js</li>
//               <li>✔️ Certification & career support</li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Instructor Section */}
//       <div className="card mb-5">
//         <div className="card-body">
//           <h4 className="fw-bold mb-3">
//             <i className="bi bi-person-badge-fill text-primary me-2"></i>
//             Meet Your Instructor
//           </h4>
//           <div className="d-flex flex-column flex-md-row align-items-center gap-4">
//             <img
//               src="https://randomuser.me/api/portraits/men/32.jpg"
//               className="rounded-circle border border-3 border-primary shadow"
//               alt="Instructor"
//               width="120"
//             />
//             <div>
//               <h5>Mr. Harsh Jain</h5>
//               <p className="text-muted">Blockchain Engineer at Web3Labs</p>
//               <p>
//                 7+ years in blockchain innovation. Mentor to 2,000+ developers. Built dApps for finance and logistics.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enroll CTA */}
//       <div className="text-center mt-5">
//         <button className="btn btn-lg btn-success px-5 py-3 fw-bold" onClick={handleEnroll}>
//           <i className="bi bi-box-arrow-in-right me-2"></i> Enroll Now
//         </button>
//         <p className="text-muted mt-3">
//           <i className="bi bi-shield-check me-1"></i> 30-day money-back guarantee
//         </p>

//         {enrolled && (
//           <div className="alert alert-success mt-4 fw-semibold" role="alert">
//             <i className="bi bi-check-circle-fill me-2"></i> Successfully joined the course!
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { FaClock, FaChartLine, FaCertificate, FaCheck, FaArrowRight, FaCode, FaEthereum, FaBitcoin, FaNetworkWired, FaShieldAlt } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { GiBlockHouse } from 'react-icons/gi';

const BlockchainDevelopmentCourse = () => {
  const [activeTab, setActiveTab] = useState('core');

  return (
    <div className="blockchain-course-container">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="hero-content">
          <div className="blockchain-badge">
            <GiBlockHouse className="blockchain-icon" />
            <span>Future-Ready Curriculum</span>
          </div>
          <h1 className="hero-title">
            Blockchain <span className="highlight">Development</span> Program
          </h1>
          <p className="hero-description">
            Master Ethereum, smart contracts, DApps and build decentralized solutions for the Web3 era
          </p>
          
          <div className="hero-meta">
            <div className="meta-item">
              <FaClock className="meta-icon" />
              <div>
                <span className="meta-label">Duration</span>
                <span className="meta-value">10 Weeks</span>
              </div>
            </div>
            <div className="meta-item">
              <FaChartLine className="meta-icon" />
              <div>
                <span className="meta-label">Level</span>
                <span className="meta-value">Intermediate</span>
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
          <div className="blockchain-animation">
            {/* This would be your blockchain visualization */}
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="chain"></div>
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
            Comprehensive curriculum covering blockchain fundamentals and decentralized application development
          </p>
        </div>

        <div className="syllabus-tabs">
          <button 
            className={`tab-button ${activeTab === 'core' ? 'active' : ''}`}
            onClick={() => setActiveTab('core')}
          >
            <FaCode className="tab-icon" /> Core Concepts
          </button>
          <button 
            className={`tab-button ${activeTab === 'advanced' ? 'active' : ''}`}
            onClick={() => setActiveTab('advanced')}
          >
            <FaNetworkWired className="tab-icon" /> Advanced Topics
          </button>
          <button 
            className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <FaEthereum className="tab-icon" /> Real-World Projects
          </button>
        </div>

        <div className="syllabus-content">
          {activeTab === 'core' && (
            <div className="module-grid">
              {/* Module 1 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">01</span>
                  <h3 className="module-title">Blockchain Fundamentals</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 2 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Cryptography basics</li>
                  <li><FaCheck className="check-icon" /> Distributed ledger technology</li>
                  <li><FaCheck className="check-icon" /> Consensus mechanisms (PoW, PoS)</li>
                  <li><FaCheck className="check-icon" /> Bitcoin architecture</li>
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
                  <h3 className="module-title">Ethereum & Smart Contracts</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 3 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> EVM architecture</li>
                  <li><FaCheck className="check-icon" /> Solidity programming</li>
                  <li><FaCheck className="check-icon" /> Smart contract development</li>
                  <li><FaCheck className="check-icon" /> Testing and deployment</li>
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
                  <h3 className="module-title">Decentralized Applications</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 2 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Web3.js and Ethers.js</li>
                  <li><FaCheck className="check-icon" /> Frontend integration</li>
                  <li><FaCheck className="check-icon" /> Wallet connections</li>
                  <li><FaCheck className="check-icon" /> IPFS for decentralized storage</li>
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
                  <h3 className="module-title">Security & Best Practices</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 2 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Common vulnerabilities</li>
                  <li><FaCheck className="check-icon" /> Smart contract auditing</li>
                  <li><FaCheck className="check-icon" /> Gas optimization</li>
                  <li><FaCheck className="check-icon" /> Security tools and frameworks</li>
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
                <h3 className="project-title">NFT Marketplace</h3>
                <p className="project-description">
                  Build a full-stack NFT marketplace with minting, buying and selling functionality
                </p>
                <div className="project-tech">
                  <span>Solidity</span>
                  <span>React</span>
                  <span>IPFS</span>
                </div>
              </div>
              
              <div className="project-card">
                <h3 className="project-title">DAO Governance System</h3>
                <p className="project-description">
                  Implement a decentralized autonomous organization with voting and proposal systems
                </p>
                <div className="project-tech">
                  <span>Hardhat</span>
                  <span>TypeScript</span>
                  <span>Snapshot</span>
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
            <h2 className="cta-title">Ready to Become a Blockchain Developer?</h2>
            <p className="cta-subtitle">
              Join our next cohort and build the decentralized future
            </p>
            <div className="cta-features">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Hands-on coding</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Real-world projects</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Web3 career guidance</span>
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
        .blockchain-course-container {
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
          background: linear-gradient(135deg, #2b6cb0 0%, #2c5282 100%);
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
        
        .blockchain-badge {
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
        
        .blockchain-icon {
          font-size: 1.2rem;
        }
        
        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        
        .highlight {
          color: #90cdf4;
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
          color: #90cdf4;
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
          color: #2b6cb0;
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
        
        .blockchain-animation {
          position: relative;
          height: 100%;
          width: 100%;
          /* This would contain your actual blockchain visualization */
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
          color: #90cdf4;
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
          background: #2b6cb0;
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
          border-color: #bee3f8;
        }
        
        .module-header {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.25rem;
        }
        
        .module-number {
          background: #2b6cb0;
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
          color: #2b6cb0;
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
          color: #2b6cb0;
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
          background: linear-gradient(135deg, #2b6cb0 0%, #2c5282 100%);
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
          color: #90cdf4;
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
          color: #2b6cb0;
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

export default BlockchainDevelopmentCourse;
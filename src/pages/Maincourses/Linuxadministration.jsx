import React, { useState } from 'react';
import { FaCode, FaServer, FaShieldAlt, FaCheck, FaArrowRight, FaTerminal, FaNetworkWired, FaCloud } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { BsGearFill } from 'react-icons/bs';

const LinuxAdminCourse = () => {
  const [activeTab, setActiveTab] = useState('fundamentals');

  return (
    <div className="linux-course-container">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="hero-content">
          <div className="linux-badge">
            <BsGearFill className="linux-icon" />
            <span>System Administration</span>
          </div>
          <h1 className="hero-title">
            <span className="highlight">Linux</span> Administration
          </h1>
          <p className="hero-description">
            Master essential Linux system administration skills to manage servers, networks, and cloud infrastructure
          </p>
          
          <div className="hero-meta">
            <div className="meta-item">
              <IoMdTime className="meta-icon" />
              <div>
                <span className="meta-label">Duration</span>
                <span className="meta-value">16 Weeks</span>
              </div>
            </div>
            <div className="meta-item">
              <FaTerminal className="meta-icon" />
              <div>
                <span className="meta-label">Level</span>
                <span className="meta-value">Beginner to Advanced</span>
              </div>
            </div>
            <div className="meta-item">
              <FaServer className="meta-icon" />
              <div>
                <span className="meta-label">Labs</span>
                <span className="meta-value">50+ Hands-on Exercises</span>
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
          <div className="linux-animation">
            {/* Server visualization elements */}
            <div className="terminal-window"></div>
            <div className="server-rack"></div>
            <div className="network-diagram"></div>
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
            Comprehensive curriculum covering Linux system administration from fundamentals to advanced topics
          </p>
        </div>

        <div className="syllabus-tabs">
          <button 
            className={`tab-button ${activeTab === 'fundamentals' ? 'active' : ''}`}
            onClick={() => setActiveTab('fundamentals')}
          >
            <FaTerminal className="tab-icon" /> Fundamentals
          </button>
          <button 
            className={`tab-button ${activeTab === 'networking' ? 'active' : ''}`}
            onClick={() => setActiveTab('networking')}
          >
            <FaNetworkWired className="tab-icon" /> Networking
          </button>
          <button 
            className={`tab-button ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <FaShieldAlt className="tab-icon" /> Security
          </button>
        </div>

        <div className="syllabus-content">
          {activeTab === 'fundamentals' && (
            <div className="module-grid">
              {/* Module 1 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">01</span>
                  <h3 className="module-title">Linux Basics & Command Line</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 3 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Filesystem Hierarchy</li>
                  <li><FaCheck className="check-icon" /> Essential Commands</li>
                  <li><FaCheck className="check-icon" /> User & Permission Management</li>
                  <li><FaCheck className="check-icon" /> Package Management</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">10 Lectures</span>
                  <span className="resource-pill">15 Labs</span>
                  <span className="resource-pill">1 Capstone Project</span>
                </div>
              </div>

              {/* Module 2 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">02</span>
                  <h3 className="module-title">System Administration</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 4 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Process Management</li>
                  <li><FaCheck className="check-icon" /> Systemd Services</li>
                  <li><FaCheck className="check-icon" /> Disk Management</li>
                  <li><FaCheck className="check-icon" /> Logging & Monitoring</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">12 Lectures</span>
                  <span className="resource-pill">18 Labs</span>
                  <span className="resource-pill">2 Real-world Scenarios</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'networking' && (
            <div className="module-grid">
              {/* Module 3 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">03</span>
                  <h3 className="module-title">Linux Networking</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 4 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> TCP/IP Fundamentals</li>
                  <li><FaCheck className="check-icon" /> Network Configuration</li>
                  <li><FaCheck className="check-icon" /> Firewalls (iptables/nftables)</li>
                  <li><FaCheck className="check-icon" /> SSH & Remote Access</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">8 Lectures</span>
                  <span className="resource-pill">12 Labs</span>
                  <span className="resource-pill">1 Network Setup Project</span>
                </div>
              </div>

              {/* Module 4 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">04</span>
                  <h3 className="module-title">Server Deployment</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 3 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Web Servers (Apache/Nginx)</li>
                  <li><FaCheck className="check-icon" /> Database Servers</li>
                  <li><FaCheck className="check-icon" /> Mail Servers</li>
                  <li><FaCheck className="check-icon" /> DNS Configuration</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">10 Lectures</span>
                  <span className="resource-pill">15 Labs</span>
                  <span className="resource-pill">1 Full Server Deployment</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="project-showcase">
              <div className="project-card">
                <h3 className="project-title">System Hardening</h3>
                <p className="project-description">
                  Learn to secure Linux systems by implementing security best practices, SELinux, and access controls
                </p>
                <div className="project-tech">
                  <span>SELinux</span>
                  <span>AppArmor</span>
                  <span>Firewalls</span>
                </div>
              </div>
              
              <div className="project-card">
                <h3 className="project-title">Intrusion Detection</h3>
                <p className="project-description">
                  Implement monitoring systems and learn to detect and respond to security incidents
                </p>
                <div className="project-tech">
                  <span>Fail2Ban</span>
                  <span>OSSEC</span>
                  <span>Log Analysis</span>
                </div>
              </div>

              <div className="project-card">
                <h3 className="project-title">Automated Security</h3>
                <p className="project-description">
                  Create scripts and automation for security patching and vulnerability scanning
                </p>
                <div className="project-tech">
                  <span>Bash Scripting</span>
                  <span>Ansible</span>
                  <span>Lynis</span>
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
            <h2 className="cta-title">Ready to Master Linux Administration?</h2>
            <p className="cta-subtitle">
              Join our next cohort and gain the skills needed to manage enterprise Linux systems
            </p>
            <div className="cta-features">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Hands-on labs</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Real-world scenarios</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Certification prep</span>
              </div>
            </div>
          </div>
          <div className="cta-action">
            <a href="/enroll" className="enroll-button">
              Enroll Now <FaArrowRight className="button-icon" />
            </a>
            <p className="next-cohort">
              Next cohort starts: <strong>November 15, 2024</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        .linux-course-container {
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
        
        .linux-badge {
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
        
        .linux-icon {
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
        
        .linux-animation {
          position: relative;
          height: 100%;
          width: 100%;
          /* Server visualization elements would go here */
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

export default LinuxAdminCourse;
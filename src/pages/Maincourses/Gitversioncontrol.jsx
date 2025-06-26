import React, { useState } from 'react';
import { FaCodeBranch, FaGitAlt, FaGithub, FaCheck, FaArrowRight, FaServer, FaUsers } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { BsGit } from 'react-icons/bs';

const GitVersionControlCourse = () => {
  const [activeTab, setActiveTab] = useState('fundamentals');

  return (
    <div className="git-course-container">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="hero-content">
          <div className="git-badge">
            <BsGit className="git-icon" />
            <span>Hands-on Projects</span>
          </div>
          <h1 className="hero-title">
            <span className="highlight">Git Version Control</span> & Collaboration
          </h1>
          <p className="hero-description">
            Master Git workflows, branching strategies, and team collaboration using industry-standard practices
          </p>
          
          <div className="hero-meta">
            <div className="meta-item">
              <IoMdTime className="meta-icon" />
              <div>
                <span className="meta-label">Duration</span>
                <span className="meta-value">6 Weeks</span>
              </div>
            </div>
            <div className="meta-item">
              <FaCodeBranch className="meta-icon" />
              <div>
                <span className="meta-label">Level</span>
                <span className="meta-value">Beginner to Advanced</span>
              </div>
            </div>
            <div className="meta-item">
              <FaGithub className="meta-icon" />
              <div>
                <span className="meta-label">Certification</span>
                <span className="meta-value">Git Professional</span>
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
          <div className="git-animation">
            {/* Git visualization would go here */}
            <div className="git-branches"></div>
            <div className="git-commits"></div>
            <div className="git-network"></div>
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
            Comprehensive curriculum covering Git fundamentals to advanced team workflows
          </p>
        </div>

        <div className="syllabus-tabs">
          <button 
            className={`tab-button ${activeTab === 'fundamentals' ? 'active' : ''}`}
            onClick={() => setActiveTab('fundamentals')}
          >
            <FaGitAlt className="tab-icon" /> Git Fundamentals
          </button>
          <button 
            className={`tab-button ${activeTab === 'workflows' ? 'active' : ''}`}
            onClick={() => setActiveTab('workflows')}
          >
            <FaCodeBranch className="tab-icon" /> Workflows
          </button>
          <button 
            className={`tab-button ${activeTab === 'collaboration' ? 'active' : ''}`}
            onClick={() => setActiveTab('collaboration')}
          >
            <FaUsers className="tab-icon" /> Collaboration
          </button>
        </div>

        <div className="syllabus-content">
          {activeTab === 'fundamentals' && (
            <div className="module-grid">
              {/* Module 1 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">01</span>
                  <h3 className="module-title">Git Basics</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 1 Week
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Version control concepts</li>
                  <li><FaCheck className="check-icon" /> Installing and configuring Git</li>
                  <li><FaCheck className="check-icon" /> Creating repositories</li>
                  <li><FaCheck className="check-icon" /> Basic commands (add, commit, push)</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">5 Lectures</span>
                  <span className="resource-pill">10 Exercises</span>
                  <span className="resource-pill">1 Project</span>
                </div>
              </div>

              {/* Module 2 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">02</span>
                  <h3 className="module-title">Branching & Merging</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 1.5 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Branch creation</li>
                  <li><FaCheck className="check-icon" /> Merge strategies</li>
                  <li><FaCheck className="check-icon" /> Resolving conflicts</li>
                  <li><FaCheck className="check-icon" /> Rebase vs Merge</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">6 Lectures</span>
                  <span className="resource-pill">8 Exercises</span>
                  <span className="resource-pill">1 Complex Project</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'workflows' && (
            <div className="module-grid">
              {/* Module 3 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">03</span>
                  <h3 className="module-title">Git Workflows</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 1.5 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Centralized workflow</li>
                  <li><FaCheck className="check-icon" /> Feature branch workflow</li>
                  <li><FaCheck className="check-icon" /> Gitflow workflow</li>
                  <li><FaCheck className="check-icon" /> Forking workflow</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">5 Lectures</span>
                  <span className="resource-pill">6 Workflow Exercises</span>
                  <span className="resource-pill">1 Team Simulation</span>
                </div>
              </div>

              {/* Module 4 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">04</span>
                  <h3 className="module-title">Advanced Git</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 1 Week
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Interactive staging</li>
                  <li><FaCheck className="check-icon" /> Stashing changes</li>
                  <li><FaCheck className="check-icon" /> Rewriting history</li>
                  <li><FaCheck className="check-icon" /> Git hooks</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">4 Lectures</span>
                  <span className="resource-pill">5 Advanced Exercises</span>
                  <span className="resource-pill">1 Real-world Scenario</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'collaboration' && (
            <div className="project-showcase">
              <div className="project-card">
                <h3 className="project-title">GitHub Collaboration</h3>
                <p className="project-description">
                  Work with teams using pull requests, code reviews, and GitHub's collaboration features
                </p>
                <div className="project-tech">
                  <span>GitHub</span>
                  <span>Pull Requests</span>
                  <span>Code Reviews</span>
                </div>
              </div>
              
              <div className="project-card">
                <h3 className="project-title">CI/CD Integration</h3>
                <p className="project-description">
                  Implement continuous integration and deployment with GitHub Actions and Git hooks
                </p>
                <div className="project-tech">
                  <span>GitHub Actions</span>
                  <span>CI/CD Pipelines</span>
                  <span>Automated Testing</span>
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
            <h2 className="cta-title">Ready to Master Version Control?</h2>
            <p className="cta-subtitle">
              Join our next cohort and become a Git expert for professional development
            </p>
            <div className="cta-features">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Real-world projects</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Team collaboration</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Industry best practices</span>
              </div>
            </div>
          </div>
          <div className="cta-action">
            <a href="/enroll" className="enroll-button">
              Enroll Now <FaArrowRight className="button-icon" />
            </a>
            <p className="next-cohort">
              Next cohort starts: <strong>September 3, 2024</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Styles - Same as previous component */}
      <style jsx>{`
        .git-course-container {
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
          background: linear-gradient(135deg, #6b21a8 0%, #9333ea 100%);
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
        
        .git-badge {
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
        
        .git-icon {
          font-size: 1.2rem;
        }
        
        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        
        .highlight {
          color: #e9d5ff;
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
          color: #e9d5ff;
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
          color: #6b21a8;
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
        
        .git-animation {
          position: relative;
          height: 100%;
          width: 100%;
          /* Git visualization would go here */
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
          color: #e9d5ff;
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
          background: #e9d5ff;
          border: none;
          font-weight: 600;
          color: #6b21a8;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .tab-button.active {
          background: #6b21a8;
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
          border: 1px solid #e9d5ff;
          transition: all 0.2s ease;
        }
        
        .module-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          border-color: #9333ea;
        }
        
        .module-header {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.25rem;
        }
        
        .module-number {
          background: #6b21a8;
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
          color: #6b21a8;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }
        
        .module-resources {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          padding-top: 1rem;
          border-top: 1px dashed #e9d5ff;
        }
        
        .resource-pill {
          background: #e9d5ff;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #6b21a8;
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
          border: 1px solid #e9d5ff;
        }
        
        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #6b21a8;
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
          background: #e9d5ff;
          color: #6b21a8;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        /* Enrollment CTA */
        .enrollment-cta {
          background: linear-gradient(135deg, #6b21a8 0%, #9333ea 100%);
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
          color: #e9d5ff;
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
          color: #6b21a8;
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

export default GitVersionControlCourse;
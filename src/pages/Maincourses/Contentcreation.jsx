import React, { useState } from 'react';
import { FaPenAlt, FaVideo, FaChartLine, FaCheck, FaArrowRight, FaImage, FaMicrophone, FaRocket } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { BsBrushFill } from 'react-icons/bs';

const ContentCreationCourse = () => {
  const [activeTab, setActiveTab] = useState('fundamentals');

  return (
    <div className="content-course-container">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="hero-content">
          <div className="creation-badge">
            <BsBrushFill className="creation-icon" />
            <span>Creative Skills Development</span>
          </div>
          <h1 className="hero-title">
            <span className="highlight">Content Creation</span> Mastery
          </h1>
          <p className="hero-description">
            Master digital content creation across multiple platforms and formats to build your audience
          </p>
          
          <div className="hero-meta">
            <div className="meta-item">
              <IoMdTime className="meta-icon" />
              <div>
                <span className="meta-label">Duration</span>
                <span className="meta-value">8 Weeks</span>
              </div>
            </div>
            <div className="meta-item">
              <FaPenAlt className="meta-icon" />
              <div>
                <span className="meta-label">Level</span>
                <span className="meta-value">All Levels</span>
              </div>
            </div>
            <div className="meta-item">
              <FaRocket className="meta-icon" />
              <div>
                <span className="meta-label">Outcome</span>
                <span className="meta-value">Portfolio Ready</span>
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
          <div className="creation-animation">
            {/* This would be your content creation visualization */}
            <div className="pen"></div>
            <div className="camera"></div>
            <div className="editor"></div>
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
            Comprehensive curriculum covering content creation principles and platform strategies
          </p>
        </div>

        <div className="syllabus-tabs">
          <button 
            className={`tab-button ${activeTab === 'fundamentals' ? 'active' : ''}`}
            onClick={() => setActiveTab('fundamentals')}
          >
            <FaPenAlt className="tab-icon" /> Content Fundamentals
          </button>
          <button 
            className={`tab-button ${activeTab === 'platforms' ? 'active' : ''}`}
            onClick={() => setActiveTab('platforms')}
          >
            <FaVideo className="tab-icon" /> Platform Strategies
          </button>
          <button 
            className={`tab-button ${activeTab === 'growth' ? 'active' : ''}`}
            onClick={() => setActiveTab('growth')}
          >
            <FaChartLine className="tab-icon" /> Growth & Monetization
          </button>
        </div>

        <div className="syllabus-content">
          {activeTab === 'fundamentals' && (
            <div className="module-grid">
              {/* Module 1 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">01</span>
                  <h3 className="module-title">Content Creation Essentials</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 2 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Storytelling techniques</li>
                  <li><FaCheck className="check-icon" /> Writing for digital platforms</li>
                  <li><FaCheck className="check-icon" /> Basic graphic design principles</li>
                  <li><FaCheck className="check-icon" /> Content planning & calendars</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">5 Lectures</span>
                  <span className="resource-pill">3 Exercises</span>
                  <span className="resource-pill">1 Content Plan</span>
                </div>
              </div>

              {/* Module 2 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">02</span>
                  <h3 className="module-title">Video & Audio Production</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 3 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Shooting professional video</li>
                  <li><FaCheck className="check-icon" /> Audio recording techniques</li>
                  <li><FaCheck className="check-icon" /> Editing with free tools</li>
                  <li><FaCheck className="check-icon" /> Lighting & composition</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">7 Lectures</span>
                  <span className="resource-pill">5 Projects</span>
                  <span className="resource-pill">2 Tutorials</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'platforms' && (
            <div className="module-grid">
              {/* Module 3 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">03</span>
                  <h3 className="module-title">Social Media Content</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 2 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Instagram & TikTok strategies</li>
                  <li><FaCheck className="check-icon" /> YouTube content formats</li>
                  <li><FaCheck className="check-icon" /> Twitter/X writing style</li>
                  <li><FaCheck className="check-icon" /> Platform-specific best practices</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">6 Lectures</span>
                  <span className="resource-pill">4 Content Pieces</span>
                  <span className="resource-pill">1 Campaign</span>
                </div>
              </div>

              {/* Module 4 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">04</span>
                  <h3 className="module-title">Blogging & Long-form Content</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 2 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> SEO writing techniques</li>
                  <li><FaCheck className="check-icon" /> Newsletter creation</li>
                  <li><FaCheck className="check-icon" /> Medium & Substack</li>
                  <li><FaCheck className="check-icon" /> Content repurposing</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">5 Lectures</span>
                  <span className="resource-pill">3 Articles</span>
                  <span className="resource-pill">1 Newsletter</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'growth' && (
            <div className="project-showcase">
              <div className="project-card">
                <h3 className="project-title">Audience Growth Strategy</h3>
                <p className="project-description">
                  Develop and implement a complete content strategy to grow your audience across platforms
                </p>
                <div className="project-tech">
                  <span>Analytics</span>
                  <span>Engagement</span>
                  <span>Growth Hacking</span>
                </div>
              </div>
              
              <div className="project-card">
                <h3 className="project-title">Content Monetization</h3>
                <p className="project-description">
                  Explore multiple revenue streams from sponsorships to digital products and memberships
                </p>
                <div className="project-tech">
                  <span>Sponsorships</span>
                  <span>Affiliate</span>
                  <span>Digital Products</span>
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
            <h2 className="cta-title">Ready to Build Your Content Empire?</h2>
            <p className="cta-subtitle">
              Join our next cohort and develop professional content creation skills
            </p>
            <div className="cta-features">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Hands-on projects</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Portfolio development</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Industry expert feedback</span>
              </div>
            </div>
          </div>
          <div className="cta-action">
            <a href="/enroll" className="enroll-button">
              Enroll Now <FaArrowRight className="button-icon" />
            </a>
            <p className="next-cohort">
              Next cohort starts: <strong>July 10, 2024</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        .content-course-container {
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
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
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
        
        .creation-badge {
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
        
        .creation-icon {
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
          color: #7c3aed;
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
        
        .creation-animation {
          position: relative;
          height: 100%;
          width: 100%;
          /* This would contain your actual content creation visualization */
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
          background: #f3e8ff;
          border: none;
          font-weight: 600;
          color: #6b46c1;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .tab-button.active {
          background: #7c3aed;
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
          border-color: #a855f7;
        }
        
        .module-header {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.25rem;
        }
        
        .module-number {
          background: #7c3aed;
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
          color: #7c3aed;
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
          background: #f3e8ff;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #6b46c1;
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
          color: #7c3aed;
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
          background: #f3e8ff;
          color: #7c3aed;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        /* Enrollment CTA */
        .enrollment-cta {
          background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
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
          color: #7c3aed;
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

export default ContentCreationCourse;
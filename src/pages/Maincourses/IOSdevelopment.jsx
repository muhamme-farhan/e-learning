import React, { useState } from 'react';
import { FaCode, FaMobile, FaLaptopCode, FaCheck, FaArrowRight, FaApple, FaSwift } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { SiAppstore, SiXcode } from 'react-icons/si';

const IOSDevelopmentCourse = () => {
  const [activeTab, setActiveTab] = useState('fundamentals');

  return (
    <div className="ios-course-container">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="hero-content">
          <div className="dev-badge">
            <SiAppstore className="dev-icon" />
            <span>App Store Ready</span>
          </div>
          <h1 className="hero-title">
            <span className="highlight">iOS Development</span> with SwiftUI
          </h1>
          <p className="hero-description">
            Master iOS app development from basics to App Store submission using SwiftUI and modern Apple frameworks
          </p>
          
          <div className="hero-meta">
            <div className="meta-item">
              <IoMdTime className="meta-icon" />
              <div>
                <span className="meta-label">Duration</span>
                <span className="meta-value">10 Weeks</span>
              </div>
            </div>
            <div className="meta-item">
              <FaCode className="meta-icon" />
              <div>
                <span className="meta-label">Level</span>
                <span className="meta-value">Beginner to Intermediate</span>
              </div>
            </div>
            <div className="meta-item">
              <FaApple className="meta-icon" />
              <div>
                <span className="meta-label">Tools</span>
                <span className="meta-value">Xcode, SwiftUI</span>
              </div>
            </div>
          </div>
          
          <div className="hero-cta">
            <a href="#enroll" className="cta-button primary">
              Enroll Now <FaArrowRight className="cta-icon" />
            </a>
            <a href="#syllabus" className="cta-button secondary">
              Explore Curriculum
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="app-animation">
            {/* App visualization would go here */}
            <div className="iphone-mockup"></div>
            <div className="code-sample"></div>
            <div className="swiftui-preview"></div>
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section className="syllabus-section" id="syllabus">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-decorator">///</span> Course Curriculum
          </h2>
          <p className="section-subtitle">
            Comprehensive training covering Swift fundamentals to App Store submission
          </p>
        </div>

        <div className="syllabus-tabs">
          <button 
            className={`tab-button ${activeTab === 'fundamentals' ? 'active' : ''}`}
            onClick={() => setActiveTab('fundamentals')}
          >
            <FaCode className="tab-icon" /> Swift Fundamentals
          </button>
          <button 
            className={`tab-button ${activeTab === 'ui' ? 'active' : ''}`}
            onClick={() => setActiveTab('ui')}
          >
            <FaMobile className="tab-icon" /> UI Development
          </button>
          <button 
            className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <FaLaptopCode className="tab-icon" /> Real Projects
          </button>
        </div>

        <div className="syllabus-content">
          {activeTab === 'fundamentals' && (
            <div className="module-grid">
              {/* Module 1 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">01</span>
                  <h3 className="module-title">Swift Essentials</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 2 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Swift syntax & types</li>
                  <li><FaCheck className="check-icon" /> Optionals & error handling</li>
                  <li><FaCheck className="check-icon" /> Protocols & generics</li>
                  <li><FaCheck className="check-icon" /> Functional programming</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">8 Lectures</span>
                  <span className="resource-pill">15 Coding Exercises</span>
                  <span className="resource-pill">1 Console App</span>
                </div>
              </div>

              {/* Module 2 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">02</span>
                  <h3 className="module-title">Xcode & iOS SDK</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 1.5 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Xcode workspace</li>
                  <li><FaCheck className="check-icon" /> Interface Builder</li>
                  <li><FaCheck className="check-icon" /> Core iOS frameworks</li>
                  <li><FaCheck className="check-icon" /> Debugging techniques</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">6 Tutorials</span>
                  <span className="resource-pill">10 Practical Exercises</span>
                  <span className="resource-pill">1 Simple App</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ui' && (
            <div className="module-grid">
              {/* Module 3 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">03</span>
                  <h3 className="module-title">SwiftUI Fundamentals</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 2 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Declarative UI</li>
                  <li><FaCheck className="check-icon" /> Views & modifiers</li>
                  <li><FaCheck className="check-icon" /> State management</li>
                  <li><FaCheck className="check-icon" /> Navigation & layout</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">7 Tutorials</span>
                  <span className="resource-pill">12 UI Challenges</span>
                  <span className="resource-pill">1 Weather App</span>
                </div>
              </div>

              {/* Module 4 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">04</span>
                  <h3 className="module-title">Advanced SwiftUI</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 2 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Custom views</li>
                  <li><FaCheck className="check-icon" /> Animations</li>
                  <li><FaCheck className="check-icon" /> Combine framework</li>
                  <li><FaCheck className="check-icon" /> Core Data integration</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">8 Tutorials</span>
                  <span className="resource-pill">10 Complex Exercises</span>
                  <span className="resource-pill">1 Social App</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="project-showcase">
              <div className="project-card">
                <h3 className="project-title">E-Commerce App</h3>
                <p className="project-description">
                  Build a complete shopping app with product listings, cart functionality, and payment integration
                </p>
                <div className="project-tech">
                  <span>SwiftUI</span>
                  <span>Firebase</span>
                  <span>Core Data</span>
                </div>
              </div>
              
              <div className="project-card">
                <h3 className="project-title">Fitness Tracker</h3>
                <p className="project-description">
                  Create a health app with workout tracking, health data integration, and progress visualization
                </p>
                <div className="project-tech">
                  <span>HealthKit</span>
                  <span>Charts</span>
                  <span>CloudKit</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-decorator">///</span> What You'll Learn
          </h2>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <SiXcode className="feature-icon" />
            <h3>Xcode Mastery</h3>
            <p>Become proficient with Apple's IDE, including debugging, testing, and performance tools</p>
          </div>
          
          <div className="feature-card">
            <FaSwift className="feature-icon" />
            <h3>Modern Swift</h3>
            <p>Learn Swift 5 with all its modern features including async/await and structured concurrency</p>
          </div>
          
          <div className="feature-card">
            <FaMobile className="feature-icon" />
            <h3>SwiftUI Framework</h3>
            <p>Build beautiful, responsive interfaces with Apple's declarative UI framework</p>
          </div>
          
          <div className="feature-card">
            <SiAppstore className="feature-icon" />
            <h3>App Store Deployment</h3>
            <p>Learn the complete process of submitting apps to the App Store and TestFlight</p>
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="enrollment-cta" id="enroll">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Build iOS Apps?</h2>
            <p className="cta-subtitle">
              Join our next cohort and develop professional iOS apps with Apple technologies
            </p>
            <div className="cta-features">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Portfolio-ready apps</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Code reviews</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>App Store guidance</span>
              </div>
            </div>
          </div>
          <div className="cta-action">
            <a href="/enroll" className="enroll-button">
              Enroll Now <FaArrowRight className="button-icon" />
            </a>
            <p className="next-cohort">
              Next cohort starts: <strong>November 5, 2024</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        .ios-course-container {
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
          background: linear-gradient(135deg, #000000 0%, #1D1D1F 100%);
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
        
        .dev-badge {
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
        
        .dev-icon {
          font-size: 1.2rem;
        }
        
        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        
        .highlight {
          color: #2997FF;
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
          color: #2997FF;
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
          color: #000000;
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
        
        .app-animation {
          position: relative;
          height: 100%;
          width: 100%;
          /* App visualization would go here */
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
          color: #2997FF;
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
          background: #E8F3FF;
          border: none;
          font-weight: 600;
          color: #0066CC;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .tab-button.active {
          background: #0066CC;
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
          border: 1px solid #E8F3FF;
          transition: all 0.2s ease;
        }
        
        .module-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          border-color: #2997FF;
        }
        
        .module-header {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.25rem;
        }
        
        .module-number {
          background: #0066CC;
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
          color: #0066CC;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }
        
        .module-resources {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          padding-top: 1rem;
          border-top: 1px dashed #E8F3FF;
        }
        
        .resource-pill {
          background: #E8F3FF;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #0066CC;
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
          border: 1px solid #E8F3FF;
        }
        
        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #0066CC;
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
          background: #E8F3FF;
          color: #0066CC;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        /* Features Section */
        .features-section {
          padding: 4rem 0;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        
        .feature-card {
          text-align: center;
          padding: 2rem 1.5rem;
          border-radius: 1rem;
          background: white;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: all 0.2s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        .feature-icon {
          font-size: 2.5rem;
          color: #0066CC;
          margin-bottom: 1rem;
        }
        
        .feature-card h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }
        
        .feature-card p {
          color: #4a5568;
          font-size: 0.95rem;
        }
        
        /* Enrollment CTA */
        .enrollment-cta {
          background: linear-gradient(135deg, #000000 0%, #1D1D1F 100%);
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
          color: #2997FF;
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
          color: #000000;
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
          
          .features-grid {
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

export default IOSDevelopmentCourse;
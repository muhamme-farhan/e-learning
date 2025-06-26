// import React from 'react';

// const BusinessIntelligence = () => {
//   const syllabus = [
//     'Introduction to Business Intelligence',
//     'BI vs Data Analytics vs Data Science',
//     'Understanding Data Warehousing Concepts',
//     'Data Modelling & ETL Processes',
//     'Using Microsoft Power BI',
//     'Creating Interactive Dashboards',
//     'SQL for Data Retrieval',
//     'Working with Tableau & Data Studio',
//     'Data Storytelling & Visualization',
//     'Real-Time BI Project & Case Studies',
//   ];

//   const instructors = [
//     {
//       name: 'Ananya Sharma',
//       title: 'BI Consultant at Deloitte',
//       photo: 'https://i.pravatar.cc/150?img=36',
//     },
//     {
//       name: 'Ravi Iyer',
//       title: 'Lead Analyst at Capgemini',
//       photo: 'https://i.pravatar.cc/150?img=44',
//     },
//   ];

//   return (
//     <div style={styles.page}>
//       <div style={styles.header}>
//         <h1 style={styles.title}>Business Intelligence Course</h1>
//         <p style={styles.subtitle}>
//           Learn how to analyze, visualize, and report data to drive strategic decisions.
//         </p>
//       </div>

//       <div style={styles.content}>
//         <h2 style={styles.sectionTitle}>Course Overview</h2>
//         <p style={styles.text}>
//           This course provides hands-on training in business intelligence tools such as Power BI,
//           Tableau, and SQL. Learn how to turn raw data into powerful business insights.
//         </p>

//         <h2 style={styles.sectionTitle}>Syllabus</h2>
//         <ul style={styles.list}>
//           {syllabus.map((topic, index) => (
//             <li key={index} style={styles.listItem}>{topic}</li>
//           ))}
//         </ul>

//         <h2 style={styles.sectionTitle}>Meet Your Instructors</h2>
//         {instructors.map((inst, index) => (
//           <div key={index} style={styles.instructorCard}>
//             <img src={inst.photo} alt={inst.name} style={styles.instructorPhoto} />
//             <div>
//               <h3 style={styles.instructorName}>{inst.name}</h3>
//               <p style={styles.instructorTitle}>{inst.title}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   page: {
//     padding: '2rem',
//     fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
//     backgroundColor: '#f9fafb',
//     color: '#212529',
//   },
//   header: {
//     textAlign: 'center',
//     marginBottom: '2rem',
//   },
//   title: {
//     fontSize: '2.5rem',
//     margin: 0,
//     color: '#343a40',
//   },
//   subtitle: {
//     fontSize: '1.1rem',
//     color: '#6c757d',
//   },
//   content: {
//     maxWidth: '900px',
//     margin: '0 auto',
//     backgroundColor: '#ffffff',
//     padding: '2rem',
//     borderRadius: '12px',
//     boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//   },
//   sectionTitle: {
//     fontSize: '1.8rem',
//     borderBottom: '2px solid #0d6efd',
//     paddingBottom: '0.5rem',
//     marginTop: '2rem',
//   },
//   text: {
//     fontSize: '1.05rem',
//     marginTop: '1rem',
//     lineHeight: '1.6',
//     color: '#495057',
//   },
//   list: {
//     paddingLeft: '1.5rem',
//     marginTop: '1rem',
//   },
//   listItem: {
//     marginBottom: '0.75rem',
//     fontSize: '1rem',
//   },
//   instructorCard: {
//     display: 'flex',
//     alignItems: 'center',
//     backgroundColor: '#f1f3f5',
//     padding: '1rem',
//     borderRadius: '10px',
//     marginTop: '1rem',
//     gap: '1rem',
//   },
//   instructorPhoto: {
//     width: '60px',
//     height: '60px',
//     borderRadius: '50%',
//     objectFit: 'cover',
//     border: '2px solid #0d6efd',
//   },
//   instructorName: {
//     margin: 0,
//     fontSize: '1.2rem',
//   },
//   instructorTitle: {
//     margin: 0,
//     fontSize: '0.95rem',
//     color: '#6c757d',
//   },
// };

// export default BusinessIntelligence;



import React, { useState } from 'react';
import { FaClock, FaChartLine, FaCertificate, FaCheck, FaArrowRight, FaDatabase, FaChartBar, FaChartPie } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { BiAnalyse } from 'react-icons/bi';

const BusinessIntelligenceCourse = () => {
  const [activeTab, setActiveTab] = useState('core');

  return (
    <div className="bi-course-container">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="hero-content">
          <div className="bi-badge">
            <BiAnalyse className="bi-icon" />
            <span>Data-Driven Curriculum</span>
          </div>
          <h1 className="hero-title">
            <span className="highlight">Business Intelligence</span> & Analytics Specialization
          </h1>
          <p className="hero-description">
            Master data visualization, dashboarding, and decision-making with modern BI tools
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
          <div className="dashboard-animation">
            {/* This would be your dashboard visualization */}
            <div className="chart"></div>
            <div className="chart"></div>
            <div className="chart"></div>
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
            Comprehensive curriculum covering modern BI tools and analytics techniques
          </p>
        </div>

        <div className="syllabus-tabs">
          <button 
            className={`tab-button ${activeTab === 'core' ? 'active' : ''}`}
            onClick={() => setActiveTab('core')}
          >
            <FaDatabase className="tab-icon" /> Core Concepts
          </button>
          <button 
            className={`tab-button ${activeTab === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            <FaChartBar className="tab-icon" /> BI Tools
          </button>
          <button 
            className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <FaChartPie className="tab-icon" /> Real-World Projects
          </button>
        </div>

        <div className="syllabus-content">
          {activeTab === 'core' && (
            <div className="module-grid">
              {/* Module 1 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">01</span>
                  <h3 className="module-title">Data Warehousing Fundamentals</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 2 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Dimensional modeling</li>
                  <li><FaCheck className="check-icon" /> Star and snowflake schemas</li>
                  <li><FaCheck className="check-icon" /> ETL processes</li>
                  <li><FaCheck className="check-icon" /> Data quality and governance</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">4 Lectures</span>
                  <span className="resource-pill">3 Labs</span>
                  <span className="resource-pill">1 Project</span>
                </div>
              </div>

              {/* Module 2 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">02</span>
                  <h3 className="module-title">Data Visualization Principles</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 2 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Visual perception theory</li>
                  <li><FaCheck className="check-icon" /> Dashboard design best practices</li>
                  <li><FaCheck className="check-icon" /> Choosing the right chart types</li>
                  <li><FaCheck className="check-icon" /> Storytelling with data</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">5 Lectures</span>
                  <span className="resource-pill">4 Labs</span>
                  <span className="resource-pill">1 Project</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tools' && (
            <div className="module-grid">
              {/* Module 3 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">03</span>
                  <h3 className="module-title">Power BI Mastery</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 2 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> DAX formulas</li>
                  <li><FaCheck className="check-icon" /> Power Query transformations</li>
                  <li><FaCheck className="check-icon" /> Interactive reports</li>
                  <li><FaCheck className="check-icon" /> Power BI Service deployment</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">6 Lectures</span>
                  <span className="resource-pill">5 Labs</span>
                  <span className="resource-pill">1 Project</span>
                </div>
              </div>

              {/* Module 4 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">04</span>
                  <h3 className="module-title">Tableau for Advanced Analytics</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 2 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> LOD expressions</li>
                  <li><FaCheck className="check-icon" /> Advanced calculations</li>
                  <li><FaCheck className="check-icon" /> Dashboard actions</li>
                  <li><FaCheck className="check-icon" /> Tableau Server administration</li>
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
                <h3 className="project-title">Retail Sales Performance Dashboard</h3>
                <p className="project-description">
                  Build an interactive dashboard to track KPIs across multiple store locations
                </p>
                <div className="project-tech">
                  <span>Power BI</span>
                  <span>SQL Server</span>
                  <span>DAX</span>
                </div>
              </div>
              
              <div className="project-card">
                <h3 className="project-title">HR Analytics Dashboard</h3>
                <p className="project-description">
                  Create visualizations to analyze employee turnover, hiring trends, and diversity metrics
                </p>
                <div className="project-tech">
                  <span>Tableau</span>
                  <span>Python</span>
                  <span>Predictive Analytics</span>
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
            <h2 className="cta-title">Ready to Master Business Intelligence?</h2>
            <p className="cta-subtitle">
              Join our next cohort and transform data into actionable insights
            </p>
            <div className="cta-features">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Hands-on with real datasets</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Industry-standard tools</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Portfolio-building projects</span>
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
        .bi-course-container {
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
          background: linear-gradient(135deg,rgb(29, 3, 90) 0%,rgb(45, 4, 120) 100%);
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
        
        .bi-badge {
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
        
        .bi-icon {
          font-size: 1.2rem;
        }
        
        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        
        .highlight {
          color: #a7f3d0;
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
          color: #a7f3d0;
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
        
        .dashboard-animation {
          position: relative;
          height: 100%;
          width: 100%;
          /* This would contain your actual dashboard visualization */
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
          background: #edf2f7;
          border: none;
          font-weight: 600;
          color: #4a5568;
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
          border: 1px solid #e2e8f0;
          transition: all 0.2s ease;
        }
        
        .module-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          border-color: #a7f3d0;
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
          color:rgb(4, 43, 88);
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
          background: #ecfdf5;
          color: #065f46;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        /* Enrollment CTA */
        .enrollment-cta {
          background: linear-gradient(135deg,rgb(0, 59, 99) 0%,rgb(20, 47, 121) 100%);
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
          color: #a7f3d0;
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

export default BusinessIntelligenceCourse;
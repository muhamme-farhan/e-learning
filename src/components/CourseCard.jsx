
// import { Link } from 'react-router-dom';

// export default function CourseCard({ title, desc, icon, bgColor, price, duration, level }) {
//   // Course route mapping
//   const routeMap = {
//     'full stack development': '/fullstack',
//     'digital marketing': '/Digital',
//     'cybersecurity': '/cybersecurity',
//     'blockchain development': '/Blockchaindevelopment',
//     'programming fundamentals': '/ProgrammingFundamentals',
//     'data science': '/DataScience',
//     'mobile app development': '/Mobileappdevelopment',
//     'ui/ux design': '/Uiux',
//     'cloud computing': '/Cloud',
//     'devops engineering': '/Devops',
//     'artificial intelligence': '/AIDeepLearning',
//     'game development': '/GameDevelopment',
//     'advanced python': '/Advancedpython',
//     'social media marketing': '/Socialmediamarketing',
//     'cloud security': '/CloudSecurity',
//     'graphic design': '/Graphicdesign',
//     'linux administration': '/Linuxadministration',
//     'ios development': '/IOSdevelopment',
//     'git version control': '/Gitversioncontrol',
//     'web3 development': '/Web3development',
//     'ethical hacking': '/EthicalHacking',
//     'business intelligence': '/Businessintelligence',
//     'content creation': '/Contentcreation',
//     'java programming': '/JavaProgramming',
//   };

//   const courseKey = title.toLowerCase().trim();
//   const coursePath = routeMap[courseKey] || `/courses/${courseKey.replace(/\s+/g, '-')}`;

//   return (
//     <div className="course-card-wrapper">
//       <div className="course-card">
//         {/* Card Header with Gradient Background */}
//         <div 
//           className="course-card-header"
//           style={{ 
//             background: `linear-gradient(135deg, ${bgColor || '#6c5ce7'}, ${adjustColor(bgColor || '#6c5ce7', -20)})`
//           }}
//         >
//           {/* Decorative Elements */}
//           <div className="header-decoration">
//             <div className="decoration-circle top-circle" />
//             <div className="decoration-circle bottom-circle" />
//           </div>
          
//           {/* Header Content */}
//           <div className="header-content">
//             <div className="course-icon">
//               {icon || '📚'}
//             </div>
//             {level && (
//               <span className={`level-badge ${getLevelBadgeClass(level)}`}>
//                 {level}
//               </span>
//             )}
//           </div>
//         </div>

//         {/* Card Body */}
//         <div className="course-card-body">
//           <div className="course-content">
//             <h3 className="course-title">{title}</h3>
//             <p className="course-description">{truncateDescription(desc, 100)}</p>
//           </div>

//           {/* Metadata */}
//           <div className="course-meta">
//             <div className="duration">
//               <i className="bi bi-clock-history" />
//               <span>{duration}</span>
//             </div>
//             <div className="price">
//               {price === 'Free' ? (
//                 <span className="free">Free</span>
//               ) : (
//                 <span>${price}</span>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Card Footer */}
//         <div className="course-card-footer">
//           <Link 
//             to={coursePath} 
//             className="enroll-btn"
//           >
//             Enroll Now <i className="bi bi-arrow-right" />
//           </Link>
//         </div>
//       </div>

//       {/* CSS Styles */}
//       <style jsx>{`
//         .course-card-wrapper {
//           padding: 0.5rem;
//         }

//         .course-card {
//           background: #ffffff;
//           border-radius: 16px;
//           overflow: hidden;
//           box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
//           transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//           height: 100%;
//           display: flex;
//           flex-direction: column;
//           border: none;
//         }

//         .course-card:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 15px 35px rgba(102, 126, 234, 0.2);
//         }

//         /* Header Styles */
//         .course-card-header {
//           padding: 1.5rem;
//           position: relative;
//           min-height: 140px;
//           display: flex;
//           flex-direction: column;
//           justify-content: space-between;
//         }

//         .header-decoration {
//           position: absolute;
//           top: 0;
//           right: 0;
//           width: 100%;
//           height: 100%;
//           overflow: hidden;
//         }

//         .decoration-circle {
//           position: absolute;
//           border-radius: 50%;
//           opacity: 0.1;
//         }

//         .top-circle {
//           width: 100px;
//           height: 100px;
//           right: 0;
//           top: 0;
//           background: white;
//           transform: translate(30%, -30%);
//         }

//         .bottom-circle {
//           width: 150px;
//           height: 150px;
//           right: 0;
//           bottom: 0;
//           background: black;
//           transform: translate(40%, 40%);
//           opacity: 0.05;
//         }

//         .header-content {
//           display: flex;
//           justify-content: space-between;
//           align-items: flex-start;
//           position: relative;
//           z-index: 1;
//         }

//         .course-icon {
//           font-size: 2.5rem;
//           color: white;
//           text-shadow: 0 2px 10px rgba(0,0,0,0.2);
//           transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.4);
//         }

//         .course-card:hover .course-icon {
//           transform: rotate(8deg) scale(1.15);
//           animation: iconPulse 1s ease infinite alternate;
//         }

//         .level-badge {
//           padding: 0.35rem 0.75rem;
//           border-radius: 50px;
//           font-size: 0.75rem;
//           font-weight: 600;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//           box-shadow: 0 2px 5px rgba(249, 250, 250, 0.1);
//         }

//         .level-badge.beginner {
//           background: #28a745;
//           color: white;
//         }

//         .level-badge.intermediate {
//           background: #ffc107;
//           color: #212529;
//         }

//         .level-badge.advanced {
//           background: #dc3545;
//           color: white;
//         }

//         .level-badge.default {
//           background: #6c757d;
//           color: white;
//         }

//         /* Body Styles */
//         .course-card-body {
//           padding: 1.5rem;
//           flex-grow: 1;
//           display: flex;
//           flex-direction: column;
//         }

//         .course-content {
//           margin-bottom: 1.5rem;
//           flex-grow: 1;
//         }

//         .course-title {
//           font-size: 1.25rem;
//           font-weight: 700;
//           margin-bottom: 0.75rem;
//           color: #2c3e50;
//           transition: color 0.3s ease;
//         }

//         .course-card:hover .course-title {
//           color: #667eea;
//         }

//         .course-description {
//           color: #7f8c8d;
//           font-size: 0.95rem;
//           line-height: 1.5;
//           margin-bottom: 0;
//         }

//         .course-meta {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-top: auto;
//           font-size: 0.9rem;
//         }

//         .duration {
//           display: flex;
//           align-items: center;
//           color: #7f8c8d;
//         }

//         .duration i {
//           margin-right: 0.5rem;
//         }

//         .price {
//           font-weight: 700;
//           font-size: 1.25rem;
//         }

//         .price .free {
//           color: #28a745;
//         }

//         /* Footer Styles */
//         .course-card-footer {
//           padding: 0 1.5rem 1.5rem;
//         }

//         .enroll-btn {
//           width: 100%;
//           padding: 0.75rem;
//           border-radius: 50px;
//           font-weight: 600;
//           letter-spacing: 0.5px;
//           text-transform: uppercase;
//           font-size: 0.85rem;
//           transition: all 0.3s ease;
//           background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
//           border: none;
//           color: white;
//           position: relative;
//           overflow: hidden;
//           box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .enroll-btn i {
//           margin-left: 0.5rem;
//         }

//         .enroll-btn:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
//           color: white;
//         }

//         .enroll-btn::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
//           transition: 0.5s;
//         }

//         .enroll-btn:hover::before {
//           left: 100%;
//         }

//         /* Animations */
//         @keyframes iconPulse {
//           0% { transform: rotate(8deg) scale(1.15); }
//           100% { transform: rotate(8deg) scale(1.25); }
//         }

//         /* Responsive Adjustments */
//         @media (max-width: 768px) {
//           .course-card:hover {
//             transform: translateY(-5px);
//           }
          
//           .course-icon {
//             font-size: 2rem;
//           }
          
//           .course-card-header {
//             min-height: 120px;
//           }
//         }

//         @media (max-width: 576px) {
//           .course-card-wrapper {
//             padding: 0.5rem 0;
//           }
          
//           .course-card {
//             max-width: 100%;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// // Helper function to adjust color brightness
// function adjustColor(color, amount) {
//   return '#' + color.replace(/^#/, '').replace(/../g, color => (
//     '0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)
//   ).substr(-2));
// }

// // Helper function to get level badge class
// function getLevelBadgeClass(level) {
//   const levelMap = {
//     'beginner': 'beginner',
//     'intermediate': 'intermediate',
//     'advanced': 'advanced'
//   };
//   return levelMap[level.toLowerCase()] || 'default';
// }

// // Helper function to truncate description
// function truncateDescription(text, maxLength) {
//   if (!text) return '';
//   if (text.length <= maxLength) return text;
//   return text.substring(0, maxLength) + '...';
// }




import { Link } from 'react-router-dom';

export default function CourseCard({ title, desc, icon, bgColor, price, duration, level }) {
  // Course route mapping
  const routeMap = {
    'full stack development': '/fullstack',
    'digital marketing': '/Digital',
    'cybersecurity': '/cybersecurity',
    'blockchain development': '/Blockchaindevelopment',
    'programming fundamentals': '/ProgrammingFundamentals',
    'data science': '/DataScience',
    'mobile app development': '/Mobileappdevelopment',
    'ui/ux design': '/Uiux',
    'cloud computing': '/Cloud',
    'devops engineering': '/Devops',
    'artificial intelligence': '/AIDeepLearning',
    'game development': '/GameDevelopment',
    'advanced python': '/Advancedpython',
    'social media marketing': '/Socialmediamarketing',
    'cloud security': '/CloudSecurity',
    'graphic design': '/Graphicdesign',
    'linux administration': '/Linuxadministration',
    'ios development': '/IOSdevelopment',
    'git version control': '/Gitversioncontrol',
    'web3 development': '/Web3development',
    'ethical hacking': '/EthicalHacking',
    'business intelligence': '/Businessintelligence',
    'content creation': '/Contentcreation',
    'java programming': '/JavaProgramming',
    
  };

  const courseKey = title.toLowerCase().trim();
  const coursePath = routeMap[courseKey] || `/courses/${courseKey.replace(/\s+/g, '-')}`;

  return (
    <div className="course-card">
      {/* Card Header */}
      <div 
        className="course-card-header"
        style={{ backgroundColor: bgColor || '#4f46e5' }}
      >
        <div className="header-content">
          <div className="course-icon">
            {icon || '📚'}
          </div>
          {level && (
            <span className={`level-badge ${getLevelBadgeClass(level)}`}>
              {level}
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="course-card-body">
        <h3 className="course-title">{title}</h3>
        <p className="course-description">{truncateDescription(desc, 90)}</p>
        
        <div className="course-meta">
          <div className="meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{duration}</span>
          </div>
          
          <div className="price-tag">
            {price === 'Free' ? 'Free' : `$${price}`}
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="course-card-footer">
        <Link 
          to={coursePath} 
          className="enroll-btn"
        >
          Explore Course
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .course-card {
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
          border: 1px solid #e5e7eb;
        }

        .course-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }

        /* Header Styles */
        .course-card-header {
          padding: 1.25rem;
          color: white;
          position: relative;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .course-icon {
          font-size: 2rem;
          line-height: 1;
        }

        .level-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          background-color: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(5px);
        }

        .level-badge.beginner {
          background-color: rgba(16, 185, 129, 0.9);
        }

        .level-badge.intermediate {
          background-color: rgba(245, 158, 11, 0.9);
          color: #1f2937;
        }

        .level-badge.advanced {
          background-color: rgba(239, 68, 68, 0.9);
        }

        /* Body Styles */
        .course-card-body {
          padding: 1.25rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .course-title {
          font-size: 1.125rem;
          font-weight: 600;
          margin: 0 0 0.75rem 0;
          color: #111827;
          line-height: 1.3;
        }

        .course-description {
          color: #6b7280;
          font-size: 0.875rem;
          line-height: 1.5;
          margin: 0 0 1.25rem 0;
          flex-grow: 1;
        }

        .course-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          font-size: 0.875rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #6b7280;
        }

        .price-tag {
          font-weight: 600;
          color: #4f46e5;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          background-color: #eef2ff;
        }

        .price-tag.free {
          color: #10b981;
          background-color: #ecfdf5;
        }

        /* Footer Styles */
        .course-card-footer {
          padding: 0 1.25rem 1.25rem;
        }

        .enroll-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.625rem 1rem;
          border-radius: 8px;
          font-weight: 500;
          font-size: 0.875rem;
          transition: all 0.2s ease;
          background-color: #4f46e5;
          color: white;
          text-decoration: none;
        }

        .enroll-btn:hover {
          background-color: #4338ca;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .course-card {
            max-width: 100%;
          }
          
          .course-title {
            font-size: 1rem;
          }
          
          .course-description {
            font-size: 0.8125rem;
          }
        }
      `}</style>
    </div>
  );
}

// Helper function to get level badge class
function getLevelBadgeClass(level) {
  const levelMap = {
    'beginner': 'beginner',
    'intermediate': 'intermediate',
    'advanced': 'advanced'
  };
  return levelMap[level.toLowerCase()] || '';
}

// Helper function to truncate description
function truncateDescription(text, maxLength) {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

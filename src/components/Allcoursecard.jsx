// import React from 'react';
// import { Link } from 'react-router-dom';


// const routeMap = {
//   'full stack development': '/fullstack',
//   'digital marketing': '/digital-marketing',
//   'cybersecurity': '/cybersecurity',
//   'Bockchain Development': '/Bockchaindevelopment',
//   'programming fundamentals': '/ProgrammingFundamentals',
//   'ai deep learning': '/AIDeepLearning',
//   'artificial intelligence': '/artificial-intelligence',
//   'cloud': '/Cloud',
//   'devops': '/Devops',
//   'mobile appdevelopment': '/Mobileappdevelopment',
//   'web development': '/web-development',
//   'graphic design': '/graphic-design',
//   'frontend development': '/Frontenddevelopment',
//   'Game Development': '/GameDevelopment',
//   'cloud security': '/CloudSecurity',
//   'advancedpython': '/Advancedpython',
//   'social media marketing': '/social-media-marketing',
//   'email marketing': '/email-marketing',
//   'contentcreation': '/Contentcreation',
//   'photography': '/photography',
//   'business analytics': '/business-analytics',
//   'cyber law': '/cyber-law',
//   'networking': '/networking',
//   'ethical hacking': '/ethical-hacking',
//   'game development': '/game-development'
// };

// const AllCourseCard = ({ 
//   title, 
//   desc, 
//   icon, 
//   bgColor, 
//   price, 
//   duration, 
//   level,
// }) => {
//   const formattedPrice = typeof price === 'number' ? `$${price}` : price;

//   const courseKey = title.toLowerCase().trim();
//   const coursePath = routeMap[courseKey] || `/cources/${courseKey.replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`;
  
//   return (
//     <div className="col-md-4 mb-4">
//       <div className="card h-100 shadow-sm border-0">
//         <div 
//           className="card-header" 
//           style={{ 
//             backgroundColor: bgColor, 
//             border: 'none',
//             fontSize: '2.5rem',
//             height: '120px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center'
//           }}
//         >
//           {icon}
//         </div>

//         <div className="card-body d-flex flex-column">
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <span className="badge rounded-pill text-bg-primary">{level}</span>
//             <span className="text-muted small">{duration}</span>
//           </div>

//           <h5 className="card-title fw-bold">{title}</h5>
//           <p className="card-text text-muted flex-grow-1">{desc}</p>

//           <div className="d-flex justify-content-between align-items-center mt-4">
//             <div className="d-flex align-items-center">
//               <span className={`h5 mb-0 ${price === 'Free' ? 'text-success' : ''}`}>
//                 {formattedPrice}
//               </span>
//               {typeof price === 'number' && (
//                 <span className="text-muted small ms-2">/ one-time</span>
//               )}
//             </div>

//             <div className="d-flex gap-2">
//               <Link to={coursePath} className="btn btn-outline-secondary btn-sm">
//                 Details
//               </Link>
//               <Link 
//                 to={`/enroll/${courseKey.replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
//                 className={`btn btn-primary btn-sm ${price === 'Free' ? 'bg-success border-success' : ''}`}
//               >
//                 {price === 'Free' ? 'Enroll Free' : 'Enroll Now'}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllCourseCard;



// import React from 'react';
// import { Link } from 'react-router-dom';

// const routeMap = {
//   'full stack development': '/fullstack',
//   'digital marketing': '/digital-marketing',
//   'cybersecurity': '/cybersecurity',
//   'blockchain development': '/blockchain-development',
//   'programming fundamentals': '/programming-fundamentals',
//   'ai deep learning': '/ai-deep-learning',
//   'artificial intelligence': '/artificial-intelligence',
//   'cloud': '/cloud',
//   'devops': '/devops',
//   'mobile app development': '/mobile-app-development',
//   'web development': '/web-development',
//   'graphic design': '/graphic-design',
//   'frontend development': '/frontend-development',
//   'game development': '/game-development',
//   'cloud security': '/cloud-security',
//   'advanced python': '/advanced-python',
//   'social media marketing': '/social-media-marketing',
//   'email marketing': '/email-marketing',
//   'content creation': '/content-creation',
//   'photography': '/photography',
//   'business analytics': '/business-analytics',
//   'cyber law': '/cyber-law',
//   'networking': '/networking',
//   'ethical hacking': '/ethical-hacking'
// };

// const AllCourseCard = ({ 
//   title, 
//   desc, 
//   icon, 
//   bgColor = '#6c5ce7', 
//   price, 
//   duration, 
//   level,
// }) => {
//   const formattedPrice = typeof price === 'number' ? `$${price}` : price;
//   const courseKey = title.toLowerCase().trim();
//   const coursePath = routeMap[courseKey] || `/courses/${courseKey.replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`;
  
//   // Get badge color based on level
//   const getBadgeColor = () => {
//     switch(level.toLowerCase()) {
//       case 'beginner': return 'bg-success';
//       case 'intermediate': return 'bg-warning text-dark';
//       case 'advanced': return 'bg-danger';
//       default: return 'bg-primary';
//     }
//   };

//   return (
//     <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
//       <div className="card h-100 border-0 overflow-hidden shadow-sm course-card">
//         {/* Card Header with Gradient */}
//         <div 
//           className="card-header p-4 position-relative"
//           style={{ 
//             background: `linear-gradient(135deg, ${bgColor}, ${darkenColor(bgColor, 20)})`,
//             minHeight: '140px',
//             border: 'none'
//           }}
//         >
//           {/* Decorative Elements */}
//           <div className="position-absolute top-0 end-0 w-100 h-100 overflow-hidden">
//             <div className="position-absolute end-0 top-0 bg-white opacity-10 rounded-circle" 
//               style={{ width: '100px', height: '100px', transform: 'translate(30%, -30%)' }} />
//             <div className="position-absolute end-0 bottom-0 bg-black opacity-05 rounded-circle" 
//               style={{ width: '150px', height: '150px', transform: 'translate(40%, 40%)' }} />
//           </div>
          
//           {/* Icon and Level Badge */}
//           <div className="d-flex justify-content-between align-items-start position-relative z-1">
//             <div className="course-icon text-white" style={{ fontSize: '3rem' }}>
//               {icon || '📚'}
//             </div>
//             <span className={`badge rounded-pill ${getBadgeColor()} px-3 py-2 shadow-sm`}>
//               {level}
//             </span>
//           </div>
//         </div>

//         {/* Card Body */}
//         <div className="card-body p-4 d-flex flex-column">
//           <div className="mb-3 flex-grow-1">
//             <h5 className="card-title fw-bold mb-2">{title}</h5>
//             <p className="card-text text-muted">{truncateDescription(desc, 100)}</p>
//           </div>

//           {/* Duration and Price */}
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <div className="d-flex align-items-center text-muted small">
//               <i className="bi bi-clock-history me-2"></i>
//               <span>{duration}</span>
//             </div>
//             <div className={`h5 mb-0 fw-bold ${price === 'Free' ? 'text-success' : ''}`}>
//               {formattedPrice}
//               {typeof price === 'number' && <span className="text-muted small ms-1">/course</span>}
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="d-flex gap-2">
//             <Link 
//               to={coursePath} 
//               className="btn btn-outline-primary btn-sm flex-grow-1"
//             >
//               View Details
//             </Link>
//             <Link 
//               to={`/enroll/${courseKey.replace(/\s+/g, '-')}`}
//               className={`btn btn-primary btn-sm flex-grow-1 ${price === 'Free' ? 'bg-success border-success' : ''}`}
//             >
//               {price === 'Free' ? 'Enroll Free' : 'Enroll Now'}
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* CSS Styles */}
//       <style jsx>{`
//         .course-card {
//           border-radius: 16px;
//           transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
//         }
        
//         .course-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15) !important;
//         }
        
//         .course-icon {
//           transition: all 0.3s ease;
//         }
        
//         .course-card:hover .course-icon {
//           transform: scale(1.1) rotate(5deg);
//         }
        
//         .btn-outline-primary {
//           transition: all 0.3s ease;
//         }
        
//         .btn-outline-primary:hover {
//           background-color: rgba(102, 126, 234, 0.1);
//         }
        
//         @media (max-width: 768px) {
//           .course-card:hover {
//             transform: none;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// // Helper function to darken color
// function darkenColor(color, percent) {
//   const num = parseInt(color.replace('#', ''), 16);
//   const amt = Math.round(2.55 * percent);
//   const R = (num >> 16) - amt;
//   const G = (num >> 8 & 0x00FF) - amt;
//   const B = (num & 0x0000FF) - amt;
//   return '#' + (
//     0x1000000 +
//     (R < 0 ? 0 : R) * 0x10000 +
//     (G < 0 ? 0 : G) * 0x100 +
//     (B < 0 ? 0 : B)
//   ).toString(16).slice(1);
// }

// // Helper function to truncate description
// function truncateDescription(text, maxLength) {
//   if (!text) return '';
//   if (text.length <= maxLength) return text;
//   return text.substring(0, maxLength) + '...';
// }

// export default AllCourseCard;


import React from 'react';
import { Link } from 'react-router-dom';

const routeMap = {
  'full stack development': '/fullstack',
  'digital marketing': '/digital-marketing',
  'cybersecurity': '/cybersecurity',
  // ... (keep your existing route map)
};

const AllCourseCard = ({ 
  title, 
  desc, 
  icon = '📚', 
  bgColor = '#6366f1', 
  price, 
  duration, 
  level = 'Beginner',
}) => {
  const formattedPrice = typeof price === 'number' ? `$${price}` : price;
  const courseKey = title.toLowerCase().trim();
  const coursePath = routeMap[courseKey] || `/courses/${courseKey.replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`;
  
  // Get badge styling based on level
  const getBadgeStyle = () => {
    switch(level.toLowerCase()) {
      case 'beginner': return 'bg-emerald-100 text-emerald-800';
      case 'intermediate': return 'bg-amber-100 text-amber-800';
      case 'advanced': return 'bg-rose-100 text-rose-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
      <div className="h-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
        {/* Card Header */}
        <div 
          className="relative h-32 p-4 flex items-end"
          style={{ 
            background: `linear-gradient(135deg, ${bgColor}, ${darkenColor(bgColor, 15)})`,
          }}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-white opacity-10"></div>
            <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-black opacity-05"></div>
          </div>
          
          {/* Icon and badge */}
          <div className="relative z-10 w-full flex justify-between items-start">
            <div className="text-white text-4xl">{icon}</div>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getBadgeStyle()}`}>
              {level}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 flex flex-col h-[calc(100%-8rem)]">
          <div className="flex-grow">
            <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2" title={title}>
              {title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3" title={desc}>
              {desc}
            </p>
          </div>

          {/* Meta info */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center text-gray-500 text-sm">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{duration}</span>
            </div>
            <div className={`font-bold ${price === 'Free' ? 'text-emerald-600' : 'text-indigo-600'}`}>
              {formattedPrice}
              {typeof price === 'number' && <span className="text-gray-500 text-xs ml-1">/course</span>}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex space-x-2">
            <Link 
              to={coursePath}
              className="flex-1 py-2 px-3 text-center text-sm font-medium rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Details
            </Link>
            <Link 
              to={`/enroll/${courseKey.replace(/\s+/g, '-')}`}
              className={`flex-1 py-2 px-3 text-center text-sm font-medium rounded-lg text-white transition-colors ${
                price === 'Free' ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              {price === 'Free' ? 'Enroll Free' : 'Enroll Now'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to darken color
function darkenColor(color, percent) {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = (num >> 8 & 0x00FF) - amt;
  const B = (num & 0x0000FF) - amt;
  return '#' + (
    0x1000000 +
    (R < 0 ? 0 : R) * 0x10000 +
    (G < 0 ? 0 : G) * 0x100 +
    (B < 0 ? 0 : B)
  ).toString(16).slice(1);
}

export default AllCourseCard;
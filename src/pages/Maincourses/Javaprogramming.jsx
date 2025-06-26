// import React, { useState } from 'react';

// const JavaProgramming = () => {
//   const [isEnrolled, setIsEnrolled] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//   });

//   const syllabus = [
//     { week: 1, topic: 'Introduction to Java and Setup', details: 'JVM, JDK, IDEs, Hello World' },
//     { week: 2, topic: 'Data Types, Variables, and Operators', details: 'Primitives, type casting, arithmetic ops' },
//     { week: 3, topic: 'Control Flow Statements', details: 'if-else, switch, for/while loops' },
//     { week: 4, topic: 'Object-Oriented Programming Concepts', details: 'Classes vs Objects, pillars of OOP' },
//     { week: 5, topic: 'Classes, Objects, and Methods', details: 'Constructors, method overloading' },
//     { week: 6, topic: 'Inheritance, Polymorphism, and Abstraction', details: 'extends, @Override, abstract classes' },
//     { week: 7, topic: 'Exception Handling', details: 'try-catch-finally, custom exceptions' },
//     { week: 8, topic: 'Collections Framework', details: 'List, Set, Map interfaces' },
//     { week: 9, topic: 'File I/O and Serialization', details: 'Readers/Writers, Object streams' },
//     { week: 10, topic: 'Multithreading and Concurrency', details: 'Thread class, Runnable, synchronized' },
//     { week: 11, topic: 'Java 8 Features', details: 'Lambdas, Stream API, Optional' },
//     { week: 12, topic: 'Building GUI Applications', details: 'JavaFX basics, event handling' },
//     { week: 13, topic: 'Working with Databases', details: 'JDBC, Connection pooling' },
//     { week: 14, topic: 'Best Practices and Design Patterns', details: 'Singleton, Factory, SOLID principles' },
//   ];

//   const instructors = [
//     {
//       name: 'Samantha Lee',
//       title: 'Senior Java Developer',
//       photo: 'https://i.pravatar.cc/150?img=20',
//       bio: '10+ years experience building enterprise Java applications. Former lead developer at Oracle.',
//       expertise: ['Java EE', 'Spring Framework', 'Microservices']
//     },
//     {
//       name: 'Raj Patel',
//       title: 'Software Engineer & Java Trainer',
//       photo: 'https://i.pravatar.cc/150?img=32',
//       bio: 'Specializes in Java education with 5+ years training developers. Certified Java Architect.',
//       expertise: ['Core Java', 'Algorithms', 'Performance Tuning']
//     },
//   ];

//   const courseDetails = {
//     duration: '14 weeks',
//     effort: '6-8 hours/week',
//     format: 'Hybrid (Online + Live Sessions)',
//     startDate: 'July 10, 2023',
//     price: '$399 (early bird: $349 until June 25)',
//     certification: 'Certificate of Completion with project evaluation',
//     prerequisites: 'Basic programming knowledge helpful but not required',
//     projects: [
//       'Inventory Management System',
//       'Multi-threaded Chat Application',
//       'Student Database with JDBC'
//     ]
//   };

//   const handleEnrollClick = () => {
//     setShowModal(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     setIsEnrolled(true);
//     setShowModal(false);
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//     });
//   };

//   const closeModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div style={styles.page}>
//       <header style={styles.header}>
//         <h1 style={styles.title}>Java Programming Course</h1>
//         <p style={styles.subtitle}>
//           Master Java from fundamentals to advanced concepts and build production-ready applications
//         </p>
//         {!isEnrolled ? (
//           <button style={styles.enrollButton} onClick={handleEnrollClick}>
//             Enroll Now
//           </button>
//         ) : (
//           <div style={styles.successMessage}>
//             <p>🎉 Congratulations! You're enrolled in the Java course.</p>
//             <button 
//               style={styles.accessButton}
//               onClick={() => alert('Course materials will be available on the start date')}
//             >
//               Access Learning Portal
//             </button>
//           </div>
//         )}
//       </header>

//       <main style={styles.content}>
//         <section>
//           <h2 style={styles.sectionTitle}>Course Overview</h2>
//           <p style={styles.text}>
//             This comprehensive Java programming course takes you from complete beginner to job-ready developer. 
//             Through hands-on projects and real-world examples, you'll learn core Java concepts, modern features, 
//             and industry best practices used by professional Java developers.
//           </p>
          
//           <div style={styles.highlightsContainer}>
//             <div style={styles.highlightCard}>
//               <h3 style={styles.highlightTitle}>What You'll Learn</h3>
//               <ul style={styles.highlightList}>
//                 <li>Core Java syntax and concepts</li>
//                 <li>Object-oriented programming principles</li>
//                 <li>Collections and generics</li>
//                 <li>Exception handling</li>
//                 <li>Multithreading and concurrency</li>
//                 <li>Modern Java (8+ features)</li>
//                 <li>Database connectivity</li>
//                 <li>Debugging and testing</li>
//               </ul>
//             </div>
            
//             <div style={styles.highlightCard}>
//               <h3 style={styles.highlightTitle}>Course Details</h3>
//               <div style={styles.detailsGrid}>
//                 <div style={styles.detailItem}>
//                   <span style={styles.detailLabel}>Duration:</span>
//                   <span>{courseDetails.duration}</span>
//                 </div>
//                 <div style={styles.detailItem}>
//                   <span style={styles.detailLabel}>Format:</span>
//                   <span>{courseDetails.format}</span>
//                 </div>
//                 <div style={styles.detailItem}>
//                   <span style={styles.detailLabel}>Start Date:</span>
//                   <span>{courseDetails.startDate}</span>
//                 </div>
//                 <div style={styles.detailItem}>
//                   <span style={styles.detailLabel}>Price:</span>
//                   <span>{courseDetails.price}</span>
//                 </div>
//                 <div style={styles.detailItem}>
//                   <span style={styles.detailLabel}>Projects:</span>
//                   <span>{courseDetails.projects.join(', ')}</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section>
//           <h2 style={styles.sectionTitle}>Detailed Syllabus</h2>
//           <div style={styles.syllabusContainer}>
//             {syllabus.map((item, idx) => (
//               <div key={idx} style={styles.syllabusItem}>
//                 <div style={styles.weekBadge}>Week {item.week}</div>
//                 <h3 style={styles.topicTitle}>{item.topic}</h3>
//                 <p style={styles.topicDetails}>{item.details}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section>
//           <h2 style={styles.sectionTitle}>Meet Your Instructors</h2>
//           <div style={styles.instructorsContainer}>
//             {instructors.map((inst, idx) => (
//               <div key={idx} style={styles.instructorCard}>
//                 <img src={inst.photo} alt={inst.name} style={styles.instructorPhoto} />
//                 <div style={styles.instructorInfo}>
//                   <h3 style={styles.instructorName}>{inst.name}</h3>
//                   <p style={styles.instructorTitle}>{inst.title}</p>
//                   <p style={styles.instructorBio}>{inst.bio}</p>
//                   <div style={styles.expertiseContainer}>
//                     <span style={styles.expertiseLabel}>Expertise:</span>
//                     {inst.expertise.map((skill, i) => (
//                       <span key={i} style={styles.expertiseBadge}>{skill}</span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section style={styles.testimonials}>
//           <h2 style={styles.sectionTitle}>Student Success Stories</h2>
//           <div style={styles.testimonialCard}>
//             <p style={styles.testimonialText}>
//               "This course gave me the confidence to apply for Java developer positions. 
//               I completed all three projects and got hired before the course even ended!"
//             </p>
//             <p style={styles.testimonialAuthor}>- Michael T., Junior Java Developer</p>
//           </div>
//         </section>

//         {!isEnrolled && (
//           <section style={styles.ctaSection}>
//             <h2 style={styles.sectionTitle}>Start Your Java Journey Today</h2>
//             <button style={styles.enrollButtonLarge} onClick={handleEnrollClick}>
//               Enroll Now - Limited Seats Available
//             </button>
//             <p style={styles.guaranteeText}>
//               ✅ 30-day money-back guarantee
//             </p>
//           </section>
//         )}
//       </main>

//       {showModal && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.modal}>
//             <button style={styles.closeButton} onClick={closeModal}>×</button>
//             <h2 style={styles.modalTitle}>Enroll in Java Programming Course</h2>
//             <form onSubmit={handleSubmit} style={styles.form}>
//               <div style={styles.formGroup}>
//                 <label htmlFor="name" style={styles.label}>Full Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   style={styles.input}
//                   required
//                 />
//               </div>
//               <div style={styles.formGroup}>
//                 <label htmlFor="email" style={styles.label}>Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   style={styles.input}
//                   required
//                 />
//               </div>
//               <div style={styles.formGroup}>
//                 <label htmlFor="phone" style={styles.label}>Phone (optional)</label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   style={styles.input}
//                 />
//               </div>
//               <div style={styles.paymentInfo}>
//                 <h3 style={styles.paymentTitle}>Payment Information</h3>
//                 <p style={styles.paymentText}>You'll be redirected to our secure payment portal after form submission.</p>
//                 <p style={styles.priceDisplay}>Total: <strong>{courseDetails.price}</strong></p>
//               </div>
//               <button type="submit" style={styles.submitButton}>
//                 Complete Enrollment
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const styles = {
//   page: {
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     padding: '2rem',
//     backgroundColor: '#f5f7fa',
//     color: '#222',
//     minHeight: '100vh',
//   },
//   header: {
//     textAlign: 'center',
//     marginBottom: '2rem',
//     padding: '2rem',
//     backgroundColor: '#0b3d91',
//     color: 'white',
//     borderRadius: '10px',
//   },
//   title: {
//     fontSize: '2.8rem',
//     margin: 0,
//     marginBottom: '0.5rem',
//   },
//   subtitle: {
//     fontSize: '1.2rem',
//     opacity: 0.9,
//     marginBottom: '1.5rem',
//   },
//   enrollButton: {
//     backgroundColor: '#ff6b35',
//     color: 'white',
//     border: 'none',
//     padding: '12px 30px',
//     fontSize: '1.1rem',
//     borderRadius: '30px',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//     boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//     transition: 'all 0.3s ease',
//   },
//   enrollButtonLarge: {
//     backgroundColor: '#ff6b35',
//     color: 'white',
//     border: 'none',
//     padding: '15px 40px',
//     fontSize: '1.2rem',
//     borderRadius: '30px',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//     boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//     transition: 'all 0.3s ease',
//     margin: '1rem 0',
//   },
//   accessButton: {
//     backgroundColor: '#28a745',
//     color: 'white',
//     border: 'none',
//     padding: '10px 25px',
//     fontSize: '1rem',
//     borderRadius: '30px',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//     marginTop: '1rem',
//   },
//   successMessage: {
//     backgroundColor: 'rgba(40, 167, 69, 0.2)',
//     padding: '1rem',
//     borderRadius: '8px',
//     marginTop: '1rem',
//   },
//   content: {
//     maxWidth: '1000px',
//     margin: '0 auto',
//     backgroundColor: '#fff',
//     padding: '2rem',
//     borderRadius: '12px',
//     boxShadow: '0 4px 20px rgba(11, 61, 145, 0.15)',
//   },
//   sectionTitle: {
//     fontSize: '2rem',
//     borderBottom: '3px solid #0b3d91',
//     paddingBottom: '0.5rem',
//     marginTop: '2rem',
//     color: '#0b3d91',
//   },
//   text: {
//     fontSize: '1.05rem',
//     lineHeight: '1.6',
//     marginTop: '1rem',
//     color: '#333',
//   },
//   highlightsContainer: {
//     display: 'flex',
//     gap: '2rem',
//     margin: '2rem 0',
//     flexWrap: 'wrap',
//   },
//   highlightCard: {
//     flex: '1',
//     minWidth: '300px',
//     backgroundColor: '#e1e7f7',
//     padding: '1.5rem',
//     borderRadius: '10px',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
//   },
//   highlightTitle: {
//     color: '#0b3d91',
//     marginTop: '0',
//   },
//   highlightList: {
//     paddingLeft: '1.2rem',
//     listStyleType: 'disc',
//   },
//   detailsGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
//     gap: '1rem',
//   },
//   detailItem: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   detailLabel: {
//     fontWeight: 'bold',
//     color: '#495057',
//     fontSize: '0.9rem',
//   },
//   syllabusContainer: {
//     marginTop: '1rem',
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
//     gap: '1rem',
//   },
//   syllabusItem: {
//     backgroundColor: '#f8f9fa',
//     padding: '1rem',
//     borderRadius: '8px',
//     borderLeft: '4px solid #0b3d91',
//   },
//   weekBadge: {
//     backgroundColor: '#0b3d91',
//     color: 'white',
//     padding: '0.3rem 0.6rem',
//     borderRadius: '20px',
//     fontSize: '0.8rem',
//     display: 'inline-block',
//     marginBottom: '0.5rem',
//   },
//   topicTitle: {
//     margin: '0.5rem 0',
//     color: '#0b3d91',
//   },
//   topicDetails: {
//     margin: '0',
//     fontSize: '0.9rem',
//     color: '#555',
//   },
//   instructorsContainer: {
//     display: 'flex',
//     gap: '2rem',
//     flexWrap: 'wrap',
//   },
//   instructorCard: {
//     display: 'flex',
//     flex: '1',
//     minWidth: '300px',
//     backgroundColor: '#e1e7f7',
//     padding: '1.5rem',
//     borderRadius: '10px',
//     gap: '1.5rem',
//     alignItems: 'flex-start',
//   },
//   instructorPhoto: {
//     width: '80px',
//     height: '80px',
//     borderRadius: '50%',
//     objectFit: 'cover',
//     border: '3px solid #0b3d91',
//   },
//   instructorInfo: {
//     flex: '1',
//   },
//   instructorName: {
//     margin: '0 0 0.3rem 0',
//     fontSize: '1.3rem',
//     color: '#0b3d91',
//   },
//   instructorTitle: {
//     margin: '0 0 0.5rem 0',
//     fontSize: '0.95rem',
//     color: '#555',
//     fontWeight: 'bold',
//   },
//   instructorBio: {
//     margin: '0 0 0.5rem 0',
//     fontSize: '0.95rem',
//     lineHeight: '1.5',
//   },
//   expertiseContainer: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '0.5rem',
//     alignItems: 'center',
//   },
//   expertiseLabel: {
//     fontSize: '0.8rem',
//     fontWeight: 'bold',
//   },
//   expertiseBadge: {
//     backgroundColor: '#0b3d91',
//     color: 'white',
//     padding: '0.2rem 0.5rem',
//     borderRadius: '20px',
//     fontSize: '0.7rem',
//   },
//   testimonials: {
//     margin: '3rem 0',
//   },
//   testimonialCard: {
//     backgroundColor: '#e1e7f7',
//     padding: '1.5rem',
//     borderRadius: '10px',
//     borderLeft: '4px solid #0b3d91',
//   },
//   testimonialText: {
//     fontStyle: 'italic',
//     fontSize: '1.1rem',
//     lineHeight: '1.6',
//   },
//   testimonialAuthor: {
//     textAlign: 'right',
//     fontWeight: 'bold',
//     marginTop: '1rem',
//   },
//   ctaSection: {
//     textAlign: 'center',
//     margin: '3rem 0',
//     padding: '2rem',
//     backgroundColor: '#e1e7f7',
//     borderRadius: '10px',
//   },
//   guaranteeText: {
//     fontSize: '0.9rem',
//     color: '#555',
//   },
//   modalOverlay: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
//   },
//   modal: {
//     backgroundColor: 'white',
//     padding: '2rem',
//     borderRadius: '10px',
//     width: '90%',
//     maxWidth: '500px',
//     position: 'relative',
//   },
//   closeButton: {
//     position: 'absolute',
//     top: '1rem',
//     right: '1rem',
//     background: 'none',
//     border: 'none',
//     fontSize: '1.5rem',
//     cursor: 'pointer',
//     color: '#6c757d',
//   },
//   modalTitle: {
//     marginTop: '0',
//     color: '#0b3d91',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '1rem',
//   },
//   formGroup: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '0.5rem',
//   },
//   label: {
//     fontWeight: 'bold',
//     fontSize: '0.9rem',
//   },
//   input: {
//     padding: '0.8rem',
//     borderRadius: '5px',
//     border: '1px solid #ced4da',
//     fontSize: '1rem',
//   },
//   paymentInfo: {
//     margin: '1.5rem 0',
//     padding: '1rem',
//     backgroundColor: '#f8f9fa',
//     borderRadius: '5px',
//   },
//   paymentTitle: {
//     marginTop: '0',
//     color: '#0b3d91',
//     fontSize: '1.1rem',
//   },
//   paymentText: {
//     fontSize: '0.9rem',
//   },
//   priceDisplay: {
//     fontSize: '1.1rem',
//     fontWeight: 'bold',
//     marginBottom: '0',
//   },
//   submitButton: {
//     backgroundColor: '#28a745',
//     color: 'white',
//     border: 'none',
//     padding: '12px',
//     fontSize: '1.1rem',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//   },
// };

// export default JavaProgramming;


// import React from 'react';
// import { FaClock, FaChartLine, FaCertificate, FaCheck, FaArrowRight } from 'react-icons/fa';

// const JavaCoursePage = () => {
//   return (
//     <div className="java-course-container">
//       {/* Course Header */}
//       <header className="course-header">
//         <h1 className="course-title">Java Programming Masterclass</h1>
//         <div className="course-meta">
//           <div className="meta-item">
//             <FaClock className="meta-icon" />
//             <span>10 Weeks</span>
//           </div>
//           <div className="meta-item">
//             <FaChartLine className="meta-icon" />
//             <span>Beginner to Advanced</span>
//           </div>
//           <div className="meta-item">
//             <FaCertificate className="meta-icon" />
//             <span>Certificate</span>
//           </div>
//         </div>
//         <a href="#enroll" className="enroll-btn">
//           Enroll Now <FaArrowRight className="btn-icon" />
//         </a>
//       </header>

//       {/* Syllabus Section */}
//       <section className="syllabus-section">
//         <h2 className="section-title">
//           <span className="title-highlight">Course</span> Syllabus
//         </h2>
        
//         <div className="syllabus-tabs">
//           <button className="tab-btn active">Core Java</button>
//           <button className="tab-btn">Advanced Topics</button>
//           <button className="tab-btn">Projects</button>
//         </div>

//         <div className="module-container">
//           {/* Module 1 */}
//           <div className="module-card">
//             <div className="module-header">
//               <div className="module-number">01</div>
//               <h3 className="module-title">Java Fundamentals</h3>
//               <span className="module-duration">2 Weeks</span>
//             </div>
//             <ul className="topics-list">
//               <li><FaCheck className="check-icon" /> Java Syntax and Structure</li>
//               <li><FaCheck className="check-icon" /> Variables and Data Types</li>
//               <li><FaCheck className="check-icon" /> Operators and Expressions</li>
//               <li><FaCheck className="check-icon" /> Control Flow Statements</li>
//               <li><FaCheck className="check-icon" /> Hands-on Coding Exercises</li>
//             </ul>
//             <div className="resources-badge">
//               <span>5 Lectures</span>
//               <span>3 Assignments</span>
//               <span>1 Quiz</span>
//             </div>
//           </div>

//           {/* Module 2 */}
//           <div className="module-card">
//             <div className="module-header">
//               <div className="module-number">02</div>
//               <h3 className="module-title">Object-Oriented Programming</h3>
//               <span className="module-duration">3 Weeks</span>
//             </div>
//             <ul className="topics-list">
//               <li><FaCheck className="check-icon" /> Classes and Objects</li>
//               <li><FaCheck className="check-icon" /> Inheritance and Polymorphism</li>
//               <li><FaCheck className="check-icon" /> Encapsulation and Abstraction</li>
//               <li><FaCheck className="check-icon" /> Interfaces and Abstract Classes</li>
//               <li><FaCheck className="check-icon" /> Design Patterns Basics</li>
//             </ul>
//             <div className="resources-badge">
//               <span>8 Lectures</span>
//               <span>5 Assignments</span>
//               <span>2 Projects</span>
//             </div>
//           </div>

//           {/* Module 3 */}
//           <div className="module-card">
//             <div className="module-header">
//               <div className="module-number">03</div>
//               <h3 className="module-title">Java Collections Framework</h3>
//               <span className="module-duration">2 Weeks</span>
//             </div>
//             <ul className="topics-list">
//               <li><FaCheck className="check-icon" /> List, Set, and Map Interfaces</li>
//               <li><FaCheck className="check-icon" /> ArrayList vs LinkedList</li>
//               <li><FaCheck className="check-icon" /> HashMap and TreeMap</li>
//               <li><FaCheck className="check-icon" /> Iterators and Comparators</li>
//               <li><FaCheck className="check-icon" /> Stream API Introduction</li>
//             </ul>
//             <div className="resources-badge">
//               <span>6 Lectures</span>
//               <span>4 Assignments</span>
//               <span>1 Project</span>
//             </div>
//           </div>

//           {/* Module 4 */}
//           <div className="module-card">
//             <div className="module-header">
//               <div className="module-number">04</div>
//               <h3 className="module-title">Exception Handling & I/O</h3>
//               <span className="module-duration">1 Week</span>
//             </div>
//             <ul className="topics-list">
//               <li><FaCheck className="check-icon" /> Try-Catch-Finally Blocks</li>
//               <li><FaCheck className="check-icon" /> Custom Exceptions</li>
//               <li><FaCheck className="check-icon" /> File Handling</li>
//               <li><FaCheck className="check-icon" /> Serialization</li>
//               <li><FaCheck className="check-icon" /> NIO Package</li>
//             </ul>
//             <div className="resources-badge">
//               <span>4 Lectures</span>
//               <span>3 Assignments</span>
//               <span>1 Quiz</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enrollment CTA */}
//       <section className="enroll-cta" id="enroll">
//         <div className="cta-content">
//           <h2>Start Your Java Journey Today!</h2>
//           <p>Limited seats available for the next batch</p>
//           <div className="cta-buttons">
//             <a href="/enroll" className="cta-btn primary">
//               Enroll Now <FaArrowRight className="btn-icon" />
//             </a>
//             <a href="/syllabus-details" className="cta-btn outline">
//               Full Syllabus
//             </a>
//           </div>
//         </div>
//         <div className="cta-badge">
//           <span>Most Popular</span>
//         </div>
//       </section>

//       {/* Add this in your CSS file or styled-components */}
//       <style jsx>{`
//         .java-course-container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 2rem 1rem;
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//           color: #2d3748;
//         }
        
//         .course-header {
//           text-align: center;
//           margin-bottom: 3rem;
//           padding: 3rem 2rem;
//           border-radius: 16px;
//           background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
//           color: white;
//           box-shadow: 0 10px 30px rgba(79, 70, 229, 0.3);
//           position: relative;
//           overflow: hidden;
//         }
        
//         .course-header::before {
//           content: '';
//           position: absolute;
//           top: -50%;
//           left: -50%;
//           width: 200%;
//           height: 200%;
//           background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
//           transform: rotate(30deg);
//         }
        
//         .course-title {
//           font-size: 2.5rem;
//           margin-bottom: 1.5rem;
//           font-weight: 700;
//         }
        
//         .course-meta {
//           display: flex;
//           justify-content: center;
//           gap: 2rem;
//           margin-bottom: 2rem;
//           flex-wrap: wrap;
//         }
        
//         .meta-item {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           font-weight: 500;
//           font-size: 1.1rem;
//         }
        
//         .meta-icon {
//           font-size: 1.2rem;
//         }
        
//         .enroll-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 0.5rem;
//           padding: 12px 30px;
//           background-color: white;
//           color: #4f46e5;
//           border-radius: 50px;
//           text-decoration: none;
//           font-weight: 600;
//           transition: all 0.3s ease;
//           box-shadow: 0 5px 15px rgba(0,0,0,0.1);
//           position: relative;
//           overflow: hidden;
//           z-index: 1;
//           border: none;
//           cursor: pointer;
//         }
        
//         .enroll-btn:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 8px 25px rgba(0,0,0,0.2);
//         }
        
//         .btn-icon {
//           transition: transform 0.3s ease;
//         }
        
//         .enroll-btn:hover .btn-icon {
//           transform: translateX(3px);
//         }
        
//         .syllabus-section {
//           margin-bottom: 3rem;
//         }
        
//         .section-title {
//           font-size: 2rem;
//           margin-bottom: 2rem;
//           text-align: center;
//           position: relative;
//           padding-bottom: 1rem;
//         }
        
//         .section-title::after {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 50%;
//           transform: translateX(-50%);
//           width: 100px;
//           height: 4px;
//           background: linear-gradient(to right, #4f46e5, #7c3aed);
//           border-radius: 2px;
//         }
        
//         .title-highlight {
//           color: #4f46e5;
//         }
        
//         .syllabus-tabs {
//           display: flex;
//           justify-content: center;
//           gap: 1rem;
//           margin-bottom: 2rem;
//           flex-wrap: wrap;
//         }
        
//         .tab-btn {
//           padding: 0.75rem 1.5rem;
//           border-radius: 50px;
//           background: #edf2f7;
//           border: none;
//           font-weight: 600;
//           color: #4a5568;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }
        
//         .tab-btn.active {
//           background: #4f46e5;
//           color: white;
//         }
        
//         .tab-btn:hover {
//           transform: translateY(-2px);
//         }
        
//         .module-container {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
//           gap: 1.5rem;
//         }
        
//         .module-card {
//           background: white;
//           border-radius: 12px;
//           padding: 1.5rem;
//           box-shadow: 0 5px 15px rgba(0,0,0,0.05);
//           transition: all 0.3s ease;
//           border: 1px solid #e2e8f0;
//         }
        
//         .module-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 10px 25px rgba(79, 70, 229, 0.1);
//           border-color: #c7d2fe;
//         }
        
//         .module-header {
//           display: flex;
//           align-items: center;
//           margin-bottom: 1.5rem;
//           gap: 1rem;
//         }
        
//         .module-number {
//           background: #4f46e5;
//           color: white;
//           width: 36px;
//           height: 36px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-weight: 700;
//           flex-shrink: 0;
//         }
        
//         .module-title {
//           font-size: 1.25rem;
//           font-weight: 600;
//           flex-grow: 1;
//         }
        
//         .module-duration {
//           background: #e9d8fd;
//           color: #6b46c1;
//           padding: 0.25rem 0.75rem;
//           border-radius: 50px;
//           font-size: 0.85rem;
//           font-weight: 600;
//         }
        
//         .topics-list {
//           list-style: none;
//           margin-bottom: 1.5rem;
//         }
        
//         .topics-list li {
//           margin-bottom: 0.75rem;
//           display: flex;
//           align-items: flex-start;
//           gap: 0.5rem;
//           line-height: 1.5;
//         }
        
//         .check-icon {
//           color: #4f46e5;
//           margin-top: 0.25rem;
//           flex-shrink: 0;
//         }
        
//         .resources-badge {
//           display: flex;
//           gap: 0.75rem;
//           flex-wrap: wrap;
//           margin-top: 1rem;
//           padding-top: 1rem;
//           border-top: 1px dashed #e2e8f0;
//         }
        
//         .resources-badge span {
//           background: #f0f4f8;
//           padding: 0.25rem 0.75rem;
//           border-radius: 50px;
//           font-size: 0.85rem;
//           color: #4a5568;
//         }
        
//         .enroll-cta {
//           background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
//           border-radius: 16px;
//           padding: 3rem 2rem;
//           color: white;
//           text-align: center;
//           position: relative;
//           overflow: hidden;
//           box-shadow: 0 10px 30px rgba(79, 70, 229, 0.3);
//         }
        
//         .enroll-cta::before {
//           content: '';
//           position: absolute;
//           top: -50%;
//           left: -50%;
//           width: 200%;
//           height: 200%;
//           background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
//           transform: rotate(30deg);
//         }
        
//         .enroll-cta h2 {
//           font-size: 2rem;
//           margin-bottom: 1rem;
//           position: relative;
//         }
        
//         .enroll-cta p {
//           margin-bottom: 2rem;
//           font-size: 1.1rem;
//           opacity: 0.9;
//           position: relative;
//         }
        
//         .cta-buttons {
//           display: flex;
//           justify-content: center;
//           gap: 1.5rem;
//           flex-wrap: wrap;
//           position: relative;
//         }
        
//         .cta-btn {
//           display: inline-flex;
//           align-items: center;
//           gap: 0.5rem;
//           padding: 0.75rem 1.75rem;
//           border-radius: 50px;
//           font-weight: 600;
//           text-decoration: none;
//           transition: all 0.3s ease;
//         }
        
//         .primary {
//           background: white;
//           color: #4f46e5;
//         }
        
//         .outline {
//           border: 2px solid white;
//           color: white;
//         }
        
//         .primary:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 8px 25px rgba(0,0,0,0.2);
//         }
        
//         .outline:hover {
//           background: rgba(255,255,255,0.1);
//           transform: translateY(-3px);
//         }
        
//         .cta-badge {
//           position: absolute;
//           top: 20px;
//           right: 20px;
//           background: #fbbf24;
//           color: #78350f;
//           padding: 0.25rem 1rem;
//           border-radius: 50px;
//           font-weight: 700;
//           font-size: 0.85rem;
//           transform: rotate(15deg);
//         }
        
//         @media (max-width: 768px) {
//           .course-title {
//             font-size: 2rem;
//           }
          
//           .module-container {
//             grid-template-columns: 1fr;
//           }
          
//           .enroll-cta h2 {
//             font-size: 1.75rem;
//           }
          
//           .cta-buttons {
//             flex-direction: column;
//             gap: 1rem;
//           }
          
//           .cta-btn {
//             width: 100%;
//             justify-content: center;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default JavaCoursePage;





import React, { useState } from 'react';
import { FaCode, FaLaptopCode, FaDatabase, FaCheck, FaArrowRight, FaServer, FaJava } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { SiSpring, SiAndroid } from 'react-icons/si';

const JavaProgrammingCourse = () => {
  const [activeTab, setActiveTab] = useState('fundamentals');

  return (
    <div className="java-course-container">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="hero-content">
          <div className="coding-badge">
            <FaJava className="coding-icon" />
            <span>Hands-on Coding</span>
          </div>
          <h1 className="hero-title">
            <span className="highlight">Java Programming</span> Mastery
          </h1>
          <p className="hero-description">
            Master Java from core concepts to advanced frameworks with real-world projects and industry best practices
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
                <span className="meta-value">Beginner to Advanced</span>
              </div>
            </div>
            <div className="meta-item">
              <FaServer className="meta-icon" />
              <div>
                <span className="meta-label">Focus</span>
                <span className="meta-value">Backend & Android</span>
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
          <div className="code-animation">
            {/* Code visualization would go here */}
            <div className="code-snippet"></div>
            <div className="architecture-diagram"></div>
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section className="syllabus-section" id="syllabus">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-decorator">{"//"}</span> Course Curriculum
          </h2>
          <p className="section-subtitle">
            Comprehensive training from Java basics to enterprise application development
          </p>
        </div>

        <div className="syllabus-tabs">
          <button 
            className={`tab-button ${activeTab === 'fundamentals' ? 'active' : ''}`}
            onClick={() => setActiveTab('fundamentals')}
          >
            <FaCode className="tab-icon" /> Core Java
          </button>
          <button 
            className={`tab-button ${activeTab === 'advanced' ? 'active' : ''}`}
            onClick={() => setActiveTab('advanced')}
          >
            <FaLaptopCode className="tab-icon" /> Advanced Topics
          </button>
          <button 
            className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <FaDatabase className="tab-icon" /> Real Projects
          </button>
        </div>

        <div className="syllabus-content">
          {activeTab === 'fundamentals' && (
            <div className="module-grid">
              {/* Module 1 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">01</span>
                  <h3 className="module-title">Java Fundamentals</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 2 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Syntax & Data Types</li>
                  <li><FaCheck className="check-icon" /> OOP Principles</li>
                  <li><FaCheck className="check-icon" /> Collections Framework</li>
                  <li><FaCheck className="check-icon" /> Exception Handling</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">8 Lectures</span>
                  <span className="resource-pill">15 Coding Exercises</span>
                  <span className="resource-pill">1 Console Application</span>
                </div>
              </div>

              {/* Module 2 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">02</span>
                  <h3 className="module-title">Java Intermediate</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 2 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Multithreading</li>
                  <li><FaCheck className="check-icon" /> Streams API</li>
                  <li><FaCheck className="check-icon" /> File I/O</li>
                  <li><FaCheck className="check-icon" /> Networking Basics</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">6 Lectures</span>
                  <span className="resource-pill">10 Coding Exercises</span>
                  <span className="resource-pill">1 Multi-threaded App</span>
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
                  <h3 className="module-title">Spring Framework</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 3 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Spring Boot</li>
                  <li><FaCheck className="check-icon" /> REST APIs</li>
                  <li><FaCheck className="check-icon" /> Spring Security</li>
                  <li><FaCheck className="check-icon" /> Database Integration</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">8 Tutorials</span>
                  <span className="resource-pill">12 Practical Exercises</span>
                  <span className="resource-pill">1 RESTful Service</span>
                </div>
              </div>

              {/* Module 4 */}
              <div className="module-card">
                <div className="module-header">
                  <span className="module-number">04</span>
                  <h3 className="module-title">Android Development</h3>
                  <span className="module-duration">
                    <IoMdTime className="time-icon" /> 3 Weeks
                  </span>
                </div>
                <ul className="module-topics">
                  <li><FaCheck className="check-icon" /> Android Studio</li>
                  <li><FaCheck className="check-icon" /> UI Components</li>
                  <li><FaCheck className="check-icon" /> Room Database</li>
                  <li><FaCheck className="check-icon" /> API Integration</li>
                </ul>
                <div className="module-resources">
                  <span className="resource-pill">7 Tutorials</span>
                  <span className="resource-pill">8 Mobile Exercises</span>
                  <span className="resource-pill">1 Complete App</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="project-showcase">
              <div className="project-card">
                <h3 className="project-title">E-commerce Backend</h3>
                <p className="project-description">
                  Build a complete e-commerce backend with Spring Boot, JPA, and RESTful APIs
                </p>
                <div className="project-tech">
                  <span>Spring Boot</span>
                  <span>MySQL</span>
                  <span>JWT Auth</span>
                </div>
              </div>
              
              <div className="project-card">
                <h3 className="project-title">Task Manager App</h3>
                <p className="project-description">
                  Develop a full-stack task management application with Android frontend and Spring backend
                </p>
                <div className="project-tech">
                  <span>Android</span>
                  <span>Room DB</span>
                  <span>REST API</span>
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
            <h2 className="cta-title">Ready to Master Java?</h2>
            <p className="cta-subtitle">
              Join our next cohort and build professional Java applications with expert guidance
            </p>
            <div className="cta-features">
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Real-world projects</span>
              </div>
              <div className="feature-item">
                <div className="feature-icon">✓</div>
                <span>Code reviews</span>
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
              Next cohort starts: <strong>November 5, 2024</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style jsx>{`
        .java-course-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color:rgb(0, 0, 0);
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
        
        .coding-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgb(255, 255, 255);
          backdrop-filter: blur(10px);
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }
        
        .coding-icon {
          font-size: 1.2rem;
          color:rgb(117, 149, 255);
        }
        
        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        
        .highlight {
          color:rgb(238, 238, 238);
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
          color:rgb(82, 207, 89);
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
          color:rgb(0, 168, 76);
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
        
        .code-animation {
          position: relative;
          height: 100%;
          width: 100%;
          /* Code visualization would go here */
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
          color: #F56565;
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
          background: #FED7D7;
          border: none;
          font-weight: 600;
          color: #C53030;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .tab-button.active {
          background: #C53030;
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
          border: 1px solid #FED7D7;
          transition: all 0.2s ease;
        }
        
        .module-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          border-color: #F56565;
        }
        
        .module-header {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.25rem;
        }
        
        .module-number {
          background: #C53030;
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
          color: #C53030;
          margin-top: 0.25rem;
          flex-shrink: 0;
        }
        
        .module-resources {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          padding-top: 1rem;
          border-top: 1px dashed #FED7D7;
        }
        
        .resource-pill {
          background: #FED7D7;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: #C53030;
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
          border: 1px solid #FED7D7;
        }
        
        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #C53030;
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
          background: #FED7D7;
          color: #C53030;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
        }
        
        /* Enrollment CTA */
        .enrollment-cta {
          background: linear-gradient(135deg,rgb(6, 180, 99) 0%,rgb(16, 175, 88) 100%);
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
          background: rgba(13, 168, 73, 0.89);
          padding: 0.75rem 1.25rem;
          border-radius: 0.5rem;
        }
        
        .feature-icon {
          font-weight: 700;
          color:rgb(19, 156, 76);
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
          color:, #047857
          border-radius: 0.5rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        
        .enroll-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(21, 185, 108, 0.67);
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

export default JavaProgrammingCourse;
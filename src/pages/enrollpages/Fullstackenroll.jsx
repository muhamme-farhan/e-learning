import React, { useState } from 'react';
import { FaCheckCircle, FaPlayCircle, FaLock, FaCode, FaServer, FaDatabase, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaBook, FaTasks, FaCertificate, FaUser } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { BsGraphUp } from 'react-icons/bs';

const FullStackLearningPage = () => {
  const [activePath, setActivePath] = useState(1);
  const [activeModule, setActiveModule] = useState(1);
  const [completedLessons, setCompletedLessons] = useState([1, 2, 5, 7, 8, 11]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [currentLesson, setCurrentLesson] = useState(null);
  const [videoProgress, setVideoProgress] = useState({});
  const [userName, setUserName] = useState('John Doe');
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  
  const learningPaths = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Master modern frontend technologies and frameworks",
      progress: 75,
      modules: [1, 2],
      duration: "10 Weeks",
      icon: <FaReact />
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Learn server-side programming and database management",
      progress: 30,
      modules: [3, 4],
      duration: "12 Weeks",
      icon: <FaServer />
    },
    {
      id: 3,
      title: "Full Stack Mastery",
      description: "Combine frontend and backend to build complete applications",
      progress: 15,
      modules: [5, 6],
      duration: "14 Weeks",
      icon: <FaCode />
    }
  ];

  const modules = [
    {
      id: 1,
      title: "HTML & CSS Fundamentals",
      icon: <FaHtml5 />,
      duration: "3 Weeks",
      description: "Learn the building blocks of web development",
      pathId: 1,
      lessons: [
        { 
          id: 1, 
          title: "HTML Basics", 
          duration: "45 min", 
          type: "video", 
          locked: false,
          videoUrl: "https://example.com/videos/html-basics.mp4",
          description: "Learn the structure of HTML documents and basic elements."
        },
        { 
          id: 2, 
          title: "CSS Styling", 
          duration: "1h 10min", 
          type: "video", 
          locked: false,
          videoUrl: "https://example.com/videos/css-styling.mp4",
          description: "Master CSS selectors, properties, and basic layouts."
        },
        { 
          id: 3, 
          title: "Responsive Design", 
          duration: "1h 30min", 
          type: "video", 
          locked: false,
          videoUrl: "https://example.com/videos/responsive-design.mp4",
          description: "Learn media queries and responsive design principles."
        },
        { 
          id: 4, 
          title: "CSS Flexbox Lab", 
          duration: "2h", 
          type: "lab", 
          locked: false,
          description: "Hands-on exercise to master CSS Flexbox layout."
        },
        { 
          id: 5, 
          title: "CSS Grid", 
          duration: "50min", 
          type: "video", 
          locked: false,
          videoUrl: "https://example.com/videos/css-grid.mp4",
          description: "Introduction to CSS Grid for complex layouts."
        },
        { 
          id: 6, 
          title: "Module 1 Quiz", 
          duration: "30min", 
          type: "quiz", 
          locked: false,
          description: "Test your knowledge of HTML & CSS fundamentals."
        }
      ]
    },
    {
      id: 2,
      title: "JavaScript & React",
      icon: <FaJs />,
      duration: "4 Weeks",
      description: "Modern JavaScript and React framework",
      pathId: 1,
      lessons: [
        { 
          id: 7, 
          title: "JavaScript Basics", 
          duration: "1h", 
          type: "video", 
          locked: false,
          videoUrl: "https://example.com/videos/js-basics.mp4",
          description: "Variables, functions, and control structures in JS."
        },
        { 
          id: 8, 
          title: "DOM Manipulation", 
          duration: "1h 15min", 
          type: "video", 
          locked: false,
          videoUrl: "https://example.com/videos/dom-manipulation.mp4",
          description: "Working with the Document Object Model."
        },
        { 
          id: 9, 
          title: "React Introduction", 
          duration: "1h 30min", 
          type: "video", 
          locked: true,
          videoUrl: "https://example.com/videos/react-intro.mp4",
          description: "Components, props, and state in React."
        },
        { 
          id: 10, 
          title: "React Project", 
          duration: "3h", 
          type: "project", 
          locked: true,
          description: "Build a small React application from scratch."
        }
      ]
    },
    {
      id: 3,
      title: "Node.js & Express",
      icon: <FaNodeJs />,
      duration: "4 Weeks",
      description: "Server-side JavaScript with Node.js",
      pathId: 2,
      lessons: [
        { 
          id: 11, 
          title: "Node.js Basics", 
          duration: "1h", 
          type: "video", 
          locked: false,
          videoUrl: "https://example.com/videos/node-basics.mp4",
          description: "Introduction to Node.js runtime environment."
        },
        { 
          id: 12, 
          title: "Express Framework", 
          duration: "1h 30min", 
          type: "video", 
          locked: true,
          videoUrl: "https://example.com/videos/express-framework.mp4",
          description: "Building web servers with Express.js."
        },
        { 
          id: 13, 
          title: "RESTful APIs", 
          duration: "2h", 
          type: "video", 
          locked: true,
          videoUrl: "https://example.com/videos/rest-apis.mp4",
          description: "Designing and implementing REST APIs."
        },
        { 
          id: 14, 
          title: "Middleware Concepts", 
          duration: "1h 45min", 
          type: "video", 
          locked: true,
          videoUrl: "https://example.com/videos/middleware.mp4",
          description: "Understanding and creating middleware."
        },
        { 
          id: 15, 
          title: "API Project", 
          duration: "4h", 
          type: "project", 
          locked: true,
          description: "Build a complete REST API with Node and Express."
        }
      ]
    }
  ];

  const currentPath = learningPaths.find(path => path.id === activePath);
  const currentModule = modules.find(module => module.id === activeModule);
  const pathModules = modules.filter(module => module.pathId === activePath);
  
  const moduleProgress = (moduleId) => {
    const module = modules.find(m => m.id === moduleId);
    const completed = module.lessons.filter(lesson => completedLessons.includes(lesson.id)).length;
    return (completed / module.lessons.length) * 100;
  };

  const handleLessonComplete = (lessonId) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
    setCurrentLesson(null);
  };

  const handleQuizAnswer = (questionId, answer) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionId]: answer
    });
  };

  const submitQuiz = () => {
    handleLessonComplete(currentModule.lessons[currentModule.lessons.length - 1].id);
    setShowQuiz(false);
  };

  const startLesson = (lesson) => {
    if (lesson.type === 'quiz') {
      setShowQuiz(true);
    } else {
      setCurrentLesson(lesson);
    }
  };

  const handleVideoProgress = (lessonId, progress) => {
    setVideoProgress({
      ...videoProgress,
      [lessonId]: progress
    });
  };

  const quizQuestions = [
    {
      id: 1,
      question: "Which HTML tag is used for creating a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<hyperlink>"],
      correct: "<a>"
    },
    {
      id: 2,
      question: "What does CSS stand for?",
      options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
      correct: "Cascading Style Sheets"
    },
    {
      id: 3,
      question: "Which method is used to create a React component?",
      options: ["React.makeComponent()", "React.createComponent()", "React.component()", "React.Component"],
      correct: "React.Component"
    }
  ];

  const generateCertificate = () => {
    setShowCertificateModal(true);
  };

  const isPathComplete = () => {
    const pathModules = modules.filter(module => module.pathId === activePath);
    const allLessons = pathModules.flatMap(module => module.lessons.map(lesson => lesson.id));
    return allLessons.every(lessonId => completedLessons.includes(lessonId));
  };

  return (
    <div className="learning-container">
      {/* Header */}
      <header className="learning-header">
        <div className="header-content">
          <h1>Full Stack Development Learning Paths</h1>
          <div className="user-profile">
            <FaUser className="user-icon" />
            <span>{userName}</span>
          </div>
        </div>
      </header>

      <div className="learning-layout">
        {/* Sidebar */}
        <aside className="path-sidebar">
          <div className="sidebar-header">
            <h2>Learning Paths</h2>
            <div className="course-stats">
              <span><FaBook /> {modules.length} Modules</span>
              <span><FaTasks /> {modules.reduce((acc, module) => acc + module.lessons.length, 0)} Lessons</span>
            </div>
          </div>
          
          <ul className="path-list">
            {learningPaths.map(path => (
              <li 
                key={path.id} 
                className={`path-item ${activePath === path.id ? 'active' : ''}`}
                onClick={() => {
                  setActivePath(path.id);
                  setActiveModule(modules.find(m => m.pathId === path.id).id);
                  setCurrentLesson(null);
                }}
              >
                <div className="path-icon">{path.icon}</div>
                <div className="path-info">
                  <h3>{path.title}</h3>
                  <p>{path.description}</p>
                  <div className="path-meta">
                    <span>{path.duration}</span>
                    <span>{path.progress}% Complete</span>
                  </div>
                  <div className="path-progress">
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${path.progress}%` }}></div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          
          {isPathComplete() && (
            <div className="certificate-cta">
              <button className="certificate-button" onClick={generateCertificate}>
                <FaCertificate className="certificate-icon" />
                Generate Certificate
              </button>
            </div>
          )}
        </aside>

        {/* Main Content */}
        <main className="learning-content">
          {showCertificateModal && (
            <div className="certificate-modal">
              <div className="modal-content">
                <h2>Your Certificate of Completion</h2>
                <div className="certificate-preview">
                  <div className="certificate-header">
                    <FaCertificate className="certificate-logo" />
                    <h3>Certificate of Achievement</h3>
                    <p>This is to certify that</p>
                  </div>
                  <div className="certificate-body">
                    <h1>{userName}</h1>
                    <p>has successfully completed the</p>
                    <h2>{currentPath.title} Learning Path</h2>
                    <div className="certificate-details">
                      <p>Completed on: {new Date().toLocaleDateString()}</p>
                      <p>Duration: {currentPath.duration}</p>
                    </div>
                  </div>
                  <div className="certificate-footer">
                    <div className="signature">
                      <div className="signature-line"></div>
                      <p>Lead Developer</p>
                    </div>
                  </div>
                </div>
                <div className="modal-actions">
                  <button className="secondary-button" onClick={() => setShowCertificateModal(false)}>
                    Close
                  </button>
                  <button className="primary-button">
                    Download Certificate
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {showQuiz ? (
            <div className="quiz-container">
              <h2>Module Quiz</h2>
              <p>Test your knowledge of {currentModule.title}</p>
              
              <div className="quiz-questions">
                {quizQuestions.map((question, index) => (
                  <div key={question.id} className="question-card">
                    <h3>Question {index + 1}: {question.question}</h3>
                    <div className="options-grid">
                      {question.options.map(option => (
                        <label key={option} className="option">
                          <input
                            type="radio"
                            name={`question-${question.id}`}
                            checked={quizAnswers[question.id] === option}
                            onChange={() => handleQuizAnswer(question.id, option)}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="quiz-actions">
                <button className="secondary-button" onClick={() => setShowQuiz(false)}>
                  Back to Lessons
                </button>
                <button className="primary-button" onClick={submitQuiz}>
                  Submit Quiz
                </button>
              </div>
            </div>
          ) : currentLesson ? (
            <div className="current-lesson">
              <div className="video-container">
                <div className="video-player">
                  <h3>{currentLesson.title}</h3>
                  <p>{currentLesson.description}</p>
                  
                  {currentLesson.type === 'video' && (
                    <div className="video-wrapper">
                      <video 
                        controls 
                        src={currentLesson.videoUrl}
                        onTimeUpdate={(e) => {
                          const progress = (e.target.currentTime / e.target.duration) * 100;
                          handleVideoProgress(currentLesson.id, progress);
                        }}
                      >
                        Your browser does not support the video tag.
                      </video>
                      <div className="video-progress-bar">
                        <div 
                          className="video-progress-fill" 
                          style={{ width: `${videoProgress[currentLesson.id] || 0}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  {currentLesson.type === 'lab' && (
                    <div className="lab-container">
                      <div className="lab-instructions">
                        <h4>Lab Instructions</h4>
                        <p>Download the lab materials and complete the following tasks:</p>
                        <ol>
                          <li>Create the HTML structure for a blog page</li>
                          <li>Style the page using CSS Flexbox</li>
                          <li>Make the layout responsive for mobile devices</li>
                          <li>Add interactive elements with JavaScript</li>
                        </ol>
                        <button className="download-button">
                          Download Lab Materials
                        </button>
                      </div>
                    </div>
                  )}
                  
                  <div className="lesson-actions">
                    <button 
                      className="complete-button"
                      onClick={() => handleLessonComplete(currentLesson.id)}
                    >
                      Mark as Complete
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="lesson-resources">
                <h3>Resources</h3>
                <ul>
                  <li><a href="#">{currentModule.title} Cheat Sheet</a></li>
                  <li><a href="#">Code Samples Repository</a></li>
                  <li><a href="#">Development Environment Setup Guide</a></li>
                  <li><a href="#">Additional Reading Materials</a></li>
                </ul>
              </div>
            </div>
          ) : (
            <>
              <div className="path-header">
                <h2>{currentPath.title}</h2>
                <p>{currentPath.description}</p>
                <div className="path-overview">
                  <div className="path-progress-card">
                    <h3>Path Progress</h3>
                    <div className="progress-circle">
                      <svg width="120" height="120" viewBox="0 0 120 120">
                        <circle cx="60" cy="60" r="54" fill="none" stroke="#e2e8f0" strokeWidth="8"/>
                        <circle 
                          cx="60" 
                          cy="60" 
                          r="54" 
                          fill="none" 
                          stroke="#4f46e5" 
                          strokeWidth="8" 
                          strokeDasharray="339.292" 
                          strokeDashoffset={339.292 * (1 - currentPath.progress / 100)}
                          transform="rotate(-90 60 60)"
                        />
                        <text x="60" y="65" textAnchor="middle" fontSize="24" fill="#4f46e5">
                          {currentPath.progress}%
                        </text>
                      </svg>
                    </div>
                    <div className="progress-meta">
                      <span><FaCheckCircle /> {completedLessons.length} Lessons Completed</span>
                      <span><IoMdTime /> {currentPath.duration}</span>
                    </div>
                  </div>
                  
                  <div className="module-selector">
                    <h3>Modules in this Path</h3>
                    <div className="module-tabs">
                      {pathModules.map(module => (
                        <div 
                          key={module.id}
                          className={`module-tab ${activeModule === module.id ? 'active' : ''}`}
                          onClick={() => setActiveModule(module.id)}
                        >
                          <div className="module-icon">{module.icon}</div>
                          <div className="module-info">
                            <h4>{module.title}</h4>
                            <div className="module-progress-bar">
                              <div 
                                className="progress-fill" 
                                style={{ width: `${moduleProgress(module.id)}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="module-content">
                <div className="module-header">
                  <h3>{currentModule.title}</h3>
                  <p>{currentModule.description}</p>
                  <div className="module-stats">
                    <div className="stat-card">
                      <IoMdTime />
                      <span>{currentModule.duration}</span>
                    </div>
                    <div className="stat-card">
                      <FaBook />
                      <span>{currentModule.lessons.length} Lessons</span>
                    </div>
                    <div className="stat-card">
                      <FaCheckCircle />
                      <span>
                        {currentModule.lessons.filter(l => completedLessons.includes(l.id)).length} Completed
                      </span>
                    </div>
                  </div>
                </div>
                
                <ul className="lesson-list">
                  {currentModule.lessons.map(lesson => (
                    <li 
                      key={lesson.id} 
                      className={`lesson-item ${lesson.locked ? 'locked' : ''} ${completedLessons.includes(lesson.id) ? 'completed' : ''}`}
                    >
                      <div className="lesson-icon">
                        {lesson.locked ? (
                          <FaLock />
                        ) : completedLessons.includes(lesson.id) ? (
                          <FaCheckCircle className="completed-icon" />
                        ) : (
                          <FaPlayCircle />
                        )}
                      </div>
                      
                      <div className="lesson-info">
                        <h3>{lesson.title}</h3>
                        <div className="lesson-meta">
                          <span>{lesson.duration}</span>
                          <span className="lesson-type">{lesson.type}</span>
                        </div>
                      </div>
                      
                      {!lesson.locked && !completedLessons.includes(lesson.id) && (
                        <button 
                          className="start-button"
                          onClick={() => startLesson(lesson)}
                        >
                          {lesson.type === 'quiz' ? 'Start Quiz' : 'Start Lesson'}
                        </button>
                      )}
                      
                      {completedLessons.includes(lesson.id) && (
                        <span className="completed-label">Completed</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </main>
      </div>
       {/* Styles - Same as the Data Science page */}
      <style jsx>{`
        :root {
          --primary: #4f46e5;
          --primary-light: #6366f1;
          --primary-dark: #4338ca;
          --success: #10b981;
          --warning: #f59e0b;
          --danger: #ef4444;
          --text: #1e293b;
          --text-light: #64748b;
          --border: #e2e8f0;
          --bg-light: #f8fafc;
          --white: #ffffff;
          --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          --shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .learning-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background: var(--bg-light);
        }
        
        /* Header */
        .learning-header {
          background: white;
          box-shadow: var(--shadow);
          padding: 1rem 2rem;
        }
        
        .header-content {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .learning-header h1 {
          font-size: 1.5rem;
          color: var(--primary-dark);
        }
        
        .user-profile {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
        }
        
        .user-icon {
          color: var(--text-light);
        }
        
        /* Layout */
        .learning-layout {
          display: flex;
          flex: 1;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
        }
        
        /* Sidebar */
        .path-sidebar {
          width: 320px;
          background: white;
          border-right: 1px solid var(--border);
          padding: 1.5rem;
          overflow-y: auto;
        }
        
        .sidebar-header {
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border);
        }
        
        .sidebar-header h2 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }
        
        .course-stats {
          display: flex;
          gap: 1rem;
          font-size: 0.875rem;
          color: var(--text-light);
        }
        
        .course-stats span {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        
        .path-list {
          list-style: none;
          margin-bottom: 2rem;
        }
        
        .path-item {
          padding: 1rem;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid var(--border);
        }
        
        .path-item:hover {
          border-color: var(--primary-light);
        }
        
        .path-item.active {
          border-color: var(--primary);
          background: var(--bg-light);
        }
        
        .path-icon {
          font-size: 1.5rem;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }
        
        .path-info h3 {
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }
        
        .path-info p {
          font-size: 0.875rem;
          color: var(--text-light);
          margin-bottom: 0.5rem;
        }
        
        .path-meta {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          margin: 0.5rem 0;
        }
        
        .path-progress {
          height: 6px;
          background: var(--border);
          border-radius: 3px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background: var(--primary);
          transition: width 0.3s ease;
        }
        
        .certificate-button {
          width: 100%;
          padding: 1rem;
          background: var(--success);
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .certificate-button:hover {
          background: #0d9f6e;
        }
        
        .certificate-icon {
          font-size: 1.2rem;
        }
        
        /* Main Content */
        .learning-content {
          flex: 1;
          padding: 2rem;
          overflow-y: auto;
        }
        
        .path-header {
          margin-bottom: 2rem;
        }
        
        .path-header h2 {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
        }
        
        .path-header p {
          color: var(--text-light);
          margin-bottom: 1.5rem;
        }
        
        .path-overview {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        
        .path-progress-card {
          background: white;
          border-radius: 0.5rem;
          padding: 1.5rem;
          box-shadow: var(--shadow);
          width: 200px;
          text-align: center;
        }
        
        .path-progress-card h3 {
          font-size: 1rem;
          margin-bottom: 1rem;
        }
        
        .progress-circle {
          margin: 0 auto 1rem;
        }
        
        .progress-meta {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.875rem;
        }
        
        .progress-meta span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-light);
        }
        
        .module-selector {
          flex: 1;
          background: white;
          border-radius: 0.5rem;
          padding: 1.5rem;
          box-shadow: var(--shadow);
        }
        
        .module-selector h3 {
          font-size: 1rem;
          margin-bottom: 1rem;
        }
        
        .module-tabs {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .module-tab {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 0.5rem;
          cursor: pointer;
          border: 1px solid var(--border);
          transition: all 0.2s ease;
        }
        
        .module-tab:hover {
          border-color: var(--primary-light);
        }
        
        .module-tab.active {
          border-color: var(--primary);
          background: var(--bg-light);
        }
        
        .module-icon {
          font-size: 1.2rem;
          color: var(--primary);
        }
        
        .module-info {
          flex: 1;
        }
        
        .module-info h4 {
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }
        
        .module-progress-bar {
          height: 4px;
          background: var(--border);
          border-radius: 2px;
          overflow: hidden;
        }
        
        /* Module Content */
        .module-content {
          background: white;
          border-radius: 0.5rem;
          padding: 2rem;
          box-shadow: var(--shadow);
        }
        
        .module-header {
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border);
        }
        
        .module-header h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
        }
        
        .module-header p {
          color: var(--text-light);
          margin-bottom: 1rem;
        }
        
        .module-stats {
          display: flex;
          gap: 1rem;
        }
        
        .stat-card {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          padding: 0.5rem 1rem;
          background: var(--bg-light);
          border-radius: 0.5rem;
        }
        
        /* Lesson List */
        .lesson-list {
          list-style: none;
        }
        
        .lesson-item {
          display: flex;
          align-items: center;
          padding: 1rem;
          background: var(--bg-light);
          border-radius: 0.5rem;
          margin-bottom: 0.75rem;
        }
        
        .lesson-item.locked {
          opacity: 0.7;
          background: white;
        }
        
        .lesson-item.completed {
          background: white;
          border-left: 4px solid var(--success);
        }
        
        .lesson-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 1rem;
          color: var(--text-light);
        }
        
        .lesson-item.completed .lesson-icon {
          color: var(--success);
        }
        
        .lesson-item.locked .lesson-icon {
          color: var(--danger);
        }
        
        .lesson-info {
          flex: 1;
        }
        
        .lesson-info h3 {
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }
        
        .lesson-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.875rem;
          color: var(--text-light);
        }
        
        .lesson-type {
          text-transform: capitalize;
        }
        
        .start-button {
          padding: 0.5rem 1rem;
          background: var(--primary);
          color: white;
          border: none;
          border-radius: 0.25rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .start-button:hover {
          background: var(--primary-dark);
        }
        
        .completed-label {
          font-size: 0.875rem;
          color: var(--success);
          font-weight: 500;
          margin-left: 1rem;
        }
        
        /* Current Lesson */
        .current-lesson {
          display: flex;
          gap: 2rem;
        }
        
        .video-container {
          flex: 2;
        }
        
        .video-player {
          background: white;
          border-radius: 0.5rem;
          padding: 2rem;
          box-shadow: var(--shadow);
        }
        
        .video-player h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        
        .video-player p {
          color: var(--text-light);
          margin-bottom: 1.5rem;
        }
        
        .video-wrapper {
          margin-bottom: 1.5rem;
        }
        
        video {
          width: 100%;
          border-radius: 0.5rem;
          margin-bottom: 0.5rem;
        }
        
        .video-progress-bar {
          width: 100%;
          height: 6px;
          background: var(--border);
          border-radius: 3px;
          overflow: hidden;
        }
        
        .video-progress-fill {
          height: 100%;
          background: var(--primary);
        }
        
        .lab-container {
          background: var(--bg-light);
          border-radius: 0.5rem;
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .lab-instructions h4 {
          margin-bottom: 1rem;
        }
        
        .lab-instructions ol {
          margin-left: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .download-button {
          padding: 0.75rem 1.5rem;
          background: var(--primary);
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
        }
        
        .lesson-actions {
          display: flex;
          justify-content: flex-end;
        }
        
        .complete-button {
          padding: 0.75rem 1.5rem;
          background: var(--success);
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .complete-button:hover {
          background: #0d9f6e;
        }
        
        .lesson-resources {
          flex: 1;
        }
        
        .lesson-resources h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
        }
        
        .lesson-resources ul {
          list-style: none;
          margin-bottom: 2rem;
        }
        
        .lesson-resources li {
          margin-bottom: 0.5rem;
        }
        
        .lesson-resources a {
          color: var(--primary);
          text-decoration: none;
        }
        
        .lesson-resources a:hover {
          text-decoration: underline;
        }
        
        /* Quiz Styles */
        .quiz-container {
          background: white;
          border-radius: 0.5rem;
          padding: 2rem;
          box-shadow: var(--shadow);
        }
        
        .quiz-container h2 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        
        .quiz-container p {
          color: var(--text-light);
          margin-bottom: 2rem;
        }
        
        .question-card {
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--border);
        }
        
        .question-card h3 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }
        
        .options-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        
        .option {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem;
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .option:hover {
          border-color: var(--primary-light);
        }
        
        .option input {
          cursor: pointer;
        }
        
        .quiz-actions {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .primary-button {
          padding: 0.75rem 1.5rem;
          background: var(--primary);
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
        }
        
        .secondary-button {
          padding: 0.75rem 1.5rem;
          background: white;
          color: var(--primary);
          border: 1px solid var(--primary);
          border-radius: 0.5rem;
          cursor: pointer;
        }
        
        /* Certificate Modal */
        .certificate-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        
        .modal-content {
          background: white;
          border-radius: 0.5rem;
          width: 90%;
          max-width: 800px;
          padding: 2rem;
          box-shadow: var(--shadow-md);
        }
        
        .modal-content h2 {
          margin-bottom: 1rem;
        }
        
        .certificate-preview {
          border: 2px solid var(--primary);
          border-radius: 0.5rem;
          padding: 2rem;
          margin: 1.5rem 0;
          text-align: center;
          background: #f9fafb;
          position: relative;
          overflow: hidden;
        }
        
        .certificate-preview::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%234f46e5' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
          opacity: 0.3;
          z-index: 0;
        }
        
        .certificate-header {
          margin-bottom: 2rem;
          position: relative;
          z-index: 1;
        }
        
        .certificate-logo {
          font-size: 3rem;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }
        
        .certificate-header h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        
        .certificate-body {
          margin: 2rem 0;
          position: relative;
          z-index: 1;
        }
        
        .certificate-body h1 {
          font-size: 2.5rem;
          margin: 1rem 0;
          color: var(--primary-dark);
        }
        
        .certificate-body h2 {
          font-size: 1.5rem;
          margin: 1rem 0;
          color: var(--text);
        }
        
        .certificate-details {
          margin: 2rem 0;
          display: flex;
          justify-content: space-around;
        }
        
        .certificate-footer {
          margin-top: 2rem;
          display: flex;
          justify-content: flex-end;
          position: relative;
          z-index: 1;
        }
        
        .signature {
          text-align: center;
        }
        
        .signature-line {
          width: 200px;
          height: 1px;
          background: var(--text);
          margin: 0 auto 0.5rem;
        }
        
        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
        }
        
        /* Responsive Styles */
        @media (max-width: 1024px) {
          .current-lesson {
            flex-direction: column;
          }
          
          .path-overview {
            flex-direction: column;
          }
          
          .path-progress-card {
            width: 100%;
          }
          
          .options-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .learning-layout {
            flex-direction: column;
          }
          
          .path-sidebar {
            width: 100%;
            border-right: none;
            border-bottom: 1px solid var(--border);
          }
          
          .module-stats {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .certificate-body h1 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default FullStackLearningPage
;
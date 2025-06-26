import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar"; 

const UiUxCourse = () => {
  const [enrolled, setEnrolled] = useState(false);

  return (
    <div className="uiux-page">
      <style>{`
        .uiux-page {
          padding: 2rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f9f9f9;
          color: #333;
        }

        .uiux-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .uiux-header h1 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: #222;
        }

        .uiux-header p {
          font-size: 1.1rem;
          color: #555;
        }

        .uiux-content {
          max-width: 900px;
          margin: 0 auto;
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 0 12px rgba(0,0,0,0.1);
        }

        .section-title {
          font-size: 1.8rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          border-left: 5px solid #4e73df;
          padding-left: 10px;
          color: #2c3e50;
        }

        ul {
          padding-left: 1.5rem;
        }

        li {
          margin-bottom: 0.75rem;
          line-height: 1.6;
        }

        .instructor-card {
          display: flex;
          align-items: center;
          background: #eef2f7;
          padding: 1rem;
          border-radius: 10px;
          margin-bottom: 1.5rem;
        }

        .instructor-img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 1rem;
          border: 2px solid #4e73df;
        }

        .enroll-button {
          background-color: #4e73df;
          color: #fff;
          border: none;
          padding: 0.75rem 2rem;
          font-size: 1.1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .enroll-button:hover {
          background-color: #3b5db7;
          transform: translateY(-2px);
        }

        .enroll-button:active {
          transform: scale(0.98);
        }

        .enrolled-message {
          font-size: 1.2rem;
          color: green;
          text-align: center;
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .uiux-content {
            padding: 1rem;
          }

          .uiux-header h1 {
            font-size: 2rem;
          }

          .instructor-card {
            flex-direction: column;
            align-items: flex-start;
          }

          .instructor-img {
            margin-bottom: 0.5rem;
          }
        }
      `}</style>

      <div className="uiux-header">
        <h1>UI/UX Design Course</h1>
        <p>Learn how to design stunning and user-friendly interfaces with real-world projects.</p>
      </div>

      <div className="uiux-content">
        <h2 className="section-title">Course Syllabus</h2>
        <ul>
          <li>Introduction to UI/UX Principles</li>
          <li>Design Thinking & User Research</li>
          <li>Wireframing & Prototyping</li>
          <li>UI Design with Figma & Adobe XD</li>
          <li>UX Writing & Accessibility</li>
          <li>Usability Testing</li>
          <li>Project Design and Final Showcase</li>
        </ul>

        <h2 className="section-title">Meet Your Instructors</h2>
        <div className="instructor-card">
          <img src="https://via.placeholder.com/60" alt="Instructor" className="instructor-img" />
          <div>
            <h3>Jane Doe</h3>
            <p>Senior UI/UX Designer at XYZ Corp</p>
          </div>
        </div>
        <div className="instructor-card">
          <img src="https://via.placeholder.com/60" alt="Instructor" className="instructor-img" />
          <div>
            <h3>John Smith</h3>
            <p>Product Designer at ABC Studios</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          {enrolled ? (
            <p className="enrolled-message">✅ Successfully Enrolled in UI/UX Design Course!</p>
          ) : (
            <button className="enroll-button" onClick={() => setEnrolled(true)}>
              Enroll Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UiUxCourse;

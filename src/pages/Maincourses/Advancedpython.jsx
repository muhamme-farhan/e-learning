import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar"; 

const AdvancedPython = () => {
  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>Advanced Python Programming</h1>
        <p style={styles.subtitle}>
          Master high-level Python concepts and techniques to build real-world applications and automation scripts.
        </p>
      </div>

      <div style={styles.content}>
        {/* Syllabus Section */}
        <section>
          <h2 style={styles.sectionTitle}>Course Syllabus</h2>
          <ul style={styles.list}>
            <li>Advanced Functions and Functional Programming</li>
            <li>Decorators, Generators, and Iterators</li>
            <li>Multithreading and Multiprocessing</li>
            <li>Working with Databases and ORM (SQLAlchemy)</li>
            <li>Web Development with Flask</li>
            <li>Testing and Debugging</li>
            <li>Data Analysis with Pandas</li>
            <li>Web Scraping with BeautifulSoup & Selenium</li>
            <li>Deploying Python Applications</li>
          </ul>
        </section>

        {/* Instructor Section */}
        <section>
          <h2 style={styles.sectionTitle}>Instructors</h2>
          <div style={styles.instructorCard}>
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Instructor"
              style={styles.instructorImage}
            />
            <div>
              <h3 style={styles.instructorName}>John Doe</h3>
              <p style={styles.instructorBio}>Senior Python Developer with 10+ years of experience.</p>
            </div>
          </div>

          <div style={styles.instructorCard}>
            <img
              src="https://randomuser.me/api/portraits/women/50.jpg"
              alt="Instructor"
              style={styles.instructorImage}
            />
            <div>
              <h3 style={styles.instructorName}>Jane Smith</h3>
              <p style={styles.instructorBio}>Data Analyst and Python Enthusiast specializing in data science.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: '2rem',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    backgroundColor: '#f8f9fa',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    color: '#343a40',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#6c757d',
  },
  content: {
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    color: '#343a40',
    borderBottom: '2px solid #007bff',
    paddingBottom: '0.5rem',
    marginTop: '2rem',
  },
  list: {
    paddingLeft: '1.2rem',
    color: '#495057',
    lineHeight: 1.6,
  },
  instructorCard: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
    backgroundColor: '#e9ecef',
    padding: '1rem',
    borderRadius: '8px',
    gap: '1rem',
  },
  instructorImage: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #007bff',
  },
  instructorName: {
    margin: 0,
    fontSize: '1.2rem',
    color: '#212529',
  },
  instructorBio: {
    margin: 0,
    fontSize: '0.95rem',
    color: '#6c757d',
  },
};

export default AdvancedPython;

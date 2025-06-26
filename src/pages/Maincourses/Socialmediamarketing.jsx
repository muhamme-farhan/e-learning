import React from 'react';

const SocialMediaMarketing = () => {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1>Social Media Marketing</h1>
        <p>Master the art of driving traffic, engagement, and conversions on social platforms.</p>
      </header>

      <section style={styles.content}>
        <h2 style={styles.sectionTitle}>Course Overview</h2>
        <p>
          This course will teach you how to effectively use platforms like Facebook, Instagram, LinkedIn,
          and TikTok for marketing. Learn content strategy, ad campaigns, analytics, and how to grow your
          brand presence.
        </p>

        <h2 style={styles.sectionTitle}>Syllabus</h2>
        <ul style={styles.list}>
          <li>Introduction to Social Media Platforms</li>
          <li>Building a Brand on Social Media</li>
          <li>Content Planning and Creation</li>
          <li>Paid Advertising Campaigns</li>
          <li>Social Media Analytics and Optimization</li>
          <li>Influencer Marketing</li>
        </ul>

        <h2 style={styles.sectionTitle}>Instructors</h2>
        <div style={styles.instructorCard}>
          <img
            src="https://via.placeholder.com/60"
            alt="Instructor"
            style={styles.instructorPhoto}
          />
          <div>
            <h3>Jane Doe</h3>
            <p>Digital Marketing Expert with 10+ years in the industry.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  page: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f0f4f8',
    color: '#333'
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem'
  },
  content: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    maxWidth: '900px',
    margin: '0 auto'
  },
  sectionTitle: {
    borderBottom: '2px solid #007bff',
    paddingBottom: '0.5rem',
    marginTop: '2rem',
    fontSize: '1.5rem'
  },
  list: {
    marginTop: '1rem',
    paddingLeft: '1.2rem'
  },
  instructorCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginTop: '1rem',
    backgroundColor: '#e9ecef',
    padding: '1rem',
    borderRadius: '8px'
  },
  instructorPhoto: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #007bff'
  }
};

export default SocialMediaMarketing;

import React from 'react';

const Web3Development = () => {
  const syllabus = [
    'Introduction to Web3 and Blockchain',
    'Cryptography Basics',
    'Ethereum Blockchain & Smart Contracts',
    'Solidity Programming Language',
    'Decentralized Applications (dApps)',
    'Web3.js and Ethers.js Libraries',
    'NFTs and Token Standards (ERC-20, ERC-721)',
    'Smart Contract Testing and Deployment',
    'Decentralized Finance (DeFi) Concepts',
    'Interacting with Wallets (MetaMask, WalletConnect)',
    'IPFS and Decentralized Storage',
    'Security Best Practices in Web3',
    'Future Trends in Blockchain and Web3',
  ];

  const instructors = [
    {
      name: 'Sophia Lee',
      title: 'Blockchain Developer & Smart Contract Expert',
      photo: 'https://i.pravatar.cc/150?img=65',
    },
    {
      name: 'Rajiv Kumar',
      title: 'Web3 Engineer & Decentralized App Developer',
      photo: 'https://i.pravatar.cc/150?img=33',
    },
  ];

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Web3 Development Course</h1>
        <p style={styles.subtitle}>
          Master the skills to build decentralized applications on blockchain technology.
        </p>
      </header>

      <main style={styles.content}>
        <section>
          <h2 style={styles.sectionTitle}>Course Overview</h2>
          <p style={styles.text}>
            This course introduces you to the exciting world of Web3. Learn to create, test, and deploy smart contracts and decentralized applications using Ethereum and related technologies.
          </p>
        </section>

        <section>
          <h2 style={styles.sectionTitle}>Syllabus</h2>
          <ul style={styles.list}>
            {syllabus.map((topic, idx) => (
              <li key={idx} style={styles.listItem}>{topic}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 style={styles.sectionTitle}>Meet Your Instructors</h2>
          {instructors.map((inst, idx) => (
            <div key={idx} style={styles.instructorCard}>
              <img src={inst.photo} alt={inst.name} style={styles.instructorPhoto} />
              <div>
                <h3 style={styles.instructorName}>{inst.name}</h3>
                <p style={styles.instructorTitle}>{inst.title}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '2rem',
    backgroundColor: '#eef7f9',
    color: '#222',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  title: {
    fontSize: '2.8rem',
    color: '#0a4a6f',
    margin: 0,
  },
  subtitle: {
    fontSize: '1.15rem',
    color: '#4a4a4a',
    marginTop: '0.5rem',
  },
  content: {
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '14px',
    boxShadow: '0 0 15px rgba(0,0,0,0.12)',
  },
  sectionTitle: {
    fontSize: '2rem',
    borderBottom: '3px solid #0a4a6f',
    paddingBottom: '0.5rem',
    marginTop: '2rem',
  },
  text: {
    fontSize: '1rem',
    marginTop: '1rem',
    lineHeight: 1.6,
    color: '#333',
  },
  list: {
    marginTop: '1rem',
    paddingLeft: '1.5rem',
  },
  listItem: {
    marginBottom: '0.9rem',
  },
  instructorCard: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '1rem',
    backgroundColor: '#d0e9f7',
    padding: '1rem',
    borderRadius: '8px',
    gap: '1rem',
  },
  instructorPhoto: {
    width: '65px',
    height: '65px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #0a4a6f',
  },
  instructorName: {
    margin: 0,
    fontSize: '1.3rem',
    color: '#0a4a6f',
  },
  instructorTitle: {
    margin: 0,
    fontSize: '1rem',
    color: '#555',
  },
};

export default Web3Development;

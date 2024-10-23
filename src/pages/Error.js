import React from 'react';

const Error = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Čia kažkas negerai!</h1>
      <p style={styles.message}>Nepirk!!!</p>
      <div style={styles.imageContainer}>
        <img src="https://i.pinimg.com/originals/84/29/94/8429942830ee706352fa51d1af23d503.jpg" alt="Nemalonus vaizdas 1" style={styles.image} />
        <img src="https://memy.pl/show/big/uploads/Post/182290/15135844369253.jpg" alt="Nemalonus vaizdas 2" style={styles.image} />
        <img src="https://content.wepik.com/statics/218311136/preview-page0.jpg" alt="Nemalonus vaizdas 3" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f8d7da',
    color: '#721c24',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  message: {
    fontSize: '1.5rem',
    marginBottom: '30px',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10px',
  },
  image: {
    width: '300px',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
};

export default Error;

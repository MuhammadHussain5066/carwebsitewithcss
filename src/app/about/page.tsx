import React from 'react';

const About = () => {
  return (
    <div
      style={{
        backgroundColor: '#FFD700',  // Gold background color
        padding: '50px 20px',
      }}
    >
      <section
        className="about-section"
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          textAlign: 'center',
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            marginBottom: '20px',
            color: '#333',
            fontWeight: 'bold',
          }}
        >
          About Us
        </h2>
        <p
          style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: '#666',
            marginBottom: '20px',
            padding: '0 20px',
          }}
        >
          Welcome to our car website! We specialize in showcasing the best cars in the market, catering to all your automotive needs. 
        </p>
        <p
          style={{
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: '#666',
            padding: '0 20px',
          }}
        >
          We are passionate about cars and committed to delivering the latest and most accurate information about the automotive world.
        </p>
      </section>
    </div>
  );
};

export default About;

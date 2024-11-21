import React from 'react';

const Homepage = () => {
  return (
    <div>
      <section 
        className="hero" 
        style={{
          backgroundImage: "url('https://shorturl.at/ATw8v')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          height: '100vh', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          color: 'white', 
          textAlign: 'center', 
          padding: '0 20px', 
        }}
      >
        <div>
          <h1>Welcome to my car website</h1>
          <p 
            style={{
              marginTop: '20px',   
              padding: '10px 20px',  
              backgroundColor: 'rgba(0, 0, 0, 0.5)',  
              borderRadius: '5px',  
            }}
          >
            Best cars available on this site
          </p>
        </div>
      </section>
    </div>
  );
};

export default Homepage;

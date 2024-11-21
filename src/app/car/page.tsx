import React from 'react';

const CarSection = () => {
  const cars = [
    {
      name: 'Tesla Model S',
      image: "url('https://shorturl.at/IFLmu')",
      description: 'A luxury electric sedan with cutting-edge technology and performance.',
    },
    {
      name: 'BMW M3',
      image: "url('https://shorturl.at/zkp66')",
      description: 'A high-performance sports sedan known for its power and precision handling.',
    },
    {
      name: 'Toyota Prius',
      image: "url('https://shorturl.at/5UBmy')",
      description: 'An eco-friendly hybrid car offering excellent fuel efficiency and reliability.',
    },
  ];

  return (
    <section
      className="car-section"
      style={{
        backgroundColor: '#f9f9f9',
        padding: '50px 20px',
        textAlign: 'center',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          marginBottom: '30px',
          color: '#333',
        }}
      >
        Featured Cars
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {cars.map((car, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div
              style={{
                backgroundImage: car.image,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px',
                borderRadius: '10px',
                marginBottom: '15px',
              }}
            />
            <h3
              style={{
                fontSize: '1.5rem',
                color: '#333',
                marginBottom: '10px',
              }}
            >
              {car.name}
            </h3>
            <p
              style={{
                fontSize: '1rem',
                color: '#666',
                lineHeight: '1.6',
              }}
            >
              {car.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarSection;

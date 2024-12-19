
import React from 'react';

const JoinUsPage = () => {
  return (
    <div className="joinUss-container" style={{ backgroundColor: '#e0f2fe', minHeight: '100vh', padding: '20px' }}>
      <header className="joinUss-header" style={{ textAlign: 'center', padding: '20px 0' }}>
        <h1 className="joinUss-title" style={{ fontSize: '2.5rem', color: '#444', fontWeight: 'bold' }}>Join Us</h1>
        <p className="joinUss-subtitle" style={{ fontSize: '1.2rem', color: '#666' }}>Become a part of our growing community today!</p>
      </header>

      <section className="joinUss-form-section" style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
        <form className="joinUss-form" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <label className="joinUss-label" style={{ fontWeight: '600', color: '#444' }} htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            className="joinUss-input" 
            placeholder="Enter your name" 
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} 
          />

          <label className="joinUss-label" style={{ fontWeight: '600', color: '#444' }} htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            className="joinUss-input" 
            placeholder="Enter your email" 
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} 
          />

          <label className="joinUss-label" style={{ fontWeight: '600', color: '#444' }} htmlFor="message">Why do you want to join?</label>
          <textarea 
            id="message" 
            className="joinUss-textarea" 
            placeholder="Share your thoughts..." 
            rows="4" 
            style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }} 
          ></textarea>

          <button 
            type="submit" 
            className="joinUss-button" 
            style={{ 
              padding: '10px', 
              borderRadius: '5px', 
              border: 'none', 
              background: '#34a853', 
              color: '#fff', 
              fontWeight: 'bold', 
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.background = '#2c8c46'}
            onMouseLeave={(e) => e.target.style.background = '#34a853'}
          >
            Submit
          </button>
        </form>
      </section>

      <footer className="joinUss-footer" style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>
        <p className="joinUss-footer-text">We look forward to welcoming you onboard!</p>
      </footer>
    </div>
  );
};

export default JoinUsPage;

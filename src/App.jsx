import React, { useState } from 'react';
import './App.css';

function App() {
  const [showLetter, setShowLetter] = useState(false);

  // Put your image URL here
  const backgroundImageUrl = "/bgchels.jpg";

  const containerStyle = {
    // The linear-gradient creates a dark overlay so your white box and text stay readable
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImageUrl})`,
    
    // Changing 'cover' to a pixel value like '250px' or '300px' 
    // makes the image repeat like a grid/collage
    backgroundSize: '300px', 
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    
    // Centering logic
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    transition: 'all 1s ease',
  };

  return (
    <div style={containerStyle} className="background-container">
      {!showLetter ? (
        <button className="start-btn" onClick={() => setShowLetter(true)}>
          Open Letter
        </button>
      ) : (
        <div className="content-wrapper">
          <div className="spotify-container">
            <iframe 
              style={{ borderRadius: "12px" }} 
              src="https://open.spotify.com/embed/track/4fFfyouye6vrX9o9z4PVMu?utm_source=generator&theme=0" 
              width="100%" 
              height="152" 
              frameBorder="0" 
              allowFullScreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
            ></iframe>
          </div>

          <div className="message-box">
            <h1>Hey Princess..</h1>
            <p className="poetic-text">
              I’m sorry I let my bad days get in the way of how much I love you. 
              Lately, things have been hard, but that’s never an excuse to lose 
              my way with the person who matters most. <br /><br />
              You are my safe place, and it breaks my heart knowing I made 
              you feel anything less than adored. I’m so sorry for breaking 
              your heart with my words, my tone, my reaction and many more. <br /><br />
              <strong>Please remember that I love you through every storm, 
              and I’m so lucky to have you by my side.</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
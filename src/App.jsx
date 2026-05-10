import React, { useState } from 'react';
import './App.css';

function App() {
  const [showLetter, setShowLetter] = useState(false);

  return (
    <div className="background-container">
      {!showLetter ? (
        /* This button "unlocks" the ability to show the content */
        <button className="start-btn" onClick={() => setShowLetter(true)}>
          Open Letter
        </button>
      ) : (
        <div className="content-wrapper">
          {/* Your Spotify Link */}
          <div className="spotify-container">
            <iframe 
              style={{ borderRadius: "12px" }} 
              src="https://open.spotify.com/embed/track/1Fo4OvzP9PThFKMeMIAEYu?utm_source=generator&autoplay=1" 
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
    you feel anything less than adored. I’m so sorry for breaking your heart with my words, my tone, my reaction and many more <br /><br />
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
import React from 'react';
import './ToneSelector.css';

// These are the tones the user can choose from.
// I can add more later if I think of any.
const tones = ['Friendly', 'Professional', 'Casual', 'Enthusiastic', 'Direct'];

function ToneSelector({ selectedTone, setTone }) {
  return (
    <div className="tone-selector-container">
      <p>Select a tone:</p>
      <div className="tone-options">
        {tones.map((tone) => (
          <button
            key={tone}
            // This is how I'm checking which button is active.
            // If the tone of this button is the same as the selectedTone, I give it the 'active' class.
            className={`tone-btn ${selectedTone === tone ? 'active' : ''}`}
            onClick={() => setTone(tone)}
          >
            {tone}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ToneSelector;

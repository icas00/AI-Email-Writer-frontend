import React from 'react';

function ToneSelector({ tone, setTone }) {
  return (
    <div className="tone-selector">
      <label>Select Tone:</label>
      <select value={tone} onChange={(e) => setTone(e.target.value)}>
        <option value="Friendly">Friendly</option>
        <option value="Professional">Professional</option>
        <option value="Concise">Concise</option>
      </select>
    </div>
  );
}

export default ToneSelector;

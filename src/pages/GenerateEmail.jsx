import React, { useState } from 'react';
import ToneSelector from '../components/ToneSelector';
import Loading from '../components/Loading';
import EmailCard from '../components/EmailCard';

function GenerateEmail() {
  const [inputText, setInputText] = useState('');
  // The default tone is now 'Friendly'.
  const [tone, setTone] = useState('Friendly');
  const [emailResponse, setEmailResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    // Don't do anything if the text box is empty.
    if (!inputText) return;

    setLoading(true);
    setEmailResponse(''); // Clear the old email

    try {
      // UPDATED to the new Hugging Face backend URL.
      const res = await fetch('https://icas00-my-backend.hf.space/email/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailContent: inputText, tone }),
      });

      // This checks if the response from the backend is okay.
      // If it's not (e.g., a 500 error), it will throw an error and go to the catch block.
      if (!res.ok) {
        throw new Error(`Backend returned an error: ${res.status}`);
      }

      const data = await res.text();
      setEmailResponse(data);

      // --- Save to History ---
      // I'm using localStorage to keep a history of generated emails.
      // It's simple, but it works.
      const history = JSON.parse(localStorage.getItem('emailHistory') || '[]');
      // Add the new email to the *start* of the history array.
      localStorage.setItem('emailHistory', JSON.stringify([{ input: inputText, tone, response: data }, ...history]));

    } catch (err) {
      console.error(err);
      // Should probably show a nicer error message here, but this is fine for now.
      alert('Oops! Something went wrong.Try again?');
    } finally {
      // This `finally` block always runs, whether the try worked or failed.
      // It's a good place to stop the loading animation.
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="generate-email-page">
        {/* I'm removing the main h2 title from here because it's already in the header, kind of.
            This makes the page look cleaner. */}
        
        <textarea
          placeholder="e.g., 'Write an email to boss asking for a raise....'"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          rows={7} // Made it a bit taller
        />

        {/* The new ToneSelector! I need to pass the `selectedTone` and `setTone` props to it. */}
        <ToneSelector selectedTone={tone} setTone={setTone} />

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button 
            onClick={handleGenerate} 
            disabled={loading || !inputText} 
            className="btn"
            // Adding a cool little effect on the button
            style={{ transform: loading ? 'scale(0.95)' : 'scale(1)' }}
          >
            {loading ? 'Generating...' : 'Generate Email'}
          </button>
        </div>

        {/* 
          This is how the loading and email card are shown.
          The `&&` is a shortcut for an if statement.
          If `loading` is true, it shows the Loading component.
          If `emailResponse` has content, it shows the EmailCard.
        */}
        {loading && <Loading />}
        {emailResponse && !loading && <EmailCard email={emailResponse} />}
      </div>
    </div>
  );
}

export default GenerateEmail;

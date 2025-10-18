import React, { useState } from 'react';
import ToneSelector from '../components/ToneSelector';
import Loading from '../components/Loading';
import EmailCard from '../components/EmailCard';

function GenerateEmail() {
  const [inputText, setInputText] = useState('');
  const [tone, setTone] = useState('Friendly');
  const [emailResponse, setEmailResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!inputText) return;
    setLoading(true);
    setEmailResponse('');

    try {
      const res = await fetch('https://ai-email-writer-backend-xf2f.onrender.com/email/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailContent: inputText, tone }),
      });

      const data = await res.text();
      setEmailResponse(data);

      // Save to localStorage history
      const history = JSON.parse(localStorage.getItem('emailHistory') || '[]');
      localStorage.setItem('emailHistory', JSON.stringify([{ input: inputText, tone, response: data }, ...history]));

    } catch (err) {
      console.error(err);
      alert('Error generating email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="generate-email-page">
      <h2>Generate AI Email</h2>
      <textarea
        placeholder="Write your email here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows={5}
      />
      <ToneSelector tone={tone} setTone={setTone} />
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Email'}
      </button>

      {loading && <Loading />}
      {emailResponse && <EmailCard email={emailResponse} />}
    </div>
  );
}

export default GenerateEmail;

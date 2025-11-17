import React, { useState } from 'react';

// Fun messages for when you copy the text.
const copyMessages = [
  'Copied!',
  'Got it!',
  'Ready to paste!',
  'It\'s in the clipboard!',
  'Done!',
];

function EmailCard({ email }) {
  // This state tracks the text of the copy button.
  const [copyButtonText, setCopyButtonText] = useState('Copy');

  const handleCopy = () => {
    navigator.clipboard.writeText(email);

    // Pick a random message from the array.
    const randomMessage = copyMessages[Math.floor(Math.random() * copyMessages.length)];
    setCopyButtonText(randomMessage);

    // I'm setting a timeout to change the button text back to "Copy" after a couple of seconds.
    // This gives the user feedback that the copy action worked.
    setTimeout(() => {
      setCopyButtonText('Copy');
    }, 2000);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Here's your draft:</h3>
        <button onClick={handleCopy} className="copy-btn">
          {copyButtonText}
        </button>
      </div>
      {/* Using a <pre> tag here is important because it respects whitespace,
          like new lines and spacing, which is super important for an email. */}
      <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', fontFamily: 'inherit', fontSize: '16px' }}>
        {email}
      </pre>
    </div>
  );
}

export default EmailCard;

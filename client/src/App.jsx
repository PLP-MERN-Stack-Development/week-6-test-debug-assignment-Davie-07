import React, { useState } from 'react';
import Button from './components/Button';

const appStyles = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)',
  fontFamily: 'Segoe UI, Arial, sans-serif',
};

const cardStyles = {
  background: '#fff',
  borderRadius: '12px',
  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
  padding: '2rem 3rem',
  textAlign: 'center',
  maxWidth: '400px',
};

const headingStyles = {
  marginBottom: '1rem',
  color: '#1a202c',
  fontWeight: 700,
  fontSize: '2rem',
};

const messageStyles = {
  margin: '1.5rem 0',
  color: '#4a5568',
  fontSize: '1.1rem',
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={appStyles}>
      <div style={cardStyles}>
        <h1 style={headingStyles}>Welcome to the MERN Testing Demo</h1>
        <div style={messageStyles}>
          This is a professional-looking demo app. <br />
          Click the button below to increase the counter.
        </div>
        <Button
          variant="primary"
          size="md"
          onClick={() => setCount(count + 1)}
          style={{ marginBottom: '1rem', minWidth: 120 }}
        >
          Count: {count}
        </Button>
        <div style={{ fontSize: '0.95rem', color: '#718096', marginTop: '0.5rem' }}>
          Try clicking the button multiple times!
        </div>
      </div>
    </div>
  );
}

export default App;

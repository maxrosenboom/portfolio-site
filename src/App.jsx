function Mark() {
  return (
    <svg
      width="120"
      height="24"
      viewBox="0 0 120 24"
      fill="none"
      aria-hidden="true"
      style={{ marginBottom: '1.75rem' }}
    >
      <line x1="0" y1="12" x2="46" y2="12" stroke="#333" strokeWidth="1" />
      <rect
        x="53"
        y="5"
        width="14"
        height="14"
        transform="rotate(45 60 12)"
        stroke="#666"
        strokeWidth="1"
      />
      <circle cx="60" cy="12" r="1.5" fill="#888" />
      <line x1="74" y1="12" x2="120" y2="12" stroke="#333" strokeWidth="1" />
    </svg>
  )
}

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    }}>
      <Mark />
      <h1 style={{ fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.15em', marginBottom: '0.5rem' }}>
        Max Rosenboom
      </h1>
      <p style={{ color: '#555', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        Software Engineer
      </p>
    </div>
  )
}

export default App

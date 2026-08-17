const projects = [
  {
    title: "Transaction Processing System",
    url: "https://tps.maxrosenboom.com",
  },
  {
    title: "Investment Analytics MCP",
    url: "https://mcp.maxrosenboom.com",
  },
  {
    title: "Futures Trading Algorithm",
    url: "https://trading.maxrosenboom.com",
  },
]

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
      <h1 style={{ fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.15em', marginBottom: '0.5rem' }}>
        Max Rosenboom
      </h1>
      <p style={{ color: '#555', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '3rem' }}>
        Fintech Projects
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '360px' }}>
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.url}
            style={{
              display: 'block',
              padding: '1rem 1.5rem',
              border: '1px solid #222',
              borderRadius: '6px',
              color: '#888',
              textDecoration: 'none',
              fontSize: '0.85rem',
              letterSpacing: '0.05em',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#444'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#222'
              e.currentTarget.style.color = '#888'
            }}
          >
            {project.title} →
          </a>
        ))}
      </div>
    </div>
  )
}

export default App
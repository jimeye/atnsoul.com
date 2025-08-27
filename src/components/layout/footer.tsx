"use client"

export function Footer() {
  return (
    <div style={{
      height: '10px',
      backgroundColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '10px',
      fontFamily: 'Lucida Console, monospace',
      fontSize: '9.2px',
      color: '#ed002a'
    }}>
      Powered by  {" "}
      <a
        href="https://wa.me/33608251223"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: 'black',
          textDecoration: 'none',
          fontWeight: 'bold',
          marginLeft: '5px',
          transition: 'color 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#ed002a'}
        onMouseLeave={(e) => e.currentTarget.style.color = 'black'}
      >
        JOSEPH-STUDIO.COM
      </a>
    </div>
  )
}

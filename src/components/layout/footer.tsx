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
          color: '#ed002a',
          textDecoration: 'none',
          fontWeight: 'bold',
          marginLeft: '5px'
        }}
      >
        JOSEPH-STUDIO.COM
      </a>
    </div>
  )
}

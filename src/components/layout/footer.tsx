"use client"

import { useState, useEffect } from "react"

export function Footer() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 1024)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return (
    <div style={{
      height: '10px',
      backgroundColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '10px',
      fontFamily: 'Lucida Console, monospace',
      fontSize: '9.2px',
      color: '#ed002a',
      marginTop: isMobile ? '0px' : '-26px'
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

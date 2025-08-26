"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"

export function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="mobile-header">
      {/* Header fixe en haut */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: 'white',
        padding: '5px 15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <a href="/" style={{ textDecoration: 'none' }}>
          <img 
            src="/atn-soul-website-typo-producer-paris-ultra-soul-ultrasoul.png" 
            alt="ATN SOUL" 
            style={{ 
              width: '120px', 
              height: 'auto'
            }}
          />
        </a>

        {/* Navigation mobile */}
        <div style={{
          display: 'flex',
          gap: '15px',
          alignItems: 'center',
          fontFamily: 'Lucida Console, monospace',
          fontSize: '0.8rem'
        }}>
          {pathname !== '/' && (
            <a href="/" style={{ color: '#ed002a', textDecoration: 'none' }}>
              About
            </a>
          )}
          {pathname !== '/la-serre-aux-papillons' && (
            <a href="/la-serre-aux-papillons" style={{ color: '#ed002a', textDecoration: 'none' }}>
              Film
            </a>
          )}
          {pathname !== '/nyc-sessions' && (
            <a href="/nyc-sessions" style={{ color: '#ed002a', textDecoration: 'none' }}>
              NYC
            </a>
          )}
          {pathname !== '/amarela' && (
            <a href="/amarela" style={{ color: '#ed002a', textDecoration: 'none' }}>
              LP
            </a>
          )}
          {pathname !== '/co-productions' && (
            <a href="/co-productions" style={{ color: '#ed002a', textDecoration: 'none' }}>
              Co-Prod
            </a>
          )}
        </div>

        {/* Bouton menu hamburger */}
        <button
          onClick={toggleMenu}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '5px',
            color: '#ed002a',
            marginLeft: '-10px'
          }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Menu de navigation */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '60px',
          left: 0,
          right: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderBottom: '1px solid #e5e5e5',
          zIndex: 9999,
          padding: '20px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0px',
            fontFamily: 'Lucida Console, monospace',
            fontSize: '1rem'
          }}>
            <a 
              href="/" 
              style={{ 
                color: 'black', 
                textDecoration: 'none',
                padding: '5px 0'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="/la-serre-aux-papillons" 
              style={{ 
                color: 'black', 
                textDecoration: 'none',
                padding: '5px 0'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              La Serre aux Papillons (Film)
            </a>
            <a 
              href="/nyc-sessions" 
              style={{ 
                color: 'black', 
                textDecoration: 'none',
                padding: '5px 0'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              NYC Sessions (Performance)
            </a>
            <a 
              href="/amarela" 
              style={{ 
                color: 'black', 
                textDecoration: 'none',
                padding: '5px 0'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Amarela (LP)
            </a>
            <a 
              href="/co-productions" 
              style={{ 
                color: 'black', 
                textDecoration: 'none',
                padding: '5px 0'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Co-Productions
            </a>

            {/* Séparateur */}
            <div style={{
              margin: '10px 0',
              paddingTop: '10px'
            }}>
              <div style={{
                color: '#0066cc',
                fontSize: '0.9rem',
                marginBottom: '5px',
                fontWeight: 'bold'
              }}>
                Stream now
              </div>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px'
              }}>
                <a 
                  href="https://music.apple.com/fr/artist/atn-soul/1455380348" 
                  target="_blank"
                  style={{ 
                    color: '#0066cc', 
                    textDecoration: 'none',
                    padding: '3px 0',
                    fontSize: '0.95rem'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Apple Music
                </a>
                <a 
                  href="https://open.spotify.com" 
                  target="_blank"
                  style={{ 
                    color: '#0066cc', 
                    textDecoration: 'none',
                    padding: '3px 0',
                    fontSize: '0.95rem'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Spotify
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Espace pour compenser le header fixe */}
      <div style={{ height: '40px' }}></div>
    </div>
  )
}

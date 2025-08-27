"use client"

import { useState, useEffect, useRef } from "react"
import { MobileHeader } from "@/components/layout/mobile-header"

// Fonction pour détecter si on est sur mobile/tablette
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 1024)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return isMobile
}

export default function NYCSessionsPage() {
  const isMobile = useIsMobile()
  
  // Hooks pour le lecteur audio
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div style={{
      padding: '0',
      margin: '0',
      minHeight: '100vh'
    }}>
    
      {/* Header Mobile - visible seulement sur mobile/tablette */}
      {isMobile && <MobileHeader />}
      
      <div className="responsive-grid" style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '18% 41% 41%',
        gridTemplateRows: isMobile ? 'auto auto' : 'auto',
        height: isMobile ? 'auto' : '95vh',
        gap: isMobile ? '6px' : '0',
        minHeight: isMobile ? 'auto' : '95vh',
        padding: '0'
      }}>

        {/* Colonne 1 - Navigation - visible seulement sur desktop */}
        <div style={{
          padding: '0', 
          height: '90vh',
          borderRadius: '0',
          position: 'relative',
          display: isMobile ? 'none' : 'block'
        }} className="mobile-auto-height">
          {/* Logo ATN SOUL */}
          <a href="/" style={{ textDecoration: 'none' }}>
            <img
              src="/atn-soul-website-typo-producer-paris-ultra-soul-ultrasoul.png"
              alt="ATN SOUL"
              style={{ width: '92.4%', height: 'auto', marginBottom: '46px', marginLeft: '0%' }}
            />
          </a>

          {/* Navigation */}
          <div className="desktop-navigation" style={{ marginBottom: '20px', fontFamily: 'Lucida Console, monospace', fontSize: '0.81rem', marginLeft: '10px' }}>
            <a href="/" style={{ color: 'black', textDecoration: 'none', marginBottom: '17px', display: 'block' }}>About</a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <a href="/la-serre-aux-papillons" style={{ color: 'black', textDecoration: 'none' }}>
                La Serre aux Papillons (Film)
              </a>
              <a href="/nyc-sessions" style={{ color: '#ed002a', textDecoration: 'none' }}>
                NYC Sessions (Performance)
              </a>
              <a href="/amarela" style={{ color: 'black', textDecoration: 'none' }}>
                Amarela (LP)
              </a>
              <a href="/co-productions" style={{ color: 'black', textDecoration: 'none' }}>
                Co-Productions
              </a>
            </div>
          </div>
          
          {/* Lecteur Audio + Spotify */}
          <div style={{ marginTop: '26px' }}>
            <audio ref={audioRef} src="/audio/atnsoul-track.mp3" />
            <div style={{ 
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
              {/* Bouton Play/Pause Audio */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ 
                  color: '#ed002a', 
                  fontFamily: 'Lucida Console, monospace',
                  fontSize: '0.85rem',
                  marginRight: '-5px',
                  WebkitTextStroke: '0.5px black',
                  textStroke: '0.5px black'
                }}>
                  unreleased
                </span>
                <button 
                  onClick={togglePlay}
                  style={{ 
                    padding: '5px 10px', 
                    backgroundColor: 'transparent', 
                    color: '#ed002a', 
                    border: 'none', 
                    cursor: 'pointer',
                    fontSize: '16px',
                    transition: 'color 0.3s ease',
                    WebkitTextStroke: '0.5px black',
                    textStroke: '0.5px black'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'black'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#ed002a'}
                >
                  {isPlaying ? '⏸' : '▶'}
                </button>
              </div>
              
            </div>
          </div>

          {/* Liens streaming en bas à gauche */}
          <div style={{
            position: 'absolute', 
            bottom: '20px', 
            left: '0',
            fontFamily: 'Lucida Console, monospace', 
            fontSize: '0.72rem',
            textAlign: 'left',
            marginLeft: '10px'
          }}>
            <div style={{ color: '#0066cc', marginBottom: '5px' }}>Stream now</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <a href="https://open.spotify.com/artist/your-spotify-id" target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', textDecoration: 'none' }}>
                Spotify
              </a>
              <span style={{ color: '#0066cc' }}>|</span>
              <a href="https://music.apple.com/artist/your-apple-id" target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', textDecoration: 'none' }}>
                Apple Music
              </a>
            </div>
          </div>
        </div>

        {/* Colonne 2 - Contenu NYC Sessions - Desktop */}
        {!isMobile && (
          <div style={{
            padding: '20px',
            height: '87vh',
            borderRadius: '0',
            overflow: 'auto'
          }} className="mobile-auto-height">
            <h1 style={{ color: 'black', fontSize: '2.2rem', marginBottom: '0px', fontWeight: 'bold', fontFamily: 'Helvetica Neue LT Std, sans-serif' }}>
              nyc sessions
            </h1>

            <div style={{ color: 'black', lineHeight: '1.6', fontFamily: 'Lucida Console, monospace', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <p style={{ fontSize: '0.97rem', margin: 0, color: '#00ff00' }}>
                  role : composer & performer
                </p>
                <p style={{ fontWeight: '300', fontSize: '0.97rem', margin: 0, marginRight: '100px' }}>
                  2024
                </p>
              </div>
              
              <p style={{ marginBottom: '15px' }}>
                nyc improvised performances
              </p>
            </div>

            {/* Vidéo 1 - Colonne 2 */}
            <div style={{ marginTop: '30px' }}>
              <p style={{ 
                marginBottom: '0px', 
                fontFamily: 'Lucida Console, monospace', 
                fontSize: '0.85rem',
                color: 'black'
              }}>
                <strong><em>Doubts & Melancholia</em></strong> ft. Declan Sheehy Moss
              </p>
              <p style={{ 
                marginBottom: '3px', 
                fontFamily: 'Lucida Console, monospace', 
                fontSize: '0.85rem',
                color: 'black',
                marginTop: '-1px'
              }}>
                Performed in Industry City, Brooklyn, NYC
              </p>
              <iframe
                src="https://www.youtube.com/embed/-ls8tbfCPaw"
                width="100%"
                height="300"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  borderRadius: '0'
                }}
              ></iframe>
            </div>
          </div>
        )}

        {/* Colonne 3 - Vidéo 2 NYC Sessions - Desktop */}
        {!isMobile && (
          <div style={{
            padding: '20px',
            height: '87vh',
            borderRadius: '0',
            overflow: 'auto'
          }} className="mobile-auto-height">
            {/* Vidéo 2 */}
            <div style={{ marginTop: '157px' }}>
              <p style={{ 
                marginBottom: '0px', 
                fontFamily: 'Lucida Console, monospace', 
                fontSize: '0.85rem',
                color: 'black'
              }}>
                <strong><em>live from the clouds</em></strong> (filmed by Eva Wang)
              </p>
              <p style={{ 
                marginBottom: '1px', 
                fontFamily: 'Lucida Console, monospace', 
                fontSize: '0.85rem',
                color: 'black',
                marginTop: '-1px'
              }}>
                Performed in Manhattan, NYC
              </p>
              <iframe
                src="https://www.youtube.com/embed/D5kdbHVS-4c"
                width="100%"
                height="300"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  borderRadius: '0'
                }}
              ></iframe>
            </div>
          </div>
        )}

        {/* Contenu Mobile */}
        {isMobile && (
          <div style={{
            padding: '50px 0 50px 0',
            height: 'auto',
            borderRadius: '0',
            overflow: 'auto'
          }} className="mobile-auto-height">
            <h1 style={{ color: 'black', fontSize: '1.8rem', marginBottom: '0px', fontWeight: 'bold', fontFamily: 'Helvetica Neue LT Std, sans-serif' }}>
              nyc sessions
            </h1>

            <div style={{ color: 'black', lineHeight: '1.6', fontFamily: 'Lucida Console, monospace', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <p style={{ fontSize: '0.97rem', margin: 0, color: '#00ff00' }}>
                  role : composer & performer
                </p>
                <p style={{ fontWeight: '300', fontSize: '0.97rem', margin: 0, marginRight: '100px' }}>
                  2024
                </p>
              </div>
              
              <p style={{ marginBottom: '15px' }}>
                nyc improvised performances
              </p>
            </div>
          </div>
        )}

        {/* Vidéos Mobile */}
        {isMobile && (
          <div style={{
            padding: '50px -13px 20px 20px',
            height: 'auto',
            borderRadius: '0',
            overflow: 'auto'
          }} className="mobile-auto-height">
            {/* Vidéo 1 */}
            <div style={{ marginBottom: '30px' }}>
              <p style={{ 
                marginBottom: '0px', 
                fontFamily: 'Lucida Console, monospace', 
                fontSize: '0.85rem',
                color: 'black'
              }}>
                <strong><em>Doubts & Melancholia</em></strong> ft. Declan Sheehy Moss
              </p>
              <p style={{ 
                marginBottom: '3px', 
                fontFamily: 'Lucida Console, monospace', 
                fontSize: '0.85rem',
                color: 'black',
                marginTop: '-1px'
              }}>
                Performed in Industry City, Brooklyn, NYC
              </p>
              <iframe
                src="https://www.youtube.com/embed/-ls8tbfCPaw"
                width="100%"
                height="250"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  borderRadius: '0'
                }}
              ></iframe>
            </div>

            {/* Vidéo 2 */}
            <div>
              <p style={{ 
                marginBottom: '0px', 
                fontFamily: 'Lucida Console, monospace', 
                fontSize: '0.85rem',
                color: 'black'
              }}>
                <strong><em>live from the clouds</em></strong> (filmed by Eva Wang)
              </p>
              <p style={{ 
                marginBottom: '3px', 
                fontFamily: 'Lucida Console, monospace', 
                fontSize: '0.85rem',
                color: 'black',
                marginTop: '-1px'
              }}>
                Performed in Manhattan, NYC
              </p>
              <iframe
                src="https://www.youtube.com/embed/D5kdbHVS-4c"
                width="100%"
                height="250"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  borderRadius: '0'
                }}
              ></iframe>
            </div>
          </div>
        )}

      </div>

      {/* Footer */}
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
    </div>
  )
}

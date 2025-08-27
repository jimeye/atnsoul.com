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

export default function CoProductionsPage() {
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

  const coProductions = [
    {
      id: 1,
      image: "/images/co-prod/1-marmaduke-atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-la-serre-aux-papillons.webp",
      title: "Marmaduke",
      subtitle: "SUBSTANCE",
      spotifyUrl: "https://open.spotify.com/playlist/1pIR2Ey52U2TkTa9FF7qJk?si=86763451f7484fb9&nd=1&dlsi=8a7b96862c404370"
    },
    {
      id: 2,
      image: "/images/co-prod/2-95ANTNY-atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-la-serre-aux-papillons.webp",
      title: "95ANTNY",
      subtitle: "UNDER THE SUN",
      spotifyUrl: "https://open.spotify.com/playlist/1pIR2Ey52U2TkTa9FF7qJk?si=86763451f7484fb9&nd=1&dlsi=d4266c1a1e734db7"
    },
    {
      id: 3,
      image: "/images/co-prod/3-MARCO-TIMOSSI-atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-la-serre-aux-papillons.webp",
      title: "Marco Timossi",
      subtitle: "Kiusi",
      spotifyUrl: "https://open.spotify.com/playlist/1pIR2Ey52U2TkTa9FF7qJk?si=86763451f7484fb9&nd=1&dlsi=1a4e5c87c3164b88"
    },
    {
      id: 4,
      image: "/images/co-prod/4-Mike-Nasa-Dexter-Eliot-Klara-atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-la-serre-aux-papillons.webp",
      title: "Mike Nasa, Dexter Eliot, Klara Zangerl",
      subtitle: "Call Me Back (Keep it Steady)",
      spotifyUrl: "https://open.spotify.com/playlist/1pIR2Ey52U2TkTa9FF7qJk?si=86763451f7484fb9&nd=1&dlsi=1270ef2a1201471c"
    },
    {
      id: 5,
      image: "/images/co-prod/5-DEPLORE-NOAMLE-atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-la-serre-aux-papillons.webp",
      title: "DEPLORE NOAMLE",
      subtitle: "New Release",
      spotifyUrl: "https://open.spotify.com/playlist/1pIR2Ey52U2TkTa9FF7qJk?si=86763451f7484fb9&nd=1&dlsi=82f4f4ebd6674f7a"
    }
  ]

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
        gridTemplateColumns: isMobile ? '4fr 6fr' : '18% 41% 41%',
        height: isMobile ? 'calc(100vh - 10px)' : '95vh',
        gap: isMobile ? '6px' : '0',
        minHeight: isMobile ? 'calc(100vh - 10px)' : '95vh',
        padding: '0'
      }}>

        {/* Colonne 1 - Rouge - visible seulement sur desktop */}
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
              <a href="/" style={{ color: 'black', textDecoration: 'none', marginBottom: '17px', display: 'block', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ed002a'} onMouseLeave={(e) => e.currentTarget.style.color = 'black'}>About</a>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <a href="/la-serre-aux-papillons" style={{ color: 'black', textDecoration: 'none' }}>
                  La Serre aux Papillons (Film)
                </a>
                <a href="/nyc-sessions" style={{ color: 'black', textDecoration: 'none' }}>
                  NYC Sessions (Performance)
                </a>
                <a href="/amarela" style={{ color: 'black', textDecoration: 'none' }}>
                  Amarela (LP)
                </a>
                <a href="/co-productions" style={{ color: '#ed002a', textDecoration: 'none' }}>
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
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-start' }}>
                <a href="https://music.apple.com/fr/artist/atn-soul/1455380348" target="_blank" style={{ color: '#0066cc', textDecoration: 'none' }}>
                  Apple Music
                </a>
                <span style={{ color: '#0066cc' }}>|</span>
                <a href="https://open.spotify.com" target="_blank" style={{ color: '#0066cc', textDecoration: 'none' }}>
                  Spotify
                </a>
              </div>
            </div>
          </div>

        {/* Colonne 2 - Contenu Co-Productions - Desktop */}
        {!isMobile && (
          <div style={{
            padding: '20px',
            height: '87vh',
            borderRadius: '0',
            overflow: 'auto'
          }} className="mobile-auto-height">
            <h1 style={{ color: 'black', fontSize: '2.2rem', marginBottom: '0px', fontWeight: 'bold', fontFamily: 'Helvetica Neue LT Std, sans-serif' }}>
              co-productions
            </h1>

            <div style={{ color: 'black', lineHeight: '1.6', fontFamily: 'Lucida Console, monospace', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <p style={{ fontSize: '0.97rem', margin: 0, color: '#00ff00' }}>
                  role : producer & bassist
                </p>
                <p style={{ fontWeight: '300', fontSize: '0.97rem', margin: 0, marginRight: '100px' }}>
                  2024
                </p>
              </div>
              
              <p style={{ marginBottom: '15px' }}>
                a collection of songs I've collaborated on, as a producer, a bassist ...
              </p>
              
              <p style={{ marginBottom: '15px', color: 'black', backgroundColor: '#ffff00' }}>
                work for others
              </p>
            </div>

            {/* Pochettes Vinyl - Colonne 2 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              padding: '20px 0'
            }}>
              {coProductions.map((item) => (
                <a
                  key={item.id}
                  href={item.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    display: 'block'
                  }}
                >
                  <div style={{
                    width: '100%',
                    aspectRatio: '1',
                    borderRadius: '0px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)'
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'
                  }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div style={{
                    marginTop: '10px',
                    textAlign: 'center',
                    fontFamily: 'Lucida Console, monospace',
                    fontSize: '0.8rem'
                  }}>
                    <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>{item.title}</p>
                    <p style={{ margin: '0', color: '#666' }}>{item.subtitle}</p>
                  </div>
                </a>
              ))}
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
              co-productions
            </h1>

            <div style={{ color: 'black', lineHeight: '1.6', fontFamily: 'Lucida Console, monospace', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <p style={{ fontSize: '0.97rem', margin: 0, color: '#00ff00' }}>
                  role : producer & bassist
                </p>
                <p style={{ fontWeight: '300', fontSize: '0.97rem', margin: 0, marginRight: '100px' }}>
                  2024
                </p>
              </div>
              
              <p style={{ marginBottom: '15px' }}>
                a collection of songs I've collaborated on, as a producer, a bassist ...
              </p>
              
              <p style={{ marginBottom: '15px', color: 'black', backgroundColor: '#ffff00' }}>
                work for others
              </p>
            </div>
          </div>
        )}

        {/* Pochettes Vinyl Mobile */}
        {isMobile && (
          <div style={{
            padding: '50px -13px 20px 20px',
            height: 'auto',
            borderRadius: '0',
            overflow: 'auto'
          }} className="mobile-auto-height">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '15px',
              padding: '20px 0'
            }}>
              {coProductions.map((item) => (
                <a
                  key={item.id}
                  href={item.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    display: 'block'
                  }}
                >
                  <div style={{
                    width: '100%',
                    aspectRatio: '1',
                    borderRadius: '0px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)'
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'
                  }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div style={{
                    marginTop: '10px',
                    textAlign: 'center',
                    fontFamily: 'Lucida Console, monospace',
                    fontSize: '0.75rem'
                  }}>
                    <p style={{ margin: '0 0 5px 0', fontWeight: 'bold' }}>{item.title}</p>
                    <p style={{ margin: '0', color: '#666' }}>{item.subtitle}</p>
                  </div>
                </a>
              ))}
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

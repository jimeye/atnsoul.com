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

export default function LaSerrePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const isMobile = useIsMobile()
  const [isHovered, setIsHovered] = useState(false)
  
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

  // Défilement automatique toutes les 2 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % portraitImages.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const portraitImages = [
    "/images/atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-1.jpg",
    "/images/atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-2.jpg",
    "/images/atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-3.jpg"
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
                          <a href="/" style={{ color: 'black', textDecoration: 'none', marginBottom: '17px', display: 'block', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ed002a'} onMouseLeave={(e) => e.currentTarget.style.color = 'black'}>About</a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                              <a href="/la-serre-aux-papillons" style={{ color: '#ed002a', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ed002a'} onMouseLeave={(e) => e.currentTarget.style.color = '#ed002a'}>
                  La Serre aux Papillons (Film)
                </a>
                <a href="/nyc-sessions" style={{ color: 'black', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ed002a'} onMouseLeave={(e) => e.currentTarget.style.color = 'black'}>
                  NYC Sessions (Performance)
                </a>
                <a href="/amarela" style={{ color: 'black', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ed002a'} onMouseLeave={(e) => e.currentTarget.style.color = 'black'}>
                  Amarela (LP)
                </a>
                <a href="/co-productions" style={{ color: 'black', textDecoration: 'none', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ed002a'} onMouseLeave={(e) => e.currentTarget.style.color = 'black'}>
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
                  marginRight: '-5px'
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
                    transition: 'color 0.3s ease'
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

        {/* Colonne 2 - Contenu La Serre aux Papillons */}
        {!isMobile && (
          <div style={{
            padding: '30px',
            height: '90vh',
            borderRadius: '0',
            overflow: 'auto'
          }} className="mobile-auto-height">
            <h1 style={{ color: 'black', fontSize: '1.8rem', marginBottom: '0px', fontWeight: 'bold', fontFamily: 'Helvetica Neue LT Std, sans-serif' }}>
              la serre aux papillons - eva wang
            </h1>

            <div style={{ color: 'black', lineHeight: '1.6', fontFamily: 'Lucida Console, monospace', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <p style={{ fontSize: '0.97rem', margin: 0, color: '#00ff00' }}>
                  role : composer & sound designer
                </p>
                <p style={{ fontWeight: '300', fontSize: '0.97rem', margin: 0, marginRight: '100px' }}>
                  2024
                </p>
              </div>
              
              <p style={{ marginBottom: '15px' }}>
                The Butterfly House by Paris-based filmmaker Eva Wang is a film about metamorphosis, and the transition from adolescence to adulthood.
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                It invites viewers to immerse themselves in its imagery and poetry, inviting them to explore the unspoken depths of the human experience.
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                Wang says : "Ethan skillfully paced La Serre aux Papillons by creating various soundscapes. Drawing from references, words, and colors, he masterfully crafted captivating melodies."
              </p>
              
              <p style={{ marginBottom: '15px', fontWeight: 'bold' }}>
                Tracklist :
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                0:12 - 0:38 La Valse de la Mort (Prélude)
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                1:09 - 1:55 Eveil
              </p>
              
                          <p style={{ marginBottom: '15px' }}>
              2:50 - 4:08 La Valse de la Mort
            </p>
          </div>
        </div>
        )}

        {/* Colonne 3 - Image La Serre aux Papillons */}
        <div 
          style={{
            padding: isMobile ? '50px 0px 20px 0px' : '20px',
            height: isMobile ? 'auto' : '87vh',
            borderRadius: '0',
            position: 'relative',
            overflow: 'hidden'
          }} 
          className="mobile-auto-height"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src="/images/atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-la-serre-aux-papillons.webp"
            alt="La Serre aux Papillons"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: '0'
            }}
          />
          
          {/* Bulle au survol */}
          {isHovered && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              color: 'white',
              padding: '15px 20px',
              borderRadius: '8px',
              fontFamily: 'Lucida Console, monospace',
              fontSize: '0.9rem',
              zIndex: 10,
              cursor: 'pointer',
              transition: 'opacity 0.3s ease'
            }}
            onClick={() => window.open('https://www.girlsinfilm.net/videos/the-butterfly-house', '_blank')}
            >
              distributed through Girls In Film
            </div>
          )}
        </div>

        {/* Colonne 2 - Contenu La Serre aux Papillons - Mobile */}
        {isMobile && (
          <div style={{
            padding: '-20px 0 50px 0',
            height: 'auto',
            borderRadius: '0',
            overflow: 'auto'
          }} className="mobile-auto-height">
            <h1 style={{ color: 'black', fontSize: '1.8rem', marginBottom: '0px', fontWeight: 'bold', fontFamily: 'Helvetica Neue LT Std, sans-serif' }}>
              la serre aux papillons - eva wang
            </h1>

            <div style={{ color: 'black', lineHeight: '1.6', fontFamily: 'Lucida Console, monospace', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <p style={{ fontSize: '0.97rem', margin: 0, color: '#00ff00' }}>
                  role : composer & sound designer
                </p>
                <p style={{ fontWeight: '300', fontSize: '0.97rem', margin: 0, marginRight: '100px' }}>
                  2024
                </p>
              </div>
              
              <p style={{ marginBottom: '15px' }}>
                The Butterfly House by Paris-based filmmaker Eva Wang is a film about metamorphosis, and the transition from adolescence to adulthood.
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                It invites viewers to immerse themselves in its imagery and poetry, inviting them to explore the unspoken depths of the human experience.
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                Wang says : "Ethan skillfully paced La Serre aux Papillons by creating various soundscapes. Drawing from references, words, and colors, he masterfully crafted captivating melodies."
              </p>
              
              <p style={{ marginBottom: '15px', fontWeight: 'bold' }}>
                Tracklist :
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                0:12 - 0:38 La Valse de la Mort (Prélude)
              </p>
              
              <p style={{ marginBottom: '15px' }}>
                1:09 - 1:55 Eveil
              </p>
              
                          <p style={{ marginBottom: '15px' }}>
              2:50 - 4:08 La Valse de la Mort
            </p>
          </div>
        </div>
        )}

      </div>

      {/* Vidéo Vimeo - Mobile */}
      {isMobile && (
        <div style={{
          marginTop: '20px',
          marginBottom: '20px',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)'
        }}>
          <iframe
            src="https://player.vimeo.com/video/937228313?h=1234567890abcdef"
            width="100%"
            height="300"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{
              width: '100%',
              borderRadius: '0'
            }}
          ></iframe>
        </div>
      )}

      {/* Vidéo Vimeo - Desktop */}
      {!isMobile && (
        <div style={{
          marginTop: '20px',
          marginBottom: '20px',
          padding: '0 20px',
          textAlign: 'left'
        }}>
          <iframe
            src="https://player.vimeo.com/video/937228313?h=1234567890abcdef"
            width="122%"
            height="488"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            style={{
              width: '122%',
              borderRadius: '0'
            }}
          ></iframe>
        </div>
      )}



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

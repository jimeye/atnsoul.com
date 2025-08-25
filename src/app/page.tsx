"use client"

import { useState, useEffect, useRef } from "react"
import { MusicPlayer } from "@/components/music/music-player"

const portraitImages = [
  { id: 1, src: "/images/atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-1.jpg", alt: "Portrait 1" },
  { id: 2, src: "/images/atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-2.jpg", alt: "Portrait 2" },
  { id: 3, src: "/images/atn-soul-atnsoul-producer-paris-ultra-soul-ultrasoul-portrait-3.jpg", alt: "Portrait 3" },
]

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showSpotifyWidget, setShowSpotifyWidget] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Défilement automatique toutes les 2 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % portraitImages.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

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

  const toggleSpotifyWidget = () => {
    setShowSpotifyWidget(!showSpotifyWidget)
  }
  return (
    <div style={{ 
      padding: '0', 
      margin: '0', 
      minHeight: '100vh'
    }}>
      <div className="responsive-grid" style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 2.1fr 1.9fr',
        height: '95vh',
        gap: '0',
        minHeight: '95vh'
      }}>
        
        {/* Colonne 1 - Rouge */}
        <div style={{ 
          padding: '0', 
          height: '90vh',
          borderRadius: '0',
          position: 'relative'
        }} className="mobile-auto-height">
          {/* Logo ATN SOUL */}
          <a href="/" style={{ textDecoration: 'none' }}>
            <img 
              src="/atn-soul-website-typo-producer-paris-ultra-soul-ultrasoul.png" 
              alt="ATN SOUL" 
              style={{ width: '88%', height: 'auto', marginBottom: '46px', marginLeft: '0%' }}
            />
          </a>
          
          {/* Navigation */}
          <div style={{ marginBottom: '20px', fontFamily: 'Lucida Console, monospace', fontSize: '0.81rem', marginLeft: '10px' }}>
            <div style={{ color: 'black', marginBottom: '17px' }}>About</div>
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
                  fontSize: '0.81rem',
                  marginRight: '-5px'
                }}>
                  unreleasable
                </span>
                <button 
                  onClick={togglePlay}
                  style={{ 
                    padding: '5px 10px', 
                    backgroundColor: 'transparent', 
                    color: '#ed002a', 
                    border: 'none', 
                    cursor: 'pointer',
                    fontSize: '16px'
                  }}
                >
                  {isPlaying ? '⏸' : '▶'}
                </button>
              </div>
              
              {/* Icône Spotify */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ 
                  color: '#ed002a', 
                  fontFamily: 'Lucida Console, monospace',
                  fontSize: '0.81rem',
                  marginRight: '-5px'
                }}>
                  my playlist
                </span>
                <button 
                  onClick={toggleSpotifyWidget}
                  style={{
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: 0
                  }}
                >
                  <span style={{
                    color: '#ed002a',
                    fontSize: '24px'
                  }}>
                    🎵
                  </span>
                </button>
              </div>

              {/* Widget Spotify (affiché conditionnellement) */}
              {showSpotifyWidget && (
                <div style={{ 
                  marginTop: '10px',
                  width: '100%',
                  maxWidth: '300px'
                }}>
                  <iframe 
                    src="https://open.spotify.com/embed/artist/1R9Vrkow58CeVtMm9nDaJb?utm_source=generator" 
                    width="100%" 
                    height="80" 
                    frameBorder="0" 
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    style={{ borderRadius: '12px' }}
                  />
                </div>
              )}
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
              <a href="https://music.apple.com" target="_blank" style={{ color: '#0066cc', textDecoration: 'none' }}>
                Apple Music
              </a>
              <span style={{ color: '#0066cc' }}>|</span>
              <a href="https://open.spotify.com" target="_blank" style={{ color: '#0066cc', textDecoration: 'none' }}>
                Spotify
              </a>
            </div>
          </div>
        </div>

        {/* Colonne 2 - Texte About */}
        <div style={{ 
          padding: '30px', 
          height: '90vh',
          borderRadius: '0',
          overflow: 'auto'
        }} className="mobile-auto-height">
          <h1 style={{ color: 'black', fontSize: '1.8rem', marginBottom: '20px', fontWeight: 'bold', fontFamily: 'Helvetica Neue LT Std, sans-serif' }}>
            about
          </h1>

          <div style={{ color: 'black', lineHeight: '1.6', fontFamily: 'Lucida Console, monospace', fontSize: '0.81rem' }}>
            <p style={{ marginBottom: '15px' }}>
              Ethan Fellous, also known by his artist name ATN Soul, is a musician, producer, composer, and lyricist from Paris.
            </p>
            
            <p style={{ marginBottom: '15px' }}>
              At the age of 14, he began his career by producing beats on his father&apos;s MPC before developing versatile skills by playing the guitar, bass, piano, clarinet, and singing.
            </p>
            
            <p style={{ marginBottom: '15px' }}>
              After releasing a first Hip Hop / House LP at the age of 17, Ethan moved to Berlin to study music production at University. Ironically, he ended up re-discovering his deep love for Jazz harmony in the Techno capital of the world.
            </p>
            
            <p style={{ marginBottom: '15px' }}>
              Collaborating on two projects with the Israeli singer Noamle, Ethan affirmed his inclination for a contemporary approach to Pop, blending Jazz elements, Electronic sounds and Neo Soul grooves.
            </p>
            
            <p style={{ marginBottom: '15px' }}>
              Upon his return to Paris, he decided to perfect his composition skills by studying Jazz harmony at the conservatory.
            </p>
            
            <p style={{ marginBottom: '15px' }}>
              Currently, Ethan is dedicated to making a transmedia music - documentary film while preparing for his first solo album and producing for other artists.
            </p>
          </div>
        </div>

        {/* Colonne 3 - Slider d'images */}
        <div style={{ 
          padding: '20px', 
          height: '87vh',
          borderRadius: '0',
          position: 'relative',
          overflow: 'hidden'
        }} className="mobile-auto-height">
          {/* Image actuelle avec marge blanche */}
          <div style={{ 
            position: 'absolute', 
            top: '30px', 
            left: '30px', 
            right: '30px', 
            bottom: '30px', 
            backgroundColor: 'white',
            overflow: 'hidden'
          }}>
            <img
              src={portraitImages[currentImageIndex].src}
              alt={portraitImages[currentImageIndex].alt}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }}
            />
          </div>

          {/* Numérotation en haut à droite sur la photo */}
          <div style={{ 
            position: 'absolute', 
            top: '40px', 
            right: '40px',
            color: '#ed002a',
            fontSize: '11px',
            fontWeight: 'bold',
            fontFamily: 'Lucida Console, monospace'
          }}>
            {currentImageIndex + 1}/3
          </div>

          {/* Credit Melanie Elbaz sur la photo 1 */}
          {currentImageIndex === 0 && (
            <div style={{ 
              position: 'absolute', 
              bottom: '40px', 
              left: '40px',
              color: '#ed002a',
              fontSize: '11px',
              fontWeight: 'bold',
              fontFamily: 'Lucida Console, monospace'
            }}>
              Credit: Melanie Elbaz
            </div>
          )}

          {/* Credit Nina Andersson sur la photo 2 */}
          {currentImageIndex === 1 && (
            <div style={{ 
              position: 'absolute', 
              bottom: '40px', 
              left: '40px',
              color: '#ed002a',
              fontSize: '11px',
              fontWeight: 'bold',
              fontFamily: 'Lucida Console, monospace'
            }}>
              Credit: Nina Andersson
            </div>
          )}

          {/* Credit Alan Chicheportiche s"ur la photo 3 */}
          {currentImageIndex === 2 && (
            <div style={{ 
              position: 'absolute', 
              bottom: '40px', 
              left: '40px',
              color: '#ed002a',
              fontSize: '11px',
              fontWeight: 'bold',
              fontFamily: 'Lucida Console, monospace'
            }}>
              Credit: Alan Chicheportiche
            </div>
          )}


        </div>

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
        Website design by  {" "}
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
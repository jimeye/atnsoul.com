"use client"

import { useState, useEffect } from "react"
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
            <a href="/" style={{ color: 'black', textDecoration: 'none', marginBottom: '17px', display: 'block' }}>About</a>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <a href="/la-serre-aux-papillons" style={{ color: '#ed002a', textDecoration: 'none' }}>
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
                <p style={{ fontSize: '0.97rem', margin: 0 }}>
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
        <div style={{
          padding: isMobile ? '50px 0px 20px 0px' : '20px',
          height: isMobile ? 'auto' : '87vh',
          borderRadius: '0',
          position: 'relative',
          overflow: 'hidden'
        }} className="mobile-auto-height">
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
        </div>

        {/* Lien Girls In Film sous la photo - Mobile */}
        {isMobile && (
          <div style={{
            textAlign: 'center',
            marginTop: '-16px',
            marginLeft: 'auto',
            marginRight: 'auto',
            fontFamily: 'Lucida Console, monospace',
            fontSize: '0.9rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <a 
              href="https://www.girlsinfilm.net/videos/the-butterfly-house" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#0066cc',
                textDecoration: 'none'
              }}
            >
              distributed through Girls In Film
            </a>
          </div>
        )}

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
                <p style={{ fontSize: '0.97rem', margin: 0 }}>
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

      {/* Lien Girls In Film sous le carrousel */}
      {!isMobile && (
        <div style={{
          textAlign: 'right',
          marginTop: '-60px',
          marginBottom: '20px',
          paddingRight: '110px',
          fontFamily: 'Lucida Console, monospace',
          fontSize: '1.02rem'
        }}>
          <a 
            href="https://www.girlsinfilm.net/videos/the-butterfly-house" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: '#0066cc',
              textDecoration: 'none'
            }}
          >
            distributed through Girls In Film
          </a>
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

"use client"

import { useState, useEffect } from "react"

export default function LaSerrePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

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
      <div className="responsive-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2.1fr 1.9fr',
        height: '95vh',
        gap: '0',
        minHeight: '95vh'
      }}>

        {/* Colonne 1 - Navigation */}
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
        </div>

        {/* Colonne 2 - Contenu La Serre aux Papillons */}
        <div style={{
          padding: '30px',
          height: '90vh',
          borderRadius: '0',
          overflow: 'auto'
        }} className="mobile-auto-height">
          <h1 style={{ color: 'black', fontSize: '1.8rem', marginBottom: '0px', fontWeight: 'bold', fontFamily: 'Helvetica Neue LT Std, sans-serif' }}>
            la serre aux papillons - eva wang
          </h1>

          <div style={{ color: 'black', lineHeight: '1.6', fontFamily: 'Lucida Console, monospace', fontSize: '0.81rem' }}>
            <p style={{ marginBottom: '15px', fontSize: '0.93rem', textAlign: 'right' }}>
              role : composer & sound designer
            </p>
            
            <p style={{ marginBottom: '15px', fontWeight: '300', fontSize: '0.93rem', textAlign: 'right' }}>
              2024
            </p>
            
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

        {/* Colonne 3 - Image La Serre aux Papillons */}
        <div style={{
          padding: '20px',
          height: '87vh',
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
              objectFit: 'cover',
              borderRadius: '0'
            }}
          />
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

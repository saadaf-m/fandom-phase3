import { useState } from 'react'

function FooterLink({ children }) {
  const [hovered, setHovered] = useState(false)
  return (
    <span
      style={{
        display: 'block',
        fontSize: '14px',
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: '400',
        color: hovered ? '#FF0054' : 'rgba(255,255,255,0.7)',
        marginBottom: '8px',
        cursor: 'pointer',
        transition: 'color 0.15s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </span>
  )
}

export default function Footer() {
  return (
    <footer style={{
      background: '#1A1A1A',
      marginTop: '64px',
      padding: '48px 40px 32px',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '28px',
          letterSpacing: '2px',
          color: '#FF0054',
          marginBottom: '32px',
        }}>FANDOM</div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '32px',
          marginBottom: '40px',
        }}>
          <div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: '700',
              fontSize: '16px',
              color: '#FFFFFF',
              marginBottom: '16px',
            }}>Overview</div>
            <FooterLink>What is Fandom</FooterLink>
            <FooterLink>About</FooterLink>
            <FooterLink>Careers</FooterLink>
            <FooterLink>Contact</FooterLink>
            <FooterLink>Terms &amp; Use</FooterLink>
            <FooterLink>Privacy Policy</FooterLink>
            <FooterLink>Cookies</FooterLink>
          </div>
          <div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: '700',
              fontSize: '16px',
              color: '#FFFFFF',
              marginBottom: '16px',
            }}>Explore</div>
            <FooterLink>Fandom</FooterLink>
            <FooterLink>GameSpot</FooterLink>
            <FooterLink>Metacritic</FooterLink>
            <FooterLink>TV Guide</FooterLink>
            <FooterLink>Honest Entertainment</FooterLink>
          </div>
          <div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: '700',
              fontSize: '16px',
              color: '#FFFFFF',
              marginBottom: '16px',
            }}>Follow Us</div>
            <FooterLink>Facebook</FooterLink>
            <FooterLink>X</FooterLink>
            <FooterLink>YouTube</FooterLink>
            <FooterLink>Instagram</FooterLink>
            <FooterLink>LinkedIn</FooterLink>
          </div>
          <div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: '700',
              fontSize: '16px',
              color: '#FFFFFF',
              marginBottom: '16px',
            }}>Fandom Apps</div>
            <FooterLink>Download on the App Store</FooterLink>
            <FooterLink>Get it on Google Play</FooterLink>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid #2E2E2E',
          paddingTop: '20px',
          textAlign: 'center',
          fontSize: '13px',
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: '400',
          color: 'rgba(255,255,255,0.4)',
        }}>
          © 2024 Fandom, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

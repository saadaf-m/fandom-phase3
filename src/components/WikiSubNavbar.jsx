import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function WikiSubNavbar({ pageCount }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div style={{
      background: '#530242',
      height: '48px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      padding: '0 32px',
      gap: '0',
    }}>
      <Link
        to="/community"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '14px',
          fontWeight: '400',
          color: '#FFFFFF',
          textDecoration: 'none',
          padding: '6px 14px',
          borderRadius: '20px',
          background: hovered ? '#FF0054' : 'transparent',
          transition: 'background 0.15s',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Community
      </Link>

      <div style={{
        width: '1px',
        height: '20px',
        background: 'rgba(255,255,255,0.3)',
        margin: '0 16px',
      }} />

      <span style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '14px',
        fontWeight: '700',
        color: '#FFFFFF',
        whiteSpace: 'nowrap',
      }}>
        {pageCount} Pages
      </span>
    </div>
  )
}

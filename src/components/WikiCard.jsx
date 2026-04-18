import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function WikiCard({ title, description, meta, to, color = '#888888' }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        background: '#FFFFFF',
        border: '1px solid #DDDDDD',
        borderRadius: '8px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '180px',
        boxShadow: hovered ? '0 6px 20px rgba(0,0,0,0.14)' : '0 2px 8px rgba(0,0,0,0.08)',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        background: color,
        height: '90px',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '10px 12px',
      }}>
        <span style={{
          fontSize: '11px',
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: '600',
          color: 'rgba(255,255,255,0.65)',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}>Wiki</span>
      </div>
      <div style={{
        padding: '12px 14px 14px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
      }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: '700',
          fontSize: '16px',
          color: '#1A1A1A',
          lineHeight: '1.3',
          marginBottom: '4px',
        }}>{title}</div>
        {description && (
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '13px',
            color: '#666666',
            lineHeight: '1.4',
            marginBottom: '6px',
          }}>{description}</div>
        )}
        {meta && (
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '12px',
            color: '#999999',
            marginBottom: '10px',
          }}>{meta}</div>
        )}
        <div style={{ flex: 1 }} />
        {to ? (
          <Link to={to} style={{
            background: '#FF0054',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '6px',
            padding: '7px 12px',
            fontSize: '13px',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: '600',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'block',
            textAlign: 'center',
            marginTop: '8px',
          }}>View Wiki</Link>
        ) : (
          <button style={{
            background: '#FF0054',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '6px',
            padding: '7px 12px',
            fontSize: '13px',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: '600',
            cursor: 'pointer',
            textAlign: 'center',
            marginTop: '8px',
          }}>View Wiki</button>
        )}
      </div>
    </div>
  )
}

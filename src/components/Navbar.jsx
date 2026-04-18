import { useState } from 'react'
import { Link } from 'react-router-dom'

function Tooltip({ label, children }) {
  const [show, setShow] = useState(false)
  return (
    <div
      style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div style={{
          position: 'absolute',
          bottom: 'calc(100% + 8px)',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#1A1A1A',
          color: '#FFFFFF',
          fontSize: '12px',
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: '400',
          padding: '4px 10px',
          borderRadius: '4px',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          zIndex: 400,
          border: '1px solid #333333',
        }}>
          {label}
        </div>
      )}
    </div>
  )
}

function NavLink({ to, children }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to={to}
      style={{
        color: '#FFFFFF',
        textDecoration: 'none',
        fontSize: '15px',
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: '400',
        whiteSpace: 'nowrap',
        padding: '4px 0',
        borderBottom: hovered ? '2px solid #FF0054' : '2px solid transparent',
        transition: 'border-color 0.15s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </Link>
  )
}

function DropdownItem({ to, onClick, children }) {
  const [hovered, setHovered] = useState(false)
  return (
    <Link
      to={to}
      style={{
        display: 'block',
        padding: '11px 16px',
        color: hovered ? '#FF0054' : '#1A1A1A',
        fontSize: '14px',
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: '400',
        textDecoration: 'none',
        borderBottom: '1px solid #F0F0F0',
        transition: 'color 0.15s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      <nav style={{
        background: '#1A1A1A',
        color: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        padding: '0 32px',
        height: '56px',
        gap: '28px',
      }}>
        <Link to="/" style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '26px',
          letterSpacing: '2px',
          color: '#FF0054',
          textDecoration: 'none',
          flexShrink: 0,
        }}>FANDOM</Link>

        <NavLink to="/community">Community</NavLink>

        <div style={{ flex: 1 }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link to="/account/post" style={{
            background: '#FF0054',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '8px',
            padding: '8px 18px',
            fontSize: '14px',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: '600',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block',
            whiteSpace: 'nowrap',
          }}>Start a Wiki</Link>

          <Tooltip label="Notifications">
            <Link to="/community" style={{
              background: 'transparent',
              border: '1px solid #3A3A3A',
              borderRadius: '6px',
              color: '#FFFFFF',
              padding: '7px 11px',
              fontSize: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              lineHeight: 1,
              textDecoration: 'none',
            }}>
              🔔
            </Link>
          </Tooltip>

          <div style={{ position: 'relative' }}>
            <Tooltip label="My Account">
              <button
                style={{
                  background: 'transparent',
                  border: '1px solid #3A3A3A',
                  borderRadius: '6px',
                  color: '#FFFFFF',
                  padding: '7px 12px',
                  fontSize: '14px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: '400',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  whiteSpace: 'nowrap',
                }}
                onClick={() => setOpen(o => !o)}
                aria-expanded={open}
              >
                👤 ▾
              </button>
            </Tooltip>
            {open && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                right: 0,
                background: '#FFFFFF',
                border: '1px solid #DDDDDD',
                borderRadius: '8px',
                minWidth: '210px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                zIndex: 200,
                overflow: 'hidden',
              }}>
                <DropdownItem to="/account" onClick={() => setOpen(false)}>View Profile</DropdownItem>
                <DropdownItem to="/account" onClick={() => setOpen(false)}>Visit My Fandom</DropdownItem>
                <DropdownItem to="/account" onClick={() => setOpen(false)}>Activity</DropdownItem>
                <DropdownItem to="/account" onClick={() => setOpen(false)}>Find a New Wiki</DropdownItem>
                <Link
                  to="/account"
                  style={{
                    display: 'block',
                    padding: '11px 16px',
                    color: '#1A1A1A',
                    fontSize: '14px',
                    fontFamily: "'DM Sans', sans-serif",
                    textDecoration: 'none',
                  }}
                  onClick={() => setOpen(false)}
                >
                  Recently Viewed Wikis
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

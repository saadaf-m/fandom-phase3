import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const styles = {
  wrapper: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  banner: {
    background: '#FFD700',
    color: '#1A1A1A',
    textAlign: 'center',
    padding: '6px 16px',
    fontSize: '12px',
    fontWeight: '500',
    borderBottom: '1px solid #DDDDDD',
  },
  nav: {
    background: '#1A1A1A',
    color: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    padding: '0 24px',
    height: '52px',
    gap: '24px',
  },
  logo: {
    fontWeight: '700',
    fontSize: '20px',
    letterSpacing: '1px',
    color: '#FFFFFF',
    textDecoration: 'none',
    marginRight: '8px',
    flexShrink: 0,
  },
  navLink: {
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '14px',
    whiteSpace: 'nowrap',
    padding: '4px 0',
    borderBottom: '2px solid transparent',
    transition: 'border-color 0.15s',
  },
  spacer: { flex: 1 },
  rightGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  ctaBtn: {
    background: '#444444',
    color: '#FFFFFF',
    border: '1px solid #666666',
    borderRadius: '4px',
    padding: '6px 12px',
    fontSize: '13px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    display: 'inline-block',
  },
  dropdownWrapper: {
    position: 'relative',
  },
  dropdownToggle: {
    background: 'transparent',
    border: '1px solid #555555',
    borderRadius: '4px',
    color: '#FFFFFF',
    padding: '6px 10px',
    fontSize: '13px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    whiteSpace: 'nowrap',
  },
  dropdownMenu: {
    position: 'absolute',
    top: 'calc(100% + 6px)',
    right: 0,
    background: '#FFFFFF',
    border: '1px solid #DDDDDD',
    borderRadius: '4px',
    minWidth: '190px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    zIndex: 200,
  },
  dropdownItem: {
    display: 'block',
    padding: '10px 16px',
    color: '#1A1A1A',
    fontSize: '14px',
    textDecoration: 'none',
    borderBottom: '1px solid #F0F0F0',
  },
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div style={styles.wrapper}>
      <div style={styles.banner}>
        ⚠️ This is a low-fidelity wireframe for usability testing purposes only
      </div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.logo}>FANDOM</Link>

        <Link to="/community" style={styles.navLink}>Community</Link>
        <Link to="/community" style={styles.navLink}>Notifications</Link>

        <div style={styles.spacer} />

        <div style={styles.rightGroup}>
          <Link to="/account/post" style={styles.ctaBtn}>Start a Wiki</Link>
          <Link to="/account" style={styles.ctaBtn}>Login / Create Account</Link>

          <div style={styles.dropdownWrapper}>
            <button
              style={styles.dropdownToggle}
              onClick={() => setOpen(o => !o)}
              aria-expanded={open}
            >
              My Account ▾
            </button>
            {open && (
              <div style={styles.dropdownMenu}>
                <Link to="/account" style={styles.dropdownItem} onClick={() => setOpen(false)}>View Profile</Link>
                <Link to="/account" style={styles.dropdownItem} onClick={() => setOpen(false)}>Visit My Fandom</Link>
                <Link to="/account" style={styles.dropdownItem} onClick={() => setOpen(false)}>Activity</Link>
                <Link to="/account" style={styles.dropdownItem} onClick={() => setOpen(false)}>Find a New Fandom</Link>
                <Link to="/account" style={{ ...styles.dropdownItem, borderBottom: 'none' }} onClick={() => setOpen(false)}>Recently Viewed Wikis</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

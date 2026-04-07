const styles = {
  footer: {
    background: '#FFFFFF',
    borderTop: '1px solid #DDDDDD',
    marginTop: '48px',
    padding: '32px 40px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '32px',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  col: {},
  heading: {
    fontWeight: '700',
    fontSize: '13px',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    marginBottom: '12px',
    color: '#1A1A1A',
  },
  link: {
    display: 'block',
    fontSize: '13px',
    color: '#555555',
    textDecoration: 'none',
    marginBottom: '6px',
    cursor: 'pointer',
  },
  bottom: {
    borderTop: '1px solid #EEEEEE',
    marginTop: '24px',
    paddingTop: '16px',
    textAlign: 'center',
    fontSize: '12px',
    color: '#888888',
    maxWidth: '1100px',
    margin: '24px auto 0',
  },
}

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.grid}>
        <div style={styles.col}>
          <div style={styles.heading}>Overview</div>
          <span style={styles.link}>What is Fandom</span>
          <span style={styles.link}>About</span>
          <span style={styles.link}>Careers</span>
          <span style={styles.link}>Contact</span>
          <span style={styles.link}>Terms &amp; Use</span>
          <span style={styles.link}>Privacy Policy</span>
          <span style={styles.link}>Cookies</span>
        </div>
        <div style={styles.col}>
          <div style={styles.heading}>Explore</div>
          <span style={styles.link}>Fandom</span>
          <span style={styles.link}>GameSpot</span>
          <span style={styles.link}>Metacritic</span>
          <span style={styles.link}>TV Guide</span>
          <span style={styles.link}>Honest Entertainment</span>
        </div>
        <div style={styles.col}>
          <div style={styles.heading}>Follow Us</div>
          <span style={styles.link}>Facebook</span>
          <span style={styles.link}>X</span>
          <span style={styles.link}>YouTube</span>
          <span style={styles.link}>Instagram</span>
          <span style={styles.link}>LinkedIn</span>
        </div>
        <div style={styles.col}>
          <div style={styles.heading}>Fandom Apps</div>
          <span style={styles.link}>Download on the App Store</span>
          <span style={styles.link}>Get it on Google Play</span>
        </div>
      </div>
      <div style={styles.bottom}>
        © 2024 Fandom, Inc. — Low-fidelity wireframe prototype for usability testing only.
      </div>
    </footer>
  )
}

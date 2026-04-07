import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const styles = {
  page: { minHeight: '100vh', display: 'flex', flexDirection: 'column' },
  main: { flex: 1, maxWidth: '1100px', margin: '0 auto', padding: '32px 24px', width: '100%' },
  profileHeader: {
    background: '#FFFFFF',
    border: '1px solid #DDDDDD',
    borderRadius: '6px',
    padding: '24px',
    display: 'flex',
    gap: '20px',
    alignItems: 'center',
    marginBottom: '24px',
  },
  avatarLarge: {
    width: '80px',
    height: '80px',
    background: '#DDDDDD',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    color: '#888888',
    flexShrink: 0,
  },
  profileName: { fontSize: '22px', fontWeight: '700', marginBottom: '4px' },
  profileMeta: { fontSize: '13px', color: '#666666', marginBottom: '10px' },
  statsRow: { display: 'flex', gap: '20px', flexWrap: 'wrap' },
  stat: { textAlign: 'center' },
  statNum: { fontSize: '18px', fontWeight: '700' },
  statLabel: { fontSize: '11px', color: '#666666' },
  editBtn: {
    marginLeft: 'auto',
    background: '#FFFFFF',
    border: '1px solid #DDDDDD',
    borderRadius: '4px',
    padding: '8px 16px',
    fontSize: '13px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  },
  section: {
    background: '#FFFFFF',
    border: '1px solid #DDDDDD',
    borderRadius: '6px',
    padding: '20px',
  },
  sectionTitle: {
    fontSize: '15px',
    fontWeight: '700',
    marginBottom: '14px',
    paddingBottom: '8px',
    borderBottom: '1px solid #EEEEEE',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #F5F5F5',
    fontSize: '14px',
    cursor: 'pointer',
  },
  chevron: { color: '#AAAAAA', fontSize: '14px' },
  wikiRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '8px 0',
    borderBottom: '1px solid #F5F5F5',
  },
  wikiThumb: {
    width: '36px',
    height: '36px',
    background: '#E8E8E8',
    border: '1px solid #DDDDDD',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '9px',
    color: '#888888',
    flexShrink: 0,
  },
  wikiName: { fontSize: '13px', fontWeight: '600' },
  wikiMeta: { fontSize: '11px', color: '#888888' },
  activityItem: {
    padding: '8px 0',
    borderBottom: '1px solid #F5F5F5',
    fontSize: '13px',
    color: '#444444',
  },
  activityTime: { fontSize: '11px', color: '#888888', marginTop: '2px' },
}

const recentWikis = [
  { name: 'Zelda Encyclopedia', meta: 'Games · Viewed 1h ago' },
  { name: 'Death Note Wiki', meta: 'Anime · Viewed 3h ago' },
  { name: 'GTA Wiki', meta: 'Games · Viewed yesterday' },
  { name: 'Taylor Swift Wiki', meta: 'Music · Viewed 2 days ago' },
]

const contributions = [
  { text: 'Edited "Rupee" article on Zelda Encyclopedia', time: '2 hours ago' },
  { text: 'Added image to "Light Yagami" on Death Note Wiki', time: '1 day ago' },
  { text: 'Created page "Timeline of Events" on GTA Wiki', time: '3 days ago' },
]

export default function AccountPage() {
  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.main}>
        <div style={styles.profileHeader}>
          <div style={styles.avatarLarge}>[Avatar]</div>
          <div>
            <div style={styles.profileName}>FandomUser_01</div>
            <div style={styles.profileMeta}>Member since January 2022 · Contributor</div>
            <div style={styles.statsRow}>
              <div style={styles.stat}><div style={styles.statNum}>142</div><div style={styles.statLabel}>Edits</div></div>
              <div style={styles.stat}><div style={styles.statNum}>23</div><div style={styles.statLabel}>Pages Created</div></div>
              <div style={styles.stat}><div style={styles.statNum}>8</div><div style={styles.statLabel}>Wikis Followed</div></div>
              <div style={styles.stat}><div style={styles.statNum}>3</div><div style={styles.statLabel}>Collections</div></div>
            </div>
          </div>
          <button style={styles.editBtn}>Edit Profile</button>
        </div>

        <div style={styles.grid}>
          <div style={styles.section}>
            <div style={styles.sectionTitle}>My Account</div>
            {[
              { label: 'View Profile' },
              { label: 'Visit My Fandom' },
              { label: 'Activity' },
              { label: 'Find a New Fandom' },
            ].map(item => (
              <div key={item.label} style={styles.menuItem}>
                <span>{item.label}</span>
                <span style={styles.chevron}>›</span>
              </div>
            ))}
          </div>

          <div style={styles.section}>
            <div style={styles.sectionTitle}>Recently Viewed Wikis</div>
            {recentWikis.map((wiki, i) => (
              <div key={i} style={styles.wikiRow}>
                <div style={styles.wikiThumb}>[W]</div>
                <div>
                  <div style={styles.wikiName}>{wiki.name}</div>
                  <div style={styles.wikiMeta}>{wiki.meta}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.section}>
            <div style={styles.sectionTitle}>My Contributions</div>
            {contributions.map((c, i) => (
              <div key={i} style={styles.activityItem}>
                <div>{c.text}</div>
                <div style={styles.activityTime}>{c.time}</div>
              </div>
            ))}
            <div style={{ marginTop: '12px' }}>
              <button style={{ background: '#FFFFFF', border: '1px solid #DDDDDD', borderRadius: '4px', padding: '6px 14px', fontSize: '13px', cursor: 'pointer' }}>
                View All Contributions
              </button>
            </div>
          </div>

          <div style={styles.section}>
            <div style={styles.sectionTitle}>Quick Actions</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link to="/account/post" style={{ background: '#333333', color: '#FFFFFF', border: 'none', borderRadius: '4px', padding: '10px 16px', fontSize: '13px', cursor: 'pointer', textDecoration: 'none', textAlign: 'center' }}>
                Start a New Wiki
              </Link>
              <Link to="/community" style={{ background: '#FFFFFF', color: '#1A1A1A', border: '1px solid #DDDDDD', borderRadius: '4px', padding: '10px 16px', fontSize: '13px', cursor: 'pointer', textDecoration: 'none', textAlign: 'center' }}>
                Go to Community Feed
              </Link>
              <button style={{ background: '#FFFFFF', color: '#1A1A1A', border: '1px solid #DDDDDD', borderRadius: '4px', padding: '10px 16px', fontSize: '13px', cursor: 'pointer' }}>
                Account Settings
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

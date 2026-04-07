import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const styles = {
  page: { minHeight: '100vh', display: 'flex', flexDirection: 'column' },
  main: { flex: 1, maxWidth: '1100px', margin: '0 auto', padding: '32px 24px', width: '100%' },
  breadcrumb: { fontSize: '13px', color: '#666666', marginBottom: '16px' },
  hero: {
    background: '#FFFFFF',
    border: '1px solid #DDDDDD',
    borderRadius: '6px',
    padding: '24px',
    display: 'flex',
    gap: '24px',
    marginBottom: '32px',
    alignItems: 'flex-start',
  },
  thumb: {
    width: '120px',
    minWidth: '120px',
    height: '160px',
    background: '#E8E8E8',
    border: '1px solid #DDDDDD',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '11px',
    color: '#888888',
    textAlign: 'center',
  },
  heroInfo: { flex: 1 },
  wikiTitle: { fontSize: '28px', fontWeight: '700', marginBottom: '8px' },
  wikiMeta: { fontSize: '13px', color: '#666666', marginBottom: '12px' },
  wikiDesc: { fontSize: '15px', lineHeight: '1.6', color: '#333333', marginBottom: '16px' },
  stats: { display: 'flex', gap: '24px', flexWrap: 'wrap' },
  statItem: { textAlign: 'center' },
  statNum: { fontSize: '20px', fontWeight: '700' },
  statLabel: { fontSize: '11px', color: '#666666' },
  actionRow: { display: 'flex', gap: '10px', marginTop: '16px' },
  btn: {
    background: '#333333',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 16px',
    fontSize: '13px',
    cursor: 'pointer',
  },
  outlineBtn: {
    background: '#FFFFFF',
    color: '#1A1A1A',
    border: '1px solid #DDDDDD',
    borderRadius: '4px',
    padding: '8px 16px',
    fontSize: '13px',
    cursor: 'pointer',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '12px',
    paddingBottom: '8px',
    borderBottom: '2px solid #DDDDDD',
  },
  section: {
    background: '#FFFFFF',
    border: '1px solid #DDDDDD',
    borderRadius: '6px',
    padding: '20px',
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
    gap: '12px',
  },
  charCard: {
    background: '#F5F5F5',
    border: '1px solid #DDDDDD',
    borderRadius: '4px',
    padding: '12px',
    textAlign: 'center',
  },
  charThumb: {
    width: '60px',
    height: '60px',
    background: '#DDDDDD',
    borderRadius: '50%',
    margin: '0 auto 8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '10px',
    color: '#888888',
  },
  charName: { fontSize: '13px', fontWeight: '600' },
  charRole: { fontSize: '11px', color: '#666666' },
  episodeRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #F0F0F0',
    fontSize: '14px',
  },
  epNum: { color: '#888888', fontSize: '13px', minWidth: '60px' },
  epTitle: { flex: 1 },
  epDuration: { color: '#888888', fontSize: '12px' },
}

const characters = [
  { name: 'Light Yagami', role: 'Protagonist' },
  { name: 'L', role: 'Antagonist' },
  { name: 'Ryuk', role: 'Shinigami' },
  { name: 'Misa Amane', role: 'Supporting' },
  { name: 'Near', role: 'Detective' },
  { name: 'Mello', role: 'Detective' },
]

const episodes = [
  { num: 'Ep 01', title: 'Rebirth', duration: '23 min' },
  { num: 'Ep 02', title: 'Confrontation', duration: '23 min' },
  { num: 'Ep 03', title: 'Dealings', duration: '23 min' },
  { num: 'Ep 04', title: 'Pursuit', duration: '23 min' },
  { num: 'Ep 05', title: 'Tactics', duration: '23 min' },
]

export default function AnimeDeathNotePage() {
  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.main}>
        <div style={styles.breadcrumb}>
          <Link to="/">Home</Link> › <Link to="/anime">Anime</Link> › <Link to="/anime/browse">Browse All</Link> › Death Note
        </div>

        <div style={styles.hero}>
          <div style={styles.thumb}>[Cover Art]</div>
          <div style={styles.heroInfo}>
            <h1 style={styles.wikiTitle}>Death Note Wiki</h1>
            <div style={styles.wikiMeta}>Thriller · Psychological · Supernatural · 6,400 pages</div>
            <p style={styles.wikiDesc}>
              Death Note is a psychological thriller anime based on the manga by Tsugumi Ohba and Takeshi Obata.
              The story follows Light Yagami, a high school student who discovers a supernatural notebook that allows
              him to kill anyone whose name he writes in it. As he attempts to create a utopia free of crime,
              the world's best detective — known only as L — takes up the challenge to stop him.
            </p>
            <div style={styles.stats}>
              <div style={styles.statItem}><div style={styles.statNum}>37</div><div style={styles.statLabel}>Episodes</div></div>
              <div style={styles.statItem}><div style={styles.statNum}>6,400</div><div style={styles.statLabel}>Wiki Pages</div></div>
              <div style={styles.statItem}><div style={styles.statNum}>1.2M</div><div style={styles.statLabel}>Monthly Visitors</div></div>
              <div style={styles.statItem}><div style={styles.statNum}>2006</div><div style={styles.statLabel}>Year Released</div></div>
            </div>
            <div style={styles.actionRow}>
              <button style={styles.btn}>Follow Wiki</button>
              <button style={styles.outlineBtn}>Add to Collection</button>
              <button style={styles.outlineBtn}>Mark as Watched</button>
            </div>
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Plot Overview</h2>
          <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#333333' }}>
            When Light Yagami finds the Death Note, he begins using it to kill criminals under the alias "Kira."
            As Kira gains a worldwide following, the secretive detective L becomes his primary adversary.
            The series escalates into a high-stakes battle of wits between two geniuses — one seeking to become
            the god of a new world, the other determined to bring him to justice. The story explores themes of
            justice, morality, power, and the consequences of absolute conviction.
          </p>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Characters</h2>
          <div style={styles.grid}>
            {characters.map((c, i) => (
              <div key={i} style={styles.charCard}>
                <div style={styles.charThumb}>[Img]</div>
                <div style={styles.charName}>{c.name}</div>
                <div style={styles.charRole}>{c.role}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Episodes</h2>
          {episodes.map((ep, i) => (
            <div key={i} style={styles.episodeRow}>
              <span style={styles.epNum}>{ep.num}</span>
              <span style={styles.epTitle}>{ep.title}</span>
              <span style={styles.epDuration}>{ep.duration}</span>
            </div>
          ))}
          <div style={{ marginTop: '12px' }}>
            <button style={styles.outlineBtn}>View All 37 Episodes</button>
          </div>
        </div>

        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Recent Wiki Activity</h2>
          {[
            { user: 'WikiEditor_42', action: 'Updated "Shinigami Eyes" page', time: '2h ago' },
            { user: 'AnimeFan_99', action: 'Added new image to Light Yagami article', time: '5h ago' },
            { user: 'LoreKeeper', action: 'Created page: "Death Note Rules (Complete List)"', time: '1d ago' },
          ].map((item, i) => (
            <div key={i} style={{ ...styles.episodeRow }}>
              <span style={{ fontWeight: '600', fontSize: '13px', minWidth: '120px' }}>{item.user}</span>
              <span style={{ flex: 1, fontSize: '13px', color: '#444444' }}>{item.action}</span>
              <span style={styles.epDuration}>{item.time}</span>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

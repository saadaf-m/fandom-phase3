import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WikiCard from '../components/WikiCard'

const styles = {
  page: { minHeight: '100vh', display: 'flex', flexDirection: 'column' },
  main: { flex: 1 },
  hero: {
    background: '#FFFFFF',
    borderBottom: '1px solid #DDDDDD',
    padding: '40px 24px',
    textAlign: 'center',
  },
  heroTitle: { fontSize: '14px', fontWeight: '600', color: '#555555', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' },
  heroHeading: { fontSize: '32px', fontWeight: '700', marginBottom: '24px' },
  searchBar: {
    display: 'flex',
    maxWidth: '560px',
    margin: '0 auto 16px',
    border: '1px solid #DDDDDD',
    borderRadius: '6px',
    overflow: 'hidden',
    background: '#FFFFFF',
  },
  searchInput: {
    flex: 1,
    border: 'none',
    padding: '12px 16px',
    fontSize: '15px',
    outline: 'none',
    fontFamily: 'inherit',
  },
  searchBtn: {
    background: '#333333',
    color: '#FFFFFF',
    border: 'none',
    padding: '12px 20px',
    fontSize: '14px',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  trendingRow: {
    display: 'flex',
    gap: '8px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  trendingChip: {
    background: '#F0F0F0',
    border: '1px solid #DDDDDD',
    borderRadius: '20px',
    padding: '5px 14px',
    fontSize: '13px',
    cursor: 'pointer',
  },
  content: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '32px 24px',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
    paddingBottom: '8px',
    borderBottom: '2px solid #DDDDDD',
  },
  sectionTitle: { fontSize: '20px', fontWeight: '700' },
  sectionLabel: { fontSize: '14px', fontWeight: '600', color: '#333333', marginBottom: '2px' },
  sectionSubheader: { fontSize: '13px', color: '#666666', marginBottom: '16px', marginTop: '0' },
  browseBtn: {
    background: '#333333',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '4px',
    padding: '6px 14px',
    fontSize: '13px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  cardRow: {
    display: 'flex',
    gap: '16px',
    overflowX: 'auto',
    paddingBottom: '8px',
    marginBottom: '40px',
  },
  savedSection: {
    background: '#FFFFFF',
    border: '1px solid #DDDDDD',
    borderRadius: '6px',
    padding: '24px',
    marginTop: '8px',
  },
  savedTitle: { fontSize: '18px', fontWeight: '700', marginBottom: '16px' },
  savedGrid: { display: 'flex', gap: '16px', flexWrap: 'wrap' },
  savedCard: {
    flex: '1 1 140px',
    background: '#F5F5F5',
    border: '1px solid #DDDDDD',
    borderRadius: '6px',
    padding: '16px',
    textAlign: 'center',
  },
  savedLabel: { fontWeight: '600', fontSize: '15px', marginBottom: '6px' },
  savedMeta: { fontSize: '12px', color: '#666666' },
}

const sections = [
  {
    label: 'TV',
    path: '/tv',
    cards: [
      { title: 'Featured Series 1', meta: 'Drama · 12,400 pages' },
      { title: 'Featured Series 2', meta: 'Sci-Fi · 8,900 pages' },
      { title: 'Featured Series 3', meta: 'Fantasy · 6,200 pages' },
    ],
  },
  {
    label: 'Movies',
    path: '/movies',
    cards: [
      { title: 'Featured Movie 1', meta: 'Action · 9,100 pages' },
      { title: 'Featured Movie 2', meta: 'Thriller · 5,800 pages' },
      { title: 'Featured Movie 3', meta: 'Animation · 4,300 pages' },
    ],
  },
  {
    label: 'Games',
    path: '/games',
    cards: [
      { title: 'COD 3', meta: 'Shooter · 22,000 pages' },
      { title: 'Zelda', meta: 'Adventure · 31,000 pages' },
      { title: 'Tomb Raider', meta: 'Action · 14,500 pages' },
    ],
  },
  {
    label: 'Anime',
    path: '/anime',
    cards: [
      { title: 'Jujutsu Kaisen', meta: 'Action · 18,200 pages' },
      { title: 'My Hero Academia', meta: 'Adventure · 27,600 pages' },
      { title: 'One Piece', meta: 'Adventure · 42,000 pages' },
    ],
  },
  {
    label: 'Music',
    path: '/music',
    cards: [
      { title: 'Beyoncé', meta: 'R&B · 3,400 pages' },
      { title: 'Taylor Swift', meta: 'Pop · 8,700 pages' },
      { title: 'The Beatles', meta: 'Rock · 6,100 pages' },
    ],
  },
]

export default function HomePage() {
  const [query, setQuery] = useState('')

  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.main}>
        <div style={styles.hero}>
          <div style={styles.heroTitle}>What&apos;s Hot Right Now?</div>
          <h1 style={styles.heroHeading}>Find Your Fandom</h1>
          <div style={styles.searchBar}>
            <input
              style={styles.searchInput}
              type="text"
              placeholder="Search wikis, characters, shows..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button style={styles.searchBtn}>Search</button>
          </div>
          <div style={styles.trendingRow}>
            {['Trending A', 'Trending B', 'Trending C', 'Browse Archives'].map(label => (
              <span key={label} style={styles.trendingChip}>{label}</span>
            ))}
          </div>
        </div>

        <div style={styles.content}>
          {sections.map(section => (
            <section key={section.label}>
              <div style={styles.sectionHeader}>
                <h2 style={styles.sectionTitle}>{section.label}</h2>
                <Link to={section.path} style={styles.browseBtn}>Browse All</Link>
              </div>
              <div style={styles.sectionLabel}>Featured</div>
              <p style={styles.sectionSubheader}>What&apos;s hot right now</p>
              <div style={styles.cardRow}>
                {section.cards.map((card, i) => (
                  <WikiCard key={i} title={card.title} meta={card.meta} to={section.path} />
                ))}
              </div>
            </section>
          ))}

          <section>
            <h2 style={{ ...styles.sectionTitle, marginBottom: '16px' }}>Saved</h2>
            <div style={styles.savedSection}>
              <div style={styles.savedGrid}>
                {[
                  { label: 'Collections', meta: '3 collections saved' },
                  { label: 'Wish List', meta: '12 items' },
                  { label: 'Progress', meta: '5 in progress' },
                ].map(item => (
                  <div key={item.label} style={styles.savedCard}>
                    <div style={styles.savedLabel}>{item.label}</div>
                    <div style={styles.savedMeta}>{item.meta}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

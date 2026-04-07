import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WikiCard from '../components/WikiCard'

const allWikis = [
  { title: 'One Piece Wiki', meta: 'Adventure · 42,000 pages' },
  { title: 'Naruto Wiki', meta: 'Action · 38,000 pages' },
  { title: 'Dragon Ball Wiki', meta: 'Action · 35,500 pages' },
  { title: 'My Hero Academia Wiki', meta: 'Adventure · 27,600 pages' },
  { title: 'Attack on Titan Wiki', meta: 'Action · 21,300 pages' },
  { title: 'Jujutsu Kaisen Wiki', meta: 'Action · 18,200 pages' },
  { title: 'Demon Slayer Wiki', meta: 'Action · 14,800 pages' },
  { title: 'Death Note Wiki', meta: 'Thriller · 6,400 pages', to: '/anime/browse/death-note' },
  { title: 'Fullmetal Alchemist Wiki', meta: 'Adventure · 12,600 pages' },
  { title: 'Chainsaw Man Wiki', meta: 'Action · 9,100 pages' },
  { title: 'Hunter x Hunter Wiki', meta: 'Adventure · 16,800 pages' },
  { title: 'Bleach Wiki', meta: 'Action · 25,400 pages' },
]

const styles = {
  page: { minHeight: '100vh', display: 'flex', flexDirection: 'column' },
  main: { flex: 1, maxWidth: '1100px', margin: '0 auto', padding: '32px 24px', width: '100%' },
  breadcrumb: { fontSize: '13px', color: '#666666', marginBottom: '16px' },
  topRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' },
  heading: { fontSize: '26px', fontWeight: '700' },
  filterInput: {
    border: '1px solid #DDDDDD',
    borderRadius: '4px',
    padding: '8px 12px',
    fontSize: '14px',
    fontFamily: 'inherit',
    width: '220px',
  },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' },
  deathNoteCard: {
    outline: '2px solid #333333',
    borderRadius: '6px',
  },
}

export default function AnimeBrowsePage() {
  const [filter, setFilter] = useState('')
  const filtered = allWikis.filter(w => w.title.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.main}>
        <div style={styles.breadcrumb}>
          <Link to="/">Home</Link> › <Link to="/anime">Anime</Link> › Browse All
        </div>
        <div style={styles.topRow}>
          <h1 style={styles.heading}>Browse All Anime Wikis</h1>
          <input
            style={styles.filterInput}
            type="text"
            placeholder="Filter wikis..."
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
        </div>
        <div style={styles.grid}>
          {filtered.map((wiki, i) => (
            <div key={i} style={wiki.to === '/anime/browse/death-note' ? styles.deathNoteCard : undefined}>
              <WikiCard title={wiki.title} meta={wiki.meta} to={wiki.to} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

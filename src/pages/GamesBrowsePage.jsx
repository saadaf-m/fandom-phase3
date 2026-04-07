import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WikiCard from '../components/WikiCard'

const allWikis = [
  { title: 'Minecraft Wiki', meta: 'Sandbox · 50,000 pages' },
  { title: 'GTA Wiki', meta: 'Action · 37,000 pages' },
  { title: 'Pokémon Wiki', meta: 'RPG · 56,000 pages' },
  { title: 'Call of Duty Wiki', meta: 'Shooter · 22,000 pages' },
  { title: 'Zelda Encyclopedia', meta: 'Adventure · 31,000 pages' },
  { title: 'Elden Ring Wiki', meta: 'RPG · 19,400 pages' },
  { title: 'Fortnite Wiki', meta: 'Battle Royale · 14,200 pages' },
  { title: 'Tomb Raider Wiki', meta: 'Action · 14,500 pages' },
  { title: 'Baldur\'s Gate 3 Wiki', meta: 'RPG · 28,700 pages' },
  { title: 'Starfield Wiki', meta: 'Sci-Fi RPG · 11,200 pages' },
  { title: 'Diablo IV Wiki', meta: 'Action RPG · 9,800 pages' },
  { title: 'Skyrim Wiki', meta: 'RPG · 28,000 pages' },
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '16px',
  },
}

export default function GamesBrowsePage() {
  const [filter, setFilter] = useState('')
  const filtered = allWikis.filter(w => w.title.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.main}>
        <div style={styles.breadcrumb}>
          <Link to="/">Home</Link> › <Link to="/games">Games</Link> › Browse All
        </div>
        <div style={styles.topRow}>
          <h1 style={styles.heading}>Browse All Games Wikis</h1>
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
            <WikiCard key={i} title={wiki.title} meta={wiki.meta} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

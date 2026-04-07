import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WikiCard from '../components/WikiCard'

const wikis = [
  { title: 'Call of Duty Wiki', meta: 'Shooter · 22,000 pages · Updated today' },
  { title: 'Zelda Encyclopedia', meta: 'Adventure · 31,000 pages · Updated 2h ago' },
  { title: 'Elden Ring Wiki', meta: 'RPG · 19,400 pages · Updated 3h ago' },
  { title: 'Baldur\'s Gate 3 Wiki', meta: 'RPG · 28,700 pages · Updated 1h ago' },
  { title: 'Starfield Wiki', meta: 'Sci-Fi RPG · 11,200 pages · Updated 5h ago' },
  { title: 'Diablo IV Wiki', meta: 'Action RPG · 9,800 pages · Updated today' },
]

const styles = {
  page: { minHeight: '100vh', display: 'flex', flexDirection: 'column' },
  main: { flex: 1, maxWidth: '1100px', margin: '0 auto', padding: '32px 24px', width: '100%' },
  breadcrumb: { fontSize: '13px', color: '#666666', marginBottom: '16px' },
  heading: { fontSize: '26px', fontWeight: '700', marginBottom: '24px' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '16px',
  },
}

export default function GamesTrendingPage() {
  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.main}>
        <div style={styles.breadcrumb}>
          <Link to="/">Home</Link> › <Link to="/games">Games</Link> › Trending Wikis
        </div>
        <h1 style={styles.heading}>Games — Trending Wikis</h1>
        <div style={styles.grid}>
          {wikis.map((wiki, i) => (
            <WikiCard key={i} title={wiki.title} meta={wiki.meta} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

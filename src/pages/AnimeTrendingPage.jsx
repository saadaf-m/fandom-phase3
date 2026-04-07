import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WikiCard from '../components/WikiCard'

const wikis = [
  { title: 'Jujutsu Kaisen Wiki', meta: 'Action · 18,200 pages · Updated 1h ago' },
  { title: 'My Hero Academia Wiki', meta: 'Adventure · 27,600 pages · Updated 2h ago' },
  { title: 'One Piece Wiki', meta: 'Adventure · 42,000 pages · Updated 30m ago' },
  { title: 'Chainsaw Man Wiki', meta: 'Action · 9,100 pages · Updated 4h ago' },
  { title: 'Demon Slayer Wiki', meta: 'Action · 14,800 pages · Updated today' },
  { title: 'Attack on Titan Wiki', meta: 'Action · 21,300 pages · Updated 6h ago' },
]

const styles = {
  page: { minHeight: '100vh', display: 'flex', flexDirection: 'column' },
  main: { flex: 1, maxWidth: '1100px', margin: '0 auto', padding: '32px 24px', width: '100%' },
  breadcrumb: { fontSize: '13px', color: '#666666', marginBottom: '16px' },
  heading: { fontSize: '26px', fontWeight: '700', marginBottom: '24px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' },
}

export default function AnimeTrendingPage() {
  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.main}>
        <div style={styles.breadcrumb}>
          <Link to="/">Home</Link> › <Link to="/anime">Anime</Link> › Trending Wikis
        </div>
        <h1 style={styles.heading}>Anime — Trending Wikis</h1>
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

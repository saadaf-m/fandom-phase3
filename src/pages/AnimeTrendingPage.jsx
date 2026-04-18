import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WikiCard from '../components/WikiCard'

const COLOR = '#DC2626'

const wikis = [
  { title: 'Jujutsu Kaisen Wiki', description: 'Cursed techniques, spirits, and sorcerer lore', meta: 'Action · 18,200 pages · Updated 1h ago', color: COLOR },
  { title: 'My Hero Academia Wiki', description: 'Quirks, heroes, and the world of UA Academy', meta: 'Adventure · 27,600 pages · Updated 2h ago', color: COLOR },
  { title: 'One Piece Wiki', description: 'The Grand Line, Devil Fruits, and the Straw Hats', meta: 'Adventure · 42,000 pages · Updated 30m ago', color: COLOR },
  { title: 'Chainsaw Man Wiki', description: 'Devils, contracts, and chaos in modern Japan', meta: 'Action · 9,100 pages · Updated 4h ago', color: COLOR },
  { title: 'Demon Slayer Wiki', description: 'Demon slayers, breathing styles, and the Twelve Moons', meta: 'Action · 14,800 pages · Updated today', color: COLOR },
  { title: 'Attack on Titan Wiki', description: 'Titans, the wall, and the truth of Paradis', meta: 'Action · 21,300 pages · Updated 6h ago', color: COLOR },
]

export default function AnimeTrendingPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, maxWidth: '1100px', margin: '0 auto', padding: '32px 24px', width: '100%' }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '13px',
          color: '#888888',
          marginBottom: '16px',
        }}>
          <Link to="/" style={{ color: '#888888', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link to="/anime" style={{ color: '#888888', textDecoration: 'none' }}>Anime</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#1A1A1A' }}>Trending</span>
        </div>
        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '48px',
          letterSpacing: '1px',
          color: '#1A1A1A',
          lineHeight: '1',
          marginBottom: '28px',
        }}>Anime — Trending Wikis</h1>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
          gap: '16px',
        }}>
          {wikis.map((wiki, i) => (
            <WikiCard key={i} title={wiki.title} description={wiki.description} meta={wiki.meta} color={wiki.color} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

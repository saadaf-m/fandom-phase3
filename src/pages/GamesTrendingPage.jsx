import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WikiCard from '../components/WikiCard'

const COLOR = '#2563EB'

const wikis = [
  { title: 'Call of Duty Wiki', description: 'Comprehensive lore, weapons, and multiplayer guides', meta: 'Shooter · 22,000 pages · Updated today', color: COLOR },
  { title: 'Zelda Encyclopedia', description: 'Your complete guide to the Legend of Zelda universe', meta: 'Adventure · 31,000 pages · Updated 2h ago', color: COLOR },
  { title: 'Elden Ring Wiki', description: 'Everything about the Lands Between and beyond', meta: 'RPG · 19,400 pages · Updated 3h ago', color: COLOR },
  { title: "Baldur's Gate 3 Wiki", description: 'Spells, builds, and story guides for BG3', meta: 'RPG · 28,700 pages · Updated 1h ago', color: COLOR },
  { title: 'Starfield Wiki', description: 'Navigate the Settled Systems and beyond', meta: 'Sci-Fi RPG · 11,200 pages · Updated 5h ago', color: COLOR },
  { title: 'Diablo IV Wiki', description: 'All classes, dungeons, and endgame content', meta: 'Action RPG · 9,800 pages · Updated today', color: COLOR },
]

export default function GamesTrendingPage() {
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
          <Link to="/games" style={{ color: '#888888', textDecoration: 'none' }}>Games</Link>
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
        }}>Games — Trending Wikis</h1>
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

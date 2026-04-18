import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WikiCard from '../components/WikiCard'

const COLOR = '#DC2626'

const wikis = [
  { title: 'One Piece Wiki', description: 'The Grand Line, Devil Fruits, and the Straw Hats', meta: 'Adventure · 42,000 pages · 3.8M visitors/mo', color: COLOR },
  { title: 'Naruto Wiki', description: 'Ninjas, jutsu, and the story of the Seventh Hokage', meta: 'Action · 38,000 pages · 3.2M visitors/mo', color: COLOR },
  { title: 'Dragon Ball Wiki', description: 'Warriors, transformations, and endless battles', meta: 'Action · 35,500 pages · 2.9M visitors/mo', color: COLOR },
  { title: 'My Hero Academia Wiki', description: 'Quirks, heroes, and the world of UA Academy', meta: 'Adventure · 27,600 pages · 2.1M visitors/mo', color: COLOR },
  { title: 'Attack on Titan Wiki', description: 'Titans, the wall, and the truth of Paradis', meta: 'Action · 21,300 pages · 1.7M visitors/mo', color: COLOR },
  { title: 'Death Note Wiki', description: "A god of death's notebook and the battle of wits", meta: 'Thriller · 6,400 pages · 1.2M visitors/mo', color: COLOR, to: '/anime/browse/death-note' },
]

export default function AnimePopularPage() {
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
          <span style={{ color: '#1A1A1A' }}>Popular</span>
        </div>
        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '48px',
          letterSpacing: '1px',
          color: '#1A1A1A',
          lineHeight: '1',
          marginBottom: '28px',
        }}>Anime — Popular Wikis</h1>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
          gap: '16px',
        }}>
          {wikis.map((wiki, i) => (
            <WikiCard key={i} title={wiki.title} description={wiki.description} meta={wiki.meta} to={wiki.to} color={wiki.color} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

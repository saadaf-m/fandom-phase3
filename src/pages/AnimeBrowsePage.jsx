import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WikiCard from '../components/WikiCard'

const COLOR = '#DC2626'

const allWikis = [
  { title: 'One Piece Wiki', description: 'The Grand Line, Devil Fruits, and the Straw Hats', meta: 'Adventure · 42,000 pages', color: COLOR },
  { title: 'Naruto Wiki', description: 'Ninjas, jutsu, and the story of the Seventh Hokage', meta: 'Action · 38,000 pages', color: COLOR },
  { title: 'Dragon Ball Wiki', description: 'Warriors, transformations, and endless battles', meta: 'Action · 35,500 pages', color: COLOR },
  { title: 'My Hero Academia Wiki', description: 'Quirks, heroes, and the world of UA Academy', meta: 'Adventure · 27,600 pages', color: COLOR },
  { title: 'Attack on Titan Wiki', description: 'Titans, the wall, and the truth of Paradis', meta: 'Action · 21,300 pages', color: COLOR },
  { title: 'Jujutsu Kaisen Wiki', description: 'Cursed techniques, spirits, and sorcerer lore', meta: 'Action · 18,200 pages', color: COLOR },
  { title: 'Demon Slayer Wiki', description: 'Demon slayers, breathing styles, and the Twelve Moons', meta: 'Action · 14,800 pages', color: COLOR },
  { title: 'Death Note Wiki', description: "A god of death's notebook and the battle of wits", meta: 'Thriller · 6,400 pages', color: COLOR, to: '/anime/browse/death-note' },
  { title: 'Fullmetal Alchemist Wiki', description: 'Alchemy, homunculi, and equivalent exchange', meta: 'Adventure · 12,600 pages', color: COLOR },
  { title: 'Chainsaw Man Wiki', description: 'Devils, contracts, and chaos in modern Japan', meta: 'Action · 9,100 pages', color: COLOR },
  { title: 'Hunter x Hunter Wiki', description: 'Hunters, Nen, and the perilous world within', meta: 'Adventure · 16,800 pages', color: COLOR },
  { title: 'Bleach Wiki', description: 'Soul Reapers, Hollows, and the Soul Society', meta: 'Action · 25,400 pages', color: COLOR },
]

export default function AnimeBrowsePage() {
  const [filter, setFilter] = useState('')
  const filtered = allWikis.filter(w => w.title.toLowerCase().includes(filter.toLowerCase()))

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
          <span style={{ color: '#1A1A1A' }}>Browse All</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '48px',
            letterSpacing: '1px',
            color: '#1A1A1A',
            lineHeight: '1',
          }}>Anime — Browse All Wikis</h1>
          <input
            type="text"
            placeholder="Filter wikis…"
            value={filter}
            onChange={e => setFilter(e.target.value)}
            style={{
              border: '1px solid #DDDDDD',
              borderRadius: '8px',
              padding: '9px 14px',
              fontSize: '14px',
              fontFamily: "'DM Sans', sans-serif",
              width: '220px',
              outline: 'none',
              color: '#1A1A1A',
            }}
          />
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
          gap: '16px',
        }}>
          {filtered.map((wiki, i) => (
            <WikiCard
              key={i}
              title={wiki.title}
              description={wiki.description}
              meta={wiki.meta}
              to={wiki.to}
              color={wiki.color}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

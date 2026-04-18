import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WikiCard from '../components/WikiCard'

const COLOR = '#2563EB'

const allWikis = [
  { title: 'Minecraft Wiki', description: 'Blocks, biomes, mobs, and crafting recipes', meta: 'Sandbox · 50,000 pages', color: COLOR },
  { title: 'GTA Wiki', description: 'Stories, characters, and secrets from all GTA games', meta: 'Action · 37,000 pages', color: COLOR },
  { title: 'Pokémon Wiki', description: 'Every Pokémon, move, and game mechanic', meta: 'RPG · 56,000 pages', color: COLOR },
  { title: 'Call of Duty Wiki', description: 'Comprehensive lore, weapons, and multiplayer guides', meta: 'Shooter · 22,000 pages', color: COLOR },
  { title: 'Zelda Encyclopedia', description: 'Your complete guide to the Legend of Zelda universe', meta: 'Adventure · 31,000 pages', color: COLOR },
  { title: 'Elden Ring Wiki', description: 'Everything about the Lands Between and beyond', meta: 'RPG · 19,400 pages', color: COLOR },
  { title: 'Fortnite Wiki', description: 'Weapons, skins, and island history', meta: 'Battle Royale · 14,200 pages', color: COLOR },
  { title: 'Tomb Raider Wiki', description: "Lara Croft's adventures through the ages", meta: 'Action · 14,500 pages', color: COLOR },
  { title: "Baldur's Gate 3 Wiki", description: 'Spells, builds, and story guides for BG3', meta: 'RPG · 28,700 pages', color: COLOR },
  { title: 'Starfield Wiki', description: 'Navigate the Settled Systems and beyond', meta: 'Sci-Fi RPG · 11,200 pages', color: COLOR },
  { title: 'Diablo IV Wiki', description: 'All classes, dungeons, and endgame content', meta: 'Action RPG · 9,800 pages', color: COLOR },
  { title: 'Skyrim Wiki', description: 'Quests, characters, and secrets of Tamriel', meta: 'RPG · 28,000 pages', color: COLOR },
]

export default function GamesBrowsePage() {
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
          <Link to="/games" style={{ color: '#888888', textDecoration: 'none' }}>Games</Link>
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
          }}>Games — Browse All Wikis</h1>
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
              color={wiki.color}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WikiCard from '../components/WikiCard'

const COLOR = '#2563EB'

const wikis = [
  { title: 'Minecraft Wiki', description: 'Blocks, biomes, mobs, and crafting recipes', meta: 'Sandbox · 50,000 pages · 2.1M visitors/mo', color: COLOR },
  { title: 'Fortnite Wiki', description: 'Weapons, skins, and island history', meta: 'Battle Royale · 14,200 pages · 1.8M visitors/mo', color: COLOR },
  { title: 'Tomb Raider Wiki', description: "Lara Croft's adventures through the ages", meta: 'Action · 14,500 pages · 980K visitors/mo', color: COLOR },
  { title: 'GTA Wiki', description: 'Stories, characters, and secrets from all GTA games', meta: 'Action · 37,000 pages · 3.4M visitors/mo', color: COLOR },
  { title: 'Pokémon Wiki', description: 'Every Pokémon, move, and game mechanic', meta: 'RPG · 56,000 pages · 4.2M visitors/mo', color: COLOR },
  { title: 'Skyrim Wiki', description: 'Quests, characters, and secrets of Tamriel', meta: 'RPG · 28,000 pages · 1.5M visitors/mo', color: COLOR },
]

export default function GamesPopularPage() {
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
          <span style={{ color: '#1A1A1A' }}>Popular</span>
        </div>
        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '48px',
          letterSpacing: '1px',
          color: '#1A1A1A',
          lineHeight: '1',
          marginBottom: '28px',
        }}>Games — Popular Wikis</h1>
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

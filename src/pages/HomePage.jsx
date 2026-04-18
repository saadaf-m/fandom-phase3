import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WikiCard from '../components/WikiCard'

const trending = [
  { title: 'Elden Ring Wiki', description: 'Everything about the Lands Between', meta: 'RPG · 19,400 pages', color: '#2563EB' },
  { title: 'Jujutsu Kaisen Wiki', description: 'Cursed techniques and sorcerer lore', meta: 'Anime · 18,200 pages', color: '#DC2626' },
  { title: 'House of the Dragon Wiki', description: 'Targaryens, dragons, and the Dance', meta: 'TV · 9,400 pages', color: '#6D28D9' },
  { title: 'Taylor Swift Wiki', description: 'Albums, eras, and Taylor\'s universe', meta: 'Music · 8,700 pages', color: '#059669' },
  { title: 'Dune Wiki', description: 'Arrakis, spice, and the Kwisatz Haderach', meta: 'Movies · 8,700 pages', color: '#B45309' },
]

const sections = [
  {
    label: 'TV',
    path: '/tv',
    color: '#6D28D9',
    cards: [
      { title: 'Game of Thrones Wiki', description: 'Houses, characters, and lore of Westeros', meta: 'Fantasy · 34,000 pages' },
      { title: 'Breaking Bad Wiki', description: 'The story of Walter White\'s transformation', meta: 'Drama · 21,300 pages' },
      { title: 'Stranger Things Wiki', description: 'The Upside Down and Hawkins mythology', meta: 'Sci-Fi · 14,600 pages' },
    ],
  },
  {
    label: 'Movies',
    path: '/movies',
    color: '#B45309',
    cards: [
      { title: 'Marvel Cinematic Universe', description: 'Every hero, villain, and storyline in the MCU', meta: 'Superhero · 62,000 pages' },
      { title: 'Star Wars Wiki', description: 'The Force, the galaxy, and everything in it', meta: 'Sci-Fi · 177,000 pages' },
      { title: 'Harry Potter Wiki', description: 'Spells, creatures, and wizarding world lore', meta: 'Fantasy · 46,000 pages' },
    ],
  },
  {
    label: 'Games',
    path: '/games',
    color: '#2563EB',
    cards: [
      { title: 'Call of Duty Wiki', description: 'Comprehensive lore, weapons, and multiplayer guides', meta: 'Shooter · 22,000 pages' },
      { title: 'Zelda Encyclopedia', description: 'Your complete guide to the Zelda universe', meta: 'Adventure · 31,000 pages' },
      { title: 'Elden Ring Wiki', description: 'Everything about the Lands Between', meta: 'RPG · 19,400 pages' },
    ],
  },
  {
    label: 'Anime',
    path: '/anime',
    color: '#DC2626',
    cards: [
      { title: 'Jujutsu Kaisen Wiki', description: 'Cursed techniques, spirits, and sorcerer lore', meta: 'Action · 18,200 pages' },
      { title: 'My Hero Academia Wiki', description: 'Quirks, heroes, and the world of UA Academy', meta: 'Adventure · 27,600 pages' },
      { title: 'One Piece Wiki', description: 'The Grand Line, Devil Fruits, and the Straw Hats', meta: 'Adventure · 42,000 pages' },
    ],
  },
  {
    label: 'Music',
    path: '/music',
    color: '#059669',
    cards: [
      { title: 'Beyoncé Wiki', description: 'Queen Bey\'s full discography and visual albums', meta: 'R&B · 3,400 pages' },
      { title: 'Taylor Swift Wiki', description: 'Albums, eras, lyrics, and Taylor\'s universe', meta: 'Pop · 8,700 pages' },
      { title: 'The Beatles Wiki', description: 'The Fab Four\'s complete discography and legacy', meta: 'Rock · 6,100 pages' },
    ],
  },
]

export default function HomePage() {
  const [query, setQuery] = useState('')

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        {/* Hero */}
        <div style={{
          background: 'linear-gradient(135deg, #1A1A1A 0%, #2D0020 100%)',
          padding: '64px 24px 56px',
          textAlign: 'center',
        }}>
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '64px',
            letterSpacing: '2px',
            color: '#FFFFFF',
            marginBottom: '12px',
            lineHeight: '1',
          }}>Explore Fan Wikis</h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '18px',
            fontWeight: '400',
            color: 'rgba(255,255,255,0.7)',
            marginBottom: '32px',
          }}>Your universe of fan knowledge</p>
          <div style={{
            display: 'flex',
            maxWidth: '580px',
            margin: '0 auto',
            border: '1px solid #DDDDDD',
            borderRadius: '8px',
            overflow: 'hidden',
            background: '#FFFFFF',
          }}>
            <input
              type="text"
              placeholder="Search wikis, characters, shows, games…"
              value={query}
              onChange={e => setQuery(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                padding: '14px 18px',
                fontSize: '15px',
                fontFamily: "'DM Sans', sans-serif",
                outline: 'none',
                color: '#1A1A1A',
              }}
            />
            <button style={{
              background: '#FF0054',
              color: '#FFFFFF',
              border: 'none',
              padding: '14px 24px',
              fontSize: '14px',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: '600',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}>Search</button>
          </div>
        </div>

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px' }}>
          {/* Trending */}
          <section style={{ marginBottom: '52px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: '700',
                fontSize: '24px',
                color: '#1A1A1A',
              }}>What&apos;s Hot Right Now?</div>
            </div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '14px',
              color: '#888888',
              marginBottom: '20px',
            }}>Trending across all wikis</p>
            <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '8px' }}>
              {trending.map((card, i) => (
                <WikiCard key={i} title={card.title} description={card.description} meta={card.meta} color={card.color} />
              ))}
            </div>
          </section>

          {/* Category sections */}
          {sections.map(section => (
            <section key={section.label} style={{ marginBottom: '52px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: '700',
                  fontSize: '24px',
                  color: '#1A1A1A',
                }}>{section.label}</div>
                <Link to={section.path} style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#FF0054',
                  textDecoration: 'none',
                }}>Browse All →</Link>
              </div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                color: '#888888',
                marginBottom: '20px',
              }}>What&apos;s hot right now</p>
              <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '8px' }}>
                {section.cards.map((card, i) => (
                  <WikiCard
                    key={i}
                    title={card.title}
                    description={card.description}
                    meta={card.meta}
                    color={section.color}
                    to={section.path}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

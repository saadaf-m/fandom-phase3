import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WikiCard from '../components/WikiCard'

const wikis = [
  { title: 'Minecraft Wiki', meta: 'Sandbox · 50,000 pages · 2.1M visitors/mo' },
  { title: 'Fortnite Wiki', meta: 'Battle Royale · 14,200 pages · 1.8M visitors/mo' },
  { title: 'Tomb Raider Wiki', meta: 'Action · 14,500 pages · 980K visitors/mo' },
  { title: 'GTA Wiki', meta: 'Action · 37,000 pages · 3.4M visitors/mo' },
  { title: 'Pokémon Wiki', meta: 'RPG · 56,000 pages · 4.2M visitors/mo' },
  { title: 'Skyrim Wiki', meta: 'RPG · 28,000 pages · 1.5M visitors/mo' },
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

export default function GamesPopularPage() {
  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.main}>
        <div style={styles.breadcrumb}>
          <Link to="/">Home</Link> › <Link to="/games">Games</Link> › Popular Wikis
        </div>
        <h1 style={styles.heading}>Games — Popular Wikis</h1>
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

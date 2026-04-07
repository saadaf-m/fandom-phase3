import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WikiCard from '../components/WikiCard'

const wikis = [
  { title: 'One Piece Wiki', meta: 'Adventure · 42,000 pages · 3.8M visitors/mo' },
  { title: 'Naruto Wiki', meta: 'Action · 38,000 pages · 3.2M visitors/mo' },
  { title: 'Dragon Ball Wiki', meta: 'Action · 35,500 pages · 2.9M visitors/mo' },
  { title: 'My Hero Academia Wiki', meta: 'Adventure · 27,600 pages · 2.1M visitors/mo' },
  { title: 'Attack on Titan Wiki', meta: 'Action · 21,300 pages · 1.7M visitors/mo' },
  { title: 'Death Note Wiki', meta: 'Thriller · 6,400 pages · 1.2M visitors/mo', to: '/anime/browse/death-note' },
]

const styles = {
  page: { minHeight: '100vh', display: 'flex', flexDirection: 'column' },
  main: { flex: 1, maxWidth: '1100px', margin: '0 auto', padding: '32px 24px', width: '100%' },
  breadcrumb: { fontSize: '13px', color: '#666666', marginBottom: '16px' },
  heading: { fontSize: '26px', fontWeight: '700', marginBottom: '24px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' },
}

export default function AnimePopularPage() {
  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.main}>
        <div style={styles.breadcrumb}>
          <Link to="/">Home</Link> › <Link to="/anime">Anime</Link> › Popular Wikis
        </div>
        <h1 style={styles.heading}>Anime — Popular Wikis</h1>
        <div style={styles.grid}>
          {wikis.map((wiki, i) => (
            <WikiCard key={i} title={wiki.title} meta={wiki.meta} to={wiki.to} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WikiCard from './WikiCard'

const styles = {
  page: { minHeight: '100vh', display: 'flex', flexDirection: 'column' },
  main: { flex: 1, maxWidth: '1100px', margin: '0 auto', padding: '32px 24px', width: '100%' },
  breadcrumb: { fontSize: '13px', color: '#666666', marginBottom: '16px' },
  pageTitle: { fontSize: '28px', fontWeight: '700', marginBottom: '8px' },
  pageDesc: { fontSize: '15px', color: '#555555', marginBottom: '32px' },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: '700',
    marginBottom: '16px',
    paddingBottom: '8px',
    borderBottom: '2px solid #DDDDDD',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  browseBtn: {
    background: '#333333',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '4px',
    padding: '6px 14px',
    fontSize: '13px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  cardRow: {
    display: 'flex',
    gap: '16px',
    overflowX: 'auto',
    paddingBottom: '8px',
    marginBottom: '32px',
  },
}

export default function CategoryPage({ category, basePath, trendingWikis, popularWikis }) {
  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.main}>
        <div style={styles.breadcrumb}>
          <Link to="/">Home</Link> › {category}
        </div>
        <h1 style={styles.pageTitle}>{category}</h1>
        <p style={styles.pageDesc}>
          Explore wikis, fan communities, and content for {category}.
        </p>

        <section>
          <div style={styles.sectionTitle}>
            <span>Trending Wikis</span>
            <Link to={`${basePath}/trending`} style={styles.browseBtn}>See All Trending</Link>
          </div>
          <div style={styles.cardRow}>
            {trendingWikis.map((wiki, i) => (
              <WikiCard key={i} title={wiki.title} meta={wiki.meta} to={wiki.to} />
            ))}
          </div>
        </section>

        <section>
          <div style={styles.sectionTitle}>
            <span>Popular Wikis</span>
            <Link to={`${basePath}/popular`} style={styles.browseBtn}>See All Popular</Link>
          </div>
          <div style={styles.cardRow}>
            {popularWikis.map((wiki, i) => (
              <WikiCard key={i} title={wiki.title} meta={wiki.meta} to={wiki.to} />
            ))}
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '16px' }}>
          <Link to={`${basePath}/browse`} style={{ ...styles.browseBtn, padding: '10px 28px', fontSize: '15px' }}>
            Browse All {category} Wikis
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

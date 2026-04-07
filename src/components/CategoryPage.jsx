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
  sectionHeader: {
    fontSize: '18px',
    fontWeight: '700',
    paddingBottom: '8px',
    borderBottom: '2px solid #DDDDDD',
    marginBottom: '6px',
  },
  sectionSubheader: {
    fontSize: '13px',
    color: '#666666',
    marginBottom: '16px',
    marginTop: '0',
  },
  cardRow: {
    display: 'flex',
    gap: '16px',
    overflowX: 'auto',
    paddingBottom: '8px',
    marginBottom: '8px',
  },
  browseGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '16px',
  },
  section: { marginBottom: '40px' },
}

export default function CategoryPage({ category, featuredWikis, newAndUpdatedWikis, browseAllWikis }) {
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

        <section style={styles.section}>
          <div style={styles.sectionHeader}>Featured</div>
          <p style={styles.sectionSubheader}>What&apos;s hot right now</p>
          <div style={styles.cardRow}>
            {featuredWikis.map((wiki, i) => (
              <WikiCard key={i} title={wiki.title} meta={wiki.meta} to={wiki.to} />
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>New &amp; Updated</div>
          <p style={styles.sectionSubheader}>Recently active wikis</p>
          <div style={styles.cardRow}>
            {newAndUpdatedWikis.map((wiki, i) => (
              <WikiCard key={i} title={wiki.title} meta={wiki.meta} to={wiki.to} />
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>Browse All</div>
          <div style={styles.browseGrid}>
            {browseAllWikis.map((wiki, i) => (
              <WikiCard key={i} title={wiki.title} meta={wiki.meta} to={wiki.to} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

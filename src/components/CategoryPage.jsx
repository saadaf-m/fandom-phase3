import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WikiCard from './WikiCard'

export default function CategoryPage({ category, color = '#888888', featuredWikis, newAndUpdatedWikis, browseAllWikis }) {
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
          <span style={{ color: '#1A1A1A' }}>{category} — Browse Wikis</span>
        </div>

        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '52px',
          letterSpacing: '1px',
          color: '#1A1A1A',
          marginBottom: '4px',
          lineHeight: '1',
        }}>{category} — Browse Wikis</h1>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '15px',
          color: '#666666',
          marginBottom: '36px',
        }}>
          Explore fan wikis and communities for {category}.
        </p>

        <section style={{ marginBottom: '48px' }}>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: '700',
            fontSize: '24px',
            color: '#1A1A1A',
            marginBottom: '2px',
          }}>Featured</div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '14px',
            color: '#888888',
            marginBottom: '20px',
          }}>What&apos;s hot right now</p>
          <div style={{
            display: 'flex',
            gap: '16px',
            overflowX: 'auto',
            paddingBottom: '8px',
          }}>
            {featuredWikis.map((wiki, i) => (
              <WikiCard
                key={i}
                title={wiki.title}
                description={wiki.description}
                meta={wiki.meta}
                to={wiki.to}
                color={wiki.color || color}
              />
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: '700',
            fontSize: '24px',
            color: '#1A1A1A',
            marginBottom: '2px',
          }}>New &amp; Updated</div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '14px',
            color: '#888888',
            marginBottom: '20px',
          }}>Recently active wikis</p>
          <div style={{
            display: 'flex',
            gap: '16px',
            overflowX: 'auto',
            paddingBottom: '8px',
          }}>
            {newAndUpdatedWikis.map((wiki, i) => (
              <WikiCard
                key={i}
                title={wiki.title}
                description={wiki.description}
                meta={wiki.meta}
                to={wiki.to}
                color={wiki.color || color}
              />
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '48px' }}>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: '700',
            fontSize: '24px',
            color: '#1A1A1A',
            marginBottom: '20px',
          }}>Browse All Wikis</div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
            gap: '16px',
          }}>
            {browseAllWikis.map((wiki, i) => (
              <WikiCard
                key={i}
                title={wiki.title}
                description={wiki.description}
                meta={wiki.meta}
                to={wiki.to}
                color={wiki.color || color}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

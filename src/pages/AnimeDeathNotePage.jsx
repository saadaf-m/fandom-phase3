import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WikiSubNavbar from '../components/WikiSubNavbar'

const characters = [
  { name: 'Light Yagami', role: 'Protagonist' },
  { name: 'L', role: 'Antagonist' },
  { name: 'Ryuk', role: 'Shinigami' },
  { name: 'Misa Amane', role: 'Supporting' },
  { name: 'Near', role: 'Detective' },
  { name: 'Mello', role: 'Detective' },
]

const episodes = [
  { num: 'Ep 01', title: 'Rebirth', duration: '23 min' },
  { num: 'Ep 02', title: 'Confrontation', duration: '23 min' },
  { num: 'Ep 03', title: 'Dealings', duration: '23 min' },
  { num: 'Ep 04', title: 'Pursuit', duration: '23 min' },
  { num: 'Ep 05', title: 'Tactics', duration: '23 min' },
]

const discussions = [
  { title: 'Who is the true villain — Light or the system?', author: 'LoreKeeper', replies: 84, time: '2h ago' },
  { title: 'L vs Light: analysing the Narita train scene', author: 'AnimeFan_99', replies: 52, time: '5h ago' },
  { title: 'Theory: Ryuk knew all along Light would lose', author: 'WikiEditor_42', replies: 37, time: '1d ago' },
]

const sectionStyle = {
  background: '#FFFFFF',
  border: '1px solid #DDDDDD',
  borderRadius: '8px',
  padding: '24px',
  marginBottom: '20px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
}

const sectionTitleStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: '700',
  fontSize: '20px',
  color: '#1A1A1A',
  marginBottom: '16px',
  paddingBottom: '12px',
  borderBottom: '1px solid #F0F0F0',
}

export default function AnimeDeathNotePage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <WikiSubNavbar pageCount="6,400" />
      <main style={{ flex: 1, maxWidth: '1100px', margin: '0 auto', padding: '32px 24px', width: '100%' }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '13px',
          color: '#888888',
          marginBottom: '20px',
        }}>
          <Link to="/" style={{ color: '#888888', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link to="/anime" style={{ color: '#888888', textDecoration: 'none' }}>Anime</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link to="/anime/browse" style={{ color: '#888888', textDecoration: 'none' }}>Browse All</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#1A1A1A' }}>Death Note Wiki</span>
        </div>

        {/* Hero */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid #DDDDDD',
          borderRadius: '8px',
          padding: '28px',
          display: 'flex',
          gap: '28px',
          marginBottom: '24px',
          alignItems: 'flex-start',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        }}>
          <div style={{
            width: '120px',
            minWidth: '120px',
            height: '168px',
            background: 'linear-gradient(160deg, #991B1B, #1A1A1A)',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '11px',
            fontFamily: "'DM Sans', sans-serif",
            color: 'rgba(255,255,255,0.4)',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}>Cover Art</div>
          <div style={{ flex: 1 }}>
            <h1 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '56px',
              letterSpacing: '1px',
              color: '#1A1A1A',
              lineHeight: '1',
              marginBottom: '8px',
            }}>Death Note Wiki</h1>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              color: '#888888',
              marginBottom: '14px',
            }}>Thriller · Psychological · Supernatural</div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '15px',
              lineHeight: '1.65',
              color: '#333333',
              marginBottom: '20px',
            }}>
              Death Note is a psychological thriller anime based on the manga by Tsugumi Ohba and Takeshi Obata.
              The story follows Light Yagami, a high school student who discovers a supernatural notebook that
              kills anyone whose name is written in it. As he attempts to build a utopia free of crime under the
              alias "Kira," the world's greatest detective — known only as L — takes up the challenge to stop him.
            </p>
            <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', marginBottom: '20px' }}>
              {[
                { num: '37', label: 'Episodes' },
                { num: '6,400', label: 'Wiki Pages' },
                { num: '1.2M', label: 'Monthly Visitors' },
                { num: '2006', label: 'Year Released' },
              ].map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: '700',
                    fontSize: '18px',
                    color: '#1A1A1A',
                  }}>{s.num}</div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '11px',
                    color: '#888888',
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{
                background: '#FF0054',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                padding: '9px 20px',
                fontSize: '14px',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: '600',
                cursor: 'pointer',
              }}>Follow Wiki</button>
              <button style={{
                background: 'transparent',
                color: '#FF0054',
                border: '1px solid #FF0054',
                borderRadius: '8px',
                padding: '9px 18px',
                fontSize: '14px',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: '600',
                cursor: 'pointer',
              }}>Add to Collection</button>
              <button style={{
                background: 'transparent',
                color: '#1A1A1A',
                border: '1px solid #DDDDDD',
                borderRadius: '8px',
                padding: '9px 18px',
                fontSize: '14px',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: '400',
                cursor: 'pointer',
              }}>Mark as Watched</button>
            </div>
          </div>
        </div>

        {/* Top Discussions */}
        <div style={sectionStyle}>
          <div style={sectionTitleStyle}>Top Discussions</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
            {discussions.map((d, i) => (
              <div key={i} style={{
                background: '#F9F9F9',
                border: '1px solid #EEEEEE',
                borderRadius: '8px',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: '600',
                    fontSize: '14px',
                    color: '#1A1A1A',
                    marginBottom: '4px',
                  }}>{d.title}</div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '12px',
                    color: '#888888',
                  }}>by {d.author}</div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: '700',
                    fontSize: '14px',
                    color: '#1A1A1A',
                  }}>{d.replies}</div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '11px',
                    color: '#888888',
                  }}>replies</div>
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '12px',
                  color: '#AAAAAA',
                  minWidth: '50px',
                  textAlign: 'right',
                }}>{d.time}</div>
              </div>
            ))}
          </div>
          <Link to="/community" style={{
            display: 'block',
            background: '#FF0054',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '8px',
            padding: '13px',
            fontSize: '15px',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: '600',
            cursor: 'pointer',
            textDecoration: 'none',
            textAlign: 'center',
          }}>Join the Conversation</Link>
        </div>

        {/* Plot Overview */}
        <div style={sectionStyle}>
          <div style={sectionTitleStyle}>Plot Overview</div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '14px',
            lineHeight: '1.75',
            color: '#333333',
          }}>
            When Light Yagami finds the Death Note, he begins using it to kill criminals under the alias "Kira."
            As Kira gains a worldwide following, the secretive detective L becomes his primary adversary.
            The series escalates into a high-stakes battle of wits between two geniuses — one seeking to become
            the god of a new world, the other determined to bring him to justice. The story explores themes of
            justice, morality, power, and the consequences of absolute conviction.
          </p>
        </div>

        {/* Characters */}
        <div style={sectionStyle}>
          <div style={sectionTitleStyle}>Characters</div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '12px',
          }}>
            {characters.map((c, i) => (
              <div key={i} style={{
                background: '#F9F9F9',
                border: '1px solid #EEEEEE',
                borderRadius: '8px',
                padding: '16px 12px',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'linear-gradient(135deg, #991B1B, #530242)',
                  borderRadius: '50%',
                  margin: '0 auto 10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  color: '#FFFFFF',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: '700',
                }}>{c.name[0]}</div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: '700',
                  fontSize: '13px',
                  color: '#1A1A1A',
                  marginBottom: '2px',
                }}>{c.name}</div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '11px',
                  color: '#888888',
                }}>{c.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Episodes */}
        <div style={sectionStyle}>
          <div style={sectionTitleStyle}>Episodes</div>
          {episodes.map((ep, i) => (
            <div key={i} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '11px 0',
              borderBottom: i < episodes.length - 1 ? '1px solid #F0F0F0' : 'none',
            }}>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                color: '#888888',
                minWidth: '60px',
              }}>{ep.num}</span>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                color: '#1A1A1A',
                flex: 1,
              }}>{ep.title}</span>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '12px',
                color: '#AAAAAA',
              }}>{ep.duration}</span>
            </div>
          ))}
          <div style={{ marginTop: '14px' }}>
            <button style={{
              background: 'transparent',
              color: '#FF0054',
              border: '1px solid #FF0054',
              borderRadius: '8px',
              padding: '8px 18px',
              fontSize: '14px',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: '600',
              cursor: 'pointer',
            }}>View All 37 Episodes</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const recentWikis = [
  { name: 'Zelda Encyclopedia', meta: 'Games · Viewed 1h ago', color: '#2563EB' },
  { name: 'Death Note Wiki', meta: 'Anime · Viewed 3h ago', color: '#DC2626' },
  { name: 'GTA Wiki', meta: 'Games · Viewed yesterday', color: '#2563EB' },
  { name: 'Taylor Swift Wiki', meta: 'Music · Viewed 2 days ago', color: '#059669' },
]

const contributions = [
  { text: 'Edited "Rupee" article on Zelda Encyclopedia', time: '2 hours ago' },
  { text: 'Added image to "Light Yagami" on Death Note Wiki', time: '1 day ago' },
  { text: 'Created page "Timeline of Events" on GTA Wiki', time: '3 days ago' },
]

const menuItems = [
  { label: 'View Profile' },
  { label: 'Visit My Fandom' },
  { label: 'Activity' },
  { label: 'Find a New Wiki' },
]

export default function AccountPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, maxWidth: '1100px', margin: '0 auto', padding: '40px 24px', width: '100%' }}>
        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '52px',
          letterSpacing: '1px',
          color: '#1A1A1A',
          lineHeight: '1',
          marginBottom: '28px',
        }}>My Account</h1>

        {/* Profile header */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid #DDDDDD',
          borderRadius: '8px',
          padding: '28px',
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
          marginBottom: '28px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: '#FF0054',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            color: '#FFFFFF',
            fontFamily: "'Bebas Neue', sans-serif",
            flexShrink: 0,
          }}>F</div>
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: '700',
              fontSize: '22px',
              color: '#1A1A1A',
              marginBottom: '4px',
            }}>FandomUser_01</div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              color: '#888888',
              marginBottom: '14px',
            }}>Member since January 2022 · Contributor</div>
            <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
              {[
                { num: '142', label: 'Edits' },
                { num: '23', label: 'Pages Created' },
                { num: '8', label: 'Wikis Followed' },
                { num: '3', label: 'Collections' },
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
          </div>
          <button style={{
            background: 'transparent',
            border: '1px solid #DDDDDD',
            borderRadius: '8px',
            padding: '9px 18px',
            fontSize: '13px',
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: '600',
            cursor: 'pointer',
            color: '#1A1A1A',
            alignSelf: 'flex-start',
          }}>Edit Profile</button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
        }}>
          {/* My Account menu */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #DDDDDD',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          }}>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: '700',
              fontSize: '16px',
              color: '#1A1A1A',
              marginBottom: '16px',
              paddingBottom: '12px',
              borderBottom: '1px solid #F0F0F0',
            }}>My Account</div>
            {menuItems.map((item, i) => (
              <div key={item.label} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '11px 0',
                borderBottom: i < menuItems.length - 1 ? '1px solid #F5F5F5' : 'none',
                fontSize: '14px',
                fontFamily: "'DM Sans', sans-serif",
                color: '#1A1A1A',
                cursor: 'pointer',
              }}>
                <span>{item.label}</span>
                <span style={{ color: '#BBBBBB', fontSize: '16px' }}>›</span>
              </div>
            ))}
          </div>

          {/* Recently Viewed Wikis */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #DDDDDD',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          }}>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: '700',
              fontSize: '16px',
              color: '#1A1A1A',
              marginBottom: '16px',
              paddingBottom: '12px',
              borderBottom: '1px solid #F0F0F0',
            }}>Recently Viewed Wikis</div>
            {recentWikis.map((wiki, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '9px 0',
                borderBottom: i < recentWikis.length - 1 ? '1px solid #F5F5F5' : 'none',
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  background: wiki.color,
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '10px',
                  color: 'rgba(255,255,255,0.7)',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: '700',
                  flexShrink: 0,
                }}>W</div>
                <div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: '600',
                    fontSize: '14px',
                    color: '#1A1A1A',
                  }}>{wiki.name}</div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '12px',
                    color: '#888888',
                  }}>{wiki.meta}</div>
                </div>
              </div>
            ))}
          </div>

          {/* My Contributions */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #DDDDDD',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          }}>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: '700',
              fontSize: '16px',
              color: '#1A1A1A',
              marginBottom: '16px',
              paddingBottom: '12px',
              borderBottom: '1px solid #F0F0F0',
            }}>My Contributions</div>
            {contributions.map((c, i) => (
              <div key={i} style={{
                padding: '9px 0',
                borderBottom: i < contributions.length - 1 ? '1px solid #F5F5F5' : 'none',
              }}>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '13px',
                  color: '#333333',
                  marginBottom: '2px',
                }}>{c.text}</div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '11px',
                  color: '#888888',
                }}>{c.time}</div>
              </div>
            ))}
            <div style={{ marginTop: '14px' }}>
              <button style={{
                background: 'transparent',
                border: '1px solid #DDDDDD',
                borderRadius: '6px',
                padding: '7px 16px',
                fontSize: '13px',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: '600',
                cursor: 'pointer',
                color: '#1A1A1A',
              }}>View All Contributions</button>
            </div>
          </div>

          {/* Quick Actions */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #DDDDDD',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          }}>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: '700',
              fontSize: '16px',
              color: '#1A1A1A',
              marginBottom: '16px',
              paddingBottom: '12px',
              borderBottom: '1px solid #F0F0F0',
            }}>Quick Actions</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Link to="/account/post" style={{
                background: '#FF0054',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                padding: '11px 16px',
                fontSize: '14px',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: '600',
                cursor: 'pointer',
                textDecoration: 'none',
                textAlign: 'center',
                display: 'block',
              }}>Start a New Wiki</Link>
              <Link to="/community" style={{
                background: 'transparent',
                color: '#FF0054',
                border: '1px solid #FF0054',
                borderRadius: '8px',
                padding: '11px 16px',
                fontSize: '14px',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: '600',
                cursor: 'pointer',
                textDecoration: 'none',
                textAlign: 'center',
                display: 'block',
              }}>Go to Community Feed</Link>
              <button style={{
                background: 'transparent',
                color: '#1A1A1A',
                border: '1px solid #DDDDDD',
                borderRadius: '8px',
                padding: '11px 16px',
                fontSize: '14px',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: '400',
                cursor: 'pointer',
              }}>Account Settings</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

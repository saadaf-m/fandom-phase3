import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const posts = [
  {
    user: 'ZeldaFan_Link',
    time: '10 minutes ago',
    tag: 'Games',
    tagColor: '#2563EB',
    body: 'Just finished the new DLC for Tears of the Kingdom — the final boss fight is absolutely incredible. Who else has completed it? Would love to discuss theories about what comes next in the Zelda timeline.',
    likes: 48,
    comments: 17,
  },
  {
    user: 'AnimeLore',
    time: '1 hour ago',
    tag: 'Anime',
    tagColor: '#DC2626',
    body: 'New chapter of Jujutsu Kaisen just dropped and I am not okay. The power scaling in this arc is on another level. The wiki pages are being updated in real time — huge shoutout to the editors!',
    likes: 132,
    comments: 54,
  },
  {
    user: 'TVwatcher99',
    time: '3 hours ago',
    tag: 'TV',
    tagColor: '#6D28D9',
    body: 'Season 4 of The Bear got a release date! For those who want to catch up, the wiki has detailed episode recaps for every season. Highly recommend reading before the new season drops.',
    likes: 76,
    comments: 29,
  },
  {
    user: 'MusicHead',
    time: 'Yesterday',
    tag: 'Music',
    tagColor: '#059669',
    body: "Taylor Swift's new album wiki is already impressively detailed — over 200 pages added in 48 hours. The fan community here is genuinely unmatched for speed and accuracy.",
    likes: 214,
    comments: 88,
  },
]

export default function CommunityPage() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, maxWidth: '800px', margin: '0 auto', padding: '40px 24px', width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: '52px',
            letterSpacing: '1px',
            color: '#1A1A1A',
            lineHeight: '1',
          }}>Community</h1>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Link to="/account/post" style={{
              background: 'transparent',
              border: '1px solid #FF0054',
              borderRadius: '8px',
              color: '#FF0054',
              padding: '10px 18px',
              fontSize: '14px',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: '600',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
            }}>+ Post Something</Link>
            <Link to="/account/post" style={{
              background: '#FF0054',
              border: 'none',
              borderRadius: '8px',
              color: '#FFFFFF',
              padding: '10px 18px',
              fontSize: '14px',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: '600',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
            }}>Start a Discussion</Link>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {posts.map((post, i) => (
            <div key={i} style={{
              background: '#FFFFFF',
              border: '1px solid #DDDDDD',
              borderRadius: '8px',
              padding: '20px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  background: '#FF0054',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  color: '#FFFFFF',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: '700',
                  flexShrink: 0,
                }}>
                  {post.user[0]}
                </div>
                <div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: '600',
                    fontSize: '14px',
                    color: '#1A1A1A',
                  }}>{post.user}</div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '12px',
                    color: '#888888',
                  }}>{post.time}</div>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <span style={{
                    background: post.tagColor + '18',
                    border: `1px solid ${post.tagColor}40`,
                    borderRadius: '12px',
                    padding: '3px 10px',
                    fontSize: '11px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: '600',
                    color: post.tagColor,
                  }}>{post.tag}</span>
                </div>
              </div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                lineHeight: '1.65',
                color: '#333333',
                marginBottom: '16px',
              }}>{post.body}</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button style={{
                  background: 'transparent',
                  border: '1px solid #DDDDDD',
                  borderRadius: '6px',
                  padding: '6px 14px',
                  fontSize: '13px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: '400',
                  cursor: 'pointer',
                  color: '#444444',
                }}>👍 {post.likes}</button>
                <button style={{
                  background: 'transparent',
                  border: '1px solid #DDDDDD',
                  borderRadius: '6px',
                  padding: '6px 14px',
                  fontSize: '13px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: '400',
                  cursor: 'pointer',
                  color: '#444444',
                }}>💬 {post.comments}</button>
                <button style={{
                  background: 'transparent',
                  border: '1px solid #DDDDDD',
                  borderRadius: '6px',
                  padding: '6px 14px',
                  fontSize: '13px',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: '400',
                  cursor: 'pointer',
                  color: '#444444',
                }}>Share</button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

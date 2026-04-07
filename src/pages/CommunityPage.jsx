import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const styles = {
  page: { minHeight: '100vh', display: 'flex', flexDirection: 'column' },
  main: { flex: 1, maxWidth: '1100px', margin: '0 auto', padding: '32px 24px', width: '100%' },
  topRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' },
  heading: { fontSize: '28px', fontWeight: '700' },
  postBtn: {
    background: '#333333',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '14px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  },
  feed: { display: 'flex', flexDirection: 'column', gap: '16px' },
  post: {
    background: '#FFFFFF',
    border: '1px solid #DDDDDD',
    borderRadius: '6px',
    padding: '20px',
  },
  postHeader: { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' },
  avatar: {
    width: '36px',
    height: '36px',
    background: '#DDDDDD',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    color: '#888888',
    flexShrink: 0,
  },
  userName: { fontWeight: '600', fontSize: '14px' },
  postTime: { fontSize: '12px', color: '#888888' },
  tag: {
    marginLeft: 'auto',
    background: '#F0F0F0',
    border: '1px solid #DDDDDD',
    borderRadius: '12px',
    padding: '3px 10px',
    fontSize: '11px',
    color: '#555555',
  },
  postBody: { fontSize: '14px', lineHeight: '1.6', color: '#333333', marginBottom: '12px' },
  postActions: { display: 'flex', gap: '16px' },
  actionBtn: {
    background: 'transparent',
    border: '1px solid #DDDDDD',
    borderRadius: '4px',
    padding: '5px 12px',
    fontSize: '12px',
    cursor: 'pointer',
    color: '#444444',
  },
}

const posts = [
  {
    user: 'ZeldaFan_Link',
    time: '10 minutes ago',
    tag: 'Games',
    body: 'Just finished the new DLC for Tears of the Kingdom — the final boss fight is absolutely incredible. Who else has completed it? Would love to discuss theories about what comes next in the Zelda timeline.',
    likes: 48,
    comments: 17,
  },
  {
    user: 'AnimeLore',
    time: '1 hour ago',
    tag: 'Anime',
    body: 'New chapter of Jujutsu Kaisen just dropped and I am not okay. The power scaling in this arc is on another level. The wiki pages are being updated in real time — huge shoutout to the editors!',
    likes: 132,
    comments: 54,
  },
  {
    user: 'TVwatcher99',
    time: '3 hours ago',
    tag: 'TV',
    body: 'Season 4 of The Bear got a release date! For those who want to catch up, the Fandom wiki has detailed episode recaps for every season. Highly recommend reading before the new season drops.',
    likes: 76,
    comments: 29,
  },
  {
    user: 'MusicHead',
    time: 'Yesterday',
    tag: 'Music',
    body: 'Taylor Swift\'s new album wiki is already impressively detailed — over 200 pages added in 48 hours. The fan community here is genuinely unmatched for speed and accuracy.',
    likes: 214,
    comments: 88,
  },
]

export default function CommunityPage() {
  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.main}>
        <div style={styles.topRow}>
          <h1 style={styles.heading}>Community</h1>
          <Link to="/account/post" style={styles.postBtn}>+ Post Something</Link>
        </div>

        <div style={styles.feed}>
          {posts.map((post, i) => (
            <div key={i} style={styles.post}>
              <div style={styles.postHeader}>
                <div style={styles.avatar}>[Av]</div>
                <div>
                  <div style={styles.userName}>{post.user}</div>
                  <div style={styles.postTime}>{post.time}</div>
                </div>
                <div style={styles.tag}>{post.tag}</div>
              </div>
              <p style={styles.postBody}>{post.body}</p>
              <div style={styles.postActions}>
                <button style={styles.actionBtn}>👍 {post.likes} Likes</button>
                <button style={styles.actionBtn}>💬 {post.comments} Comments</button>
                <button style={styles.actionBtn}>Share</button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

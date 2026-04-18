import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const categories = ['Games', 'Anime', 'TV', 'Movies', 'Music', 'Comics', 'Books', 'Other']

export default function PostPage() {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && category) {
      setSubmitted(true)
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, maxWidth: '700px', margin: '0 auto', padding: '40px 24px', width: '100%' }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '13px',
          color: '#888888',
          marginBottom: '20px',
        }}>
          <Link to="/" style={{ color: '#888888', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link to="/community" style={{ color: '#888888', textDecoration: 'none' }}>Community</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#1A1A1A' }}>Post a New Wiki</span>
        </div>

        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '52px',
          letterSpacing: '1px',
          color: '#1A1A1A',
          lineHeight: '1',
          marginBottom: '8px',
        }}>Post a New Wiki</h1>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '15px',
          color: '#666666',
          marginBottom: '32px',
        }}>Share a wiki or start a new fan community.</p>

        {submitted ? (
          <div style={{
            background: '#FFFFFF',
            border: '1px solid #DDDDDD',
            borderRadius: '8px',
            padding: '40px 32px',
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              background: '#FF0054',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              fontSize: '24px',
              color: '#FFFFFF',
            }}>✓</div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: '700',
              fontSize: '20px',
              color: '#1A1A1A',
              marginBottom: '8px',
            }}>Your post has been submitted!</div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '15px',
              color: '#666666',
              marginBottom: '28px',
            }}>"{title}" has been added to the {category} community.</div>
            <Link to="/community" style={{
              background: '#FF0054',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              padding: '12px 28px',
              fontSize: '15px',
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: '600',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
            }}>Back to Community</Link>
          </div>
        ) : (
          <form
            style={{
              background: '#FFFFFF',
              border: '1px solid #DDDDDD',
              borderRadius: '8px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '22px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}
            onSubmit={handleSubmit}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
              <label style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                fontWeight: '600',
                color: '#1A1A1A',
              }} htmlFor="wiki-title">Wiki Title *</label>
              <input
                id="wiki-title"
                type="text"
                placeholder="e.g. The Last of Us, Frieren, Hollow Knight…"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
                style={{
                  border: '1px solid #DDDDDD',
                  borderRadius: '6px',
                  padding: '11px 14px',
                  fontSize: '14px',
                  fontFamily: "'DM Sans', sans-serif",
                  outline: 'none',
                  color: '#1A1A1A',
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
              <label style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                fontWeight: '600',
                color: '#1A1A1A',
              }} htmlFor="category">Category *</label>
              <select
                id="category"
                value={category}
                onChange={e => setCategory(e.target.value)}
                required
                style={{
                  border: '1px solid #DDDDDD',
                  borderRadius: '6px',
                  padding: '11px 14px',
                  fontSize: '14px',
                  fontFamily: "'DM Sans', sans-serif",
                  background: '#FFFFFF',
                  outline: 'none',
                  color: '#1A1A1A',
                }}
              >
                <option value="">Select a category…</option>
                {categories.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
              <label style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                fontWeight: '600',
                color: '#1A1A1A',
              }} htmlFor="description">Description</label>
              <textarea
                id="description"
                placeholder="Tell the community what this wiki is about…"
                value={description}
                onChange={e => setDescription(e.target.value)}
                style={{
                  border: '1px solid #DDDDDD',
                  borderRadius: '6px',
                  padding: '11px 14px',
                  fontSize: '14px',
                  fontFamily: "'DM Sans', sans-serif",
                  outline: 'none',
                  minHeight: '120px',
                  resize: 'vertical',
                  color: '#1A1A1A',
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
              <label style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                fontWeight: '600',
                color: '#1A1A1A',
              }}>Tags (optional)</label>
              <input
                type="text"
                placeholder="Add tags separated by commas…"
                style={{
                  border: '1px solid #DDDDDD',
                  borderRadius: '6px',
                  padding: '11px 14px',
                  fontSize: '14px',
                  fontFamily: "'DM Sans', sans-serif",
                  outline: 'none',
                  color: '#1A1A1A',
                }}
              />
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <Link to="/community" style={{
                background: 'transparent',
                color: '#1A1A1A',
                border: '1px solid #DDDDDD',
                borderRadius: '8px',
                padding: '11px 22px',
                fontSize: '14px',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: '400',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-block',
              }}>Cancel</Link>
              <button type="submit" style={{
                background: '#FF0054',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                padding: '11px 28px',
                fontSize: '14px',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: '600',
                cursor: 'pointer',
              }}>Submit Post</button>
            </div>
          </form>
        )}
      </main>
      <Footer />
    </div>
  )
}

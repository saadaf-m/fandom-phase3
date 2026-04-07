import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const styles = {
  page: { minHeight: '100vh', display: 'flex', flexDirection: 'column' },
  main: { flex: 1, maxWidth: '700px', margin: '0 auto', padding: '32px 24px', width: '100%' },
  breadcrumb: { fontSize: '13px', color: '#666666', marginBottom: '16px' },
  heading: { fontSize: '26px', fontWeight: '700', marginBottom: '8px' },
  subheading: { fontSize: '14px', color: '#555555', marginBottom: '28px' },
  form: {
    background: '#FFFFFF',
    border: '1px solid #DDDDDD',
    borderRadius: '6px',
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  field: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: { fontSize: '14px', fontWeight: '600' },
  input: {
    border: '1px solid #DDDDDD',
    borderRadius: '4px',
    padding: '10px 12px',
    fontSize: '14px',
    fontFamily: 'inherit',
    outline: 'none',
  },
  textarea: {
    border: '1px solid #DDDDDD',
    borderRadius: '4px',
    padding: '10px 12px',
    fontSize: '14px',
    fontFamily: 'inherit',
    outline: 'none',
    minHeight: '120px',
    resize: 'vertical',
  },
  select: {
    border: '1px solid #DDDDDD',
    borderRadius: '4px',
    padding: '10px 12px',
    fontSize: '14px',
    fontFamily: 'inherit',
    background: '#FFFFFF',
    outline: 'none',
  },
  btnRow: { display: 'flex', gap: '12px', justifyContent: 'flex-end' },
  submitBtn: {
    background: '#333333',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 24px',
    fontSize: '14px',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  cancelBtn: {
    background: '#FFFFFF',
    color: '#1A1A1A',
    border: '1px solid #DDDDDD',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '14px',
    cursor: 'pointer',
    fontFamily: 'inherit',
    textDecoration: 'none',
    display: 'inline-block',
  },
  successBox: {
    background: '#F0FFF0',
    border: '1px solid #AADDAA',
    borderRadius: '6px',
    padding: '20px',
    textAlign: 'center',
    fontSize: '15px',
    color: '#1A4A1A',
  },
}

const categories = ['Games', 'Anime', 'TV', 'Movies', 'Music', 'Comics', 'Books', 'Other']

export default function PostPage() {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && category) {
      setSubmitted(true)
    }
  }

  return (
    <div style={styles.page}>
      <Navbar />
      <main style={styles.main}>
        <div style={styles.breadcrumb}>
          <Link to="/">Home</Link> › <Link to="/community">Community</Link> › Post a New Fandom
        </div>
        <h1 style={styles.heading}>Post a New Fandom</h1>
        <p style={styles.subheading}>Share a fandom or start a new wiki community.</p>

        {submitted ? (
          <div style={styles.successBox}>
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>✓</div>
            <div style={{ fontWeight: '700', marginBottom: '8px' }}>Your post has been submitted!</div>
            <div style={{ marginBottom: '16px' }}>"{title}" has been added to the {category} community.</div>
            <Link to="/community" style={{ ...styles.submitBtn, display: 'inline-block', textDecoration: 'none' }}>
              Back to Community
            </Link>
          </div>
        ) : (
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.field}>
              <label style={styles.label} htmlFor="wiki-title">Wiki / Fandom Title *</label>
              <input
                id="wiki-title"
                style={styles.input}
                type="text"
                placeholder="e.g. The Last of Us, Frieren, Hollow Knight..."
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label} htmlFor="category">Category *</label>
              <select
                id="category"
                style={styles.select}
                value={category}
                onChange={e => setCategory(e.target.value)}
                required
              >
                <option value="">Select a category...</option>
                {categories.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div style={styles.field}>
              <label style={styles.label} htmlFor="description">Description</label>
              <textarea
                id="description"
                style={styles.textarea}
                placeholder="Tell the community what this fandom is about..."
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Tags (optional)</label>
              <input
                style={styles.input}
                type="text"
                placeholder="Add tags separated by commas..."
              />
            </div>

            <div style={styles.btnRow}>
              <Link to="/community" style={styles.cancelBtn}>Cancel</Link>
              <button type="submit" style={styles.submitBtn}>Submit Post</button>
            </div>
          </form>
        )}
      </main>
      <Footer />
    </div>
  )
}

import { Link } from 'react-router-dom'

const styles = {
  card: {
    background: '#FFFFFF',
    border: '1px solid #DDDDDD',
    borderRadius: '6px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    minWidth: '180px',
  },
  thumb: {
    width: '100%',
    height: '100px',
    background: '#E8E8E8',
    border: '1px solid #DDDDDD',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    color: '#888888',
  },
  title: {
    fontWeight: '600',
    fontSize: '14px',
    color: '#1A1A1A',
  },
  meta: {
    fontSize: '12px',
    color: '#666666',
  },
  btn: {
    marginTop: '4px',
    background: '#333333',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '4px',
    padding: '6px 10px',
    fontSize: '12px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center',
  },
}

export default function WikiCard({ title, meta, to }) {
  return (
    <div style={styles.card}>
      <div style={styles.thumb}>[Image Placeholder]</div>
      <div style={styles.title}>{title}</div>
      {meta && <div style={styles.meta}>{meta}</div>}
      {to ? (
        <Link to={to} style={styles.btn}>View Wiki</Link>
      ) : (
        <button style={styles.btn}>View Wiki</button>
      )}
    </div>
  )
}

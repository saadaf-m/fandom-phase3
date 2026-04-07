import CategoryPage from '../components/CategoryPage'

const featured = [
  { title: 'Beyoncé Wiki', meta: 'R&B · 3,400 pages' },
  { title: 'Taylor Swift Wiki', meta: 'Pop · 8,700 pages' },
  { title: 'The Beatles Wiki', meta: 'Rock · 6,100 pages' },
]

const newAndUpdated = [
  { title: 'Kendrick Lamar Wiki', meta: 'Hip-Hop · 4,200 pages' },
  { title: 'Billie Eilish Wiki', meta: 'Pop · 5,100 pages' },
  { title: 'Sabrina Carpenter Wiki', meta: 'Pop · 2,800 pages' },
  { title: 'Chappell Roan Wiki', meta: 'Pop · 1,900 pages' },
]

const browseAll = [
  { title: 'Taylor Swift Wiki', meta: 'Pop · 8,700 pages' },
  { title: 'The Beatles Wiki', meta: 'Rock · 6,100 pages' },
  { title: 'Billie Eilish Wiki', meta: 'Pop · 5,100 pages' },
  { title: 'Kendrick Lamar Wiki', meta: 'Hip-Hop · 4,200 pages' },
  { title: 'Beyoncé Wiki', meta: 'R&B · 3,400 pages' },
  { title: 'Sabrina Carpenter Wiki', meta: 'Pop · 2,800 pages' },
  { title: 'Lady Gaga Wiki', meta: 'Pop · 7,300 pages' },
  { title: 'Eminem Wiki', meta: 'Hip-Hop · 8,900 pages' },
  { title: 'Chappell Roan Wiki', meta: 'Pop · 1,900 pages' },
  { title: 'Featured Music 1', meta: 'Rock · 7,800 pages' },
  { title: 'Featured Music 2', meta: 'Electronic · 3,500 pages' },
  { title: 'Featured Music 3', meta: 'Country · 4,600 pages' },
]

export default function MusicPage() {
  return (
    <CategoryPage
      category="Music"
      featuredWikis={featured}
      newAndUpdatedWikis={newAndUpdated}
      browseAllWikis={browseAll}
    />
  )
}

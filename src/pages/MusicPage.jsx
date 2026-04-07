import CategoryPage from '../components/CategoryPage'

const trending = [
  { title: 'Beyoncé Wiki', meta: 'R&B · 3,400 pages' },
  { title: 'Taylor Swift Wiki', meta: 'Pop · 8,700 pages' },
  { title: 'The Beatles Wiki', meta: 'Rock · 6,100 pages' },
]

const popular = [
  { title: 'Featured Music 1', meta: 'Hip-Hop · 4,200 pages' },
  { title: 'Featured Music 2', meta: 'Pop · 5,100 pages' },
  { title: 'Featured Music 3', meta: 'Rock · 7,800 pages' },
]

export default function MusicPage() {
  return (
    <CategoryPage
      category="Music"
      basePath="/music"
      trendingWikis={trending}
      popularWikis={popular}
    />
  )
}

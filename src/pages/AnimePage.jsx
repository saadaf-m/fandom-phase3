import CategoryPage from '../components/CategoryPage'

const trending = [
  { title: 'Jujutsu Kaisen Wiki', meta: 'Action · 18,200 pages' },
  { title: 'My Hero Academia Wiki', meta: 'Adventure · 27,600 pages' },
  { title: 'One Piece Wiki', meta: 'Adventure · 42,000 pages' },
]

const popular = [
  { title: 'Naruto Wiki', meta: 'Action · 38,000 pages' },
  { title: 'Dragon Ball Wiki', meta: 'Action · 35,500 pages' },
  { title: 'Death Note Wiki', meta: 'Thriller · 6,400 pages', to: '/anime/browse/death-note' },
]

export default function AnimePage() {
  return (
    <CategoryPage
      category="Anime"
      basePath="/anime"
      trendingWikis={trending}
      popularWikis={popular}
    />
  )
}

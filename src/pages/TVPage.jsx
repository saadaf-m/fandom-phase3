import CategoryPage from '../components/CategoryPage'

const trending = [
  { title: 'Featured Series 1', meta: 'Drama · 12,400 pages' },
  { title: 'Featured Series 2', meta: 'Sci-Fi · 8,900 pages' },
  { title: 'Featured Series 3', meta: 'Fantasy · 6,200 pages' },
]

const popular = [
  { title: 'Breaking Bad Wiki', meta: 'Drama · 21,300 pages' },
  { title: 'Game of Thrones Wiki', meta: 'Fantasy · 34,000 pages' },
  { title: 'The Bear Wiki', meta: 'Drama · 4,800 pages' },
]

export default function TVPage() {
  return (
    <CategoryPage
      category="TV"
      basePath="/tv"
      trendingWikis={trending}
      popularWikis={popular}
    />
  )
}

import CategoryPage from '../components/CategoryPage'

const trending = [
  { title: 'Featured Movie 1', meta: 'Action · 9,100 pages' },
  { title: 'Featured Movie 2', meta: 'Thriller · 5,800 pages' },
  { title: 'Featured Movie 3', meta: 'Animation · 4,300 pages' },
]

const popular = [
  { title: 'Marvel Cinematic Universe', meta: 'Superhero · 62,000 pages' },
  { title: 'Star Wars Wiki', meta: 'Sci-Fi · 177,000 pages' },
  { title: 'The Lord of the Rings Wiki', meta: 'Fantasy · 58,000 pages' },
]

export default function MoviesPage() {
  return (
    <CategoryPage
      category="Movies"
      basePath="/movies"
      trendingWikis={trending}
      popularWikis={popular}
    />
  )
}

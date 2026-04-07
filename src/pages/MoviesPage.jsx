import CategoryPage from '../components/CategoryPage'

const featured = [
  { title: 'Featured Movie 1', meta: 'Action · 9,100 pages' },
  { title: 'Featured Movie 2', meta: 'Thriller · 5,800 pages' },
  { title: 'Featured Movie 3', meta: 'Animation · 4,300 pages' },
]

const newAndUpdated = [
  { title: 'Dune Wiki', meta: 'Sci-Fi · 8,700 pages' },
  { title: 'Oppenheimer Wiki', meta: 'Drama · 3,100 pages' },
  { title: 'Guardians of the Galaxy Wiki', meta: 'Superhero · 11,200 pages' },
  { title: 'Indiana Jones Wiki', meta: 'Adventure · 9,800 pages' },
]

const browseAll = [
  { title: 'Marvel Cinematic Universe', meta: 'Superhero · 62,000 pages' },
  { title: 'Star Wars Wiki', meta: 'Sci-Fi · 177,000 pages' },
  { title: 'The Lord of the Rings Wiki', meta: 'Fantasy · 58,000 pages' },
  { title: 'DC Extended Universe Wiki', meta: 'Superhero · 38,400 pages' },
  { title: 'Harry Potter Wiki', meta: 'Fantasy · 46,000 pages' },
  { title: 'Jurassic Park Wiki', meta: 'Sci-Fi · 12,300 pages' },
  { title: 'Dune Wiki', meta: 'Sci-Fi · 8,700 pages' },
  { title: 'Indiana Jones Wiki', meta: 'Adventure · 9,800 pages' },
  { title: 'Guardians of the Galaxy Wiki', meta: 'Superhero · 11,200 pages' },
  { title: 'Featured Movie 1', meta: 'Action · 9,100 pages' },
  { title: 'Featured Movie 2', meta: 'Thriller · 5,800 pages' },
  { title: 'Featured Movie 3', meta: 'Animation · 4,300 pages' },
]

export default function MoviesPage() {
  return (
    <CategoryPage
      category="Movies"
      featuredWikis={featured}
      newAndUpdatedWikis={newAndUpdated}
      browseAllWikis={browseAll}
    />
  )
}

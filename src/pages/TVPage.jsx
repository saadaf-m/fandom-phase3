import CategoryPage from '../components/CategoryPage'

const featured = [
  { title: 'Featured Series 1', meta: 'Drama · 12,400 pages' },
  { title: 'Featured Series 2', meta: 'Sci-Fi · 8,900 pages' },
  { title: 'Featured Series 3', meta: 'Fantasy · 6,200 pages' },
]

const newAndUpdated = [
  { title: 'The Bear Wiki', meta: 'Drama · 4,800 pages' },
  { title: 'Severance Wiki', meta: 'Sci-Fi · 3,200 pages' },
  { title: 'The Last of Us Wiki', meta: 'Drama · 7,100 pages' },
  { title: 'House of the Dragon Wiki', meta: 'Fantasy · 9,400 pages' },
]

const browseAll = [
  { title: 'Game of Thrones Wiki', meta: 'Fantasy · 34,000 pages' },
  { title: 'Breaking Bad Wiki', meta: 'Drama · 21,300 pages' },
  { title: 'The Walking Dead Wiki', meta: 'Horror · 18,700 pages' },
  { title: 'Stranger Things Wiki', meta: 'Sci-Fi · 14,600 pages' },
  { title: 'The Last of Us Wiki', meta: 'Drama · 7,100 pages' },
  { title: 'House of the Dragon Wiki', meta: 'Fantasy · 9,400 pages' },
  { title: 'The Bear Wiki', meta: 'Drama · 4,800 pages' },
  { title: 'Severance Wiki', meta: 'Sci-Fi · 3,200 pages' },
  { title: 'Featured Series 1', meta: 'Drama · 12,400 pages' },
  { title: 'Featured Series 2', meta: 'Sci-Fi · 8,900 pages' },
  { title: 'Featured Series 3', meta: 'Fantasy · 6,200 pages' },
  { title: 'Featured Series 4', meta: 'Thriller · 5,600 pages' },
]

export default function TVPage() {
  return (
    <CategoryPage
      category="TV"
      featuredWikis={featured}
      newAndUpdatedWikis={newAndUpdated}
      browseAllWikis={browseAll}
    />
  )
}

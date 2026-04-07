import CategoryPage from '../components/CategoryPage'

const featured = [
  { title: 'Jujutsu Kaisen Wiki', meta: 'Action · 18,200 pages' },
  { title: 'My Hero Academia Wiki', meta: 'Adventure · 27,600 pages' },
  { title: 'One Piece Wiki', meta: 'Adventure · 42,000 pages' },
]

const newAndUpdated = [
  { title: 'Chainsaw Man Wiki', meta: 'Action · 9,100 pages' },
  { title: 'Spy x Family Wiki', meta: 'Comedy · 3,800 pages' },
  { title: 'Frieren Wiki', meta: 'Fantasy · 2,400 pages' },
  { title: 'Dungeon Meshi Wiki', meta: 'Fantasy · 1,900 pages' },
]

const browseAll = [
  { title: 'One Piece Wiki', meta: 'Adventure · 42,000 pages' },
  { title: 'Naruto Wiki', meta: 'Action · 38,000 pages' },
  { title: 'Dragon Ball Wiki', meta: 'Action · 35,500 pages' },
  { title: 'My Hero Academia Wiki', meta: 'Adventure · 27,600 pages' },
  { title: 'Attack on Titan Wiki', meta: 'Action · 21,300 pages' },
  { title: 'Jujutsu Kaisen Wiki', meta: 'Action · 18,200 pages' },
  { title: 'Hunter x Hunter Wiki', meta: 'Adventure · 16,800 pages' },
  { title: 'Demon Slayer Wiki', meta: 'Action · 14,800 pages' },
  { title: 'Fullmetal Alchemist Wiki', meta: 'Adventure · 12,600 pages' },
  { title: 'Chainsaw Man Wiki', meta: 'Action · 9,100 pages' },
  { title: 'Bleach Wiki', meta: 'Action · 25,400 pages' },
  { title: 'Death Note Wiki', meta: 'Thriller · 6,400 pages', to: '/anime/browse/death-note' },
]

export default function AnimePage() {
  return (
    <CategoryPage
      category="Anime"
      featuredWikis={featured}
      newAndUpdatedWikis={newAndUpdated}
      browseAllWikis={browseAll}
    />
  )
}

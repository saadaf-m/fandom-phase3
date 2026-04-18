import CategoryPage from '../components/CategoryPage'

const COLOR = '#DC2626'

const featured = [
  { title: 'Jujutsu Kaisen Wiki', description: 'Cursed techniques, spirits, and sorcerer lore', meta: 'Action · 18,200 pages', color: COLOR },
  { title: 'My Hero Academia Wiki', description: 'Quirks, heroes, and the world of UA Academy', meta: 'Adventure · 27,600 pages', color: COLOR },
  { title: 'One Piece Wiki', description: 'The Grand Line, Devil Fruits, and the Straw Hats', meta: 'Adventure · 42,000 pages', color: COLOR },
]

const newAndUpdated = [
  { title: 'Chainsaw Man Wiki', description: 'Devils, contracts, and chaos in modern Japan', meta: 'Action · 9,100 pages', color: COLOR },
  { title: 'Spy x Family Wiki', description: 'Forger family missions and comedy of errors', meta: 'Comedy · 3,800 pages', color: COLOR },
  { title: 'Frieren Wiki', description: "A mage's journey through a world after heroes", meta: 'Fantasy · 2,400 pages', color: COLOR },
  { title: 'Dungeon Meshi Wiki', description: 'Adventuring and cooking monsters underground', meta: 'Fantasy · 1,900 pages', color: COLOR },
]

const browseAll = [
  { title: 'One Piece Wiki', description: 'The Grand Line, Devil Fruits, and the Straw Hats', meta: 'Adventure · 42,000 pages', color: COLOR },
  { title: 'Naruto Wiki', description: 'Ninjas, jutsu, and the story of the Seventh Hokage', meta: 'Action · 38,000 pages', color: COLOR },
  { title: 'Dragon Ball Wiki', description: 'Warriors, transformations, and endless battles', meta: 'Action · 35,500 pages', color: COLOR },
  { title: 'My Hero Academia Wiki', description: 'Quirks, heroes, and the world of UA Academy', meta: 'Adventure · 27,600 pages', color: COLOR },
  { title: 'Attack on Titan Wiki', description: 'Titans, the wall, and the truth of Paradis', meta: 'Action · 21,300 pages', color: COLOR },
  { title: 'Jujutsu Kaisen Wiki', description: 'Cursed techniques, spirits, and sorcerer lore', meta: 'Action · 18,200 pages', color: COLOR },
  { title: 'Hunter x Hunter Wiki', description: 'Hunters, Nen, and the perilous world within', meta: 'Adventure · 16,800 pages', color: COLOR },
  { title: 'Demon Slayer Wiki', description: 'Demon slayers, breathing styles, and the Twelve Moons', meta: 'Action · 14,800 pages', color: COLOR },
  { title: 'Fullmetal Alchemist Wiki', description: 'Alchemy, homunculi, and equivalent exchange', meta: 'Adventure · 12,600 pages', color: COLOR },
  { title: 'Chainsaw Man Wiki', description: 'Devils, contracts, and chaos in modern Japan', meta: 'Action · 9,100 pages', color: COLOR },
  { title: 'Bleach Wiki', description: 'Soul Reapers, Hollows, and the Soul Society', meta: 'Action · 25,400 pages', color: COLOR },
  { title: 'Death Note Wiki', description: "A god of death's notebook and the battle of wits", meta: 'Thriller · 6,400 pages', color: COLOR, to: '/anime/browse/death-note' },
]

export default function AnimePage() {
  return (
    <CategoryPage
      category="Anime"
      color={COLOR}
      featuredWikis={featured}
      newAndUpdatedWikis={newAndUpdated}
      browseAllWikis={browseAll}
    />
  )
}

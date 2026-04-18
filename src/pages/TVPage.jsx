import CategoryPage from '../components/CategoryPage'

const COLOR = '#6D28D9'

const featured = [
  { title: 'Game of Thrones Wiki', description: 'Houses, characters, and lore of Westeros', meta: 'Fantasy · 34,000 pages', color: COLOR },
  { title: 'Breaking Bad Wiki', description: "The story of Walter White's transformation", meta: 'Drama · 21,300 pages', color: COLOR },
  { title: 'Stranger Things Wiki', description: 'The Upside Down and Hawkins mythology', meta: 'Sci-Fi · 14,600 pages', color: COLOR },
]

const newAndUpdated = [
  { title: 'The Bear Wiki', description: "Behind the scenes of Chicago's finest kitchen", meta: 'Drama · 4,800 pages', color: COLOR },
  { title: 'Severance Wiki', description: 'Macrodata refinement and Lumon Industries decoded', meta: 'Sci-Fi · 3,200 pages', color: COLOR },
  { title: 'The Last of Us Wiki', description: 'Clickers, factions, and the post-outbreak world', meta: 'Drama · 7,100 pages', color: COLOR },
  { title: 'House of the Dragon Wiki', description: 'Targaryens, dragons, and the Dance of Dragons', meta: 'Fantasy · 9,400 pages', color: COLOR },
]

const browseAll = [
  { title: 'Game of Thrones Wiki', description: 'Houses, characters, and lore of Westeros', meta: 'Fantasy · 34,000 pages', color: COLOR },
  { title: 'Breaking Bad Wiki', description: "The story of Walter White's transformation", meta: 'Drama · 21,300 pages', color: COLOR },
  { title: 'The Walking Dead Wiki', description: 'Survivors, walkers, and factions', meta: 'Horror · 18,700 pages', color: COLOR },
  { title: 'Stranger Things Wiki', description: 'The Upside Down and Hawkins mythology', meta: 'Sci-Fi · 14,600 pages', color: COLOR },
  { title: 'The Last of Us Wiki', description: 'Clickers, factions, and the post-outbreak world', meta: 'Drama · 7,100 pages', color: COLOR },
  { title: 'House of the Dragon Wiki', description: 'Targaryens, dragons, and the Dance of Dragons', meta: 'Fantasy · 9,400 pages', color: COLOR },
  { title: 'The Bear Wiki', description: "Behind the scenes of Chicago's finest kitchen", meta: 'Drama · 4,800 pages', color: COLOR },
  { title: 'Severance Wiki', description: 'Macrodata refinement and Lumon Industries decoded', meta: 'Sci-Fi · 3,200 pages', color: COLOR },
  { title: 'The Office Wiki', description: 'Everything from Dunder Mifflin Scranton', meta: 'Comedy · 12,400 pages', color: COLOR },
  { title: 'Succession Wiki', description: 'The Roy family power struggle in full detail', meta: 'Drama · 8,900 pages', color: COLOR },
  { title: 'The Crown Wiki', description: "Decades of the British royal family's story", meta: 'Drama · 6,200 pages', color: COLOR },
  { title: 'Westworld Wiki', description: 'Hosts, humans, and the nature of consciousness', meta: 'Sci-Fi · 5,600 pages', color: COLOR },
]

export default function TVPage() {
  return (
    <CategoryPage
      category="TV"
      color={COLOR}
      featuredWikis={featured}
      newAndUpdatedWikis={newAndUpdated}
      browseAllWikis={browseAll}
    />
  )
}

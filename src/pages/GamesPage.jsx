import CategoryPage from '../components/CategoryPage'

const featured = [
  { title: 'Call of Duty Wiki', meta: 'Shooter · 22,000 pages' },
  { title: 'Zelda Encyclopedia', meta: 'Adventure · 31,000 pages' },
  { title: 'Elden Ring Wiki', meta: 'RPG · 19,400 pages' },
]

const newAndUpdated = [
  { title: "Baldur's Gate 3 Wiki", meta: 'RPG · 28,700 pages' },
  { title: 'Starfield Wiki', meta: 'Sci-Fi RPG · 11,200 pages' },
  { title: 'Diablo IV Wiki', meta: 'Action RPG · 9,800 pages' },
  { title: 'Palworld Wiki', meta: 'Survival · 6,500 pages' },
]

const browseAll = [
  { title: 'Minecraft Wiki', meta: 'Sandbox · 50,000 pages' },
  { title: 'Pokémon Wiki', meta: 'RPG · 56,000 pages' },
  { title: 'GTA Wiki', meta: 'Action · 37,000 pages' },
  { title: 'Zelda Encyclopedia', meta: 'Adventure · 31,000 pages' },
  { title: "Baldur's Gate 3 Wiki", meta: 'RPG · 28,700 pages' },
  { title: 'Skyrim Wiki', meta: 'RPG · 28,000 pages' },
  { title: 'Call of Duty Wiki', meta: 'Shooter · 22,000 pages' },
  { title: 'Elden Ring Wiki', meta: 'RPG · 19,400 pages' },
  { title: 'Fortnite Wiki', meta: 'Battle Royale · 14,200 pages' },
  { title: 'Tomb Raider Wiki', meta: 'Action · 14,500 pages' },
  { title: 'Starfield Wiki', meta: 'Sci-Fi RPG · 11,200 pages' },
  { title: 'Diablo IV Wiki', meta: 'Action RPG · 9,800 pages' },
]

export default function GamesPage() {
  return (
    <CategoryPage
      category="Games"
      featuredWikis={featured}
      newAndUpdatedWikis={newAndUpdated}
      browseAllWikis={browseAll}
    />
  )
}

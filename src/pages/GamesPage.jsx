import CategoryPage from '../components/CategoryPage'

const trending = [
  { title: 'Call of Duty Wiki', meta: 'Shooter · 22,000 pages' },
  { title: 'Zelda Encyclopedia', meta: 'Adventure · 31,000 pages' },
  { title: 'Elden Ring Wiki', meta: 'RPG · 19,400 pages' },
]

const popular = [
  { title: 'Minecraft Wiki', meta: 'Sandbox · 50,000 pages' },
  { title: 'Fortnite Wiki', meta: 'Battle Royale · 14,200 pages' },
  { title: 'Tomb Raider Wiki', meta: 'Action · 14,500 pages' },
]

export default function GamesPage() {
  return (
    <CategoryPage
      category="Games"
      basePath="/games"
      trendingWikis={trending}
      popularWikis={popular}
    />
  )
}

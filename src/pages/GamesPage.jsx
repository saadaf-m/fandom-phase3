import CategoryPage from '../components/CategoryPage'

const COLOR = '#2563EB'

const featured = [
  { title: 'Call of Duty Wiki', description: 'Comprehensive lore, weapons, and multiplayer guides', meta: 'Shooter · 22,000 pages', color: COLOR },
  { title: 'Zelda Encyclopedia', description: 'Your complete guide to the Legend of Zelda universe', meta: 'Adventure · 31,000 pages', color: COLOR },
  { title: 'Elden Ring Wiki', description: 'Everything about the Lands Between and beyond', meta: 'RPG · 19,400 pages', color: COLOR },
]

const newAndUpdated = [
  { title: "Baldur's Gate 3 Wiki", description: 'Spells, builds, and story guides for BG3', meta: 'RPG · 28,700 pages', color: COLOR },
  { title: 'Starfield Wiki', description: 'Navigate the Settled Systems and beyond', meta: 'Sci-Fi RPG · 11,200 pages', color: COLOR },
  { title: 'Diablo IV Wiki', description: 'All classes, dungeons, and endgame content', meta: 'Action RPG · 9,800 pages', color: COLOR },
  { title: 'Palworld Wiki', description: 'Pals, crafting, and survival mechanics', meta: 'Survival · 6,500 pages', color: COLOR },
]

const browseAll = [
  { title: 'Minecraft Wiki', description: 'Blocks, biomes, mobs, and crafting recipes', meta: 'Sandbox · 50,000 pages', color: COLOR },
  { title: 'Pokémon Wiki', description: 'Every Pokémon, move, and game mechanic', meta: 'RPG · 56,000 pages', color: COLOR },
  { title: 'GTA Wiki', description: 'Stories, characters, and secrets from all GTA games', meta: 'Action · 37,000 pages', color: COLOR },
  { title: 'Zelda Encyclopedia', description: 'Your complete guide to the Legend of Zelda universe', meta: 'Adventure · 31,000 pages', color: COLOR },
  { title: "Baldur's Gate 3 Wiki", description: 'Spells, builds, and story guides for BG3', meta: 'RPG · 28,700 pages', color: COLOR },
  { title: 'Skyrim Wiki', description: 'Quests, characters, and secrets of Tamriel', meta: 'RPG · 28,000 pages', color: COLOR },
  { title: 'Call of Duty Wiki', description: 'Comprehensive lore, weapons, and multiplayer guides', meta: 'Shooter · 22,000 pages', color: COLOR },
  { title: 'Elden Ring Wiki', description: 'Everything about the Lands Between and beyond', meta: 'RPG · 19,400 pages', color: COLOR },
  { title: 'Fortnite Wiki', description: 'Weapons, skins, and island history', meta: 'Battle Royale · 14,200 pages', color: COLOR },
  { title: 'Tomb Raider Wiki', description: "Lara Croft's adventures through the ages", meta: 'Action · 14,500 pages', color: COLOR },
  { title: 'Starfield Wiki', description: 'Navigate the Settled Systems and beyond', meta: 'Sci-Fi RPG · 11,200 pages', color: COLOR },
  { title: 'Diablo IV Wiki', description: 'All classes, dungeons, and endgame content', meta: 'Action RPG · 9,800 pages', color: COLOR },
]

export default function GamesPage() {
  return (
    <CategoryPage
      category="Games"
      color={COLOR}
      featuredWikis={featured}
      newAndUpdatedWikis={newAndUpdated}
      browseAllWikis={browseAll}
    />
  )
}

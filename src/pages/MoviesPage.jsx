import CategoryPage from '../components/CategoryPage'

const COLOR = '#B45309'

const featured = [
  { title: 'Marvel Cinematic Universe', description: 'Every hero, villain, and storyline in the MCU', meta: 'Superhero · 62,000 pages', color: COLOR },
  { title: 'Star Wars Wiki', description: 'The Force, the galaxy, and everything in it', meta: 'Sci-Fi · 177,000 pages', color: COLOR },
  { title: 'Harry Potter Wiki', description: 'Spells, creatures, and wizarding world lore', meta: 'Fantasy · 46,000 pages', color: COLOR },
]

const newAndUpdated = [
  { title: 'Dune Wiki', description: 'Arrakis, spice, and the future of the universe', meta: 'Sci-Fi · 8,700 pages', color: COLOR },
  { title: 'Oppenheimer Wiki', description: 'The Manhattan Project and its legacy', meta: 'Drama · 3,100 pages', color: COLOR },
  { title: 'Guardians of the Galaxy Wiki', description: "The galaxy's most unlikely heroes", meta: 'Superhero · 11,200 pages', color: COLOR },
  { title: 'Indiana Jones Wiki', description: 'Adventures, artifacts, and archaeological lore', meta: 'Adventure · 9,800 pages', color: COLOR },
]

const browseAll = [
  { title: 'Marvel Cinematic Universe', description: 'Every hero, villain, and storyline in the MCU', meta: 'Superhero · 62,000 pages', color: COLOR },
  { title: 'Star Wars Wiki', description: 'The Force, the galaxy, and everything in it', meta: 'Sci-Fi · 177,000 pages', color: COLOR },
  { title: 'The Lord of the Rings Wiki', description: 'Middle-earth lore, characters, and history', meta: 'Fantasy · 58,000 pages', color: COLOR },
  { title: 'DC Extended Universe Wiki', description: "DC's heroes and villains on the big screen", meta: 'Superhero · 38,400 pages', color: COLOR },
  { title: 'Harry Potter Wiki', description: 'Spells, creatures, and wizarding world lore', meta: 'Fantasy · 46,000 pages', color: COLOR },
  { title: 'Jurassic Park Wiki', description: 'Dinosaurs, science, and island history', meta: 'Sci-Fi · 12,300 pages', color: COLOR },
  { title: 'Dune Wiki', description: 'Arrakis, spice, and the future of the universe', meta: 'Sci-Fi · 8,700 pages', color: COLOR },
  { title: 'Indiana Jones Wiki', description: 'Adventures, artifacts, and archaeological lore', meta: 'Adventure · 9,800 pages', color: COLOR },
  { title: 'Guardians of the Galaxy Wiki', description: "The galaxy's most unlikely heroes", meta: 'Superhero · 11,200 pages', color: COLOR },
  { title: 'The Dark Knight Wiki', description: "Batman's greatest battle reimagined", meta: 'Action · 9,100 pages', color: COLOR },
  { title: 'Interstellar Wiki', description: 'Space, time, and the survival of humanity', meta: 'Sci-Fi · 5,800 pages', color: COLOR },
  { title: 'Inception Wiki', description: 'Dreams, layers, and the spinning top', meta: 'Thriller · 4,300 pages', color: COLOR },
]

export default function MoviesPage() {
  return (
    <CategoryPage
      category="Movies"
      color={COLOR}
      featuredWikis={featured}
      newAndUpdatedWikis={newAndUpdated}
      browseAllWikis={browseAll}
    />
  )
}

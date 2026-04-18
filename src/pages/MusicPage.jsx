import CategoryPage from '../components/CategoryPage'

const COLOR = '#059669'

const featured = [
  { title: 'Beyoncé Wiki', description: "Queen Bey's full discography and visual albums", meta: 'R&B · 3,400 pages', color: COLOR },
  { title: 'Taylor Swift Wiki', description: "Albums, eras, lyrics, and Taylor's universe", meta: 'Pop · 8,700 pages', color: COLOR },
  { title: 'The Beatles Wiki', description: "The Fab Four's complete discography and legacy", meta: 'Rock · 6,100 pages', color: COLOR },
]

const newAndUpdated = [
  { title: 'Kendrick Lamar Wiki', description: "Tracks, concepts, and K.Dot's discography", meta: 'Hip-Hop · 4,200 pages', color: COLOR },
  { title: 'Billie Eilish Wiki', description: "Music, artistry, and Billie's creative world", meta: 'Pop · 5,100 pages', color: COLOR },
  { title: 'Sabrina Carpenter Wiki', description: "Songs, tours, and Sabrina's rising career", meta: 'Pop · 2,800 pages', color: COLOR },
  { title: 'Chappell Roan Wiki', description: 'Songs, aesthetics, and rising pink pony stardom', meta: 'Pop · 1,900 pages', color: COLOR },
]

const browseAll = [
  { title: 'Taylor Swift Wiki', description: "Albums, eras, lyrics, and Taylor's universe", meta: 'Pop · 8,700 pages', color: COLOR },
  { title: 'The Beatles Wiki', description: "The Fab Four's complete discography and legacy", meta: 'Rock · 6,100 pages', color: COLOR },
  { title: 'Billie Eilish Wiki', description: "Music, artistry, and Billie's creative world", meta: 'Pop · 5,100 pages', color: COLOR },
  { title: 'Kendrick Lamar Wiki', description: "Tracks, concepts, and K.Dot's discography", meta: 'Hip-Hop · 4,200 pages', color: COLOR },
  { title: 'Beyoncé Wiki', description: "Queen Bey's full discography and visual albums", meta: 'R&B · 3,400 pages', color: COLOR },
  { title: 'Sabrina Carpenter Wiki', description: "Songs, tours, and Sabrina's rising career", meta: 'Pop · 2,800 pages', color: COLOR },
  { title: 'Lady Gaga Wiki', description: 'Albums, performances, and Little Monsters', meta: 'Pop · 7,300 pages', color: COLOR },
  { title: 'Eminem Wiki', description: "Marshall Mathers' complete rap discography", meta: 'Hip-Hop · 8,900 pages', color: COLOR },
  { title: 'Chappell Roan Wiki', description: 'Songs, aesthetics, and rising pink pony stardom', meta: 'Pop · 1,900 pages', color: COLOR },
  { title: 'Radiohead Wiki', description: "Thom Yorke's band and their experimental legacy", meta: 'Rock · 7,800 pages', color: COLOR },
  { title: 'Daft Punk Wiki', description: 'Electronic music pioneers and their robot legacy', meta: 'Electronic · 3,500 pages', color: COLOR },
  { title: 'Johnny Cash Wiki', description: "The Man in Black's country and folk legacy", meta: 'Country · 4,600 pages', color: COLOR },
]

export default function MusicPage() {
  return (
    <CategoryPage
      category="Music"
      color={COLOR}
      featuredWikis={featured}
      newAndUpdatedWikis={newAndUpdated}
      browseAllWikis={browseAll}
    />
  )
}

import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GamesPage from './pages/GamesPage'
import GamesTrendingPage from './pages/GamesTrendingPage'
import GamesPopularPage from './pages/GamesPopularPage'
import GamesBrowsePage from './pages/GamesBrowsePage'
import AnimePage from './pages/AnimePage'
import AnimeTrendingPage from './pages/AnimeTrendingPage'
import AnimePopularPage from './pages/AnimePopularPage'
import AnimeBrowsePage from './pages/AnimeBrowsePage'
import AnimeDeathNotePage from './pages/AnimeDeathNotePage'
import CommunityPage from './pages/CommunityPage'
import PostPage from './pages/PostPage'
import AccountPage from './pages/AccountPage'
import TVPage from './pages/TVPage'
import MoviesPage from './pages/MoviesPage'
import MusicPage from './pages/MusicPage'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/games/trending" element={<GamesTrendingPage />} />
        <Route path="/games/popular" element={<GamesPopularPage />} />
        <Route path="/games/browse" element={<GamesBrowsePage />} />
        <Route path="/anime" element={<AnimePage />} />
        <Route path="/anime/trending" element={<AnimeTrendingPage />} />
        <Route path="/anime/popular" element={<AnimePopularPage />} />
        <Route path="/anime/browse" element={<AnimeBrowsePage />} />
        <Route path="/anime/browse/death-note" element={<AnimeDeathNotePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/account/post" element={<PostPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/tv" element={<TVPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/music" element={<MusicPage />} />
      </Routes>
    </HashRouter>
  )
}

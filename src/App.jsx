import { lazy, Suspense } from 'react';

//
import { Routes, Route } from 'react-router-dom';

import NotFoundPage from './pages/NotFoundPage.jsx';
import Navigation from './components/Navigation/Navigation.jsx';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const MoviePage = lazy(() => import('./pages/MoviePage.jsx'));
// const MovieList = lazy(() => import('./components/MovieList.jsx'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage.jsx'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast.jsx'));
const MovieReviews = lazy(() =>
  import('./components/Reviews/MovieReviews.jsx')
);

export const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie_search" element={<MoviePage />} />
          {/* <Route path="/movies" element={<MovieList />} /> */}
          <Route path="/movies" element={<MoviePage />} />

          <Route path="/movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;

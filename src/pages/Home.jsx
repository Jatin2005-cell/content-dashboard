import DashboardLayout from "../components/layout/DashboardLayout";
import NewsCard from "../components/cards/NewsCard";
import MovieCard from "../components/cards/MovieCard";
import SocialCard from "../components/cards/SocialCard";
import Loader from "../components/common/Loader";

import socialPosts from "../data/socialPosts";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import {
  setNews,
  setLoading,
} from "../redux/slices/newsSlice";

import {
  setMovies,
  setMovieLoading,
} from "../redux/slices/movieSlice";

import { fetchNews } from "../services/newsApi";
import { fetchTrendingMovies } from "../services/movieApi";
import { FaNewspaper, FaFilm, FaUsers } from "react-icons/fa";

function Home() {
  const dispatch = useDispatch();

  const query = useSelector((state) => state.search.query);

  const articles = useSelector((state) => state.news.articles);
  const newsLoading = useSelector((state) => state.news.loading);

  const movies = useSelector((state) => state.movies.movies);
  const movieLoading = useSelector((state) => state.movies.loading);

  useEffect(() => {
    const loadNews = async () => {
      dispatch(setLoading(true));

      const data = await fetchNews();

      dispatch(setNews(data));

      dispatch(setLoading(false));
    };

    loadNews();
  }, [dispatch]);

  useEffect(() => {
    const loadMovies = async () => {
      dispatch(setMovieLoading(true));

      const data = await fetchTrendingMovies();

      dispatch(setMovies(data));

      dispatch(setMovieLoading(false));
    };

    loadMovies();
  }, [dispatch]);

  const filteredNews = articles.filter((article) =>
    article.title?.toLowerCase().includes(query.toLowerCase())
  );

  const filteredMovies = movies.filter((movie) =>
    movie.title?.toLowerCase().includes(query.toLowerCase())
  );

  const filteredPosts = socialPosts.filter((post) =>
    post.content.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Heading */}
        <div>
          <h1 className="text-3xl font-bold">
            Personalized Dashboard
          </h1>

          <p className="text-gray-500">
            Discover trending content
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-5">

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-gray-500">
              News Articles
            </h3>

            <p className="text-4xl font-bold mt-2">
              {articles.length}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-gray-500">
              Movies
            </h3>

            <p className="text-4xl font-bold mt-2">
              {movies.length}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-gray-500">
              Social Posts
            </h3>

            <p className="text-4xl font-bold mt-2">
              {socialPosts.length}
            </p>
          </div>

        </div>
        import {
 FaNewspaper,
 FaFilm,
 FaUsers
} from "react-icons/fa";

        {/* News Section */}
        <div>

          <h2 className="text-2xl font-semibold mb-4">
            Latest News
          </h2>

          {newsLoading ? (
            <Loader />
          ) : filteredNews.length === 0 ? (
            <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500">
              No news found.
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-5">
              {filteredNews.map((article) => (
                <NewsCard
                  key={article.url}
                  article={article}
                />
              ))}
            </div>
          )}

        </div>

        {/* Movies Section */}
        <div>

          <h2 className="text-2xl font-semibold mb-4">
            Recommended Movies
          </h2>

          {movieLoading ? (
            <Loader />
          ) : filteredMovies.length === 0 ? (
            <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500">
              No movies found.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredMovies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                />
              ))}
            </div>
          )}

        </div>

        {/* Social Feed */}
        <div>

          <h2 className="text-2xl font-semibold mb-4">
            Social Feed
          </h2>

          {filteredPosts.length === 0 ? (
            <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500">
              No social posts found.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredPosts.map((post) => (
                <SocialCard
                  key={post.id}
                  post={post}
                />
              ))}
            </div>
          )}

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Home;
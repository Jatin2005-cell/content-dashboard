import DashboardLayout from "../components/layout/DashboardLayout";
import MovieCard from "../components/cards/MovieCard";
import NewsCard from "../components/cards/NewsCard";

import { useSelector } from "react-redux";

function Trending() {
  const movies = useSelector((state) => state.movies.movies);
  const articles = useSelector((state) => state.news.articles);

  return (
    <DashboardLayout>
      <div className="space-y-10">

        <div>
          <h1 className="text-3xl font-bold">
            Trending
          </h1>

          <p className="text-gray-500">
            Latest trending movies and news
          </p>
        </div>

        {/* Trending Movies */}

        <div>

          <h2 className="text-2xl font-semibold mb-5">
            🎬 Trending Movies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {movies.slice(0,6).map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))}

          </div>

        </div>

        {/* Trending News */}

        <div>

          <h2 className="text-2xl font-semibold mb-5">
            📰 Trending News
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">

            {articles.slice(0,6).map((article) => (
              <NewsCard
                key={article.url}
                article={article}
              />
            ))}

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Trending;
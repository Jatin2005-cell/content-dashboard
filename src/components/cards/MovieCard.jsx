import { FaHeart, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addFavorite } from "../../redux/slices/favoriteSlice";

function MovieCard({ movie }) {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(
      addFavorite({
        id: movie.id,
        title: movie.title,
        image: movie.poster_path,
        type: "movie",
      })
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden hover:shadow-xl transition duration-300">

      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://picsum.photos/500/300"
        }
        alt={movie.title}
        className="w-full h-64 object-cover"
      />

      <div className="p-4">

        <h2 className="font-bold text-lg">
          {movie.title}
        </h2>

        <div className="flex items-center gap-2 mt-2 text-yellow-500">
          <FaStar />
          <span>{movie.vote_average}</span>
        </div>

        <p className="text-gray-600 text-sm mt-3">
          {movie.overview?.slice(0, 120)}...
        </p>

        <button
          onClick={handleFavorite}
          className="mt-5 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <FaHeart />
          Add to Favorites
        </button>

      </div>
    </div>
  );
}

export default MovieCard;
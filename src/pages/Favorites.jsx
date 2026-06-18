import DashboardLayout from "../components/layout/DashboardLayout";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/Slices/favoriteSlice";
import { FaTrash } from "react-icons/fa";

function Favorites() {
  const dispatch = useDispatch();

  const favorites = useSelector(
    (state) => state.favorites.items
  );

  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-3xl font-bold">
            ❤️ Favorites
          </h1>

          <p className="text-gray-500">
            Your saved movies
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="bg-white rounded-xl shadow p-10 text-center">
            <h2 className="text-2xl font-semibold">
              No Favorites Yet
            </h2>

            <p className="text-gray-500 mt-2">
              Add movies from the Home page.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {favorites.map((movie) => (

              <div
                key={movie.id}
                className="bg-white rounded-2xl shadow overflow-hidden hover:shadow-xl transition"
              >

                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.image}`}
                  alt={movie.title}
                  className="w-full h-72 object-cover"
                />

                <div className="p-4">

                  <h2 className="font-bold text-lg">
                    {movie.title}
                  </h2>

                  <button
                    onClick={() =>
                      dispatch(removeFavorite(movie.id))
                    }
                    className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg flex justify-center items-center gap-2"
                  >
                    <FaTrash />
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>
    </DashboardLayout>
  );
}

export default Favorites;
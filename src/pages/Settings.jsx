import DashboardLayout from "../components/layout/DashboardLayout";
import ThemeToggle from "../components/common/ThemeToggle";
import { useDispatch } from "react-redux";
import { clearFavorites } from "../redux/Slices/favoriteSlice";

function Settings() {
  const dispatch = useDispatch();

  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-3xl font-bold">
            ⚙️ Settings
          </h1>

          <p className="text-gray-500">
            Manage your dashboard preferences
          </p>
        </div>

        {/* Theme */}

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-xl font-semibold mb-4">
            Theme
          </h2>

          <ThemeToggle />

        </div>

        {/* Favorites */}

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-xl font-semibold mb-4">
            Favorites
          </h2>

          <button
            onClick={() => dispatch(clearFavorites())}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
          >
            Clear All Favorites
          </button>

        </div>

        {/* About */}

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-xl font-semibold mb-4">
            About Project
          </h2>

          <p className="text-gray-600 leading-7">
            Personalized Content Dashboard built using
            React, Redux Toolkit, Tailwind CSS,
            NewsAPI and TMDB API.
          </p>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Settings;
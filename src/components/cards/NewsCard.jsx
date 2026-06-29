import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addFavorite } from "../../redux/Slices/favoriteSlice";

function NewsCard({ article }) {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(
      addFavorite({
        id: article.id,
        title: article.title,
        image: article.cover_image,
        type: "news",
      })
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={
          article.cover_image
            ? article.cover_image
            : `https://picsum.photos/500/300?random=${article.id}`
        }
        alt={article.title}
        className="w-full h-52 object-cover"
        onError={(e) => {
          e.target.src = `https://picsum.photos/500/300?random=${article.id}`;
        }}
      />

      <div className="p-4">
        <h2 className="font-bold text-lg line-clamp-2">
          {article.title}
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          By <span className="font-medium">{article.user?.name}</span> •{" "}
          {article.readable_publish_date}
        </p>

        <p className="text-gray-600 mt-3 line-clamp-3">
          {article.description || "No description available."}
        </p>

        <div className="flex justify-between items-center mt-5">
          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            Read More
          </a>

          <button
            onClick={handleFavorite}
            className="text-red-500 hover:scale-110 transition"
          >
            <FaHeart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
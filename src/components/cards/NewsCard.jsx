import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addFavorite } from "../../redux/slices/favoriteSlice";

function NewsCard({ article }) {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(
      addFavorite({
        id: article.url,
        title: article.title,
        image: article.urlToImage,
        type: "news",
      })
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">
      <img
  src={
    article.urlToImage
      ? article.urlToImage
      : "https://picsum.photos/500/300"
  }
  alt={article.title}
  className="w-full h-52 object-cover"
  onError={(e) => {
    e.target.src = "https://picsum.photos/500/300";
  }}
/>

      <div className="p-4">
        <h2 className="font-bold text-lg">
          {article.title}
        </h2>

        <p className="text-gray-500 mt-2">
          {article.description}
        </p>

        <div className="flex justify-between mt-4">
          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Read More
          </a>

          <button onClick={handleFavorite}>
            <FaHeart />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
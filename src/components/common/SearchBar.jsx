import { useDispatch } from "react-redux";
import { setQuery } from "../../redux/Slices/searchSlice";

function SearchBar() {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search content..."
      onChange={(e) =>
        dispatch(setQuery(e.target.value))
      }
      className="border rounded-lg px-4 py-2 w-80"
    />
  );
}

export default SearchBar;
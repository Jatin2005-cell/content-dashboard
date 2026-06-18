import SearchBar from "../common/SearchBar";
import ThemeToggle from "../common/ThemeToggle";

function Header() {
  return (
    <div className="flex justify-between items-center p-5 bg-white shadow">
      <SearchBar />
      <ThemeToggle />
    </div>
  );
}

export default Header;
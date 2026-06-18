import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaFire,
  FaHeart,
  FaCog,
  FaNewspaper,
} from "react-icons/fa";

function Sidebar() {
  const links = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "Trending",
      path: "/trending",
      icon: <FaFire />,
    },
    {
      name: "Favorites",
      path: "/favorites",
      icon: <FaHeart />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col shadow-xl">

      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <FaNewspaper className="text-3xl text-blue-400" />

          <div>
            <h1 className="text-2xl font-bold">
              ContentHub
            </h1>

            <p className="text-xs text-slate-400">
              Personalized Dashboard
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-5">
        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "hover:bg-slate-800 text-slate-300"
                }`
              }
            >
              <span className="text-lg">
                {link.icon}
              </span>

              <span className="font-medium">
                {link.name}
              </span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-5 border-t border-slate-700">
        <p className="text-xs text-slate-400 text-center">
          Built with ❤️ using React + Redux + Tailwind
        </p>
      </div>

    </aside>
  );
}

export default Sidebar;
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useSelector } from "react-redux";

function DashboardLayout({ children }) {
  const darkMode = useSelector(
    (state) => state.settings.darkMode
  );

  return (
    <div
      className={`flex ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-slate-100 text-black"
      }`}
    >
      <Sidebar />

      <div className="flex-1 min-h-screen">
        <Header />

        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
<footer className="text-center py-6 text-gray-500 border-t mt-10">
  © 2026 Jatin Sharma • Built with React, Redux & Tailwind CSS
</footer>
export default DashboardLayout;
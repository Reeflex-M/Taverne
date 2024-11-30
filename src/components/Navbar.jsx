import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { text: "Accueil", path: "/" },
    { text: "ApiCombattants", path: "/ApiCombattants" },
    { text: "Combattants Locaux", path: "/combattants-locaux" },
    { text: "Tous Les Combattants", path: "/tous-les-combattants" },
  ];

  return (
    <nav className="p-4 mb-3 border-2 border-bottom customShadow">
      <div className="container flex justify-between mx-auto">
        <Link to="/">La Taverne des Combattants</Link>
        <div className="flex gap-3">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `text-xl ${isActive ? "underline" : ""}`
              }
            >
              {item.text}{" "}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

import { NavLink, Link } from "react-router-dom";
import { navigationItems } from "../../data/siteContent";
import LogoMark from "../ui/LogoMark";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-canvas/75 backdrop-blur-2xl">
      <div className="mx-auto w-full max-w-content px-5 py-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" aria-label="alignAgency Startseite">
            <LogoMark />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navigationItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  [
                    "text-sm tracking-[0.18em] uppercase transition-colors duration-200",
                    isActive ? "text-primary-light" : "text-white/55 hover:text-white/90",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-medium text-primary-light transition hover:border-white/20 hover:bg-white/10"
          >
            Projekt anfragen
          </Link>
        </div>

        <nav className="mt-4 flex items-center gap-4 overflow-x-auto border-t border-white/6 pt-4 md:hidden">
          {navigationItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                [
                  "whitespace-nowrap text-xs uppercase tracking-[0.22em] transition-colors",
                  isActive ? "text-primary-light" : "text-white/55 hover:text-white/90",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

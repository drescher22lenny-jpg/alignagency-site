import { NavLink, Link } from "react-router-dom";
import { navigationItems } from "../../data/siteContent";
import LogoMark from "../ui/LogoMark";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#fbf8f2]/88 backdrop-blur-xl">
      <div className="mx-auto w-full max-w-[1480px] px-5 py-4 sm:px-8 lg:px-10">
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
                    "text-xs font-semibold uppercase tracking-[0.18em] transition-colors duration-200",
                    isActive ? "text-[#171717]" : "text-secondary hover:text-[#171717]",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white shadow-[0_6px_16px_rgba(23,23,23,0.12)] transition hover:-translate-y-0.5 hover:bg-[#ef4f24]"
          >
            Projekt anfragen
          </Link>
        </div>

        <nav className="mt-4 flex items-center gap-4 overflow-x-auto border-t border-black/10 pt-4 md:hidden">
          {navigationItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                [
                  "whitespace-nowrap text-xs uppercase tracking-[0.22em] transition-colors",
                  isActive ? "text-[#171717]" : "text-secondary hover:text-[#171717]",
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

import { Link } from "react-router-dom";
import LogoMark from "../ui/LogoMark";

function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto flex w-full max-w-content flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div className="max-w-xl space-y-4">
          <LogoMark />
          <p className="text-sm leading-6 text-white/60">
            Wir helfen Autohäusern und Motorradhändlern mit Short Form Content, Imagefilmen und
            einem professionelleren Online-Auftritt.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-white/55">
          <Link to="/about" className="transition hover:text-white/90">
            Über uns
          </Link>
          <Link to="/contact" className="transition hover:text-white/90">
            Kontakt
          </Link>
          <Link to="/impressum" className="transition hover:text-white/90">
            Impressum
          </Link>
          <Link to="/datenschutz" className="transition hover:text-white/90">
            Datenschutz
          </Link>
          <span className="pt-4 text-white/35">alignAgency © 2026</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

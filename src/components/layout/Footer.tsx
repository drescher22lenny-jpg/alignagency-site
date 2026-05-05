import { Link } from "react-router-dom";
import LogoMark from "../ui/LogoMark";

function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#f4efe8]">
      <div className="mx-auto flex w-full max-w-content flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <div className="max-w-xl space-y-4">
          <LogoMark />
          <p className="text-sm leading-6 text-secondary">
            Wir helfen Autohäusern, Motorradhändlern und Fahrradläden mit Short Form Content,
            Imagefilmen und einem professionelleren Online-Auftritt.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-secondary">
          <Link to="/about" className="transition hover:text-[#171717]">
            Über uns
          </Link>
          <Link to="/contact" className="transition hover:text-[#171717]">
            Kontakt
          </Link>
          <Link to="/impressum" className="transition hover:text-[#171717]">
            Impressum
          </Link>
          <Link to="/datenschutz" className="transition hover:text-[#171717]">
            Datenschutz
          </Link>
          <span className="pt-4 text-black/35">alignAgency © 2026</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

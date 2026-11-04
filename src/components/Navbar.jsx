import { useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "News", to: "/#books" },
  { label: "Promotion Of The Mount", to: "/#books" },
  { label: "Publishes", to: "/#books" },
  { label: "Subscribe To The Newsletter", to: "/#newsletter" },
];

function Toggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle dark mode"
      className={"w-9 h-5 rounded-full p-0.5 transition " + (dark ? "bg-brand" : "bg-stone-300")}
    >
      <span className={"block w-4 h-4 bg-white rounded-full transition " + (dark ? "translate-x-4" : "")} />
    </button>
  );
}

function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="px-5 md:px-10 py-4 flex items-center justify-between text-xs">
      <Link to="/" className="text-base font-semibold">
        B-<span className="font-bold">World</span>
      </Link>

      {/* desktop */}
      <nav className="hidden md:flex items-center gap-6">
        {links.map((l) => (
  <Link key={l.label} to={l.to} className="hover:text-brand">{l.label}</Link>
))}
        <span className="flex items-center gap-2">
          Dark mode <Toggle dark={dark} setDark={setDark} />
        </span>
      </nav>

      {/* mobile burger */}
      <button className="md:hidden text-xl" onClick={() => setOpen(true)} aria-label="Open menu">☰</button>

      {open && (
        <div className="md:hidden fixed inset-0 z-20 bg-white dark:bg-neutral-950 px-5 py-4">
          <button className="text-xl mb-6" onClick={() => setOpen(false)} aria-label="Close menu">✕</button>
          <ul className="space-y-5 text-sm">
            {links.map((l) => (
  <li key={l.label}>
    <Link to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>
  </li>
))}
          </ul>
          <div className="border-t border-stone-200 dark:border-neutral-800 mt-6 pt-4 flex items-center justify-between text-sm">
            Dark mode <Toggle dark={dark} setDark={setDark} />
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

export default function Navbar() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50">
      <nav className="flex items-center justify-between py-3 px-6 bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-full shadow-sm">
        <a href="#home" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600 hover:opacity-90 transition">
          Al‑Amin Oseni
        </a>
        <div className="flex items-center space-x-6">
          <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition">
            About
          </a>
          <a href="#experience" className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition">
            Experience
          </a>
          <a href="#projects" className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition">
            Projects
          </a>
          <a href="#skills" className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition">
            Skills
          </a>
          <a href="#contact" className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

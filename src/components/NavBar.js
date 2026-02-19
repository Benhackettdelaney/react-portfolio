const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 bg-black text-white border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Brand */}
        <a
          href="/#home"
          className="text-lg tracking-tight font-medium text-white no-underline"
        >
          Ben Hackett-Delaney
        </a>

        {/* Links */}
        <nav className="flex gap-6 text-sm text-neutral-300">
          <a
            href="/#about"
            className="text-neutral-300 no-underline hover:text-white transition-colors duration-200"
          >
            About
          </a>

          <a
            href="/#projects"
            className="text-neutral-300 no-underline hover:text-white transition-colors duration-200"
          >
            Projects
          </a>

          <a
            href="/#contact"
            className="text-neutral-300 no-underline hover:text-white transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

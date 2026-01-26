const NavBar = () => {
  return (
    <div className="sticky top-0 z-50 bg-black text-white border-b border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: name / brand */}
        <a href="#home" className="text-lg tracking-tight font-medium">
          Ben Hackett-Delaney
        </a>

        {/* Right: links */}
        <nav className="flex gap-6 text-sm text-neutral-300">
          <a href="#about" className="hover:text-white transition-colors duration-200">
            About
          </a>
          <a href="#projects" className="hover:text-white transition-colors duration-200">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition-colors duration-200">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

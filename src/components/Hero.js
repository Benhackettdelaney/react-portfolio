const Hero = () => {
  const linkStyle = { color: "#fff", textDecoration: "none" };

  return (
    <div className="py-16 md:py-20">
      <div className="text-left">
        <p className="text-sm text-neutral-400 tracking-wide mb-4">
          Creative Computing • Frontend / Web Development
        </p>

        <h1 className="text-5xl md:text-6xl font-medium tracking-tight">
          Ben Hackett-Delaney
        </h1>

        <p className="mt-6 text-lg text-neutral-300 max-w-xl leading-relaxed">
          I build clean, functional web experiences. Scroll to view my projects,
          demos, and contact details.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="/#projects"
            style={linkStyle}
            className="border border-neutral-700 rounded-xl px-5 py-3 hover:border-white transition-colors duration-200"
          >
            View projects
          </a>

          <a
            href="/#contact"
            style={linkStyle}
            className="border border-neutral-700 rounded-xl px-5 py-3 hover:border-white transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

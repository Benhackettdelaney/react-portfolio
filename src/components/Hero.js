const Hero = () => {
  const linkStyle = { color: "#fff", textDecoration: "none" };

  return (
    <div className="bg-black text-white">
      <div className="max-w-5xl mx-auto min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          {/* Left */}
          <div className="text-left">
            <p className="text-sm text-neutral-400 tracking-wide mb-4">
              Creative Computing • Frontend / Web Development
            </p>

            <h1 className="text-5xl md:text-6xl font-medium tracking-tight md:whitespace-nowrap">
              Ben Hackett-Delaney
            </h1>

            <p className="mt-6 text-lg text-neutral-300 max-w-xl leading-relaxed">
              I build clean, functional web experiences. Scroll to view my projects,
              demos, and contact details.
            </p>

            <div className="mt-10 flex flex-wrap items-start justify-start gap-3">
              <a
                href="#projects"
                style={linkStyle}
                className="border border-neutral-700 rounded-xl px-5 py-3 hover:border-white transition-colors duration-200"
              >
                View projects
              </a>

              <a
                href="#contact"
                style={linkStyle}
                className="border border-neutral-700 rounded-xl px-5 py-3 hover:border-white transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex md:justify-end">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl border border-neutral-800 overflow-hidden">
              <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-neutral-500">
                Your photo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

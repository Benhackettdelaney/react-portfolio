const Hero = () => {
  return (
    <div className="hero min-h-screen bg-black text-white px-4">
      <div className="flex-col lg:flex-row-reverse justify-content items-center">
        <div>
          <h1 className="text-5xl font-bold mb-12">Ben Hackett-Delaney Portfolio</h1>
          <p className="text-2xl py-2 mb-5">
            Welcome to my website — projects and other information can be found further down the page.
          </p>

          <a href="#projects" className="btn btn-success btn-outline">
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutCard from "./components/AboutCard";
import ContactCard from "./components/ContactCard";

import ProjectsIndex from "./pages/projects/Index";
import SkillSelection from "./components/SkillSelection";
import Show from "./pages/projects/Show";

import { Routes, Route } from "react-router-dom";

const Home = () => {
  const container = "max-w-6xl mx-auto px-4 md:px-8";
  const sectionSpacing = "py-8 md:py-10";

  return (
    <main className="bg-black text-white">
      <section id="home" className="pt-10 pb-6 md:pt-14 md:pb-8">
        <div className={container}>
          <Hero />
        </div>
      </section>

      {/* About + Experience together */}
      <section id="about" className={sectionSpacing}>
        <div className={container}>
          <AboutCard />

          {/* Experience sits directly under About */}
          <div id="experience" className="mt-8 md:mt-10">
            <SkillSelection />
          </div>
        </div>
      </section>

      <section id="projects" className={sectionSpacing}>
        <div className={container}>
          <ProjectsIndex />
        </div>
      </section>

      <section id="contact" className="py-8 md:py-10 pb-14">
        <div className={container}>
          <ContactCard />
        </div>
      </section>
    </main>
  );
};

const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<Show />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

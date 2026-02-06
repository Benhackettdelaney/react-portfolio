import { useState } from "react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutCard from "./components/AboutCard";
import ContactCard from "./components/ContactCard";

import ProjectsIndex from "./pages/projects/Index";
import SkillSelection from "./components/SkillSelection";

const App = () => {
  const [search, setSearch] = useState("");

  const onHandleChange = (e) => setSearch(e.target.value);

  return (
    <>
      <NavBar />

      {/* ✅ Consistent centered container + consistent padding */}
      <main className="bg-black text-white">
        <section id="home" className="py-12 md:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <Hero />
          </div>
        </section>

        <section id="about" className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <AboutCard />
          </div>
        </section>

        <section id="projects" className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ProjectsIndex />
          </div>
        </section>

        <section id="experience" className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <SkillSelection />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-16 pb-20">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <ContactCard />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default App;

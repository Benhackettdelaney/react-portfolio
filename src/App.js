import { useState } from "react";

// sections/components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutCard from "./components/AboutCard";
import ContactCard from "./components/ContactCard";

// your projects list section
import ProjectsIndex from "./pages/projects/Index";

const App = () => {
  const [search, setSearch] = useState("");

  const onHandleChange = (e) => setSearch(e.target.value);

  return (
    <>
      <NavBar search={search} onHandleChange={onHandleChange} />

      <section id="home">
        <Hero />
      </section>

      <section id="about" className="bg-base-200 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <AboutCard />
        </div>
      </section>

      <section id="projects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <ProjectsIndex search={search} />
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-zinc-200">
        <div className="max-w-5xl mx-auto">
          <ContactCard />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default App;

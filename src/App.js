import { useState } from "react";

// components/sections
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutCard from "./components/AboutCard";
import ContactCard from "./components/ContactCard";

// projects section
import ProjectsIndex from "./pages/projects/Index";

const App = () => {
  const [search, setSearch] = useState("");

  const onHandleChange = (e) => setSearch(e.target.value);

  return (
    <>
      <NavBar />

      <section id="home" className="bg-black">
        <Hero />
      </section>

      <section id="about" className="bg-black py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <AboutCard />
        </div>
      </section>

      <section id="projects" className="bg-black py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <ProjectsIndex />
        </div>
      </section>

      <section id="contact" className="bg-black py-10 px-4">
        <div className="max-w-5xl mx-auto">
          <ContactCard />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default App;

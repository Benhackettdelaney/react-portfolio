import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import ProjectsIndex from "./pages/projects/Index";
import ProjectsShow from "./pages/projects/Show";
import ProjectsDemo from "./pages/projects/Demo";
import Contact from "./pages/Contact";
//components
import NavBavr from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
const [search, setSearch] = useState("");

const onHandleChange = (e) => {
  setSearch(e.target.value)
}
  return (
    <Router>
      <div className="container mx-auto "></div>
      <NavBavr onHandleChange={onHandleChange}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectsIndex search={search} />} />
        <Route path="/projects/:slug" element={<ProjectsShow />} />
        <Route path="/projects/:slug/demo" element={<ProjectsDemo />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

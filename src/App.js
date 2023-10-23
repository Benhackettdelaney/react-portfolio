import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//pages
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import NavigateExample from "./pages/NavigateExample";
//components
import NavBavr from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <NavBavr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/nav-example" element={<NavigateExample />} />
      </Routes>
      Footer
    </Router>
  );
};

export default App;

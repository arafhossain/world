import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
import NavBar from "./components/NavBar/NavBar";
import { Smoke } from "./components/Smoke/Smoke";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
        <Smoke />
      </div>
    </Router>
  );
}

export default App;

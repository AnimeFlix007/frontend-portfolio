import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";

import './App.scss'

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <WorkExperience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <SocialMedia />
      <About />
      <Projects />
      <Skills />
      <WorkExperience />
      <ToastContainer />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

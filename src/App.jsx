import "./App.css";
import About from "./Layouts/About";
import Contact from "./Layouts/Contact";
import Education from "./Layouts/Education";
import Footer from "./Layouts/Footer";
import Home from "./Layouts/Home";
import Navbar from "./Layouts/Navbar";
import Notification from "./Layouts/Notification";
import Projects from "./Layouts/Projects";
import Skills from "./Layouts/Skills";

function App() {
  return (
    <>
      <Notification></Notification>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;

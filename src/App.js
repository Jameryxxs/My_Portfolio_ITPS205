import React from "react";
import Header  from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";


function App() {
  return (
    <div className="bg-grey-500 text-white scroll-smooth">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
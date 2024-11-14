
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Projects from './components/Projects';
import Internship from './components/Internship';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import About from "./components/About"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About/>
      <Education />
      <Projects />
      <Internship />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about" className="section-md bg-light">
          <About />
        </section>
        <section id="skills" className="section-md bg-white">
          <Skills />
        </section>
        <section id="education" className="section-md bg-light">
          <Education />
        </section>
        <section id="certifications" className="section-md bg-white">
          <Certifications />
        </section>
        <section id="projects" className="section-lg bg-white">
          <Projects />
        </section>
        <section id="contact" className="section-sm bg-light">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;

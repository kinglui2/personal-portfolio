import './App.css';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Services from './sections/Services';
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
        <section id="services" className="section-md bg-white">
          <Services />
        </section>
        <section id="projects" className="section-lg bg-light">
          <Projects />
        </section>
        <section id="contact" className="section-sm bg-white">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;

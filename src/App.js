import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Projects from './components/Projects/Projects';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import Skills from './components/Skills';
import { BrowserRouter } from 'react-router-dom';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <About />
        <Skills />
        <Services />
        <Projects />
        <NavBar />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

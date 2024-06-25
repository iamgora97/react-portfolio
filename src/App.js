
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Education from './components/Education';
import Contact from './components/Contact';
import Header from './components/Header';

function App() {
  return (
    <div className='bg-[#111111] h-full'>
      <Header/>
      <About/>
      <Experience/>
      <Skills/>
      <Education/>
      <Contact/>s
      <Footer/>
    </div>
  );
}

export default App;

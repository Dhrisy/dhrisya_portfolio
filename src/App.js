
import './App.css';
import NavBar from './pages/NavBar/NavBar';
import Hero from './pages/Hero/Hero';
import Skills from './pages/Skills/Skills';
import ContactMe from './pages/ContactMe/ContactMe';
import Footer from './pages/Footer/Footer';
import WorkExperience from './pages/WorkExperience/WorkExperience';

function App() {
  return (
    <div>
      <NavBar/>
      <div className='Container'>
      <Hero/></div>
      <Skills/>
      <div><WorkExperience/></div>
      <ContactMe/>
      <Footer/>


    </div>
  );
}

export default App;

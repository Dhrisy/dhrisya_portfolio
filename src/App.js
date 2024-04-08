
import './App.css';
import NavBar from './pages/NavBar/NavBar';
import Skills from './pages/Skills/Skills';
import ContactMe from './pages/ContactMe/ContactMe';
import Footer from './pages/Footer/Footer';
import WorkExperience from './pages/WorkExperience/WorkExperience';
import FeaturedProjects from './pages/featured_projects/FeaturedProjects';
import EntryPage from './pages/entryPage/EntryPage';

function App() {
  return (
    <div>
      <NavBar/>
      <EntryPage/>
     
      <Skills/>
     <WorkExperience/>
      <FeaturedProjects/>
      <ContactMe/>
      <Footer/>


    </div>
  );
}

export default App;

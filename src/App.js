
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Intro from './component/Intro/Intro'
import Navbar from './component/Navbar/Navbar';
import Skills from './component/skills/Skills';
import Works from './component/works/Works';
function App() {
  return (
    <div className="App">
   <Navbar/>
   <Intro/>
   <Skills/>
   <Works/>
   <Contact/>
<Footer/>
    </div>
  );
}

export default App;

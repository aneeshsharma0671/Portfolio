import './App.css';
import Navbar from './Components/Navbar/index';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import Projects from './Pages/projects';
import About from './Pages/about';
import Contact from './Pages/contact';
import BackGround from './Components/Background';

function App() {
  return (
    <div>
      <Router>
        <BackGround />
        <Navbar />
        <Routes>
          <Route exact path='/portfolio/' element={<Home />} />
          <Route path='/portfolio/' element={<Home />} />
          <Route path='/portfolio/projects' element={<Projects />} />
          <Route path='/portfolio/about' element={<About />} />
          <Route path='/portfolio/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

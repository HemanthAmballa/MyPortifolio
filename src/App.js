import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import ContactNEW from './components/Contactnew';
import Certificate from './components/certificate';
import ScrollTop from './components/ScrollTop';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      
      <Header></Header>
     
   
       <Routes>
         <Route path="/" element={<Home></Home>} />
         <Route path="/home" element={<Home></Home>} />
          <Route path="/aboutt" element={<About></About>} />
          <Route path="/projects" element={<Projects></Projects>} />
          <Route path="/contact" element={<ContactNEW/>} />
          <Route path='/resume' element={<Resume></Resume>}></Route>
           <Route path='/certificates' element={<Certificate></Certificate>}></Route> 
        </Routes> 
        
      </BrowserRouter>

    </div>
  );
}

export default App;

import React from 'react'
import { Link } from 'react-scroll'
import { Link as Linktag } from 'react-router-dom'
function Header() {
  return (
  
    <nav className="navbar">
    <Linktag to="/"  
      smooth={true} 
      offset={-100} 
      duration={50}  style={{color : 'blue'}} className="navbar-logo">Hemanth.dev</Linktag>
    <ul className="navbar-links">
      <li><Link to="home"  
      smooth={true} 
      offset={-100} 
      duration={50} className="navbar-link">Home</Link></li>
      <li><Link to="projects"   
      smooth={true} 
      offset={-100} 
      duration={50}  className="navbar-link">Projects</Link></li>
      <li><Link to="aboutt"  
      smooth={true} 
      offset={-100} 
      duration={50}  className="navbar-link">About</Link></li>
      <li><Link to="contact"  
      smooth={true} 
      offset={-100} 
      duration={50} className="navbar-link">Contact</Link></li>
      
    </ul>
  </nav>
  )
}

export default Header
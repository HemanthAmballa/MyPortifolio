import React from 'react'
import projects from '../data'
import c from '../images/image3.jpg'
import data from '../data.js'

function Projects() {
  console.log(data)
  return (
    
   <div className='container' id="projects" style={{marginTop : 0}} >
       {data.map((p)=>(
              <div class="card--own" style={{fontFamily : 'Georgia, serif'}}>
              <h5 class="card-header" style={{fontFamily : 'Garamond, serif',fontWeight : 'bold'}}>{p.title}</h5>
              <h4 class="card-title"style={{fontFamily : 'Garamond, serif',fontWeight : 'bold'}}>{p.projectName}</h4>
                <p class="card-text" style={{color:'white'}}>{p.description} </p>
                <hr></hr>
              <div className='row'>
                <div className='col-lg-8 toolbt'>
                  <div style={{fontWeight : 'bolder', color:'#ffecd1'}}>Stacks Used</div>
                  {p.Skills.map((skill)=>(
                    <span>{skill}</span>
                  ))}
                  
                </div>
              </div>
           </div>
       ))}

        
  </div>
  )
}

export default Projects

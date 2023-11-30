import React, { useState } from 'react'
import certificate from '../images/certificate.jpg'
import Resume from './Resume'
import stack from '../images/f2.png'
import image1 from '../images/FULLSTACK3.avif'
import { useNavigate } from 'react-router-dom'
function About() {
   const nav = useNavigate();
      const [h,setH] =  useState(false);
      const [a,setA] =  useState(false);
      const [b,setB] =  useState(false);
      const [c,setC] =  useState(false);
      const [d,setD] =  useState(false);
      const [e,setE] =  useState(false);
      const [f,setF] =  useState(false);
      const [g,setG] =  useState(false);
   function handleMouseIn() {       
    setH((value)=>!value)
  }
  
  function handleMouseOut() {
    setH((value)=>!value)
  }

  function handleMouseIn1() {
    setA((value)=>!value)
  }
  
  function handleMouseOut1() {
    setA((value)=>!value)
  }
  function handleMouseIn2() {
    setB((value)=>!value)
  }
  
  function handleMouseOut2() {
    setB((value)=>!value)
  }
  function handleMouseIn3() {
    setC((value)=>!value)
  }
  
  function handleMouseOut3() {
    setC((value)=>!value)
  }
  function handleMouseIn5() {
    setD((value)=>!value)
  }
  
  function handleMouseOut5() {
    setD((value)=>!value)
  }  function handleMouseIn6() {
    setE((value)=>!value)
  }
  
  function handleMouseOut6() {
    setE((value)=>!value)
  }  function handleMouseIn7() {
    setF((value)=>!value)
  }
  
  function handleMouseOut7() {
    setF((value)=>!value)
  }  function handleMouseIn8() {
    setG((value)=>!value)
  }
  
  function handleMouseOut8() {
    setG((value)=>!value)
  }
  const style={ display: h ? 'block' : 'none',color : 'white',
  background : '',
  width : 100,
  marginLeft : 300,
  height : 25,
  position : 'absolute',
  textAlign : 'center',
  borderRadius : 5,
  fontSize : 15,
  fontFamily : 'serif'
 
      }
      const style1={ display: a ? 'block' : 'none',color : '  rgb(247, 169, 59)',
      background : 'white',
      width : 100,
      marginLeft : 300,
      height : 25,
      position : 'absolute',
      textAlign : 'center',
      borderRadius : 5,
      fontSize : 15,
      fontFamily : 'serif'
     
          }
          const style2={ display: b ? 'block' : 'none',color : '  rgb(247, 169, 59)',
          background : 'white',
          width : 100,
          marginLeft : 300,
          height : 25,
          position : 'absolute',
          textAlign : 'center',
          borderRadius : 5,
          fontSize : 15,
          fontFamily : 'serif'
         
              }
              const style3={ display: c ? 'block' : 'none',color : '  rgb(247, 169, 59)',
              background : 'white',
              width : 100,
              marginLeft : 300,
              height : 25,
              position : 'absolute',
              textAlign : 'center',
              borderRadius : 5,
              fontSize : 15,
              fontFamily : 'serif'
             
                  }
                  const style4={ display: d ? 'block' : 'none',color : '  rgb(247, 169, 59)',
                  background : 'white',
                  width : 100,
                  marginLeft : 300,
                  height : 25,
                  position : 'absolute',
                  textAlign : 'center',
                  borderRadius : 5,
                  fontSize : 15,
                  fontFamily : 'serif'
        
                 
                      }
                      const style5={ display: e ? 'block' : 'none',color : '  rgb(247, 169, 59)',
                      background : 'white',
                      width : 100,
                      marginLeft : 300,
                      height : 25,
                      position : 'absolute',
                      textAlign : 'center',
                      borderRadius : 5,
                      fontSize : 15,
                      fontFamily : 'serif'
                     
                          }
                          const style6={ display: f ? 'block' : 'none',color : '  rgb(247, 169, 59)',
                          background : 'white',
                          width : 100,
                          marginLeft : 300,
                          height : 25,
                          position : 'absolute',
                          textAlign : 'center',
                          borderRadius : 5,
                          fontSize : 15,
                          fontFamily : 'serif'
                         
                              }
                              const style7={ display: g ? 'block' : 'none',color : '  rgb(247, 169, 59)',
                              background : 'white',
                              width : 100,
                              marginLeft : 300,
                              height : 25,
                              position : 'absolute',
                              textAlign : 'center',
                              borderRadius : 5,
                              fontSize : 15,
                              fontFamily : 'serif'
                             
                                  }      
      
                                      
  return (
  <div className='' id='aboutt'style={{marginBottom : 50}}>
    <div className='container' style={{marginTop : 30}}>  
        <section class="about" id="about">
            <div class="main">
                <img src={stack} class="aboutimg" alt=''/>
                <div class="about-text">
                    <h2>About Me</h2>
                    <h5>Aspiring Full Stack Developer</h5>
                    <p  style={{color : 'white'}}> I have trained in Java full stack web development which involves core java and advanced java in Backend developemnt and reactJs
             , Javascript ,HTML and CSS in Frontend developemnt with MySQL database. Also i have good knowledge on NodeJS and Angualr.js and
             have done projects on both Frontend and Backend.</p>
             <button
              class="button"
              onClick={() => {
                nav("/resume");
              }}
              style={{ marginRight: 80 }}
              type="button"
            >
              Resume
            </button>
            <button
              class="button"
              type="button"
              onClick={() => {
                nav("/certificates");
              }}
            >
              Certificates
            </button>
                </div>
            </div>
        </section>
      <div  className='section-titlee'>
        <div class="section-title" >
          <h2 style={{fontFamily : 'Garamond, serif',fontWeight : 'bold'}}>Skills </h2>
         
        
        </div>    
          <div className='row skills-content' style={{marginBottom : 25}}>
            <div className='col-lg-6' style={{paddingLeft : 40,paddingRight : 30}}>

            <div class="skills">
                <div class="details">
                    <span  style={{color : ' hwb(35 75% 0%)'}}>HTML</span>
                     <div className='' style={style1}>Excellent</div>
                    <span style={{fontFamily : ' sans-serif',color : ' hwb(35 75% 0%)'}}>90%</span>
                </div>
                <div   onMouseOver={()=>handleMouseIn1()} onMouseOut={()=>{handleMouseOut1()}} >
                <div class="bar">
                    <div id="html-bar"></div>
                </div>
                </div>
            </div>
            <div class="skills">
                <div class="details">
                    <span style={{fontFamily : ' sans-serif',color : ' hwb(35 75% 0%)'}}>CSS & Bootstrap</span>
                    <div className='' style={style}>Excellent</div>
                    <span style={{fontFamily : ' sans-serif',color : ' hwb(35 75% 0%)'}}>85%</span>
                </div>
                <div  onMouseOver={()=>handleMouseIn()} onMouseOut={()=>{handleMouseOut()}} >
                <div class="bar">
                    <div id="css-bar"></div>
                </div>
                </div>
            </div>
            <div class="skills">
                <div class="details">
                    <span style={{fontFamily : ' sans-serif',color : ' hwb(35 75% 0%)'}}>Javascript</span>
                    <div className='' style={style2}>Good</div>
                    <span style={{fontFamily : ' sans-serif',color : ' hwb(35 75% 0%)'}}>75%</span>
                </div>
                <div  onMouseOver={()=>handleMouseIn2()} onMouseOut={()=>{handleMouseOut2()}} >
                <div class="bar">
                    <div id="js-bar"></div>
                </div>
                   
                </div>
            </div>
            <div class="skills">
                <div class="details">
                    <span style={{fontFamily : ' sans-serif',color : ' hwb(35 75% 0%)'}}>React.js & Redux</span>
                    <div className='' style={style3}>Good</div>
                    <span style={{fontFamily : ' sans-serif',color : ' hwb(35 75% 0%)'}}>75%</span>
                </div>
                <div  onMouseOver={()=>handleMouseIn3()} onMouseOut={()=>{handleMouseOut3()}} >
                <div class="bar">
                    <div id="jQuery-bar"></div>
                </div>
                </div>
            </div>
            
            </div>
            <div className='col-lg-6' style={{paddingLeft : 30,paddingRight : 40}}>

            <div class="skills">
                <div class="details">
                    <span style={{fontFamily : ' sans-serif',color : ' hwb(35 75% 0%)'}}>Core Java</span>
                    <div className='' style={style4}>Excellent</div>
                    <span style={{fontFamily : ' sans-serif',color : ' hwb(35 75% 0%)'}}>90%</span>
                </div>
                <div  onMouseOver={()=>handleMouseIn5()} onMouseOut={()=>{handleMouseOut5()}} >
                <div class="bar">
                    <div id="one-bar"></div>
                </div>
                </div>
            </div>
            <div class="skills">
                <div class="details">
                    <span style={{fontFamily : ' sans-serif',color : ' hwb(35 75% 0%)'}}>Advanced Java - Spring Frameworks</span>
                    <div className='' style={style5}>Excellent</div>
                    <span style={{fontFamily : ' sans-serif',color : ' hwb(35 75% 0%)'}}>85%</span>
                </div>
                <div  onMouseOver={()=>handleMouseIn6()} onMouseOut={()=>{handleMouseOut6()}} >
                <div class="bar">
                    <div id="two-bar"></div>
                </div>
                </div>
            </div>
            <div class="skills">
                <div class="details">
                    <span style={{fontFamily : ' sans-serif',color : ' hwb(35 75% 0%)'}}>MySQL</span>
                    <div className='' style={style6}>Good</div>
                    <span style={{fontFamily : ' sans-serif',color : ' hwb(35 75% 0%)'}}>85%</span>
                </div>
                <div  onMouseOver={()=>handleMouseIn7()} onMouseOut={()=>{handleMouseOut7()}} >
                <div class="bar">
                    <div id="three-bar"></div>
                </div>
                </div>
            </div>
            <div class="skills">
                <div class="details">
                    <span style={{fontFamily : ' sans-serif',color : ' hwb(35 75% 0%)'}}>Servlets & Jsp</span>
                    <div className='' style={style7}>Good</div>
                    <span style={{fontFamily : ' sans-serif',color : ' hwb(35 75% 0%)'}}>70%</span>
                </div>
                <div  onMouseOver={()=>handleMouseIn8()} onMouseOut={()=>{handleMouseOut8()}} >
                <div class="bar">
                    <div id="four-bar"></div>
                </div>
                </div>
            </div>
            </div>
            </div>
            

            </div>
            </div>

     
      
 </div>
  )
}

export default About
import React from 'react'
import imagee from '../images/image3.jpg'
import image1 from '../images/FULLSTACK3.avif'
import java from '../images/java2.png'
import react1 from '../images/react2.png'
import js1 from '../images/javascript.png'
import sql from '../images/mysql.png'
import angular from '../images/angular.png'
import { useNavigate } from 'react-router-dom'
function Resume() {
     const nav =   useNavigate();
  return (
    <div className='container-fluid'style={{display : 'flex',flexDirection : 'column'}}>
    <div class="overlay" style={{paddingLeft:90,paddingRight:110}}>
         <h2 class="" style={{fontFamily : 'Garamond, serif',color : ' #ffecd1',fontWeight : 'bold',paddingLeft : 20,paddingTop : 20}}>My Resume
         <i  onClick={()=>{
                nav("/")
         }} class="fa fa-home" aria-hidden="true">
            </i></h2>
   </div>
   <div className='row' style={{marginLeft: 100,marginRight : 100,marginTop : 0}} >
          <div className='col-3' style={{marginLeft:0,marginRight:0,marginTop:50}}>
          <div class="card bg-dark text-white" style={{marginBottom : 25,position:'relative',paddingLeft :20}} id="wrap">
              <img class="card-img" style={{height : 226,width:250,backgroundColor:''}} src={java} alt=""/>
              <div class="overlay1 overlay_4">
                  <h3>JAVA</h3> 
             </div>
          </div>
          <div class="card bg-dark text-white" style={{marginBottom : 25,position:'relative',paddingLeft :28,paddingBottom:10}} id="wrap">
              <img class="card-img" style={{height : 228,width:250,backgroundColor:''}} src={react1} alt=""/>
              <div class="overlay1 overlay_4">
                  <h3>REACT</h3> 
             </div>
          </div>
          <div class="card bg-dark text-white" style={{marginBottom : 25,position:'relative'}} id="wrap">
              <img class="card-img" style={{height : 225,backgroundColor:''}} src={js1} alt=""/>
              <div class="overlay1 overlay_4">
                  <h3>JAVASCRIPT</h3> 
             </div>
          </div>
          <div class="card bg-dark text-white" style={{marginBottom : 25,position:'relative',paddingLeft :20}} id="wrap">
              <img class="card-img" style={{height : 220,width:250,backgroundColor:''}} src={sql} alt=""/>
              <div class="overlay1 overlay_4">
                  <h3>MySQL</h3> 
             </div>
          </div>
          <div class="card bg-dark text-white" style={{marginBottom : 25,position:'relative',paddingLeft :20}} id="wrap">
              <img class="card-img" style={{height : 220,width:250,backgroundColor:''}} src={angular} alt=""/>
              <div class="overlay1 overlay_4">
                  <h3>ANGULAR</h3> 
             </div>
          </div>
         
</div>
<div className='col-9' style={{}}>
  <div className='row resumecontainer radius' style={{marginLeft:0,marginRight:0}} >

<div className='col-4 leftcontent'>

    <div className='profile--txt'>
        <div className='myimage'>
            <img src={imagee} alt=''></img>
        </div>
        <h2>Hemanth Kumar<br/><span>Aspiring developer</span></h2>
    </div>
    
    <div className='contactt'>
        <h3 className='titlee'>Contact Info</h3>
        <ul>
            <li>
                <span className='icn'><i style={{fontSize : 18}} class="fa fa-phone fa-1x" aria-hidden="true"></i></span>
                <span  className='txt'>+91 9381416617</span>
            </li>
            <li>
                <span  className='icn'><i style={{fontSize : 18}} class="fa fa-envelope-o" aria-hidden="true"></i></span>
                <span  className='txt'>hemanthamballa4@gmail.com</span>
            </li>
            <li>
                <span  className='icn'><i style={{fontSize : 18}} class="fa fa-linkedin" aria-hidden="true"></i></span>
                <span  className='txt'>www.linkedin.com/in/amballa20</span>
            </li>
            <li>
                <span  className='icn'><i style={{fontSize : 18}}  class="fa fa-map-marker" aria-hidden="true"></i></span>
                <span  className='txt'>Eluru, A.P, India</span>
            </li>
        </ul>
    </div>

    <div className='contactt education'>
        <h3 className='titlee'>Education</h3>
        <ul>
           <li>
                <h5>2018-2022<span>70.3%</span></h5>
                <h4>Btech in Electical and Electronics</h4>
                <h4>JNTU university - Narasaraopet</h4>
           </li>
           <li>
                <h5>2016-2018<span>96%</span></h5>
                <h4>Intermediate in MPC</h4>
                <h4>Sri Chaitanya College</h4>
           </li>
           <li>
                <h5>2015-2016<span>95%</span></h5>
                <h4>10th Class</h4>
                <h4>Sri Chaitanya school</h4>
           </li>
        </ul>
    </div>
    <div className='contactt lang'>
        <h3 className='titlee'>Languages</h3>
        <ul>

            <li>
                <span className='text'>English</span>
                <span className='percent'>
                    <div className='one'></div>
                </span>
            </li>
            <li>
                <span className='text'>Telugu</span>
                <span className='percent'>
                <div className='two'></div>
                </span>
            </li>
            <li>
                <span className='text'>Hindi</span>
                <span className='percent'> <div className='three'></div></span>
            </li>
          
        </ul>
    </div>
</div>
<div className='col-8 rightcontent'>

    <div className='aboutt'>
            <h2 className='prof'>Profile</h2>
            <p className='para'>I am an aspring developer and have trained in Java full stack development.
            i would like to face challenging and responsible tasks in IT industry where i can apply my current skills
            ,learn new techniques and to grow along with the organization</p>
    </div>

    
    <div className='aboutt'>
            <h2 className='prof'>Projects</h2>
            <div className='box'>
                <div>
                    <h3 style={{color : '#2a7da2',marginBottom : 15}}>Digitalmart - Ecommerce Application</h3>
                    <h5><span style={{color : '#2a7da2',fontWeight : 645}}>Technologies used </span>:<span style={{fontWeight : 400,fontSize :18,fontFamily:'sans-serif'}}> HTML, CSS, Bootstrap, JS, React, ReduxToolkit</span></h5>
                </div>
                <div>
                    <h4 style={{color : '#2a7da2',fontSize : 24}}>Description :</h4>
                    <p>This project enables users to <span>register</span> into Digitalmart 
      Application using database and can login afterwords and users can see various products which they can Shop through adding 
      and removing items in the cart and check the total products added and their price. Also there is a Payment functionality
      through Razorpay where we can do the payments.</p>

                </div>
            </div>

            <div className='box'>
                <div>
                    <h3 style={{color : '#2a7da2',marginBottom : 15}}>Student Education Management System</h3>
                    <h5 ><span style={{color : '#2a7da2',fontWeight : 645}}>Technologies used </span>:<span style={{fontWeight : 400,fontSize :18,fontFamily:'sans-serif'}}> Java, Spring Boot with rest API, MySQL, Spring data JPA, Spring
                    Security with JWT role wise authentication, log4j</span></h5>
                </div>
                <div>
                    <h4 style={{color : '#2a7da2',fontSize : 24}}>Description :</h4>
                    <p>This project enables the school Management to monitor Student's fees, Marks.it consists of
      Three different authentication levels ADMIN, TEACHER and STUDENT. Admin acts a principle where he has access to 
      perform CRUD operation and teachers and students. Likewise teacher has control over students fee and marks and 
      students can check marks amd pay their fees.</p>

                </div>
            </div>
    </div>

    
    <div className='aboutt'>
            <h2 className='prof'> Technical Skills</h2>
            <div>
            <div>
                    <h5 style={{color : '#2a7da2',marginBottom : 10}}>BACKEND</h5>
                    <h5 style={{fontFamily : 'sans-serif',fontWeight : 150}} >Core Java, Advanced Java - Spring core, Spring data JPA, Spring
                    Security, Spring Boot, Hibernate, Basics in NodeJS</h5>
                </div>
                <div>
                    <h5 style={{color : '#2a7da2',marginBottom : 10}}>FRONTEND</h5>
                    <h5 style={{fontFamily : 'sans-serif',fontWeight : 150}} >HTML, CSS, Bootstrap, Javascript, ReactJs, ReduxToolkit, Redux,
                    Basics in AngularJs
                    </h5>
                </div>
                <div>
                    <h5 style={{color : '#2a7da2',marginBottom : 10}}>DATABASE</h5>
                    <h5 style={{fontFamily : 'sans-serif',fontWeight : 150}} >MySQL
                    </h5>
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

export default Resume
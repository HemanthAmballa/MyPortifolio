import React from 'react'
import certificate from '../images/certificate.jpg'
import certificate1 from '../images/angular.jpg'
import { useNavigate } from 'react-router-dom'
function Certificate() {
   const nav = useNavigate();
  return (
   <div className='container' style={{display : 'flex',flexDirection : 'column'}}>
    <div class=" overlay" style={{marginBottom:10}}>
         <h2 class="" style={{fontFamily : 'Garamond, serif',color : ' #ffecd1',fontWeight : 'bold',paddingLeft : 20,paddingTop : 20}}>My Certifications
         <i  onClick={()=>{
                nav("/")
         }} class="fa fa-home" aria-hidden="true"></i></h2>
   </div>

   <div class="row">
  <div class="col-6">
    <img src={certificate} alt="" style={{width:660,height:500,borderRadius : 26}}/>
  </div>
  <div class="col-6">
  <img src={certificate1} alt="" style={{width:670,height :500,borderRadius: 26,marginLeft : 15}}/>
  </div>
 
</div>
      </div>
      
    


    
  )
}

export default Certificate
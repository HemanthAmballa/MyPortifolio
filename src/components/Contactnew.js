import React from 'react'
import contact from '../images/images.jpeg'
import styled from 'styled-components'
import image from '../images/contact.svg'
function ContactNEW() {
  

  return (
    <div style={{marginTop : 20}} id='contact'>
    <div class="Contact_content_wrapper">
      <h1 class="Contact_title" style={{opacity: 1, marginLeft: 0}}>Let's Connect</h1>
      <p class="Contact_subTitle" style={{opacity: 1, marginRight: 0}}>Send me a mail if my profile meets your requirement.</p>
      <div class="row" style={{marginLeft : 100}}>
        <div className='col-6' style={{opacity: 1, marginTop: 0,paddingLeft : 40,paddingRight : 20}}>
        <form>
          <input class="Contact_input" type="text" placeholder="Your name" name="name"/>
          <input class="Contact_input1" type="email" placeholder="Your e-mail" name="email"/>
            <textarea class="Contact_textarea" type="text" placeholder="Write your message" name="message">
              </textarea>
              <input class="Contact_submit" type="submit" value="Send"/>
                </form>
                </div>
                <div class="col-6 Contact_imageWrapper" style={{opacity: 1, marginLeft: 0}}>
                  <img src={image} alt="" style={{width: 450, height: 450}}/>
                  </div>
                  </div>
             </div>   
             <div style={{marginTop:10,marginBottom:10,marginLeft:0,marginRight:0}}>
             <div class="Footer_wrapper" style={{opacity: 1, marginTop: 0}}>
              
                <div class="">
                <button class="btn fb-btn"><i class="fa fa-facebook" aria-hidden="true" id="fb"></i></button>
                  </div>
               
                    <div class="">
                    <button class="btn ig-btn"><i class="fa fa-instagram" aria-hidden="true" id="ig"></i></button>
                      </div>
                
                        <div class="">
                        <button  class="btn tw-btn"> <i class="fa fa-twitter" aria-hidden="true" id="tw"></i> </button>
              
                          </div>
                          
                          
                <div class="">
                <button  class="btn wa-btn"><i className="fa fa-whatsapp" aria-hidden="true" id="wa"></i> </button>
                  </div>
                
              </div>
            </div>
             </div>
                  
                    
                  
                  
  )
}

export default ContactNEW
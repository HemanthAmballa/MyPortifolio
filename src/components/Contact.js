import React from 'react'
import contact from '../images/images.jpeg'
import styled from 'styled-components'
function Contact() {
   
    const SidebarContainer = styled.div`
    
    background-color:#282828;
    width : 4.5rem;
    height : 65vh;
    margin-top : 3.3rem;
    border-radius : 30px 0px 0px 30px;
    padding : 2.1rem 0;
    display : flex;
    flex-direction : column;
    align-items: center;
    justify-content :space-between;
    margin-left : 307.3px
    
    `

  return (
 <div  className='container-fluid'>
    <div className='row'>

        <div style={{marginLeft : 253.25}} className='col-7'>

        <section className="contact" id="contact">

            
            <div className="container contactUs">

                <div className="contact-box">
                    <div className="left contactLeft">
                        <img src={contact} className="contact-img" alt="" width="150px " />

                        <div className="contact-info">
                            <p><i className="bi bi-telephone-fill"></i> +91-9381416617</p>
                            <p><i style={{marginRight : 2}} className="bi bi-envelope-fill"> </i>hemanthamballa4@gmail.com</p>
                            <p><i className="bi bi-geo-alt-fill"></i> Andhra Pradesh, India</p>

                        </div>
                        <p className='contact-content'>If you have any vacancies in your company, please feel free to reach out if you want to hire me. </p>

                        <p className='contact-content'>Thanks for visiting .</p>

                    </div>
                    <div className="right contactRight">
                        <h2 className='contacth2' style={{color : ' #173b6c'}}>Let's Connect</h2>
                        <form className='contactField'> 
                            <input type="text" style={{marginTop : 5}} className="field " placeholder="Enter your Full Name" required/>
                            <input type="email" className="field " placeholder="Enter your Email" required/>
                            <input type="text" className="field " placeholder="Enter your Phone Number" />
                            <textarea name="msg" placeholder="Suggestions/Queries" className="field contactTextarea" required></textarea>
                            <button className="btnn contactBtn" type='submit'>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </div>

    <SidebarContainer>

      <div className="" style={{textAlign : 'end'}}>
                <div className="text-center center-block">
                    <button class="btn fb-btn">   <i class="fa fa-facebook" aria-hidden="true" id="fb"></i></button>
                    <button class="btn ig-btn"><i class="fa fa-instagram" aria-hidden="true" id="ig"></i></button>
                    <button  class="btn tw-btn"> <i class="fa fa-twitter" aria-hidden="true" id="tw"></i> </button>
                    <button  class="btn wa-btn"><i className="fa fa-whatsapp" aria-hidden="true" id="wa"></i> </button>
                </div>
      </div>
      </SidebarContainer>
        
        

    </div>
    </div>
  )
}

export default Contact
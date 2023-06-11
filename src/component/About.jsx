import React from 'react'
import Homes from './homes'
const About = () => {
  return (
    <div clsss="container">
      <Homes />
      <section id="about" className="about" >
      <div className="container">

        <div className="row">
          <div className="col-lg-6">
          <div className="content pt-4 pt-lg-0">
          <h3>History</h3>
         <img src='http://sihs.education/mysite/images/icons/logo.png' style={{width:300,marginLeft:-50}}/>
         
         <p lass="fst-italic">
        <strong><span style={{color:"blue"}}> Saint Ignatius</span> High School Portal</strong> Is a school project developed by students in Saint Igantius and developed with vision to transforming the school. These student are represented by the name COMPUTER PROFESSIONALS and the are talented in providing and finding solution for the school's
         </p>

         
        
        
            
          </div>
          </div>
          <div className="col-lg-6 d-flex flex-column justify-contents-center" >
            <div className="content pt-4 pt-lg-0">
         
           <h3>Our working Environmnet and Our team.</h3>
           <p lass="fst-italic">
          <strong><span style={{color:"blue"}}> </span>SICP </strong> We are a team of students that work on variouse project and one of them include the school portal. We focus much on innovation and creativity and we also do make research on various trending projects.
           </p>
           <ul>
             <li><i className="bi bi-check-circle"></i>Six members.</li>
             <li><i className="bi bi-check-circle"></i>Cordinated by Teacher.</li>
             <li><i className="bi bi-check-circle"></i>More than 20 school  projects .</li>
           </ul>
           
          
              
            </div>
          </div>
        </div>

      </div>
    </section>
    </div>
  )
}

export default About
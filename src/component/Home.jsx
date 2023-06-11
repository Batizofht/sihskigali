import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const Home = () => {
    const [text, setText] = useState("");
    const sentence = "WELCOME TO SIHS PORTAL";
    const delay = 200;
    useEffect(() => {
        let timeoutId;
        if (text.length < sentence.length) {
          timeoutId = setTimeout(() => {
            setText(sentence.substring(0, text.length + 1));
          }, delay);
        } else {
          timeoutId = setTimeout(() => {
            setText("");
          }, 2000); // Wait 2 seconds before clearing the text and starting over
        }
        return () => clearTimeout(timeoutId);
      }, [text, sentence, delay]);

      
  return (
    <div className='container'>
        <div className="d-flex   justify-content-center my-5" style={{width: "100%"}}>
            <div className='text-center' >
                <div className='d-flex' style={{borderBottom:"",height:80}}>
                     <h1  className='text-primary fw-bold welcome'>
                    {text} 
                     </h1>
                     <i style={{fontSize:30,marginLeft:10,paddingTop:2,transform: 'rotate(316deg)',marginTop:-10}} className='bi bi-pencil text-success'></i>
                </div>
                <div>
                    
                </div>
            <p className='fw-bold'> <span>In</span>  All Things To Serve.</p>
            {/* <p className='fw-bold text-success'>   Ad Majorem Dei Glorian.</p> */}
            


            </div>
           
        </div>

        <div className="d-flex   justify-content-center mt-5">
            
         
       
    
        <div className='text-center'>
                 <p className='fw-bold text-primary'>STUDENT ID</p>
            </div>
    
 </div>
 <div className="d-flex   justify-content-center">
            
         
       
    
         
        <div>
          </div>        
    
      <input  type="text" class="form-control ifomo" placeholder="If you are a student write in your ID" aria-label="Recipient's username" aria-describedby="basic-addon2" />

     </div>
     <div className="d-flex   justify-content-center">
            
         
       
    
            
      <div className='text-center'>
                     <a className='btn btn-primary my-4 rounded-pill py-2' href=''>CONTINUE</a>
                </div>
     </div>

     <div class="alert alert-success text-center" role="alert">
  <h4 class="alert-heading">Welcome all the Jesuits Community</h4>
  <p>We are proude of creating a new school portal that will include all the school activities and other plans so that all can be in one througth this school community platform. All the energy has been put so that this platform get to live and we hope it will change the future education of the school.</p>
  <hr />
  <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>
    </div>
  )
}

export default Home
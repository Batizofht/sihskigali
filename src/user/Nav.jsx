import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { AuthContext } from '../ahook/Auth'
import { useNavigate } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'
import "./css.css"
const Nav = () => {
  const navigate = useNavigate();
  const [homeactive, setActive] = useState("itr");
const logout = ()=>{
  localStorage.removeItem("users");
  localStorage.removeItem("admin");
  location.href="/"
}
// const location = useLocation();

// const pathName = location.pathname;
// if(pathName =="/"){
//   setActive("itractive");
// }
  const{user} = useContext(AuthContext);
  return (
    <div>
    <div style={{position:"fixed"}} class="container-fluid ">
		   <div class="row">
		   <div class="col-md-3 col-lg-2 sidebar pmpm">
				<h3 style={{fontWeight:"bold",color:"#007BFF"}}>SIHS PORTAL</h3>
        <img src='http://sihs.education/mysite/images/icons/logo.png' style={{width:130,marginLeft:-10}}/>
        <div className='overf '>
				 
         {
          user.admintype ==="DM" ? 
            <>
    <ul>
					  <li><NavLink activeClassName="active" className="itr" to="/Dashboard">Home</NavLink></li>
					  <li><NavLink activeClassName="active"  className="itr" to="/Chat">Chat</NavLink></li>
            <li><NavLink activeClassName="active"  className="itr" to="/SittingPlan">Sitting plan</NavLink></li>
            <li><NavLink activeClassName="active"  className="itr" to="/Timetables">Timetables</NavLink></li>
            <li><NavLink activeClassName="active" className="itr" to="/All">All students</NavLink></li>
            
           
         
				  </ul>
            </>
          :
<>
{user.admintype =='TR' ? <>
<ul>
					  <li><NavLink activeClassName="active" className="itr" to="/Dashboard">Home</NavLink></li>
					  <li><NavLink activeClassName="active"  className="itr" to="/Class">My Class</NavLink></li>
            <li><NavLink activeClassName="active"  className="itr" to="/Chat">Chat</NavLink></li>
            <li><NavLink activeClassName="active"  className="itr" to="/Timetables">Timetables</NavLink></li>
            <li><NavLink activeClassName="active" className="itr" to="/ExPlan">Exams Plan</NavLink></li>

            
           
         
				  </ul>
</>:

<>
<ul>
					  <li><NavLink activeClassName="active" className="itr" to="/Dashboard">Home</NavLink></li>
					  <li><NavLink activeClassName="active"  className="itr" to="/Class">My Class</NavLink></li>
            <li><NavLink activeClassName="active"  className="itr" to="/Chat">Chat</NavLink></li>
            <li><NavLink activeClassName="active"  className="itr" to="/Timetables">Timetables</NavLink></li>
            <li><NavLink activeClassName="active" className="itr" to="/Plan">Sitting Plan</NavLink></li>

            
           
         
				  </ul>
</>}
</>

         }
      
        </div>  
        <div  className='downmenu'>
          <div className='menua'>
            <center>
                 <h4>SIHS Portal</h4>
            <p>Version: 0.001</p>
            </center>
         
          </div>
          <div  className='dropdown'>
            <a className='btn  dropdown-toggle text-light fw-bold' style={{width:"100%"}} data-bs-toggle='dropdown' aria-expanded='false'>
              {user.profile ? 
              <>
          <img src='' />
              </>
              :
              <>
     <img src='https://img.freepik.com/premium-vector/3d-boy-cartoon-character-head-with-headphones-social-network-profile-vector-illustration_480270-393.jpg?w=2000' className='rounded-pill' style={{width:40,height:40}} />
              </>
              }
             
         <span style={{color:"white"}}> {user.firstname}  {user.username}</span> 
            </a>

              <ul class="dropdown-menu dropuser">
                 <li><Link class="dropdown-item " to='Pro'>{user.firstname} Profile</Link></li>
                 <li><Link class="dropdown-item " to="Notification">Notificatiom</Link></li>
                 <li><Link class="dropdown-item " to="Settings">Settings</Link></li>
                 <li><hr class="dropdown-divider" /></li>
                 <li><Link class="dropdown-item " onClick={logout} >Log out</Link></li>
              </ul>

          </div>
        
        </div>
			</div>
		   	<div class="col-md-9 col-lg-10 main-content" style={{overflowY: 'scroll', height:"100vh"}}>
		   <Outlet />
       
      <div className='footer'>
        <footer>
          <div className='container-fluid py-5'>
            <div className='row'>
              <div className='col-6'>
                <div className='d-flex'>
             
                  <h5>© 2022 Saint Ignatus High School</h5>
                </div>
              </div>
              <div className='col-6'>
                <p className='text-end'>Made with ❤ by Saint Ignatius High School Computer Specialist & R-CLUB</p>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <p onClick={logout} style={{position:"absolute", bottom:60, right:10,}}><i style={{padding:"10px 15px 10px 10px"}} class="bi bi-box-arrow-in-right bg-primary rounded-pill text-light"></i></p>
		   	</div>

		   </div>
       
 
    </div>
    <div className="bg-primary footers">
     
    {
          user.admintype ==="DM" ? 
            <>
    <ul>
					  <li><NavLink activeClassName="active" className="itr" to="/Dashboard">
            <i class="bi bi-house-door-fill"></i>
              Home</NavLink></li>
					  <li><NavLink activeClassName="active"  className="itr" to="/Chat">
            <i class="bi bi-chat"></i>
              Chat</NavLink></li>
            <li><NavLink activeClassName="active"  className="itr" to="/SittingPlan">
            <i class="bi bi-bullseye"></i>
              Gene</NavLink></li>
            <li><NavLink activeClassName="active"  className="itr" to="/Timetables">
            <i class="bi bi-table"></i>
              Tables</NavLink></li>
            <li style={{marginRight:20}}><NavLink activeClassName="active" className="itr" to="/All">
            <i class="bi bi-people"></i>
              Stud</NavLink></li>

            
           
         
				  </ul>
            </>
          :
<>
{user.admintype =='TR' ? <>
<ul>
					  <li><NavLink activeClassName="active" className="itr" to="/Dashboard">
            <i class="bi bi-house-door-fill"></i>
              Home</NavLink></li>
					  <li><NavLink activeClassName="active"  className="itr" to="/Class">
            <i className="bi bi-person-workspace"></i>
              Class</NavLink></li>
            <li><NavLink activeClassName="active"  className="itr" to="/Chat">
            <i className="bi bi-chat"></i>
              Chat</NavLink></li>
            <li><NavLink activeClassName="active"  className="itr" to="/Timetables">
            <i className="bi bi-table"></i>
              Tables</NavLink></li>
            <li><NavLink activeClassName="active" className="itr" to="/ExPlan">
            <i className="bi bi-newspaper"></i>
              Exams</NavLink></li>

            
           
         
				  </ul>
</>:

<>
<ul>
					  <li><NavLink activeClassName="active" className="itr" to="/Dashboard">
            <i class="bi bi-house-door-fill"></i>
              Home</NavLink></li>
					  <li><NavLink activeClassName="active"  className="itr" to="/Class">
            <i className="bi bi-person-workspace"></i>
              Class</NavLink></li>
            <li><NavLink activeClassName="active"  className="itr" to="/Chat">
            <i class="bi bi-chat"></i>
              Chat</NavLink></li>
            <li><NavLink activeClassName="active"  className="itr" to="/Timetables">
            <i class="bi bi-table"></i>
              Table</NavLink></li>
            <li style={{marginRight:20}}><NavLink activeClassName="active" className="itr" to="/Plan">
            <i class="bi bi-bullseye"></i>
              Plan</NavLink></li>

            
           
         
				  </ul>
</>}
</>

         }
    </div>
    </div>
 
  )
}

export default Nav
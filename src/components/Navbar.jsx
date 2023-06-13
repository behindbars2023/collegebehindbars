import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo.png'
import { links } from '../data'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import "./navbar.css"
import pdfUrl from '../images/Report_New_England_Commission_on_the_Future_of_Higher_Education.pdf';


const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  // method to jump to the desired element by using the element's id
const jumpToReleventDiv = (id) => {
  if (id != "download") {
    const releventDiv = document.getElementById(id);
    // behavior: "smooth" parameter for smooth movement
    releventDiv.scrollIntoView({behavior: "smooth"});
    setIsNavShowing(prev => !prev)
  } else {
    const releventDiv = document.getElementById(id);
    // behavior: "smooth" parameter for smooth movement
    releventDiv.scrollIntoView({behavior: "smooth"});
    setIsNavShowing(prev => !prev)
    // window.open(pdfUrl, '_blank');
  }
}


  return (
    <nav>
      <div className="container nav__container">
        <Link to= "/" className ="logo" onClick={()=> setIsNavShowing(false)} >
          <img src= {Logo} alt= "Nav Logo"/>
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
          {
            links.map(({name, path}, index) =>{
              return(
                <li key={index} className="nav-li">
                  <a className={({isActive})=> isActive  ? 'active-nav' : ' ' } onClick={()=> jumpToReleventDiv(path)}>{name} </a>
                </li>
              )
            })
          }
        </ul>
        <button className='nav__toggle-btn' onClick={()=> setIsNavShowing(prev => !prev)}> 
        {
          isNavShowing ? <MdOutlineClose /> :  <GoThreeBars />
        } 
        </button>
      </div>
    </nav>
  )
}

export default Navbar
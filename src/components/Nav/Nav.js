import React from 'react'
import '../Nav/Nav.css';
import logo from '../../assets/images/Vector.png'
function Nav() {
  return (
    <div className="nav-container">
        <div className="nav-maincontainer">
            <div className="nav-leftpart">
            <div className="nav-logo"> <img src={logo}></img></div>
            <div className="nav-leftheader">HIGHKING</div>
            </div>
            <div className="nav-rightpart">
            <div className="nav-list">Location</div>
            <div className="nav-list">Blogs </div>
            <div className="nav-list">Testmonials </div>
            <div className="nav-list">Contact</div>
            </div>
        </div>
    </div>
  )
}

export default Nav
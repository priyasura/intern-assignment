import React from 'react'
import '../Section5/Section5.css';
import img1 from '../../assets/images/section2img.png'
function Section2() {
  return (
    <div className="Section5-container">
      <div className="Section5-innercontainer">
        <div className="Section5-imagepart">
          <div><img src={img1}></img></div>
        </div>
        <div className="Section5-textpart">
          <div className="Section5-textheading">Let’s Enjoy Nature With Us</div>
          <div className="Section5-textdescription">Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.</div>
          <div className="Section5-buttonpart">
            <button type="button" className="button1">Connect us</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2
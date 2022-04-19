import React from 'react'
import '../Section2/Section2.css';
import img1 from '../../assets/images/section2img.png'
function Section2() {
  return (
    <div className="Section2-container">
     <div className="Section2-innercontainer">
     <div className="Section2-imagepart">
         <div><img src={img1}></img></div>
     </div>
     <div className="Section2-textpart">
     <div className="Section2-textheading">Safe, Affordable, And Trusted</div>
     <div className="Section2-textdescription">Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.</div>
     <div className="Section2-buttonpart">
        <button type="button" className="button1">Connect us</button>
    </div>
     </div>
     </div>
    </div>
  )
}

export default Section2
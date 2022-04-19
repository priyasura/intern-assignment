import React from 'react'
import '../Section4/Section4.css';
import img from '../../assets/images/section4img.png';
function Section4() {
    return (
        <div className="Section4-container">
            <div className="Section4-innercontainer">
                <div className="Section4-textpart">
                    <div className="Section4-textheading">Enjoy Your Life With Us Now!</div>
                    <div className="Section4-textdescription">Volunteer trail stewardship projects in America’s parks and forests designed specifically for college student groups and young professionals.</div>
                    <div className="Section4-buttonpart">
                        <button type="button" className="button1">Connect us</button>
                    </div>
                </div>
                <div className="Section4-imagepart">
                     <div><img src={img}></img></div>
              </div>
            </div>
        </div>
    )
}
export default Section4
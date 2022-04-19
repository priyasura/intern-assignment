import React from 'react'
import '../Section6/Section6.css';
import img from '../../assets/icons/mail.svg';
function Section6() {
  return (
    <div className="Section6-container">
      <div className="Section6-innercontainer">
        <div className="Section6-heading">Subscribe to Our Newsletter For Weekly Article Update.</div>
        <div className="Section6-description">We have hiking-related blog so we can share our thought and rutinity in our blog that updated weekly. We will not spam you, we promise.</div>
        <div className="Section6-bottomcontainer">
          <div className="Section6-formcontainer">
            <div className="Section6-formpart">
              <img src={img} style={{ width: '20px', height: '20px', paddingLeft: '10px' }}></img>
              <input className="input-field"
                type="text"
                placeholder="Enter Your Email"></input>
            </div>
          </div>
          <div className="Section6-buttonpart">
            <button type="button" className="button">Subcribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section6
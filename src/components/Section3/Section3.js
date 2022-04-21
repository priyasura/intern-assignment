import React from 'react'
import './Section3.css'
import image1 from '../../assets/icons/Travel Advisor.svg';
import image2 from '../../assets/icons/United Travel.svg';
import image3 from '../../assets/icons/Travel Channel.svg';
import image4 from '../../assets/icons/tripraja.svg';
import image5 from '../../assets/icons/Booking.svg';
function Section3() {
  return (
    <div className="Section3-container">
      <div className="Section3-innercontanier">
        <div className="Section3-textpart1" style={{ color: 'rgb(33, 113, 218)', fontWeight: 'bold', fontSize: '18px', paddingTop: '10px' }}>Safe Journey</div>
        <div className="Section3-textpart2" style={{ fontWeight: 'bold', fontSize: '50px', paddingTop: '10px' }}>Trusted by Big Companies </div>
        <div className="Section3-firstpart">
          <div>
            <img src={image1} alt="njk" ></img>
          </div>
          <div>
            <img src={image2} alt="njk" ></img>
          </div>
          <div>
            <img src={image3} alt="njk" ></img>
          </div>
        </div>
        <div className="Section3-secondpart">
          <div>
            <img src={image4} alt="njk" ></img>
          </div>
          <div>
            <img src={image5} alt="njk" ></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3
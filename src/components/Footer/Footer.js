import React from 'react'
import '../Footer/Footer.css'
import img1 from '../../assets/images/Vector.png';
import img2 from '../../assets/icons/facebook.svg';
import img3 from '../../assets/icons/insta.svg';
import img4 from '../../assets/icons/twitter.svg';
function Footer() {
  return (
    <div className="Footer-container">
      <div className="Footer-innercontainer">
        <div className="Footer-leftpart">
          <div className="Footer-leftheader">
            <div><img src={img1}></img></div>
            <div className="Footer-leftheadertext">HIGHKING</div>
          </div>
          <div className="Footer-leftdiscriptionpart">
            <div className="Footer-leftdiscriptiontext">We envision a world where everyone feels welcome in the American hiking community.</div>
          </div>
          <div className="Footer-lefticons">
            <div>
              <img src={img2}></img>
            </div>
            <div>
              <img src={img3}></img>
            </div>
            <div>
              <img src={img4}></img>
            </div>
          </div>
        </div>
        <div className="Footer-rightpart">
          <div className="Footer-rightcontainer">
            <div className="Footer-rightfirst">
              <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Location</div>
              <div style={{ fontSize: '18px', color: 'gray' }}>America</div>
              <div style={{ fontSize: '18px', color: 'gray' }}>Asia</div>
              <div style={{ fontSize: '18px', color: 'gray' }}>Europe</div>
              <div style={{ fontSize: '18px', color: 'gray' }}>Africa</div>
            </div>
            <div className="Footer-rightfirst">
              <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Contact</div>
              <div style={{ fontSize: '18px', color: 'gray' }}>About me</div>
              <div style={{ fontSize: '18px', color: 'gray' }}>Teams</div>
              <div style={{ fontSize: '18px', color: 'gray' }}>Profile</div>
              <div style={{ fontSize: '18px', color: 'gray' }}>FAQs</div>
            </div>
            <div className="Footer-rightfirst">
              <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Legals</div>
              <div style={{ fontSize: '18px', color: 'gray' }}>Privacy</div>
              <div style={{ fontSize: '18px', color: 'gray' }}>Disclaimer</div>
              <div style={{ fontSize: '18px', color: 'gray' }}>Terms</div>
              <div style={{ fontSize: '18px', color: 'gray' }}>Company</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
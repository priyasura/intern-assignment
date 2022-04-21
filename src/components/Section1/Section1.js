import React from 'react'
import '../Section1/Section1.css';
import image1 from '../../assets/images/contentimage1.png';
import Nav from '../Nav/Nav';
import icon1 from '../../assets/icons/location.svg'
import icon2 from '../../assets/icons/shoe.svg'
import icon3 from '../../assets/icons/bag.svg'
function Section1() {
    return (
        <div className="Section1-Container">
            <div className="Section1-bg">
                <Nav></Nav>
                <div className="Section1-contentpart">
                    <div className="Section1-innercontentpart">
                        <div className="Section1-innercontentleftpart">
                            <div className="Section1-contentheader">Be prepared for the mountains and beyond.</div>
                            <div className="Section1-contentdiscription">Are you looking for amazing hiking travel?<br></br> Don’t worry! We got it for you!</div>
                            <div className="Section1-contentbuttons">
                                <div className="Section1-contentbutton1">
                                    <button type="button" className="button1">Connect us</button>
                                </div>
                                <div className="Section1-contentbutton2">
                                    <button type="submit" className="button2">Watch Video</button>
                                </div>
                            </div>
                        </div>
                        <div className="Section1-innercontentrightpart">
                            <div>
                                <img src={image1} className="image1"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Section1-maincontainer2">
                    <div className="Section1-secondcontentbox">
                        <div className="iconpart1">
                            <div><img src={icon1} className="image2"></img></div>
                            <div className="icon_text2">Secret Locations</div>
                            <div className="icon_discription">Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</div>
                            <div style={{ color: 'red', textDecoration: 'underline', paddingTop: '10px' }}>Read More</div>
                        </div>
                        <div className="iconpart1">
                            <div><img src={icon2} className="image2"></img></div>
                            <div className="icon_text2">Safe Adventure</div>
                            <div className="icon_discription">Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</div>
                            <div style={{ color: 'red', textDecoration: 'underline', paddingTop: '10px' }}>Read More</div>
                        </div>
                        <div className="iconpart1">
                            <div><img src={icon3} className="image2"></img></div>
                            <div className="icon_text2">Professional Hikers</div>
                            <div className="icon_discription">Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</div>
                            <div style={{ color: 'red', textDecoration: 'underline', paddingTop: '10px' }}>Read More</div>
                        </div>
                    </div>
                </div>
                <div className="Section1-lastpart">
                    <div>Don’t hesitate to contact us to get better Information.<b><i style={{ color: 'red' }}>EXPLORE ALL TREKKING.</i></b></div>
                </div>
            </div>
        </div>
    )
}

export default Section1
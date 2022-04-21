import React from 'react'
import '../Section7/Section7.css';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/images/profile image.png';
import img2 from '../../assets/icons/Star.svg';
function Section7() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1.6,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false
    };
    return (
        <div className="section7-container">
            <div className="section7-heading">Happy Hikers</div>
            <div className="section7-description">Client’s Say About Us</div>

            <div className="section7-slider">

                <Slider {...settings}>
                    <div className="section7-slidecontainer">
                        <div className="section7-sliderinnercontainer">
                            <div><img src={img1}></img></div>
                            <div className="section7-slidername">Omar Gouse</div>
                            <div className="section7-sliderstatus">Happy Client</div>
                            <div className="section7-sliderwords">“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</div>
                            <div className="Section-icon">
                                <img src={img2}></img>
                                <img src={img2}></img>
                                <img src={img2}></img>
                                <img src={img2}></img>
                                <img src={img2}></img>
                            </div>
                        </div>
                    </div>
                    <div className="section7-slidecontainer">
                        <div className="section7-sliderinnercontainer">
                            <div><img src={img1}></img></div>
                            <div className="section7-slidername">Omar Gouse</div>
                            <div className="section7-sliderstatus">Happy Client</div>
                            <div className="section7-sliderwords">“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</div>
                            <div className="Section-icon">
                                <img src={img2}></img>
                                <img src={img2}></img>
                                <img src={img2}></img>
                                <img src={img2}></img>
                                <img src={img2}></img>
                            </div>
                        </div>
                    </div>
                    <div className="section7-slidecontainer">
                        <div className="section7-sliderinnercontainer">
                            <div><img src={img1}></img></div>
                            <div className="section7-slidername">Omar Gouse</div>
                            <div className="section7-sliderstatus">Happy Client</div>
                            <div className="section7-sliderwords">“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</div>
                            <div className="Section-icon">
                                <img src={img2}></img>
                                <img src={img2}></img>
                                <img src={img2}></img>
                                <img src={img2}></img>
                                <img src={img2}></img>
                            </div>
                        </div>
                    </div>
                    <div className="section7-slidecontainer">
                        <div className="section7-sliderinnercontainer">
                            <div><img src={img1}></img></div>
                            <div className="section7-slidername">Omar Gouse</div>
                            <div className="section7-sliderstatus">Happy Client</div>
                            <div className="section7-sliderwords">“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</div>
                            <div className="Section-icon">
                                <img src={img2}></img>
                                <img src={img2}></img>
                                <img src={img2}></img>
                                <img src={img2}></img>
                                <img src={img2}></img>
                            </div>
                        </div>
                    </div>
                    <div className="section7-slidecontainer">
                        <div className="section7-sliderinnercontainer">
                            <div><img src={img1}></img></div>
                            <div className="section7-slidername">Omar Gouse</div>
                            <div className="section7-sliderstatus">Happy Client</div>
                            <div className="section7-sliderwords">“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</div>
                            <div className="Section-icon">
                                <img src={img2}></img>
                                <img src={img2}></img>
                                <img src={img2}></img>
                                <img src={img2}></img>
                                <img src={img2}></img>
                            </div>
                        </div>
                    </div>
                    <div className="section7-slidecontainer">
                        <div className="section7-sliderinnercontainer">
                            <div><img src={img1}></img></div>
                            <div className="section7-slidername">Omar Gouse</div>
                            <div className="section7-sliderstatus">Happy Client</div>
                            <div className="section7-sliderwords">“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</div>
                            <div className="Section-icon">
                                <img src={img2}></img>
                                <img src={img2}></img>
                                <img src={img2}></img>
                                <img src={img2}></img>
                                <img src={img2}></img>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Section7
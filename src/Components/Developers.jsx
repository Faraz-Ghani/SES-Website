import React, { Component } from "react";
import Slider from "react-slick";

import "../App.css";
const Developers = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className="developers" id="developer">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="developer-head" >Meet Our Web-Development Team</h1>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="develop-slider">
                                <Slider {...settings}>
                                    <div>
                                        <div className="developer">
                                            <div className="dev-img">
                                                <img src="/images/sama.png" alt="" />
                                            </div>
                                            <div className="developer-details">
                                            <h6>Usama Nayab.</h6>
                                            <h5>LEAD DEVELOPER!</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    <div className="developer">
                                            <div className="dev-img">
                                                <img src="/images/kashaf.png" alt="" />
                                            </div>
                                            <div className="developer-details">
                                            <h6>Kashaf Abdullah.</h6>
                                            <h5>DEVELOPER!</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    <div className="developer">
                                            <div className="dev-img">
                                                <img src="/images/aaryan.png" alt="" />
                                            </div>
                                            <div className="developer-details">
                                            <h6>Muhammad Arayan.</h6>
                                            <h5>DEVELOPER!</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    <div className="developer">
                                            <div className="dev-img">
                                                <img src="/images/fahad2.png" alt="" />
                                            </div>
                                            <div className="developer-details">
                                            <h6>Fahad Zardari.</h6>
                                            <h5>DEVELOPER!</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    <div className="developer">
                                            <div className="dev-img">
                                                <img src="/images/hira.png" alt="" />
                                            </div>
                                            <div className="developer-details">
                                            <h6>Hira Amir.</h6>
                                            <h5>UI Designer</h5>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Developers;
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

import "../App.css";
const Star = () => {
    return (
        <>
            <section className="our-stars" id="star">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-12">
                            <div className="stars-content">
                                <h2 className="wow animate__animated animate__fadeInUp" >Introducing our Star Members of SES!</h2>
                                <p className="wow animate__animated animate__fadeInUp" >Acknowledging the dedicated efforts of our members over the past two weeks, we highlight our exceptional Star Members. While all members are equally dedicated, these individuals stood out with their amazing participation. Their unwavering commitment and outstanding contributions inspire us all. Congratulations to our Star Members for their remarkable achievements!</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="stars-slider">
                                <Swiper  pagination={true} modules={[Pagination]}
                //   autoplay={{
                //       delay: 2500,
                //       disableOnInteraction: false
                //   }} 
                  className="mySwiper">
                                <SwiperSlide>
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="iamstar wow animate__animated animate__fadeInDown my-5">
                                                        <div className="star-img">
                                                        <img src="https://i.ibb.co/nCGrMhb/Management-Ahmed-Siddiqui.jpg" alt="" />
                                                        </div>
                                                        <h4>Muhammad Ahmed</h4>
                                                        <h6>Director Management</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="iamstar my-5 wow animate__animated animate__fadeInDown">
                                                        <div className="star-img">
                                                        <img src="https://i.ibb.co/pLzXbHy/Maryam-Qureshi.png" alt="" />
                                                        </div>
                                                        <h4>Maryam Qureshi</h4>
                                                        <h6>Head Director Designing</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="iamstar my-5 wow animate__animated animate__fadeInDown">
                                                        <div className="star-img">
                                                        <img src="https://i.ibb.co/YcfTbmX/Head-oc-Tayyaba-Bhatti.jpg" alt="" />
                                                        </div>
                                                        <h4>Tayyaba Bhatti</h4>
                                                        <h6>Head of Organizing Council</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="iamstar my-5 wow animate__animated animate__fadeInDown">
                                                        <div className="star-img">
                                                        <img src="https://i.ibb.co/GtVDKFx/Uroosham-Head-Media.jpg" alt="" />
                                                        </div>
                                                        <h4>Uroosham Memon</h4>
                                                        <h6>Head Director Media</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="iamstar my-5 wow animate__animated animate__fadeInDown">
                                                        <div className="star-img">
                                                        <img src="https://i.ibb.co/S5yJRNb/Soorat-Management.jpg" alt="" />
                                                        </div>
                                                        <h4>Soorat Ali</h4>
                                                        <h6>Director Management</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="iamstar my-5 wow animate__animated animate__fadeInDown">
                                                        <div className="star-img">
                                                        <img src="https://i.ibb.co/4RFvQnn/OC-Rafay-Shakeel.jpg" alt="" />
                                                        </div>
                                                        <h4>Rafay Shakeel</h4>
                                                        <h6>Organzing Council</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="iamstar my-5 wow animate__animated animate__fadeInDown">
                                                        <div className="star-img">
                                                        <img src="https://i.ibb.co/S7T8zGG/Media-Aimon-Zehra.jpg" alt="" />
                                                        </div>
                                                        <h4>Aimon Zehra</h4>
                                                        <h6>Director Media</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Star;
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
                                                        <img src="/images/Faeez Ahmed.jpg" alt="" />
                                                        </div>
                                                        <h4>Faeez Ahmed</h4>
                                                        <h6>Director Designer(Head)</h6>
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
                                                        <img src="/images/Maryam.jpg" alt="" />
                                                        </div>
                                                        <h4>Maryam</h4>
                                                        <h6>Director Designing</h6>
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
                                                        <img src="/images/Faraz Ghani.jpg" alt="" />
                                                        </div>
                                                        <h4>Faraz Ghani</h4>
                                                        <h6>Director Videography(Head)</h6>
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
                                                        <img src="https://i.ibb.co/X3gMt5t/95-E8-FC9-F-95-FE-4-B22-9-BD0-2-A11-A27-C9794-Muzafar-Mahar.jpg" alt="" />
                                                        </div>
                                                        <h4>Muzafar Ibrahim</h4>
                                                        <h6>Director Logistics(Head)</h6>
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
                                                        <img src="https://i.ibb.co/ZS5jtPS/minal.jpg" alt="" />
                                                        </div>
                                                        <h4>Minal Azhar</h4>
                                                        <h6>Director Editorial(Head)</h6>
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
                                                        <img src="https://i.ibb.co/xjGgzhv/IMG-20230530-WA0037-Zarmeena-Khan.jpg" alt="" />
                                                        </div>
                                                        <h4>Zarmeena Khan</h4>
                                                        <h6>Director Management(Head)</h6>
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
                                                        <img src="https://i.ibb.co/RYwPVbp/1673766399354-SES-MUET.jpg" alt="" />
                                                        </div>
                                                        <h4>Muhammad Daniyal</h4>
                                                        <h6>Director Media(Head)</h6>
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
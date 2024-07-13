import React, { useRef, useEffect , useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import "../App.css";

import cardData from "./teamCards/newCardData";
const Star = () => {
    const [starMembers, setStarMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Software-Engineering-Society-MUET/SES-Website/main/stars.json')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched star members data:', data);
                const starNames = data.team6;
                console.log('Star names:', starNames);

                // Assuming cardData is properly imported and structured as an array of objects
                const foundMembers = cardData[0]?.team6?.members.filter(member => starNames.includes(member.name)) ?? [];
                console.log('Found star members:', foundMembers);

                setStarMembers(foundMembers);
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch(error => {
                console.error('Error fetching star members:', error);
                setError(error); // Set error state if fetch fails
                setLoading(false); // Also set loading to false on error
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>; // Render loading indicator
    }

    if (error) {
        return <p>Error: {error.message}</p>; // Render error message if fetch fails
    }

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
                                                    <img src={starMembers[0].image} alt="" />
                                                    </div>
                                                    <h4>{starMembers[0].name}</h4>
                                                    <h6>{starMembers[0].post}</h6>
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
                                                    <img src={starMembers[1].image} alt="" />
                                                    </div>
                                                    <h4>{starMembers[1].name}</h4>
                                                    <h6>{starMembers[1].post}</h6>
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
                                                    <img src={starMembers[2].image} alt="" />
                                                    </div>
                                                    <h4>{starMembers[2].name}</h4>
                                                    <h6>{starMembers[2].post}</h6>
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
                                                    <img src={starMembers[3].image} alt="" />
                                                    </div>
                                                    <h4>{starMembers[3].name}</h4>
                                                    <h6>{starMembers[3].post}</h6>
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
                                                    <img src={starMembers[4].image} alt="" />
                                                    </div>
                                                    <h4>{starMembers[4].name}</h4>
                                                    <h6>{starMembers[4].post}</h6>
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
                                                    <img src={starMembers[5].image} alt="" />
                                                    </div>
                                                    <h4>{starMembers[5].name}</h4>
                                                    <h6>{starMembers[5].post}</h6>
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
                                                    <img src={starMembers[6].image} alt="" />
                                                    </div>
                                                    <h4>{starMembers[6].name}</h4>
                                                    <h6>{starMembers[6].post}</h6>
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
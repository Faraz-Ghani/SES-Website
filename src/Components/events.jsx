import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../App.css";

// import required modules
import { Pagination } from "swiper";
import SwiperCore, { Autoplay } from 'swiper';
SwiperCore.use([Autoplay]);

export default function App() {
  return (
    <>
    <section className="events" id="events">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="ses-events">
              <h1 className="our-event wow animate__animated animate__fadeInUp">Our Events</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
          <Swiper
        pagination={{
          dynamicBullets: true,
        }}
          loop={false}
                  // autoplay={{
                  //     delay: 2500,
                  //     disableOnInteraction: false
                  // }}
          
        modules={[Pagination]}
        className="mySwiper"
      >

<SwiperSlide>
          <div className="container">
            <div className="row">
              <div className="col-12">
              <div className="event-details">
                <h3 className="wow animate__animated animate__fadeInUp" >Tech Arena</h3>
                <h5 className="wow animate__animated animate__fadeInUp" >17th to 19th January 2023</h5>
                <p className="wow animate__animated animate__fadeInUp" >The SES MUET, in partnership with IEEE Computer Society, organized a Data Science Bootcamp aimed at familiarizing young tech enthusiasts with the core principles of data science by providing hands-on practical exercises. These sessions covered various topics such as data analysis, machine learning algorithms, statistical modeling, and data visualization led by experienced instructors.</p>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6 col-sm-12">
              <div className="event-gallery1">
                  <img src="/images/TechAreena1.jpg" alt="" />
                  <img className="mt-4" src="/images/TechAreena4.jpg" alt="" />

                  
                </div>
               
              </div>
              <div className="col-md-6 col-sm-12">
              <div className="event-gallery2">
                  <img src="/images/Tech Areena 3.jpg" alt="" />
                  <img src="/images/Tech Areena 2.jpg" alt="" />
                </div>
            </div>
              <div className="col-md-3 col-sm-12">
                <div className="event-gallery1">

                </div>
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container">
            <div className="row">
              <div className="col-10">
                <div className="event-details">
                <h3 className="wow animate__animated animate__fadeInUp" >Data Science Bootcamp</h3>
                <h5 className="wow animate__animated animate__fadeInUp" >17th to 19th January 2023</h5>
                <p className="wow animate__animated animate__fadeInUp" >The SES MUET, in partnership with IEEE Computer Society, organized a Data Science Bootcamp aimed at familiarizing young tech enthusiasts with the core principles of data science by providing hands-on practical exercises. These sessions covered various topics such as data analysis, machine learning algorithms, statistical modeling, and data visualization led by experienced instructors.</p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-4 col-sm-12">
                <div className="event-gallery1">
                  <img src="/images/data science 1.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-5 col-sm-12">
                <div className="event-gallery2">
                  <img src="/images/data_science_2.jpg" alt="" />
                  <img src="/images/data science 3.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-3 col-sm-12">
              <div className="event-gallery3">
                <img src="/images/datascience4.jpg" alt="" />
              </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="container">
            <div className="row">
              <div className="col-12">
              <div className="event-details">
                <h3 className="wow animate__animated animate__fadeInUp" >Tech N Play</h3>
                <h5 className="wow animate__animated animate__fadeInUp" >17th to 19th January 2023</h5>
                <p className="wow animate__animated animate__fadeInUp" >The SES MUET, in partnership with IEEE Computer Society, organized a Data Science Bootcamp aimed at familiarizing young tech enthusiasts with the core principles of data science by providing hands-on practical exercises. These sessions covered various topics such as data analysis, machine learning algorithms, statistical modeling, and data visualization led by experienced instructors.</p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
            <div className="col-md-6 col-sm-12">
                <div className="event-gallery1">
                  <img src="/images/TnP1.jpg" alt="" />
                <img className="mt-5" src="/images/TnP2.JPG" alt="" />

                </div>
              </div>
            {/* <div className="col-md-6 col-12">
              <div className="event-gallery3">
              </div>
              </div> */}
              <div className="col-md-5 col-sm-12">
                <div className="event-gallery2">
                  <img src="/images/TnP4.JPG" alt="" />
                  <img src="/images/TnP 3.JPG" alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="container">
            <div className="row">
              <div className="col-12">
              <div className="event-details">
                <h3 className="wow animate__animated animate__fadeInUp" >Bazaar launchpad</h3>
                <h5 className="wow animate__animated animate__fadeInUp" >17th to 19th January 2023</h5>
                <p className="wow animate__animated animate__fadeInUp" >The SES MUET, in partnership with IEEE Computer Society, organized a Data Science Bootcamp aimed at familiarizing young tech enthusiasts with the core principles of data science by providing hands-on practical exercises. These sessions covered various topics such as data analysis, machine learning algorithms, statistical modeling, and data visualization led by experienced instructors.</p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
            <div className="col-md-3 col-sm-12">
                <div className="event-gallery1">
                  <img src="/images/Bazaar1.jpg" alt="" />
                </div>
            </div>
            <div className="col-md-6 col-sm-12">
                <div className="event-gallery1">
                  <img src="/images/Bazaar 2.jpg" alt="" />
                </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="event-gallery3">
                <img src="/images/Bazaar 3.jpg" alt="" />
              </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="container">
            <div className="row">
              <div className="col-10">
                <div className="event-details">
                <h3 className="wow animate__animated animate__fadeInUp" >BlockChain</h3>
                <h5 className="wow animate__animated animate__fadeInUp" >17th to 19th January 2023</h5>
                <p className="wow animate__animated animate__fadeInUp" >The SES MUET, in partnership with IEEE Computer Society, organized a Data Science Bootcamp aimed at familiarizing young tech enthusiasts with the core principles of data science by providing hands-on practical exercises. These sessions covered various topics such as data analysis, machine learning algorithms, statistical modeling, and data visualization led by experienced instructors.</p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-3 col-sm-12">
                <div className="event-gallery1">
                  <img src="/images/Blockchain 1.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="event-gallery2">
                  <img src="/images/Blockchain 2.jpg" alt="" />
                  <img src="/images/Blockchain 3.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-5 col-sm-12">
              <div className="event-gallery3">
                <img src="/images/Blockchain 4.jpg" alt="" />
              </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="container">
            <div className="row">
              <div className="col-12">
              <div className="event-details">
                <h3 className="wow animate__animated animate__fadeInUp" >Latex</h3>
                <h5 className="wow animate__animated animate__fadeInUp" >17th to 19th January 2023</h5>
                <p className="wow animate__animated animate__fadeInUp" >The SES MUET, in partnership with IEEE Computer Society, organized a Data Science Bootcamp aimed at familiarizing young tech enthusiasts with the core principles of data science by providing hands-on practical exercises. These sessions covered various topics such as data analysis, machine learning algorithms, statistical modeling, and data visualization led by experienced instructors.</p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
            <div className="col-md-3 col-sm-12">
                <div className="event-gallery1">
                <img src="/images/Latex 2.jpg" alt="" />
                </div>
              </div>
            <div className="col-md-6 col-sm-12">
              <div className="event-gallery3">
                <img src="/images/Latex 1.jpg" alt="" />
              </div>
              </div>
              <div className="col-md-3 col-sm-12">
                <div className="event-gallery2">
                  <img src="/images/Latex3.jpg" alt="" />
                  <img src="/images/Latex 4.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="container">
            <div className="row">
              <div className="col-12">
              <div className="event-details">
                <h3 className="wow animate__animated animate__fadeInUp" >Awareness Session</h3>
                <h5 className="wow animate__animated animate__fadeInUp" >17th to 19th January 2023</h5>
                <p className="wow animate__animated animate__fadeInUp" >The SES MUET, in partnership with IEEE Computer Society, organized a Data Science Bootcamp aimed at familiarizing young tech enthusiasts with the core principles of data science by providing hands-on practical exercises. These sessions covered various topics such as data analysis, machine learning algorithms, statistical modeling, and data visualization led by experienced instructors.</p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
            <div className="col-md-3 col-sm-12">
                <div className="event-gallery1">
                  <img src="/images/Awareness session 1.jpg" alt="" />
                </div>
            </div>
            <div className="col-md-5 col-sm-12">
            <div className="event-gallery2">
                  <img src="/images/Awareness session 2.jpg" alt="" />
                  <img src="/images/Awareness session 3.jpg" alt="" />
                </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="event-gallery3">
                <img src="/images/Awareness session 4.jpg" alt="" />
              </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="container">
            <div className="row">
              <div className="col-10">
                <div className="event-details">
                <h3 className="wow animate__animated animate__fadeInUp" >ACM</h3>
                <h5 className="wow animate__animated animate__fadeInUp" >17th to 19th January 2023</h5>
                <p className="wow animate__animated animate__fadeInUp" >The SES MUET, in partnership with IEEE Computer Society, organized a Data Science Bootcamp aimed at familiarizing young tech enthusiasts with the core principles of data science by providing hands-on practical exercises. These sessions covered various topics such as data analysis, machine learning algorithms, statistical modeling, and data visualization led by experienced instructors.</p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-6 col-sm-12">
                <div className="event-gallery1">
                  <img src="/images/ACM 1.JPG" alt="" />
                  <img className="my-5" src="/images/ACM 3.jpg" alt="" />

                </div>
              </div>
              {/* <div className="col-md-6 col-sm-12">
                <div className="event-gallery2">
                  <img src="/images/ACM 2.JPG" alt="" />
                </div>
              </div> */}
              <div className="col-md-6 col-sm-12">
              <div className="event-gallery3">
                <img src="/images/ACM 4.jpg" alt="" />
              </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

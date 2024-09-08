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
                <h3 className="wow animate__animated animate__fadeInUp" >Tech Arena 2024</h3>
                <h5 className="wow animate__animated animate__fadeInUp" >28 August 2023</h5>
                <p className="wow animate__animated animate__fadeInUp" >Tech Arena 2024, organized by the Software Engineering Society (SES) at MUET, was a remarkable two-day event held on August 26-27, 2024. The event brought together students, faculty, and tech enthusiasts for an immersive experience that celebrated innovation, teamwork, and excellence.

Throughout the event, participants engaged in a diverse range of activities, from intense competitions to creative showcases, each designed to challenge both technical and non-technical skills. The spirit of collaboration was evident as teams worked together to solve problems, demonstrate their abilities, and push the boundaries of what they could achieve. 

The closing ceremony marked the highlight of the event, with speeches from key figures, the distribution of awards, and announcements that left the attendees excited for the future. Tech Arena 2024 not only elevated the reputation of the Software Engineering department but also provided a platform for students to demonstrate their talents, form lasting connections, and contribute to the growing community of innovators at MUET.</p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
            <div className="col-md-6 col-sm-12">
                <div className="event-gallery1">
                  <img src="/images/ta24-4.jpg" alt="" />
                <img className="mt-5" src="/images/ta24-1.jpg" alt="" />

                </div>
              </div>
            {/* <div className="col-md-6 col-12">
              <div className="event-gallery3">
              </div>
              </div> */}
              <div className="col-md-5 col-sm-12">
                <div className="event-gallery2">
                  <img src="/images/ta24-2.jpg" alt="" />
                  <img src="/images/ta24-3.jpg" alt="" />
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
                <h3 className="wow animate__animated animate__fadeInUp" >Deep Dive into Outcome Based Education</h3>
                <h5 className="wow animate__animated animate__fadeInUp" >20th March 2024</h5>
                <p className="wow animate__animated animate__fadeInUp" >This seminar provided an engaging exploration of outcome-based education (OBE), highlighting the importance of defining specific, measurable learning outcomes for students. By aligning curriculum, instruction, and assessment methods with these outcomes, attendees gained insights into better preparing for future roles and careers. The seminar focused on enhancing understanding of Course Learning Outcomes (CLO) and Program Learning Outcomes (PLO), offering valuable guidance for all First Year students. Presented by Miss Mariam Memon, this seminar was a must-attend event for those seeking to advance their educational journey and career prospects.</p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
            <div className="col-md-6 col-sm-12">
                <div className="event-gallery1">
                  <img src="/images/OBE (3).JPG" alt="" />
                

                </div>
              </div>
            {/* <div className="col-md-6 col-12">
              <div className="event-gallery3">
              </div>
              </div> */}
              <div className="col-md-5 col-sm-12">
                <div className="event-gallery2">
                  <img src="/images/OBE (1).JPG" alt="" />
                  <img src="/images/OBE (4).JPG" alt="" />
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
                <h3 className="wow animate__animated animate__fadeInUp" >Skill UP With SES Season 2</h3>
                <h5 className="wow animate__animated animate__fadeInUp" >16,23 & 30th March 2024</h5>
                <p className="wow animate__animated animate__fadeInUp" >Skill Up with SES Season 2 brought three talented Micrsoft Learn Student Ambasadors who provided an immersive exploration into the latest technologies, featuring Microsoft MakeCode, Azure AI, and GitHub & VSCode integration. Participants delved into the user-friendly interface of Microsoft MakeCode, honing their coding skills and unleashing creativity through hands-on projects. They then navigated the diverse array of AI services provided by Azure, discovering applications in computer vision and natural language processing.</p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
            <div className="col-md-4 col-sm-12">
                <div className="event-gallery1">
                  <img src="images\Skill Up S02E01.png" alt="" />
                </div>
            </div>
            <div className="col-md-4 col-sm-12">
                <div className="event-gallery1">
                  <img src="images\Skill Up S02E02.jpg" alt="" />
                </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="event-gallery3">
                <img src="images\Skill Up S02E03.png" alt="" />
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
                <h3 className="wow animate__animated animate__fadeInUp" >Neural Networks Workshop</h3>
                <h5 className="wow animate__animated animate__fadeInUp" >4th March 2024</h5>
                <p className="wow animate__animated animate__fadeInUp" >SES has the privilege of hosting Dr Rabeea Jaffari & Dr Areej Fatemah, in this immersive workshop, participants dived deep into the world of neural networks, facilitated by NFC University Faisalabad in collaboration with MUET Jamshoro's Software Engineering Department, IEEE Women in Engineering, and other esteemed partners.</p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
            <div className="col-md-3 col-sm-12">
                <div className="event-gallery1">
                  <img src="/images/NN 1.jpg" alt="" />
                </div>
            </div>
            <div className="col-md-6 col-sm-12">
                <div className="event-gallery1">
                  <img src="/images/NN 3.jpg" alt="" />
                </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="event-gallery3">
                <img src="/images/NN 2.jpg" alt="" />
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
                <h3 className="wow animate__animated animate__fadeInUp" >Web Dev Mastery</h3>
                <h5 className="wow animate__animated animate__fadeInUp" >5th & 6th December 2023</h5>
                <p className="wow animate__animated animate__fadeInUp" >SES organized an engaging workshop where participants expanded their knowledge from the basics of web development (HTML, CSS, and JavaScript) to exploring databases. On Day 1, attendees created webpages and applied styles using selectors and the box model. Day 2 delved into JavaScript fundamentals, DOM manipulation, and offered an overview of databases with basic SQL queries. This session provided a comprehensive journey to enhance participants' web development skills in just two days.</p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-3 col-sm-12">
                <div className="event-gallery1">
                  <img src="/images/Web Dev 4.png" alt="" />
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="event-gallery2">
                  <img src="/images/Web Dev 2.png" alt="" />
                  <img src="/images/Web Dev 3.png" alt="" />
                </div>
              </div>
              <div className="col-md-5 col-sm-12">
              <div className="event-gallery3">
                <img src="/images/Web Dev 1.png" alt="" />
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
                <h3 className="wow animate__animated animate__fadeInUp" >Study in Abroad, Unpacking Exchange Program Pathways</h3>
                <h5 className="wow animate__animated animate__fadeInUp" >25 September 2023</h5>
                <p className="wow animate__animated animate__fadeInUp" >SES organized an illuminating session on Exchange Program Pathways, offering students invaluable insights into various aspects of the exchange experience. From exploring scholarship opportunities to understanding selection criteria, attendees gained a comprehensive understanding of navigating this exciting journey. The session also delved into practical tips for managing deadlines, addressing stereotypes, and fostering cultural integration. Through personal anecdotes and a lively Q&A session, participants were equipped with the knowledge and confidence to embark on their exchange adventures with clarity and purpose.</p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
            <div className="col-md-6 col-sm-12">
                <div className="event-gallery1">
                  <img src="/images/Study Abroad 4.png" alt="" />
                <img className="mt-5" src="/images/Study Abroad 1.jpg" alt="" />

                </div>
              </div>
            {/* <div className="col-md-6 col-12">
              <div className="event-gallery3">
              </div>
              </div> */}
              <div className="col-md-5 col-sm-12">
                <div className="event-gallery2">
                  <img src="/images/Study Abroad 2.jpg" alt="" />
                  <img src="/images/Study Abroad 3.jpg" alt="" />
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
                <h3 className="wow animate__animated animate__fadeInUp" >SPEOD (Software Project Exhibition Open Day) 2023</h3>
                <h5 className="wow animate__animated animate__fadeInUp" >13th September 2023</h5>
                <p className="wow animate__animated animate__fadeInUp" >The Software Engineering Society (SES) organized a vibrant Software Project Exhibition Open Day, serving as a dynamic arena for junior batches to showcase their talents and innovative projects. Amidst an atmosphere of enthusiasm and camaraderie, a total of 20 batches eagerly presented their FYP (Final Year Project) abstracts, providing glimpses into the exciting developments they were working on. Additionally, the event featured 19 batches proudly displaying their finished FYPs, demonstrating months of hard work and dedication.</p>
                </div>
              </div>
            </div>
            {/* Images update */}
            <div className="row align-items-center">
              <div className="col-md-3 col-sm-12">
                <div className="event-gallery1">
                  <img src="/images/Speod 1.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="event-gallery2">
                  <img src="/images/Speod 2.jpg" alt="" />
                  <img src="/images/Speod 3.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-5 col-sm-12">
              <div className="event-gallery3">
                <img src="/images/Speod 4.jpg" alt="" />
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
                <h3 className="wow animate__animated animate__fadeInUp" >Skill up with SES Season 1</h3>
                <h5 className="wow animate__animated animate__fadeInUp" >2rd & 11th June 2023</h5>
                <p className="wow animate__animated animate__fadeInUp" >Skill up with SES featured esteemed speakers from the SES team, who shared their expertise in various fields such as graphic design and video editing. Through their guidance and insights, participants gained valuable knowledge and practical skills, enhancing their capabilities in software engineering and creative design. The presence of SES team speakers not only enriched the learning experience but also fostered a sense of community and collaboration among attendees, further solidifying SES as a hub for professional growth and innovation.</p>
                </div>
              </div>
            </div>
            {/* Images update */}
            <div className="row align-items-center">
            <div className="col-md-5 col-sm-12">
              <div className="event-gallery1">
                <img src="images\Skill Up S01E01.jpg" alt="" />
              </div>
              </div>
              <div className="col-md-1 col-sm-12">
              <div className="event-gallery1">
                {/* <img src="" alt="" /> */}
              </div>
              </div>
              <div className="col-md-5 col-sm-10">
              <div className="event-gallery2">
                <img src="images\Skill Up S01E02.jpg" alt="" />
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
                <h5 className="wow animate__animated animate__fadeInUp" >15th to 16th March 2023</h5>
                <p className="wow animate__animated animate__fadeInUp" >Tech N Play, a grand 2-day event, showcased SES excellence by introducing thrilling games along with lively competitions. We organized an event that not only attracted a massive audience but also included the right sponsors</p>
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
                <h3 className="wow animate__animated animate__fadeInUp" >Latex Workshop</h3>
                <h5 className="wow animate__animated animate__fadeInUp" >28 February 2023</h5>
                <p className="wow animate__animated animate__fadeInUp" >In our Latex Workshop Sir Zubair Ahmed Sanghi, our esteemed speaker, enriched our LaTeX workshop for final year students, providing invaluable insights for thesis writing. His expertise enhanced participants' proficiency in utilizing LaTeX for academic documentation, empowering them for their academic pursuits. We were privileged to host such a distinguished expert, aiding students in their thesis endeavors.</p>
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
                <h5 className="wow animate__animated animate__fadeInUp" >9th Februrary 2023</h5>
                <p className="wow animate__animated animate__fadeInUp" >SES organized an awareness session tailored for beginners eager to broaden their horizons and improve their skills or start online earning through freelancing. The session covered enlightening topics including Fiver, Generics, and Skills development, providing valuable insights to attendees. </p>
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
                <h3 className="wow animate__animated animate__fadeInUp" >ALTECH</h3>
                <h5 className="wow animate__animated animate__fadeInUp" >1st & 2nd February 2023</h5>
                <p className="wow animate__animated animate__fadeInUp" >SES hosted a major event called ALTECH in collaboration with ACM Muet, featuring a plethora of games and competitions. The event buzzed with excitement as participants engaged in various activities, showcasing their skills and talents. From coding challenges to gaming tournaments, ALTECH offered something for everyone. </p>
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
              <div className="col-10">
                <div className="event-details">
                <h3 className="wow animate__animated animate__fadeInUp" >BlockChain Security, Web3, And Future of Crypto Currencies</h3>
                <h5 className="wow animate__animated animate__fadeInUp" >19th January 2023</h5>
                <p className="wow animate__animated animate__fadeInUp" >SES hosted an event centered around Blockchain Security, Web3, and the Future of Cryptocurrencies. Attendees engaged in discussions and presentations exploring topics such as blockchain's impact on cybersecurity, the emergence of Web3, and the evolving landscape of cryptocurrencies. Experts shared insights into decentralized finance (DeFi) and the transformative potential of digital assets in traditional financial systems. </p>
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
                <h3 className="wow animate__animated animate__fadeInUp" >Bazaar launchpad</h3>
                <h5 className="wow animate__animated animate__fadeInUp" >9th March 2022</h5>
                <p className="wow animate__animated animate__fadeInUp" >Bazaar launchpad was a Physical session plus a Recruitment drive organized by SES. It targets the audience of final year TECH students and aimed to introduce an advancing TECH Company BAZAR to our students. Students were made aware of the job opportunities at the firm as well tested to the best of their abilities for the said Job opening. </p>
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
              <div className="col-12">
              <div className="event-details">
                <h3 className="wow animate__animated animate__fadeInUp" >Tech Arena</h3>
                <h5 className="wow animate__animated animate__fadeInUp" >8th & 9th February 2022</h5>
                <p className="wow animate__animated animate__fadeInUp" >Tech Arena, spanning two exhilarating days, epitomized SES's prowess through an array of captivating games and spirited competitions. Our meticulously organized event not only drew a substantial audience but also garnered the support of key sponsors, underscoring our ability to curate immersive and impactful experiences.</p>
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
            </Swiper>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

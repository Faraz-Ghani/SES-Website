import 'font-awesome/css/font-awesome.min.css';
import { FaTwitter , FaYoutube , FaFacebookF , FaLinkedinIn } from "react-icons/fa";

import "./Intro.css";
function Intro() {
  return (
    <div className="Intro" id="home">
      <div className="dot"></div>
      <div className="dot2"></div>
      <div className="dot3"></div>
      <div className="dot4"></div>
      <div className="dot5"></div>
      <div className="dot6"></div>
      <div className="dot7"></div>
      <div className="dot8"></div>
      <div className="dot9"></div>
      <div className="dot10"></div>
      <div className="intro-container">
        <div className="intro-contant">
          <h1>Software Engineering Society</h1>
          <p>SES offers curators and young tech enthusiasts a chance to show off
          their skills and garner the attention they deserve.</p>
        </div>
        {/* <span className="intro-main-heading wow animate__animated animate__fadeInUp">Software Engineering Society</span>
        <span className="intro-main-paragraph wow animate__animated animate__fadeInUp">
          SES offers curators and young tech enthusiasts a chance to show off
          their skills and garner the attention they deserve.
        </span>
        <div className="socialmedia-icon">
          <div class="social-container">
            <ul class="social-icons">
              <li className="wow animate__animated animate__fadeInUp" >
                <a href="https://www.facebook.com/SESMUET?mibextid=ZbWKwL">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li className="wow animate__animated animate__fadeInUp" >
                <a href="https://twitter.com/sesmuet?t=y9nHytI4s0P4ENCZE3BCjA&s=09">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li className="wow animate__animated animate__fadeInUp" >
                <a href="linked">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>
              <li className="wow animate__animated animate__fadeInUp" >
                <a href="you">
                  <i class="fa fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

            <div className="head-icon">
              <a href="https://twitter.com/sesmuet?t=y9nHytI4s0P4ENCZE3BCjA&s=09" target="_blank" ><FaTwitter /></a>
              <a href="https://youtube.com/@softwareengineeringsociety4415" target="_blank"><FaYoutube/></a>              
              <a href="https://www.facebook.com/SESMUET?mibextid=ZbWKwL" target="_blank" ><FaFacebookF /></a>
              <a href="https://www.linkedin.com/in/ses-muet-216387204" target="_blank" ><FaLinkedinIn /></a>

              </div> */}

        <div className="intro-images ">
          <div className="image_wrapper img-1 " >
            <img src='/images/TnP 3.JPG' alt="" />
            <div className="overlay overlay_1">
              <h3>TechNplay</h3>
            </div>
          </div>

          <div className="image_wrapper img-2 ">
            <img src='/images/TechAreena4.jpg' alt="" />
            <div className="overlay overlay_1">
              <h3>Tech Arena </h3>
            </div>
          </div>

          <div className="image_wrapper img-3" >
            <img src='/images/Bazaar6.jpg' alt="" />
            <div className="overlay overlay_1">
              <h3> Bazaar Launchpad </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;

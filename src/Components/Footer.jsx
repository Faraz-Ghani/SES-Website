import { FaTwitter , FaYoutube , FaFacebookF , FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <footer>
      <div className="container">
        <div className="row justify-content-between align-items-start">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="ses-footer">
              <div className="foot-img">
                <img src="/images/sesLogo.png" alt="" />
              </div>
              <p>Software Engineering Society (SES) is a professional society formed to organise and manage co-curricular activities held in Department of Software Engineering (SWE), MUET, and excellence for the benefit of the department.</p>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12">
            <div className="foot-about">
              <h5>About Us</h5>
              <ul>
                <li><a href="/#team">Our Teams.</a></li>
                <li><a href="/#star">Our Shinning Stars.</a></li>
                <li><a href="/#developer">Our Developers.</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12">
            <div className="foot-contact">
              <h5>Contact Us</h5>
              <a href="">sesmuet@gmail.com</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="foot-touch">
              <h5>Get In Touch</h5>
              <div className="foot-icon">
                <a href="https://twitter.com/sesmuet?t=y9nHytI4s0P4ENCZE3BCjA&s=09" target="_blank" rel="noreferrer" ><FaTwitter /></a>
                <a href="https://youtube.com/@softwareengineeringsociety4415" target="_blank" rel="noreferrer"><FaYoutube/></a>              
              <a href="https://www.facebook.com/SESMUET?mibextid=ZbWKwL" target="_blank" rel="noreferrer" ><FaFacebookF /></a>
              <a href="https://www.linkedin.com/in/ses-muet-216387204" target="_blank" rel="noreferrer" ><FaLinkedinIn /></a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div className="container-fluid">
    <div className="row">
          <div className="col-12 p-0">
            <div className="foot-end py-2">
              <p>Crafted with ❤ by SES DEVELOPERS!</p>
              <small>©2023 SES All Rights Reserved </small>
            </div>
          </div>
        </div>
    </div>
    </>

  );
};

export default Footer;

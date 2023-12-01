import React from "react";
import "./SESintro.css";

function SESintro() {
  return (
    <>
      <section className="ses-intro" id="what-ses">
        <div className="container">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row align-items-center">
                <div className="col-md-6 col-12">
                  <div className="intro-text">
                    <h2 className="wow animate__animated animate__fadeInLeft" >What Is SES</h2>
                    <p className="wow animate__animated animate__fadeInUp" >Software Engineering Society (SES) is a professional society formed to organise and manage co-curricular activities held in Department of Software Engineering (SWE), MUET, and excellence for the benefit of the department.</p>
                    <p className="wow animate__animated animate__fadeInUp" >SES offers curators and young tech enthusiasts a chance to show off their skills and garner the attention they deserve.</p>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="intro-img1">
                  <img className="wow animate__animated animate__fadeInUp" src="/images/Bazaar1.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="row my-4">
                <div className="col-md-6 col-12">
                  <div className="intro-img2">
                  <img className="wow animate__animated animate__fadeInLeft" src="/images/TnP4.JPG" alt="" />
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="intro-img3">
                  <img className="wow animate__animated animate__fadeInRight" src="/images/TechAreena1.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SESintro;

import React from "react";
import "./IntroAchievements.css";
function IntroAchievements() {
  return (
    <div className="intro-achievements">
      <div className="intro-boxes">
        <div className="ses-events-hosted i-box wow animate__animated animate__fadeInUp">
          <p>350+</p>
          <p>Events hosted</p>
        </div>
        <span class="vertical-line"></span>
        <div className="ses-students i-box wow animate__animated animate__fadeInUp">
          <p>50+</p>
          <p>students</p>
        </div>
        <span class="vertical-line"></span>
        <div className="ses-partnerships i-box wow animate__animated animate__fadeInUp">
          <p>20+</p>
          <p>Partnerships</p>
        </div>
        <span class="vertical-line"></span>
        <div className="ses-certificates i-box wow animate__animated animate__fadeInUp">
          <p>100+</p>
          <p>certificates</p>
        </div>
      </div>
    </div>
  );
}

export default IntroAchievements;

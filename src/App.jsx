import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/Intro/Intro';
import IntroAchievements from './Components/Intro/IntroAchievements/IntroAchievements';
import SESintro from './Components/SESintro/SESintro';
import Team from './Components/teamCards/teams';
import Events from './Components/events.jsx'
import Footer from './Components/Footer.jsx'
import Appreciations from './Components/Appreciations.jsx'
import Partners from './Components/Partners.jsx'
import Star from './Components/OurStars';
import Developers from './Components/Developers';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './App.css';

function App() {

  return (

    <>
      <Navbar />
      <Intro></Intro>
      <IntroAchievements></IntroAchievements>
      <SESintro></SESintro>
      <Team />
      <Star />
      <Events />
      <div style={{ marginTop: 4 + 'rem' }}>
        <Partners />
      </div>
      <div style={{ marginTop: 4 + 'rem' }}>
        {/* <Highlights /> */}
        
        <Appreciations />
        <Developers/>
      </div>
      <Footer />
    </>
  );
}

export default App;


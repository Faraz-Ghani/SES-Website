import Card from "./Card.jsx"
const Appreciations = () => {
  const cardsData = [
    
    {
      imageSrc: '/images/Chairman.jpg',
      quote: "As software engineers, you have the power to shape the future. Let's push boundaries, challenge norms, and create extraordinary solutions! Stay curious, keep exploring, and innovate with passion. Together, we can make a difference! Let's make this year unforgettable! Share your ideas, participate actively, and let's grow together!",
      author: 'Prof. Dr. Qasim Ali\nChairman @SWDepartment'
    },
    {
      imageSrc: '/images/sir moshin.jpeg',
      quote: "SES is the pride of the Department of SOFTWARE ENGINEERING. All the members of the society are energetic and keen to perform brilliantly in challenging situations. The events organized and managed by SES are truely remarkable and provide them the opportunity to show their best side. I wish you all the very best and pray for your future endeavors.",
      author: 'Dr. Mohsin Memon\nAssociate Professor'
    },
    {
      imageSrc: '/images/2.png',
      quote: "I want to express my heartfelt appreciation to the Software Engineering Society for their incredible efforts in planning and organizing a variety of fun and educational events. Their hard work has truly made our department more exciting and engaging. As the department's chairman, I am truly impressed by their dedication and the positive impact they have on our students. Thank you for creating such wonderful opportunities for everyone to learn and have a great time together!",
      author: 'Dr. Naeem Mahoto\nAssociate Professor'
    },
  ];

  return (
    <div id="appreciation" className="position-relative" style={{ backgroundImage: "url('/images/bgcurved.png')", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', paddingBlock: '8rem' }}>
      <h3 className="text-center appre-head" style={{ color: '#012D74' , fontSize:'48px' , fontWeight: '700' }}>Our Appreciations</h3>
      <p className="text-center" style={{ color: '#032B71' }}>Grateful for Exceptional Leadership: Appreciating Our Inspiring Managers</p>
      <div className="container row mx-auto px-4" style={{ width: '100%' }}>
        {cardsData.map((card, index) => (
          <div className="col-lg-4 col-md-4 col-12" key={index}>
            <Card imageSrc={card.imageSrc} quote={card.quote} author={card.author} />
          </div>
        ))}
      </div>
      {/* <div className="position-absolute" style={{ width: '100%', bottom: '-0.8rem' }}>
        <div className="d-flex flex-row justify-content-center">
          <input type="email" placeholder="Email" className="input rounded" style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))', fontSize: '0.1rem', width: '80%' }} />
          <button className="btn btn-primary" style={{ backgroundColor: '#012D74' }}>Sign Me Up!</button>
        </div>
      </div> */}
    </div>
  );
};

export default Appreciations;

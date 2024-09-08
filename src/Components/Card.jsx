const Card = ({ imageSrc, quote, author }) => {
  return (
    <div className="container position-relative rounded pt-4 appre-card" style={{ marginBlock: '4rem', paddingBottom: '4rem', color: '#012D74', background: 'white' }}>
      <h4 className="text-center" style={{ fontSize: '1.5rem', fontWeight: 700, margin: '13px 0' }}>
        {author.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </h4>
      <p className="text-center m-0" style={{ fontSize: '0.8rem', fontWeight: 500 }}>
        {quote}
      </p>
      <div className="container position-absolute" style={{ bottom: '-2.8rem', left: 0 }}>
        <div className="d-flex flex-column align-items-center appre-imgs">
          <img src={imageSrc} />
        </div>
      </div>
    </div>
  );
};

export default Card;

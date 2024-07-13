import React from 'react';

const Partners = () => {
  return (
    <div className="" id='partners'>
      <h1 className="text-center partner-head " style={{ color: '#012D74' , fontWeight:'700' , fontSize:'48px' }}>Our Partners</h1>
      <div className="mx-auto px-5 py-5 text-center mt-5" style={{ width: '80%', height: 'auto', borderRadius: '1%', backgroundColor: 'white', boxShadow: '5px 2px 20px 0px gray' }}>
        <div className="container">
          <div className="row">
            <div className="col py-5 partner">
              <img src='/images/logo1.png' alt="" width="90" />
            </div>
            <div className="col py-5 partner">
              <img src='/images/logo2.png' alt="" width="90" />
            </div>
            <div className="col py-5 partner">
              <img src='/images/logo3.png' alt="" width="90" />
            </div>
            <div className="col py-5 partner">
              <img src='/images/logo5.png' alt="" width="90" />
            </div>
            <div className="col py-5 partner border-end-0">
              <img src='/images/Jugnu GSM.png' alt="" width="90" />
            </div>
          </div>

          <div className="row">
            <div className="col py-5 partner">
              <img src='/images/logo6.png' alt="" width="90" />
            </div>
            <div className="col py-5 partner">
              <img src='/images/logo7.png' alt="" width="90" />
            </div>
            <div className="col py-5 partner">
              <img src='/images/logo8.png' alt="" width="90" />
            </div>
            <div className="col py-5 partner">
              <img src='/images/logo9.png' alt="" width="90" />
            </div>
            <div className="col py-5 partner border-end-0">
              <img src='/images/logo10.png' alt="" width="90" />
            </div>
          </div>

          <div className="row">
            <div className="col py-5 partner border-bottom-0">
              <img src='/images/logo11.png' alt="" width="90" />
            </div>
            <div className="col py-5 partner border-bottom-0">
              <img src='/images/logo12.png' alt="" width="90" />
            </div>
            <div className="col py-5 partner border-bottom-0">
              <img src='/images/logo13.png' alt="" width="90" />
            </div>
            <div className="col py-5 partner border-bottom-0">
              <img src='/images/logo14.png' alt="" width="90" />
            </div>
            <div className="col py-5 partner border-bottom-0 border-end-0">
              <img src='/images/logo15.png' alt="" width="90" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;


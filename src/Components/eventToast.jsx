import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../App.css";

const EventToast = () => {
  const [formLink, setFormLink] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Faraz-Ghani/Faraz-Ghani/main/link.https://raw.githubusercontent.com/Software-Engineering-Society-MUET/SES-Website/main/link.json')
      .then(response => response.json())
      .then(data => {
        console.log(data.formLink)
        setFormLink(data.formLink);
        notify(data.formLink);
      })
      .catch(error => console.error('Error fetching form link:', error));
  }, []);

    const registration = (link) => {
        window.open(link, '_blank'); // Pass the link directly as a string
    };

    const notify = (link) => {
        if (link !== 'Null') {
          toast('Registrations are live for our next Event!', {
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true, 
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            closeButton: (
              <div className='reg'>
                <button className="register-button" onClick={() => registration(link)}>Register</button>
              </div>
            ),
          });
        } 
      };

  return (
    <ToastContainer 
      stacked
      position="top-center"
      autoClose={5000}
      limit={1}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
};

export default EventToast;
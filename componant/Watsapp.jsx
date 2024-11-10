// components/WhatsAppButton.js
import React from 'react';

const WhatsAppButton = () => {
  const whatsappNumber = '966596169994'; // Replace with your WhatsApp number
  const message = 'شركة ارشاد اهلا بكم'; // Replace with your custom message

  return (
    <div className='z-[2000]'>
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green rounded-full shadow-md p-1 hover:bg-white transition duration-300"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // Link to a WhatsApp icon image
        alt="WhatsApp"
        className="w-10 h-10"
      />
    </a>
    </div>
  );
};

export default WhatsAppButton;

import React from 'react';
import PropTypes from 'prop-types';
import backgroundImage from '../assets/image.png'; // Import your image

function Modal({ score, onClose }) {
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center">
        <div 
          className="bg-black rounded-lg text-center p-8 shadow-xl max-w-xl h-[415px] w-[720px] relative"
          style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', color: '#FFC200'}}
        >
          <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-[128px] font-bold">
            {score}
          </div>
          <button
            type="button"
            className="absolute bottom-4 right-4 bg-yellow-400 hover:bg-yellow-500 text-white rounded-md px-4 py-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
  
  Modal.propTypes = {
    score: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  
  export default Modal;
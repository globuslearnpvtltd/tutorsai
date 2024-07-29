import React from 'react'

const VideoModal = ({ onClose, children }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-5 rounded-lg shadow-lg max-w-lg w-full">
          <button
            className="absolute top-10 right-10 mt-4 mr-4 text-red-500 hover:text-gray-700"
            onClick={onClose}
          >
            x
          </button>
          {children}
        </div>
      </div>
    );
  };

export default VideoModal

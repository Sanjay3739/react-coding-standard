import React from "react";
import './error.scss';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col h-screen bg-white">
        <div
          className="bg-cover bg-center h-96 image_404 "
        >
          <span className="text-6xl text-gray-300 flex justify-center items-center">
            404
          </span>
        </div>
        <div className="bottom-container mt-8">
          <span className="text-2xl">Look like you're lost</span>
          <p>the page you are looking for not available!</p>
          <a
            href="/"
            className="text-white bg-green-500 px-4 py-2 mt-4 inline-block"
          >
            Go to Home
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;

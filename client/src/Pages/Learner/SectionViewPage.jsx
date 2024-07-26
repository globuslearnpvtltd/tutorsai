import React from 'react';
import Navbar from '../../Components/Learner/Navbar.jsx';

const SectionViewPage = () => {
  return (
    <div>
      <Navbar />
    <div className="p-10">
      <h1 className="font-semibold text-xl mb-10">Chapter 1</h1>
      <div className="flex">
        <div className="w-2/3 h-screen bg-gray-300 flex items-center justify-center">
          <img className='object-cover w-full h-full' src="https://miro.medium.com/v2/resize:fit:765/1*dMFfjuOs_Ufr5IKkj5pdww.jpeg" alt="Aitutor" />
        </div>
        <div className="w-1/3 flex flex-col justify-center space-y-4 ml-4">
          <button className="bg-blue-500 text-white p-4 rounded">Ask a Question</button>
          <button className="bg-green-500 text-white p-4 rounded">Start Quiz</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SectionViewPage

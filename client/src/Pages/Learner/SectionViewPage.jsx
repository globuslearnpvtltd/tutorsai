import React, { useState } from 'react';
import Navbar from '../../Components/Learner/Navbar.jsx';
import { useRef } from 'react';

const SectionViewPage = () => {
    const videoRef = useRef(null);
    const [avatar, setAvatar] = useState('avatar1');
    const [playbackSpeed, setPlaybackSpeed] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [question, setQuestion] = useState('');

    const handleRewind = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 10);
        }
    };

    const handleAvatarChange = (newAvatar) => {
        setAvatar(newAvatar);
    };

    const handleSpeedChange = (speed) => {
        setPlaybackSpeed(speed);
        if (videoRef.current) {
            videoRef.current.playbackRate = speed;
        }
    };

    const handleAskQuestion = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
        setIsModalOpen(false);
    };


    const handleSampleQuestionClick = (sampleQuestion) => {
        setQuestion(sampleQuestion);
    };

    return (
        <div>
            <Navbar />
            <div className="p-10">
                <h1 className="font-semibold text-xl mb-10">Chapter 1 : The Rise of Nationalism in Europe</h1>
                <div className="flex sm:flex-row flex-col">
                    <div className="sm:w-2/3 max-h-105  flex flex-col items-center justify-center overflow-hidden">
                        <div>
                            <video className='object-cover w-full h-full' controls ref={videoRef} >
                                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className="flex space-x-2 mt-2">
                            <p>Adjust the speed of learning</p>
                            <button onClick={() => handleSpeedChange(0.5)} className="bg-gray-500 text-white p-2 rounded">0.5x</button>
                            <button onClick={() => handleSpeedChange(1)} className="bg-gray-500 text-white p-2 rounded">1x</button>
                            <button onClick={() => handleSpeedChange(1.5)} className="bg-gray-500 text-white p-2 rounded">1.5x</button>
                            <button onClick={() => handleSpeedChange(2)} className="bg-gray-500 text-white p-2 rounded">2x</button>
                        </div>
                        <div className="flex space-x-2 mt-2">
                            <p>Choose your own personalised avatar</p>
                            <button onClick={() => handleAvatarChange('A1')} className="bg-blue-500 text-white p-2 rounded-full"> A1</button>
                            <button onClick={() => handleAvatarChange('A2')} className="bg-green-500 text-white p-2 rounded-full">A2</button>
                            <button onClick={() => handleAvatarChange('A3')} className="bg-purple-500 text-white p-2 rounded-full">A3</button>
                        </div>
                    </div>
                    <div className="sm:w-1/3 flex flex-col justify-start space-y-4 ml-4">
                        <div className='border-2 rounded-xl p-5'>
                            <p className='text-lg font-semibold pb-2'>Overview</p>
                            <p>In 1848, Frédéric Sorrieu, a French artist, prepared a series of four
                                prints visualising his dream of a world made up of ‘democratic
                                and social Republics’, as he called them. The first print (Fig. 1) of the
                                series, shows the peoples of Europe and America – men and women
                                of all ages and social classes – marching in a long train, and offering
                                homage to the statue of Liberty as they pass by it.</p>
                        </div>

                        <button onClick={handleAskQuestion} className="bg-blue-500 text-white p-4 rounded">Ask a Question</button>
                        <button className="bg-blue-500 text-white p-4 rounded">Take the quiz</button>
                    </div>
                </div>
                <div>
                {isModalOpen && (
                <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg w-80">
                    <div className="p-4">
                        <h2 className="text-xl mb-4">Ask Question</h2>
                        <div className="mb-4">
                            <ul className=" ">
                                <li className="cursor-pointer border-2 rounded-3xl p-2 bg-gray-300 mt-2 " onClick={() => handleSampleQuestionClick("Could you explain once more?")}>Could you explain once more?</li>
                                <li className="cursor-pointer border-2 rounded-3xl p-2 bg-gray-300" onClick={() => handleSampleQuestionClick("Give me an another example.")}>Give me an another example.</li>
                                <li className="cursor-pointer  border-2 rounded-3xl p-2 bg-gray-300" onClick={() => handleSampleQuestionClick("Could you please slow down?")}>Could you please slow down?</li>
                            </ul>
                        </div>
                        <textarea className="w-full p-2 border border-gray-300 rounded mb-4" rows="4" placeholder="Type your question here..." value={question} onChange={(e) => setQuestion(e.target.value)}></textarea>
                        <div className="mb-4">
            
                            <button className="bg-gray-500 text-white p-2 rounded">Record Audio</button>
                        </div>
                        <button className='bg-green-500 text-white p-2  rounded-lg'>Ask</button>
                        <div className="flex justify-end">
                            <button onClick={handleCloseModal} className="bg-red-500 text-white p-2 rounded">Close</button>
                        </div>
                    </div>
                </div>
            )}

                </div>
            </div>

        </div>

    )
}

export default SectionViewPage

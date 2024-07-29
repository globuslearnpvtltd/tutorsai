import React, { useState, useRef, useEffect } from 'react';

const SpeedChange = () => {
  const [speechSpeed, setSpeechSpeed] = useState(1);
  const videoRef = useRef(null);

  const handleSpeechSpeedChange = (event) => {
    setSpeechSpeed(event.target.value);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speechSpeed;
    }
  }, [speechSpeed]);

  return (
    <div>
      <div className='mt-10'>
        <h2 className='font-bold text-xl'>Adjust Speech Speed</h2>
        <div className='flex flex-col items-center'>
          <input
            type='range'
            min='0.5'
            max='2'
            step='0.1'
            value={speechSpeed}
            onChange={handleSpeechSpeedChange}
            className='mt-5 w-2/3'
          />
          <span className='mt-2 text-lg'>{`Current Speed: ${speechSpeed}x`}</span>
        </div>
        <div className='mt-5'>
          <video ref={videoRef} className='w-full h-auto' controls>
            <source src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
    </div>
  );
};

export default SpeedChange;

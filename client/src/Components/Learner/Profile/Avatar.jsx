import React, { useState } from 'react';
import VideoModal from './VideoModal';

const Avatar = () => {
    const [currentAvatar, setCurrentAvatar] = useState({
        name: 'Avatar1',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT16eO5W8VPjVFrkvG8n_2FQKjByMcbLtBF4A&s',
        video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      });
      const [selectedAvatar, setSelectedAvatar] = useState(null);
    
      const avatars = [
        {
          name: 'Avatar1',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT16eO5W8VPjVFrkvG8n_2FQKjByMcbLtBF4A&s',
          video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        },
        {
          name: 'Avatar2',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH9FTsuRtyZa3Oc9iiCjPCT6Qeal4bZI2v9g&s',
          video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
        },
        {
          name: 'Avatar3',
          image: 'https://img.freepik.com/premium-photo/elementary-school-teacher-digital-avatar-generative-ai_934475-9068.jpg',
          video: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        }
      ];
    
      const handleAvatarChange = (avatar) => {
        setCurrentAvatar(avatar);
      };
    
      const handleAvatarClick = (avatar) => {
        setSelectedAvatar(avatar);
      };
    
      const closeModal = () => {
        setSelectedAvatar(null);
      };
    
      return (
        <div className='border-2 p-10'>
          <h1 className='font-bold text-xl'>Choose Your Avatar</h1>
          <hr />
          <div className='text-center mb-5 mt-5'>
            <img
              src={currentAvatar.image}
              alt={currentAvatar.name}
              className='w-36 h-36 rounded-full object-cover mx-auto'
            />
            <h3 className='text-xl font-bold mt-2'>{currentAvatar.name}</h3>
          </div>
          <div className='flex justify-around md:flex-row flex-col '>
            {avatars.map((avatar) => (
              <div key={avatar.name} className='text-center mt-5'>
                <img
                  
                  src={avatar.image}
                  alt={avatar.name}
                  className='w-20 h-20 rounded-full object-cover mx-auto cursor-pointer'
                />
                <p>{avatar.name}</p>
                <button onClick={() => handleAvatarClick(avatar)} className='bg-blue-700 mt-2 rounded p-1 me-2'>Video</button>
                <button className='bg-green-700 mt-2 rounded p-1' onClick={() => handleAvatarChange(avatar)}>Select</button>
              </div>
            ))}
          </div>
          {selectedAvatar && (
            <VideoModal onClose={closeModal}>
              <div className="text-center">
                <h3 className='text-xl font-bold mt-2'>{selectedAvatar.name}</h3>
                <video className='w-full h-auto mt-2' controls>
                  <source src={selectedAvatar.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </VideoModal>
          )}
        </div>
      );
}

export default Avatar

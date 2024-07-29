import React, { useState } from 'react';
import Navbar from '../../Components/Learner/Navbar.jsx'
import BasicProfile from '../../Components/Learner/Profile/BasicProfile.jsx';
import Avatar from '../../Components/Learner/Profile/Avatar.jsx';
import SpeedChange from '../../Components/Learner/Profile/SpeedChange.jsx';

const ProfilePage = () => {
    const [userInfo, setUserInfo] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        mobile: '123-456-7890'
    });

    const [currentAvatar, setCurrentAvatar] = useState('Avatar1');
    const [currentSpeed, setCurrentSpeed] = useState('Normal');

    const avatars = [
        { name: 'Avatar1', video: 'link_to_avatar1_video' },
        { name: 'Avatar2', video: 'link_to_avatar2_video' },
        { name: 'Avatar3', video: 'link_to_avatar3_video' }
    ];

    const speeds = ['Slow', 'Normal', 'Fast'];

    const handleAvatarChange = (avatar) => {
        setCurrentAvatar(avatar);
    };

    const handleSpeedChange = (speed) => {
        setCurrentSpeed(speed);
    };

    return (
        <div>
            <Navbar />
            <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
                <div className='m-10'>
                    <h1 className='text-2xl font-bold mb-10'>Profile</h1>
                    <div className='flex sm:flex-row flex-col'>
                        <div className='border-2 sm:w-1/6 p-10 flex flex-col items-center'>
                            <BasicProfile />
                        </div>
                        <div className='border-2 sm:w-5/6 p-10'>
                            <Avatar/>
                            <SpeedChange/>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default ProfilePage;


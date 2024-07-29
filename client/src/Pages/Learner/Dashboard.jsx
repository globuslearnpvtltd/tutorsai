import React from 'react'
import Navbar from '../../Components/Learner/Navbar.jsx';
import EnrolledCourses from '../../Components/Learner/Dashboard/EnrolledCourses.jsx';
import Progress from '../../Components/Learner/Dashboard/Progress.jsx';
import Avatar from '../../Components/Learner/Dashboard/Avatar.jsx';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className='m-20'>
                <div className='text-center mb-10'>
                    <p className='text-5xl font-extrabold text-pink-600 mb-4'>
                        Welcome, Suneesh!
                    </p>
                    <p className='text-lg text-gray-700'>
                        We're excited to have you here. Explore your personalized avatar and rate of speech settings below.
                    </p>
                </div>
                <Avatar />
                <div className='mt-10 flex md:flex-row flex-col'>
                    <EnrolledCourses />
                    <Progress />
                </div>
            </div>
        </div>
    )
}

export default Dashboard

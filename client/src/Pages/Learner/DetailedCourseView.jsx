import React, { useState } from 'react'
import CourseBasic from '../../Components/Learner/CourseView/CourseBasic';
import Navbar from '../../Components/Learner/Navbar.jsx';
import CourseChapters from '../../Components/Learner/CourseView/CourseChapters.jsx';

const DetailedCourseView = () => {
    
    return (
        <div>
            <Navbar />
            <div className='m-20'>
                <div className='flex flex-col md:flex-row  items-stretch'>
                    <div className='md:w-2/3 h-96'>
                        <CourseBasic />
                    </div>
                    <div className='md:w-1/3 flex flex-col justify-center h-96 '>
                        <img className='object-cover h-full w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBa_H1Ujf4DFtgWHlZEXaDbBdyBCo2bUWrOA&s" alt="Image" />
                    </div>
                </div>
                <hr className='my-8 border-t-2 border-gray-300' />
                <div>

                    <CourseChapters/>
                </div>
            </div>
        </div>
    )
}

export default DetailedCourseView

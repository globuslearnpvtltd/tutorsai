import React from 'react'
import Navbar from '../../Components/Learner/Navbar.jsx'
import CourseBasic from '../../Components/Learner/CourseView/CourseBasic.jsx'

const CourseViewPage = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-2/3'>
        <CourseBasic/>
        </div>
        <div className='md'>
          <h1>Hello EveryOne</h1>
        </div>
      </div>
    </div>
  )
}

export default CourseViewPage

import React from 'react'
import Navbar from '../../Components/Learner/Navbar.jsx'
import CourseBasic from '../../Components/Learner/CourseView/CourseBasic.jsx'
import { Link } from 'react-router-dom'

const CourseViewPage = () => {
  return (
    <div>
      <Navbar />
      <div className='m-20'>
        <div className='flex flex-col md:flex-row  items-stretch'>
          <div className='md:w-2/3 h-96 '>
            <CourseBasic />
          </div>
          <div className='md:w-1/3 flex flex-col justify-center h-96 '>
            <img className='object-cover h-full w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBa_H1Ujf4DFtgWHlZEXaDbBdyBCo2bUWrOA&s" alt="Image" />
            <Link  to={'/detailedCourseView'} className='bg-blue-500 mt-4 ml-10 me-10 p-2 flex items-center justify-center'><button className=''>Enroll Now</button></Link>
          </div>
        </div>
        <hr className='my-8 border-t-2 border-gray-300' />
        <div>
          <h1 className='font-semibold text-2xl'>About</h1>
          <div className='mt-5 flex md:flex-row flex-col'>
            <div className='border-2 bg-slate-500 p-5 mx-5'>
            <p>16 hours lecture</p>
            </div>
            <div className='border-2 bg-slate-500 p-5 mx-5'>
            <p>300+ enrollments</p>
            </div>
            <div className='border-2 bg-slate-500 p-5 mx-5'>
            <p>Customisable lectures</p>
            </div>
            <div className='border-2 bg-slate-500 p-5 mx-5'>
            <p>Chapter wise assessments</p>
            </div>   
            <div className='border-2 bg-slate-500 p-5 mx-5'>
            <p>Doubt clarifications</p>
            </div>       
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseViewPage

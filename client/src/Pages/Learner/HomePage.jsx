import React from 'react'
import Navbar from '../../Components/Learner/Navbar'
import MyCourses from '../../Components/Learner/Home/MyCourses'
import PopularCourses from '../../Components/Learner/Home/PopularCourses'

const HomePage = () => {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className='sm:flex p-5 m-8 min-h-screen'>
      <div className='flex sm:w-[60%] justify-center border-4 '>
        <MyCourses/>
      </div>
      <div className='flex sm:w-[40%] justify-center border-2'>
        <PopularCourses/>
      </div>
    </div>
    <div>

    </div>
    </>
  )
}

export default HomePage

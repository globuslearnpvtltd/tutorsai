import React from 'react'

const Avatar = () => {
  return (
    <div className='w-full'>
                <div className='flex flex-col md:flex-row justify-center items-center'>
                    
                    <div className='md:w-1/2 text-center h-60 w-60  border-2 border-gray-300 rounded-lg m-5 flex justify-center items-center'>
                        <img 
                            className='rounded-full bg-pink-200 h-60 w-60 p-1 object-cover' 
                            src="https://img.freepik.com/premium-photo/elementary-school-teacher-digital-avatar-generative-ai_934475-9068.jpg" 
                            alt="Selected Avatar" 
                        />
                        Avatar3
                    </div>
                   
                    <div className='md:w-1/2 text-center w-60 h-60 border-2 border-gray-300 rounded-lg m-5 flex justify-center items-center bg-gray-100'>
                        <p className='text-lg text-gray-700'>
                            Selected Speed: 1x
                        </p>
                    </div>
                </div>
                <p className='text-center bg-yellow-600'>You Can Customise your avatar and speed in profile section</p>
            </div>
  )
}

export default Avatar

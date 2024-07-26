import React from 'react'
import { Link } from 'react-router-dom'

const PopularCourses = () => {
    return (
        <div>
            <div>
                <div className='mb-5 mt-5'>
                    <h1 className='text-2xl text-blue-800 font-bold'>Popular Courses</h1>
                </div>
                <div className="space-y-4">
                    <Link to={'/courseView'}><div className="bg-white rounded-lg shadow-md p-4 flex items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlWhjK89nUX3vIMTXu6sPH1tWhhpftsmTytQ&s" alt="Harvard University logo" className="w-16 h-16 mr-4"/>
                            <div>
                                <h3 className="text-lg text-black font-semibold">Introduction to history programming</h3>
                            </div>
                    </div>
                    </Link>
                    <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlWhjK89nUX3vIMTXu6sPH1tWhhpftsmTytQ&s" alt="Harvard University logo" className="w-16 h-16 mr-4"/>
                            <div>
                                <h3 className="text-lg text-black font-semibold">Introduction to history programming</h3>
                            </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlWhjK89nUX3vIMTXu6sPH1tWhhpftsmTytQ&s" alt="Harvard University logo" className="w-16 h-16 mr-4"/>
                            <div>
                                <h3 className="text-lg text-black font-semibold">Introduction to history programming</h3>
                            </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlWhjK89nUX3vIMTXu6sPH1tWhhpftsmTytQ&s" alt="Harvard University logo" className="w-16 h-16 mr-4"/>
                            <div>
                                <h3 className="text-lg text-black font-semibold">Introduction to history programming</h3>
                            </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlWhjK89nUX3vIMTXu6sPH1tWhhpftsmTytQ&s" alt="Harvard University logo" className="w-16 h-16 mr-4"/>
                            <div>
                                <h3 className="text-lg text-black font-semibold">Introduction to history programming</h3>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularCourses

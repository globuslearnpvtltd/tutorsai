import React from 'react';

const BasicProfile = () => {
    return (
        <>
            <div>
                <img className='rounded-full object-fill w-40 h-40' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT16eO5W8VPjVFrkvG8n_2FQKjByMcbLtBF4A&s" alt="" />
            </div>
            <div className='p-5 text-center font-bold '>
                <p className='py-1'>Suneesh</p>
                <p className='py-1'>suneesh@gmail.com</p>
                <p className='py-1'>9876543210</p>
            </div>
        </>
    );
};

export default BasicProfile;
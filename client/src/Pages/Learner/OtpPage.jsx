import React, { useEffect, useState } from 'react'
import { apiRequest } from '../../Api/axios';
import toast from 'react-hot-toast';
import { setLearnerCredentials } from '../../Redux/Slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const OtpPage = () => {
    const [otp, setOtp] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        try {
            const response = await apiRequest({
                method: 'post',
                url: '/verify-otp',
                data: { otp }
            });
            console.log(response);
            if (response.user) {
                toast.success("Successfully Registered");
                localStorage.setItem("learnerToken", response.token);
                dispatch(setLearnerCredentials(response.user))
                navigate('/');
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setErrorMessage(error.response.data.message);
            } else {
                toast.error("An unexpected error occurred");
            }
        }
    };
    return (
        <div>
            <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md mx-auto mt-24">
                <div className="flex flex-col space-y-2 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold">Confirm OTP</h2>
                    <p className="text-md md:text-xl">
                        Enter the OTP we just sent you.
                    </p>
                </div>
                <div className="flex flex-col max-w-md space-y-5">
                    <input type="text" placeholder="otp" onChange={(e) => { setOtp(e.target.value) }}
                        className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" />
                    {errorMessage && (<p className='text-red-500 font-semibold text-center'>{errorMessage}</p>)}
                    <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white" onClick={handleSubmit}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OtpPage

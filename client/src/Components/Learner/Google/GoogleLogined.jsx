import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { apiRequest } from '../../../Api/axios';
import toast from 'react-hot-toast';
import { setLearnerCredentials } from '../../../Redux/Slices/authSlice';
import { useDispatch } from 'react-redux';

export default function GoogleLogined() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <GoogleOAuthProvider clientId="820928425639-l32ohjg8o7k6c81k7l62flm7v80vnp1u.apps.googleusercontent.com">
      <div>
        <GoogleLogin
          onSuccess={async (response) => {
           
            try {
              const respo = await apiRequest({
                method: 'post',
                url: '/googleSignIn',
                data: response
              });
              console.log("its respo",respo);
              if (respo.user) {
                toast.success("Successfully Logined ");
                localStorage.setItem("learnerToken", respo.token);
                  dispatch(setLearnerCredentials(respo.user));
                  navigate('/');
              }
            } catch (err) {
              if (err.response && err.response.data) {
                toast.error(err.response.data.message);
              } else {
                toast.error('Something went wrong. Please try again later.');
              }
            }



          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </div>
    </GoogleOAuthProvider>
  );
}

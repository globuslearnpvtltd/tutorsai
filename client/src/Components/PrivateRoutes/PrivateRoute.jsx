import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
    const {learnerInfo} = useSelector((state) => state.learnerAuth); 
    
  return learnerInfo ? <Outlet/> : <Navigate to="/learner/login" replace />
}

export const NotPrivateRoute = () => {
    const {learnerInfo} = useSelector((state) => state.learnerAuth); 
    
  return !learnerInfo ? <Outlet/> : <Navigate to="/" replace />
}
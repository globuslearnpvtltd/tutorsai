import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFound from '../Components/CommonComponents/PageNotFound/PageNotFound.jsx';
import LoginPage from '../Pages/Learner/LoginPage.jsx';
import SignUpPage from '../Pages/Learner/SignUpPage.jsx';
import HomePage from '../Pages/Learner/HomePage.jsx';
import OtpPage from '../Pages/Learner/OtpPage.jsx';
import { NotPrivateRoute, PrivateRoute } from '../Components/PrivateRoutes/PrivateRoute.jsx';
import CourseViewPage from '../Pages/Learner/CourseViewPage.jsx';
import DetailedCourseView from '../Pages/Learner/DetailedCourseView.jsx';
import SectionViewPage from '../Pages/Learner/SectionViewPage.jsx';

const LearnerRoutes = () => {
  return (
    <Routes>
      <Route path='' element={<PrivateRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/courseView" element={<CourseViewPage/>}/>
        <Route path='/detailedCourseView' element={<DetailedCourseView/>}/>
        <Route path='/sectionView' element={<SectionViewPage/>}/>
      </Route>
      <Route path='' element={<NotPrivateRoute />}>
        <Route path="/learner/login" element={<LoginPage />} />
        <Route path="/learner/signup" element={<SignUpPage />} />
        <Route path="/learner/otp" element={<OtpPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
};

export default LearnerRoutes;
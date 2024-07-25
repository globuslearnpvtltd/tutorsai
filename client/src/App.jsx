import React from 'react';
import './index.css';
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LearnerRoutes from './Routes/LearnerRoutes.jsx';
import LearnerErrorBoundary from './Components/CommonComponents/LearnerErrorBoundary.jsx';

const App = () => {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/*" element={<LearnerErrorBoundary><LearnerRoutes /></LearnerErrorBoundary>} />
      </Routes>
    </Router>
  )
}

export default App

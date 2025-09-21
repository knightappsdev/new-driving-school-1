import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import InstructorSignupPage from './pages/InstructorSignupPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-primary">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/instructor-signup" element={<InstructorSignupPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

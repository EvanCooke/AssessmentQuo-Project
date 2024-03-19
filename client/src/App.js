import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginSignup from './Components/LoginSignup/LoginSignup.jsx';
import Login from './Components/Login/Login.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import StudentHomepage from './Components/StudentHomepage/StudentHomepage.jsx';
import PractitionerHomepage from './Components/PractitionerHomepage/PractitionerHomepage.jsx';
import Homepage from './Components/Homepage/Homepage.jsx';
import Error from './Components/Error/Error.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LoginSignup/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/dashboard" element={<Dashboard/>} />
                <Route exact path="/student-home" element={<StudentHomepage/>} />
                <Route exact path="/practitioner-home" element={<PractitionerHomepage/>} />
                <Route exact path="/home" element={<Homepage/>} />
                <Route exact path="*" element={<Error/>} />
            </Routes>            
        </Router>
    );
}

export default App;
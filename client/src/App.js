import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginSignup from './Components/LoginSignup/LoginSignup.jsx';
import StudentHomepage from './Components/StudentHomepage/StudentHomepage.jsx';
import PractitionerHomepage from './Components/PractitionerHomepage/PractitionerHomepage.jsx';
import Error from './Components/Error/Error.jsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LoginSignup/>} />
                <Route exact path="/student-home" element={<StudentHomepage/>} />
                <Route exact path="/practitioner-home" element={<PractitionerHomepage/>} />
                <Route exact path="*" element={<Error/>} />
            </Routes>            
        </Router>
    );
}

export default App;
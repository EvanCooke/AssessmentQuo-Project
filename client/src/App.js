// import statements:

import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginSignup from './Components/LoginSignup/LoginSignup.jsx';
import StudentHomepage from './Components/StudentHomepage/StudentHomepage.jsx';
import PractitionerHomepage from './Components/PractitionerHomepage/PractitionerHomepage.jsx';
import Error from './Components/Error/ErrorPage.jsx';

function App() {
    return (
        <div>
            <h1>Test</h1>
        </div>
        /**
        <Router>
            <Routes>
                <Route exact path="/" element={<LoginSignup/>} />
                <Route exact path="/student-home" element={<StudentHomepage/>} />
                <Route exact path="/practitioner-home" element={<PractitionerHomepage/>} />
                <Route exact path="*" element={<Error/>} />
            </Routes>            
        </Router>
        */
    )
}

/*
REmind me to delete this
S
S
S
S
S
S
S
S



d
d
d
d
d
d
d
d
d
d

S
S
S
S
S
S
function App() {
    return (
        <div>
            <h1>Test</h1>
        </div>
        /**
        <Router>
            <Routes>
                <Route exact path="/" element={<LoginSignup/>} />
                <Route exact path="/student-home" element={<StudentHomepage/>} />
                <Route exact path="/practitioner-home" element={<PractitionerHomepage/>} />
                <Route exact path="*" element={<Error/>} />
            </Routes>            
        </Router>
        */
    )
}

*/

export default App;
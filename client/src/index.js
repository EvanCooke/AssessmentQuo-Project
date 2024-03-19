import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';
import './index.css'
import App from './App';
import PractitionerHomepage from './Components/PractitionerHomepage/PractitionerHomepage';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import StudentHomepage from './Components/StudentHomepage/StudentHomepage';
import ErrorPage from './Components/Error/ErrorPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route path='/' element={<LoginSignup />}></Route>
            <Route path='/student-home' element={<StudentHomepage />} />
            <Route path='/practitioner-home' element={<PractitionerHomepage />} />
            <Route path='*' element={<ErrorPage />} />
        </Route>
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);



/* 

import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { store } from './store/store';
import { Provider } from 'react-redux';
import './index.css'
import App from './App';
import PractitionerHomepage from './Components/PractitionerHomepage/PractitionerHomepage';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import StudentHomepage from './Components/StudentHomepage/StudentHomepage';
import ErrorPage from './Components/Error/ErrorPage';

*/
import React, { useEffect, useState } from 'react';
import './LoginSignup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import student_icon from '../Assets/graduation-cap.png';
import practitioner_icon from '../Assets/training-icon.png';

const LoginSignup = () => {

    const [action,setAction] = useState("Login");
    const [role,setRole] = useState("");

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            {action==="Login"?null:<div className='role-selection'>
                <div className={`role ${role === "student" ? "selected" : ""}`} onClick={()=>{setRole("student")}}>
                    <img src={student_icon} alt="" />
                    <div>Student</div>
                </div>
                <div className={`role ${role === "practitioner" ? "selected" : ""}`} onClick={()=>{setRole("practitioner")}}>
                    <img src={practitioner_icon} alt="" />
                    <div>Practitioner</div>
                </div>
            </div>}
            <div className='inputs'>
                {action==="Login"?null:<div className='input'>
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Name" />
                </div>}

                {role==="student"?<div className='input'>
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder="School" />
                </div>:null}
                
                <div className='input'>
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className='input'>
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className='forgot-password'>Lost Password? <span>Click Here</span></div>}
            <div className='submit-container'>
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    );
};

export default LoginSignup


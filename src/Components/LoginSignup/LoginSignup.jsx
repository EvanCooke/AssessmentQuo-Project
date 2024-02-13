import React, { useEffect, useState } from 'react';
import './LoginSignup.css';
import { useNavigate } from 'react-router-dom';

// import assets/images
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import student_icon from '../Assets/graduation-cap.png';
import practitioner_icon from '../Assets/training-icon.png';

const LoginSignup = () => {

    const [action,setAction] = useState("Login");
    const [role,setRole] = useState("");
    
    // states for input fields
    const [name, setName] = useState("");
    const[school, setSchool] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const navigate = useNavigate();

    // ensure all text fields are filled before enabling submit button
    const isFormValid = () => {
        if (action === "Login") {
            return email !== "" && password !== "";
        } else {
            return name !== "" && email !== "" && password !== "" && (role === "student" ? school !== "" : true);
        }
    };

    // handles login and sign up button on click logic 
    const handleActionChange = (newAction) => {
        if(role === 'student') {
            if(action === newAction) {
                if (isFormValid()) {
                    navigate("/student-home")
                } else {   
                    alert('Empty Fields');
                }
            }else{
                setAction(newAction);
            }
        }else{
            if(action === newAction) {
                if (isFormValid()) {
                    navigate("/practitioner-home")
                } else {   
                    alert('Empty Fields');
                }
            }
            else{
                setAction(newAction);
            }
        }
    };

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
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>}

                {role==="student"?<div className='input'>
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder="School" value={school} onChange={(e) => setSchool(e.target.value)}/>
                </div>:null}
                
                <div className='input'>
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='input'>
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className='forgot-password'>Lost Password? <span>Click Here</span></div>}
            <div className='submit-container'>
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{handleActionChange("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{handleActionChange("Login")}}>Login</div>
            </div>
        </div>
    );
};

export default LoginSignup


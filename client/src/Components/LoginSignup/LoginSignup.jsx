import React, { useEffect, useState } from 'react';
import styles from './LoginSignup.module.css';
import { useNavigate } from 'react-router-dom';

// import assets/images
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import student_icon from '../Assets/graduation-cap.png';
import practitioner_icon from '../Assets/training-icon.png';

import axios from 'axios';

const LoginSignup = () => {

    const [action,setAction] = useState("Login");
    const [role,setRole] = useState("student");
    
    // states for input fields
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [school, setSchool] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // ensure all text fields are filled before enabling submit button
    const isFormValid = () => {
        if (action === "Login") {
            return email !== "" && password !== "";
        } else {
            return fname !== "" && lname !== "" && email !== "" && password !== "" && (role === "student" ? school !== "" : true);
        }
    };

    // handles login and sign up button on click logic 
    const handleActionChange = (newAction) => {
        if(role === 'student') {
            if(action === newAction) {
                if(newAction === "Sign Up"){
                    submitHandler()
                    setAction("Login")
                } else {
                    if (isFormValid()) {
                        navigate("/student-home")
                    } else {   
                        alert('Empty Fields');
                    }
                }
            }else{
                setAction(newAction);
            }
        }else{
            if(action === newAction) {
                if(newAction == "Sign Up"){
                    submitHandler()
                    setAction("Login")
                } else {
                    if (isFormValid()) {
                        navigate("/practitioner-home")
                    } else {   
                        alert('Empty Fields');
                    }
                }
                
            }
            else{
                setAction(newAction);
            }
        }
    };

    const submitHandler = e => {
        
        if (role === "student"){
            axios.post('http://localhost:6060/signup', {role: role, email: email, fname: fname, lname: lname, password: password, school: school}).then((data) => {
                console.log(data)
            })
        } else{
            axios.post('http://localhost:6060/signup', {role: role, email: email, fname: fname, lname: lname, password: password}).then((data) => {
                console.log(data)
            })
        }
        
    }
    
    return (
        <div className={styles.loginPage}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.text}>{action}</div>
                    <div className={styles.underline}></div>
                </div>
                {<div className={styles.roleSelection}>
                    <div className={`${styles.role} ${role === "student" ? styles.selected : ""}`} onClick={()=>{setRole("student")}}>
                        <img src={student_icon} alt="" />
                        <div>Student</div>
                    </div>
                    <div className={`${styles.role} ${role === "practitioner" ? styles.selected : ""}`} onClick={()=>{setRole("practitioner")}}>
                        <img src={practitioner_icon} alt="" />
                        <div>Practitioner</div>
                    </div>
                </div>}
                <div className={styles.inputs}>
                    {action==="Login"?null:<div className={styles.input}>
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder="First Name" value={fname} onChange={(e) => setFname(e.target.value)}/>
                    </div>}

                    {action==="Login"?null:<div className={styles.input}>
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder="Last Name" value={lname} onChange={(e) => setLname(e.target.value)}/>
                    </div>}

                    {role === "practitioner" || action==="Login"?null:<div className={styles.input}>
                        <img src={user_icon} alt="" />
                        <input type="text" placeholder="School" value={school} onChange={(e) => setSchool(e.target.value)}/>
                    </div>}
                    
                    <div className={styles.input}>
                        <img src={email_icon} alt="" />
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className={styles.input}>
                        <img src={password_icon} alt="" />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>
                {action==="Sign Up"?<div></div>:<div className={styles.forgotPassword}>Lost Password? <span>Click Here</span></div>}
                <div className={styles.submitContainer}>
                    <div className={action==="Login"?styles.submitGray:styles.submit} onClick={()=>{handleActionChange("Sign Up")}}>Sign Up</div>
                    <div className={action==="Sign Up"?styles.submitGray:styles.submit} onClick={()=>{handleActionChange("Login")}}>Login</div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup
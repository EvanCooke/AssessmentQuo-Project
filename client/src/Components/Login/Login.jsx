import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

// import assets/images
import logo from '../Assets/assessmentquo-logo.png';
import stars_background from '../Assets/stars-background.svg';

function Login() {

    const missionRef = useRef(null);
    const scrollToMission = () => missionRef.current.scrollIntoView({ behavior: 'smooth' });

    return (
        <div className={styles.login}>
             <div className={styles.headerBar}>
                <h2 className={styles.headerTitle}>ASSESSMENTQUO</h2>
                <div>
                    <Link to="/home" className={styles.button} onClick={scrollToMission}>About Us</Link>
                    <Link to="/home" className={styles.button} onClick={scrollToMission}>Learn More</Link>
                    <a href="mailto:evcooke@uiowa.edu" className={styles.contactButton}>Contact Us</a>
                </div>
            </div>
            <div className={styles.firstContainer}>
                <div className={styles.starsBackground}>
                    <div className={styles.logoWrapper}>
                        <img className={styles.logo} src={logo} alt="" />
                    </div>
                    <div className={styles.titleText}>
                        <p>Create an Account</p>
                    </div>
                    <div className={styles.titleSubText}>
                        <div>
                            <p>Already have an account?</p>
                            <button className={styles.loginButton}>Log In</button>
                        </div>
                    </div>

                    <div className={styles.radioContainer}>
                        <div>
                            <input type="radio" id="student" name="role" value="student" />
                            <label for="student">Student</label>
                        </div>
                        <div>
                            <input type="radio" className={styles.practitioner} name="role" value="practitioner" />
                            <label for="practitioner">Practitioner</label>
                        </div>
                    </div>
                    <div className={styles.inputContainer}>
                        <label for="Email">Email</label>
                        <input type="text" placeholder="Email" id="fname" name="fname"/>
                        <label for="School">School</label>
                        <input type="text" placeholder="School" id="fname" name="fname"/>
                        <label for="Password">Password</label>
                        <input type="text" placeholder="Password" id="fname" name="fname"/>
                        <Link to="/dashboard" className={styles.signup}>Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
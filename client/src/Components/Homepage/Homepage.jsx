import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Homepage.module.css';

// import assets/images
import logo from '../Assets/assessmentquo-logo.png';
import stars_background from '../Assets/stars-background.svg';

function Homepage() {

    const missionRef = useRef(null);
    const scrollToMission = () => missionRef.current.scrollIntoView({ behavior: 'smooth' });

    return (
        <div className={styles.homepage}>
            <div className={styles.headerBar}>
                <h2 className={styles.headerTitle}>ASSESSMENTQUO</h2>
                <div>
                    <button className={styles.button} onClick={scrollToMission}>About Us</button>
                    <button className={styles.button} onClick={scrollToMission}>Learn More</button>
                    <a href="mailto:evcooke@uiowa.edu" className={styles.contactButton}>Contact Us</a>
                </div>
            </div>
            <div className={styles.firstContainer}>
                <div className={styles.leftHalf}>
                    <img className={styles.logo} src={logo} alt="" />
                </div>
                <div className={styles.rightHalf}>
                    <p className={styles.titleText}><b>Easy Learning: Data Tools for <i>Teachers</i>, Tests for <i>Students</i></b></p>
                    <Link to="/login" className={styles.loginButton}>Get Started</Link>
                    <Link to="/login" className={styles.loginButton}>I Already Have An Account</Link>
                </div>
            </div>
            <div className={styles.secondContainer}>
                <div className={styles.starsBackground}>
                    <div className={styles.ourMission} ref={missionRef}>OUR MISSION</div>
                    <div className={styles.ourMissionText}>
                        <p>Welcome to our platform, where we believe in the power of education and the potential of technology.</p>
                        <p>Our mission is to simplify the learning process for both educators and students.</p>
                        <br />
                        <p>We provide educators with a comprehensive tool to analyze test data,</p>
                        <p>enabling them to tailor their teaching methods to individual student needs.</p>
                        <p>For students, we offer an accessible platform to take diagnostic assessments,</p>
                        <p>fostering a personalized and effective learning experience.</p>
                        <br />
                        <p>Together, we are shaping the future of education, one test at a time.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';

// import assets/images
import logo from '../Assets/assessmentquo-logo.png';
import stars_background from '../Assets/stars-background.svg';

function Dashboard() {

    const [isJoined, setIsJoined] = useState(false);
    const [classCode, setClassCode] = useState('');

    const joinClass = () => {
        setIsJoined(true);
        setClassCode('');
    };

    return (
        <div className={styles.dashboard}>
            <div className={styles.headerBar}>
                <h2 className={styles.headerTitle}>ASSESSMENTQUO</h2>
                <div>
                    <Link to="/home" className={styles.button} >About Us</Link>
                    <Link to="/home" className={styles.button} >Learn More</Link>
                    <a href="mailto:evcooke@uiowa.edu" className={styles.contactButton}>Contact Us</a>
                </div>
            </div>
            <div className={styles.leftContainer}>
                <div className={styles.dashboardTitleBackground}>
                    <div className={styles.titleText}>
                        <p>Student Dashboard</p>
                    </div>
                    <div className={styles.studentInfo}>
                        <div className={styles.infoItem}></div>
                        <div className={styles.infoItem}><b>Student Name:</b> Name Here</div>
                        <div className={styles.infoItem}><b>School:</b> The University of Iowa</div>
                        <div className={styles.infoItem}><b>Grade:</b> 7</div>
                        {/* <div className={styles.infoItem}><b>Test Assigned (Not completed):</b> 3</div> */}
                        {/* <div className={styles.infoItem}><b>Classes Joined:</b> Mr. Millers Homeroom</div> */}
                        <div className={styles.logoutContainer}>
                            <Link to="/avatar" className={styles.createAvatarButton}>Create Avatar</Link>
                            <Link to="/home" className={styles.logoutButton}>Log Out</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.joinClassContainer}>
                    <div className={styles.joinTitleBackground}>
                        <div className={styles.joinTitleText}>
                            <p>Join Class</p>
                        </div>
                        <div className={styles.inputContainer}>
                            <label for="ClassCode">Enter Class Code:</label>
                            <input type="text" placeholder="e.g. 7F35HC" className={styles.classCodeInput} value={classCode} onChange={e => setClassCode(e.target.value)} />
                        </div>
                        <div className={styles.joinClassButtonContainer}>
                            <button onClick={joinClass} className={styles.joinClassButton}>Join</button>
                        </div>
                    </div>
                </div>
                <div className={styles.yourClassesContainer}>
                    <div className={styles.yourClassesTitleBackground}>
                        <div className={styles.yourClassesTitleText}>
                            <p>Your Classes & Assesments</p>
                        </div>
                        {isJoined && (
                        <>
                            <div className={styles.infoItem}><b>Your Classes:</b> Mr. Miller's Homeroom</div>
                            <Link to="/test" className={styles.beginButton}>Begin Exam 1</Link>
                           
                            
                        </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
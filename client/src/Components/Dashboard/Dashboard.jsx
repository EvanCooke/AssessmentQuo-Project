import React from 'react';
import styles from './Dashboard.module.css';

// import assets/images
import logo from '../Assets/assessmentquo-logo.png';
import stars_background from '../Assets/stars-background.svg';

function Dashboard() {
    return (
        <div className={styles.dashboard}>
            <div className={styles.headerBar}>
                <h2 className={styles.headerTitle}>ASSESSMENTQUO</h2>
                <div>
                    <button className={styles.button}>About Us</button>
                    <button className={styles.button}>Learn More</button>
                    <button className={styles.contactButton}>Contact Us</button>
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
                        <div className={styles.infoItem}><b>Test Assigned (Not completed):</b> 3</div>
                        <div className={styles.infoItem}><b>Classes Joined:</b> Mr. Millers Homeroom</div>
                        <div className={styles.logoutContainer}>
                            <button className={styles.logoutButton}>Log Out</button>
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
                            <input type="text" placeholder="e.g. 7F35HC" className={styles.classCodeInput}/>
                        </div>
                        <div className={styles.joinClassButtonContainer}>
                            <button className={styles.joinClassButton}>Join</button>
                        </div>
                    </div>
                </div>
                <div className={styles.yourClassesContainer}>
                    <div className={styles.yourClassesTitleBackground}>
                        <div className={styles.yourClassesTitleText}>
                            <p>Your Classes & Assesments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
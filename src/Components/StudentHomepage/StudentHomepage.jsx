import React from 'react';
import styles from './StudentHomepage.module.css';

function StudentHomepage() {
    return (
        <div>
            <div className={styles.headerBar}>
                <h2>Student Homepage</h2>
            </div>
            <div className={styles.parentContainer}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.text}>Account Info</div>
                        <div className={styles.underline}></div>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.text}>Join Class</div>
                        <div className={styles.underline}></div>
                        <div className={styles.codeInput}>
                            <div className={styles.subtext}>Enter Code:</div>
                            <input type="text" placeholder="ex: 12345"/>
                        </div>
                        <button className={styles.joinButton}>Join</button>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.text}>Your Test</div>
                        <div className={styles.underline}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentHomepage;
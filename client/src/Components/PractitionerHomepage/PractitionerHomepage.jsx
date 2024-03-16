import React from 'react';
import styles from './PractitionerHomepage.module.css';
import { useSelector } from 'react-redux';


function PractitionerHomepage() {

    const user = useSelector((state) => state.auth.user)
    
    return (
        <div>
            <div className={styles.headerBar}>
                <h2 className={styles.headerText}>Practitioner Homepage</h2>
                {user ? <h3 className={styles.headerText}>Welcome, {user}</h3> : null}
            </div>
            <div className={styles.parentContainer}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.text}>Account Info</div>
                        <div className={styles.underline}></div>
                        <div className={styles.subtext}>Name: </div>
                        <div className={styles.subtext}>Email: </div>
                        <div className={styles.subtext}>School: </div>
                        <button className={styles.joinButton}>Edit</button>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.text}>Create Class</div>
                        <div className={styles.underline}></div>
                        <div className={styles.codeInput}>
                            <div className={styles.subtext}>Enter Name:</div>
                            <input type="text" placeholder=""/>
                        </div>
                        <button className={styles.joinButton}>Generate Code</button>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div className={styles.text}>My Classes</div>
                        <div className={styles.underline}></div>
                        <div className={styles.subtext}>No classes yet</div>
                    </div>
                </div>

                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.text}>Your Test</div>
                        <div className={styles.underline}></div>
                        
                        <div className={styles.subtextContainer}>
                            <div className={styles.subtext}>Test 1: </div>
                            <button className={styles.smallButton}>View</button>
                        </div>
                        <div className={styles.subtextContainer}>
                            <div className={styles.subtext}>Test 2: </div>
                            <button className={styles.smallButton}>View</button>
                        </div>
                        <div className={styles.subtextContainer}>
                            <div className={styles.subtext}>Test 3: </div>
                            <button className={styles.smallButton}>View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PractitionerHomepage;
import React from 'react';
import styles from './ErrorPage.module.css';


const ErrorPage = () => {
    return(
        
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>Error</div>
                <div className={styles.underline}></div>
                <div className={styles.subtext}>Page Could Not Be Found</div>
            </div>
        </div>
        
    )
}
export default ErrorPage;
import React, { useState } from 'react';
import styles from './TestPage.module.css';

// import assets/images
import logo from '../Assets/assessmentquo-logo.png';
import stars_background from '../Assets/stars-background.svg';

function TestPage() {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
    }

    return (
        <div className={styles.testPage}>
             <div className={styles.headerBar}>
                <h2 className={styles.headerTitle}>ASSESSMENTQUO</h2>
                <div>
                    <button className={styles.button}>About Us</button>
                    <button className={styles.button}>Learn More</button>
                    <button className={styles.contactButton}>Contact Us</button>
                </div>
            </div>
            <div className={styles.questionContainer}>
                <div className={styles.questionBackground}>
                    <div className={styles.questionText}>
                        <p>Question 1</p>
                    </div>
                    <div className={styles.question}>
                        <p>What is the capital of France?</p>
                    </div>
                    <div className={styles.answerContainer}>
                    <button 
                            className={`${styles.answer} ${selectedAnswer === 'Paris' ? styles.selected : ''}`}
                            onClick={() => handleAnswerClick('Paris')}>
                            Paris
                        </button>
                        <button 
                            className={`${styles.answer} ${selectedAnswer === 'London' ? styles.selected : ''}`}
                            onClick={() => handleAnswerClick('London')}>
                            London
                        </button>
                        <button 
                            className={`${styles.answer} ${selectedAnswer === 'Berlin' ? styles.selected : ''}`}
                            onClick={() => handleAnswerClick('Berlin')}>
                            Berlin
                        </button>
                        <button 
                            className={`${styles.answer} ${selectedAnswer === 'Madrid' ? styles.selected : ''}`}
                            onClick={() => handleAnswerClick('Madrid')}>
                            Madrid
                        </button>
                    </div>
                    <div className={styles.next}>
                        <button className={styles.contactButton}>Next</button>
                    </div>
                </div>
            </div>
            <div className={styles.optionButtons}>
                <button className={styles.optionButton}>Clear</button>
                <button className={styles.optionButton}>Help</button>
                <button className={styles.optionButton}>Pause/Exit</button>
                <button className={styles.optionButton}>Zoom</button>
                <button className={styles.optionButton}>Text-to-Speech</button>
            </div>
        </div>
    )
}

export default TestPage;
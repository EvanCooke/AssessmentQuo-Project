import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './TestPage.module.css';

// import assets/images
import logo from '../Assets/assessmentquo-logo.png';
import stars_background from '../Assets/stars-background.svg';

function TestPage() {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const missionRef = useRef(null);
    const scrollToMission = () => missionRef.current.scrollIntoView({ behavior: 'smooth' });


    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
    }

    const handleNextClick = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
    };

    const questions = [
        {
            text: 'What is the capital of Iowa?',
            answers: ['Des Moines', 'Iowa City', 'Cedar Rapids', 'Davenport']
        },
        {
            text: 'What animal is the University of Iowa\'s Mascot?',
            answers: ['Lion', 'Fish', 'Hawk', 'Martian']
        },
        {
            text: 'Did you enjoy this demonstration?',
            answers: ['Yes', 'Definitely']
        },
    ];

    return (
        <div className={styles.testPage}>
             <div className={styles.headerBar}>
                <h2 className={styles.headerTitle}>ASSESSMENTQUO</h2>
                <div>
                    <Link to="/home" className={styles.button} onClick={scrollToMission}>About Us</Link>
                    <Link to="/home" className={styles.button} onClick={scrollToMission}>Learn More</Link>
                    <a href="mailto:evcooke@uiowa.edu" className={styles.contactButton}>Contact Us</a>
                </div>
            </div>
            <div className={styles.questionContainer}>
                <div className={styles.questionBackground}>
                    <div className={styles.questionText}>
                        <p>Question {currentQuestionIndex + 1}</p>
                    </div>
                    <div className={styles.question}>
                        <p>{questions[currentQuestionIndex].text}</p>
                    </div>
                    <div className={styles.answerContainer}>
                        {questions[currentQuestionIndex].answers.map(answer => (
                            <button 
                                className={`${styles.answer} ${selectedAnswer === answer ? styles.selected : ''}`}
                                onClick={() => handleAnswerClick(answer)}>
                                {answer}
                            </button>
                        ))}
                    </div>
                    <div className={styles.next}>
                        {currentQuestionIndex === questions.length - 1 ? (
                            <Link to="/dashboard" className={styles.nextButton}>Submit</Link>
                        ) : (
                            <button onClick={handleNextClick} className={styles.nextButton}>Next</button>
                        )}
                    </div>
                </div>
            </div>
            {/* <div className={styles.optionButtons}>
                <button className={styles.optionButton}>Clear</button>
                <button className={styles.optionButton}>Help</button>
                <button className={styles.optionButton}>Pause/Exit</button>
                <button className={styles.optionButton}>Zoom</button>
                <button className={styles.optionButton}>Text-to-Speech</button>
            </div> */}
        </div>
    )
}

export default TestPage;
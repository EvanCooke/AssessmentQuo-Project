import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Avatar.module.css';

// import assets/images
import baseAvatar from '../Assets/base-avatar.png';
import baseAvatar2 from '../Assets/base-avatar2.png';
import baseAvatar3 from '../Assets/base-avatar3.png';
import hair1 from '../Assets/hair1.png';
import hair2 from '../Assets/hair2.png';
import face1 from '../Assets/face1.png';
import face2 from '../Assets/face2.png';
import face3 from '../Assets/face3.png';
import shirt1 from '../Assets/shirt1.png';
import shirt2 from '../Assets/shirt2.png';
import shirt3 from '../Assets/shirt3.png';
import logo from '../Assets/assessmentquo-logo.png';
import stars_background from '../Assets/stars-background.svg';

function Avatar() {

    const [selectedHair, setSelectedHair] = useState(null);
    const [selectedFace, setSelectedFace] = useState(null);
    const [selectedSkin, setSelectedSkin] = useState(null);
    const [selectedShirt, setSelectedShirt] = useState(null);

    const handleHairClick = (hair) => {
        setSelectedHair(hair);
    };

    const handleFaceClick = (face) => {
        setSelectedFace(face);
    };

    const handleSkinClick = (skin) => {
        setSelectedSkin(skin);
    };

    const handleShirtClick = (shirt) => {
        setSelectedShirt(shirt);
    };

    const handleResetClick = () => {
        setSelectedHair(null);
        setSelectedFace(null);
        setSelectedSkin(null);
        setSelectedShirt(null);
    };

    return (
        <div className={styles.main}>
            <div className={styles.headerBar}>
                <h2 className={styles.headerTitle}>ASSESSMENTQUO</h2>
                <div>
                    <Link to="/home" className={styles.button}>About Us</Link>
                    <Link to="/home" className={styles.button}>Learn More</Link>
                    <a href="mailto:evcooke@uiowa.edu" className={styles.contactButton}>Contact Us</a>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.avatar}>
                    <img src={baseAvatar} alt="base avatar" className={styles.baseAvatar} />
                    {selectedSkin && <img src={selectedSkin} alt="selected skin" className={styles.selectedSkin} />}
                    {selectedHair && <img src={selectedHair} alt="selected hair" className={styles.selectedHair} />}
                    {selectedFace && <img src={selectedFace} alt="selected face" className={styles.selectedFace} />}
                    {selectedShirt && <img src={selectedShirt} alt="selected shirt" className={styles.selectedShirt} />}
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.selection}>
                        <div className={styles.skins}>
                            <img src={baseAvatar} alt="base-avatar" className={styles.skin} onClick={() => handleSkinClick(baseAvatar)} />
                            <img src={baseAvatar2} className={styles.skin} onClick={() => handleSkinClick(baseAvatar2)} />
                            <img src={baseAvatar3} className={styles.skin} onClick={() => handleSkinClick(baseAvatar3)} />
                        </div>
                        <div className={styles.faces}>
                            <img src={face1} alt="face 1" className={styles.face} onClick={() => handleFaceClick(face1)} />
                            <img src={face2} alt="face 2" className={styles.face} onClick={() => handleFaceClick(face2)} />
                            <img src={face3} alt="face 3" className={styles.face} onClick={() => handleFaceClick(face3)} />
                        </div>
                        <div className={styles.hairs}>
                            <img src={hair1} alt="hair 1" className={styles.hair} onClick={() => handleHairClick(hair1)} />
                            <img src={hair2} alt="hair 2" className={styles.hair} onClick={() => handleHairClick(hair2)} />
                        </div>
                        <div className={styles.shirts}>
                            <img src={shirt1} className={styles.shirt} onClick={() => handleShirtClick(shirt1)} />
                            <img src={shirt2} className={styles.shirt} onClick={() => handleShirtClick(shirt2)} />
                            <img src={shirt3} className={styles.shirt} onClick={() => handleShirtClick(shirt3)} />
                        </div>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.contactButton} onClick={() => handleResetClick()}>Reset</button>
                        <Link to="/dashboard" className={styles.contactButton}>Save</Link>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Avatar;
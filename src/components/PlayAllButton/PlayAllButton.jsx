import React from 'react';
import styles from './PlayAllButton.module.scss';
import {IoIosPlay, IoMdArrowDropdown} from "react-icons/io";
const PlayAllButton = () => {
    const handlePlayAll = () => {
        // Simulated play all songs action
        console.log('Playing all songs...');
    };

    return (
        <div className={styles.plaAllBtn} onClick={handlePlayAll}>
            <div className={styles.txt}><IoIosPlay/> Play All</div>
            <div className={styles.line}><IoMdArrowDropdown/></div>
        </div>
    );
};

export default PlayAllButton;
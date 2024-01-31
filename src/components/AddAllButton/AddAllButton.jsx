import React from 'react';
import { HiPlusSm } from "react-icons/hi";
import styles from './AddAllButton.module.scss';
import {IoMdArrowDropdown} from "react-icons/io";


const AddAllButton = () => {
    const handleAddAll = () => {
        // Simulated add all songs to queue action
        console.log('Adding all songs to the queue...');
    };

    return (
        <div className={styles.addAllBtn} onClick={handleAddAll}>
            <div className={styles.txt}>  <HiPlusSm /> Add All</div>
            <div className={styles.line}><IoMdArrowDropdown/></div>
        </div>
    );
};

export default AddAllButton;
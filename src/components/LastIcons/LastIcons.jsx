import React from 'react';
import {IoMdHeart} from "react-icons/io";
import {MdDone} from "react-icons/md";
import {IoArrowRedoSharp} from "react-icons/io5";
import {IoMdArrowDropdown} from "react-icons/io";
import styles from './LastIcons.module.scss';

const LastIcons = () => {

    return (
        <div className={styles.icon}>
            <div><IoMdHeart/></div>
            <div><MdDone/></div>
            <div><IoArrowRedoSharp/></div>
            <div><IoMdArrowDropdown/></div>
        </div>
    );
};

export default LastIcons;
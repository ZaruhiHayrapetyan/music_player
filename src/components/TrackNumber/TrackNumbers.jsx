import React from 'react';

import {RiArrowUpDownLine} from "react-icons/ri";
import {IoMdArrowDropdown} from "react-icons/io";
import styles from './TrackNumbers.module.scss';

const TrackNumbers = ({handleSorting}) => {

    return (
        <div  onClick={handleSorting} className={styles.trackNum}>
            <RiArrowUpDownLine/> Track Nu... <IoMdArrowDropdown/>
        </div>
    );
};

export default TrackNumbers;
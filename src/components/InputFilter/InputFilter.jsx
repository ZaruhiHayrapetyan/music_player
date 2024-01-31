import React from 'react';
import {IoSearchSharp} from "react-icons/io5";
import styles from './InputFilter.module.scss';

const InputFilter = () => {
    return (
        <div className={styles.container}>
            <IoSearchSharp className={styles.search}/>
            <input
                className={styles.input}
                type='search'
                placeholder='Filter'
            />
        </div>
    );
};

export default InputFilter;
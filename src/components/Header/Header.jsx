import React from 'react';
import PlayAllButton from "../PlayAllButton/PlayAllButton";
import AddAllButton from "../AddAllButton/AddAllButton";
import TrackNumbers from "../TrackNumber/TrackNumbers";
import InputFilter from "../InputFilter/InputFilter";
import styles from './Header.module.scss';

const Header = ({handleSorting}) => {
    return (
        <div className={styles.container}>
            <div className={styles.first}>
                <PlayAllButton/>
                <AddAllButton/>
            </div>
            <div className={styles.last}>
                <TrackNumbers
                    handleSorting={handleSorting}
                />
                <InputFilter/>
            </div>
        </div>
    );
};

export default Header;
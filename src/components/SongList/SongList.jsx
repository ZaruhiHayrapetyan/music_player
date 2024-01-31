import React from 'react';
import SongRow from "../SongRow/SongRow";
import styles from "./SongList.module.scss";


const SongList = ({songs, currentSong, currentIndex, getSongData}) => {
    return (
        <div className={styles.table}>
            <div className={`${styles.row} ${styles.rowHeader}`}>
                <div className={styles.cell}></div>
                <div className={styles.cell}>Song Name</div>
                <div className={styles.cell}>Artist Name</div>
                <div className={styles.cell}>Track</div>
                <div className={styles.cell}></div>
            </div>
            {
                songs.map((song, index) => {
                    return (
                        <SongRow
                            key={index}
                            song={song}
                            id={song.trackNumber}
                            onClick={()=> getSongData(song, song.trackNumber)}
                            currentSong={currentSong}
                            currentIndex={currentIndex}
                        />
                    )
                })
            }
        </div>
    );
};

export default SongList;
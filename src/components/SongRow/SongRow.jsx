import React from 'react';
import styles from './SongRow.module.scss';
import FirstIcons from "../FirstIcons/FirstIcons";
import LastIcons from "../LastIcons/LastIcons";

const SongRow = ({song, currentSong, currentIndex, onClick,id}) => {
    return (
        <div className={styles.row}>
            <div className={styles.cell}>
                <FirstIcons
                    currentSong={currentSong}
                    currentIndex={currentIndex}
                    onClick={onClick}
                    song={song}
                    id={id}
                />
            </div>
            <div className={styles.cell}>{song.songName}</div>
            <div className={styles.cell}>{song.artistName}</div>
            <div className={styles.cell}>{song.trackNumber}</div>
            <div className={styles.cell}><LastIcons/></div>
        </div>
    );
};

export default SongRow;
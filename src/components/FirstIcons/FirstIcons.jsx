import React, { useState} from 'react';
import {TfiLayoutMenuV} from "react-icons/tfi";
import {IoIosPlay} from "react-icons/io";
import {IoIosPause} from "react-icons/io";
import styles from './FirstIcons.module.scss';
import useSound from "use-sound";

let soundObject = null

const FirstIcons = ({song}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [play, {sound, stop}] = useSound(song.music, {interrupt: true});

    const togglePlay = () => {
        if (isPlaying) {
            stop();
            if (soundObject !== null) {
                soundObject.stop();
            }
            setIsPlaying(false);
            soundObject = null
        } else {
            play();
            if (soundObject !== null) {
                soundObject.stop();
            }
            soundObject = sound;
            setIsPlaying(true);
        }
    }

    return (
        <div className={styles.icon}>
            <div><TfiLayoutMenuV/></div>
            {
                isPlaying ?
                    <div>
                        <IoIosPause onClick={togglePlay}/>
                    </div>
                    :
                    <div>
                        <IoIosPlay onClick={togglePlay}/>
                    </div>
            }
        </div>
    );
};

export default FirstIcons;
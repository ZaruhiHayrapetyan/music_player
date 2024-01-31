import {useState} from "react";
import Header from "../../components/Header/Header";
import MusicUploadForm from "../../components/MusicUploadForm/MusicUploadForm";
import SongList from "../../components/SongList/SongList";
import styles from './MusicPlayer.module.scss';

function MusicPlayer() {

    const [songs, setSongs] = useState([
        {
            id: Date.now(),
            songName: 'Заплаканная',
            artistName: 'MiyaGi & Эндшпиль feat. Amigo',
            trackNumber: 1,
            music: require('../../songs/MiyaGi & Эндшпиль feat. Amigo - Заплаканная.mp3'),

        },
        {
            id: Date.now(),
            songName: 'Silhouette',
            artistName: 'MiyaGi & Эндшпиль',
            trackNumber: 2,
            music: require('../../songs/MiyaGi & Эндшпиль - Silhouette.mp3'),

        },
        {
            id: Date.now(),
            songName: 'Missed You',
            artistName: 'The Weeknd',
            trackNumber: 3,
            music: require('../../songs/The Weeknd - Missed You (Bonus Track).mp3'),
        },
        {
            id: Date.now(),
            songName: 'Sensational',
            artistName: 'Chris Brown',
            trackNumber: 4,
            music: require('../../songs/Chris_Brown_-_Sensational-Sweethiphop.com.mp3'),
        }
    ]);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [currentSong, setCurrentSong] = useState({});
    const getSongData = (song) => {
        setCurrentIndex(song.trackNumber);
        setCurrentSong(song);
    }
    const handleSorting = () => {
        const sortedSongs = songs.reverse()
        setSongs([...sortedSongs]);
        console.log('Sorting songs row...');
    }

    return (
        <div className={styles.wrapper}>
            <Header handleSorting={handleSorting}/>
            <SongList
                songs={songs}
                getSongData={getSongData}
                currentSong={currentSong}
                currentIndex = {currentIndex}
            />
            <MusicUploadForm songs = {songs} setSongs={setSongs}/>
        </div>
    );
}

export default MusicPlayer;

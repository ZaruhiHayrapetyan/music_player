import React, {useState} from 'react';
import styles from './MusicUploadForm.module.scss'

const MusicUploadForm = (props) => {
    const {songs, setSongs} = props;
    const [selectedFile, setSelectedFile] = useState(null);

    // const [uploadProgress, setUploadProgress] = useState(0);
    // const [isUploading, setIsUploading] = useState(false);

    const handleFileChange = (e) => {
        console.log('Uploading music...');

        const file = e.target.files[0];
        const indexDash = file.name.indexOf('-');
        const indexDot = file.name.indexOf('.');
        const artistName = file.name.substring(0, indexDash);
        const songName = file.name.substring(indexDash + 1, indexDot);

        if (file && (file.type === 'audio/mpeg' || file.type === 'audio/wav')) {
            setSelectedFile(file);
            const songMetaData = {
                id: Date.now(),
                songName,
                artistName,
                trackNumber: songs.length + 1,
                music: file.name,
            };
            setSongs([...songs, songMetaData]);
            setSelectedFile(null);

        } else {
            alert('Please select a valid audio file (mp3 or wav).');
        }
    };


    // ========= Upload functionality ==========

    // const handleUpload = () => {
    //     if (selectedFile) {
    //         simulateFileUpload();
    //     }
    // };
    //
    // const simulateFileUpload = () => {
    //     let progress = 0;
    //     const interval = setInterval(() => {
    //         progress = Math.min(progress + Math.random() * 10, 100);
    //         setUploadProgress(progress);
    //
    //         if (progress === 100) {
    //             clearInterval(interval);
    //              //setSelectedFile(null);
    //             setUploadProgress(0);
    //         }
    //     }, 500);
    // };


    return (
        <div className={styles.musicUploadForm}>
            <input
                className={styles.chooseInp}
                type="file" accept=".mp3, .wav"
                onChange={handleFileChange}
            />

            {
                /*<button onClick={handleUpload} disabled={!selectedFile || isUploading}>*/}
            {/*    Upload*/}
            {/*</button>*/}
            {/*{isUploading && <p>Uploading... {Math.round(uploadProgress)}%</p>}*/}

        </div>
    );
};

export default MusicUploadForm;


// ============================================================

// Այս տարբերակով էլ էի մտածել գրել, մտածեցի թողնեմ տեսնեք


// import React, {useState} from 'react';
// import styles from './MusicUploadForm.module.scss';
//
//
// const MusicUploadForm = () => {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [uploadProgress, setUploadProgress] = useState(0);
//
//     const handleFileChange = (event) => {
//
//         const file = event.target.files[0];
//         console.log(file[0])
//         setSelectedFile(file);
//     };
//
//     const handleUpload = () => {
//         // Simulate file upload process with mock progress
//         const interval = setInterval(() => {
//             setUploadProgress((prevProgress) => prevProgress + 10);
//         }, 500);
//
//         // Simulate API call for file upload
//         setTimeout(() => {
//             clearInterval(interval);
//             setUploadProgress(0);
//             setSelectedFile(null);
//             alert('File uploaded successfully!');
//         }, 5000);
//     };
//
//     return (
//         <div>
//             <h1>Music Upload Form</h1>
//             <input type="file" accept=".mp3, .wav" onChange={handleFileChange} />
//             {selectedFile && <p>Selected File: {selectedFile.name}</p>}
//             <button
//                 onClick={handleUpload}
//                 disabled={!selectedFile}
//             >
//                 Upload
//             </button>
//             {uploadProgress > 0 && (
//                 <div>
//                     <p>Uploading... {uploadProgress}%</p>
//                     <progress value={uploadProgress} max="100" />
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default MusicUploadForm;


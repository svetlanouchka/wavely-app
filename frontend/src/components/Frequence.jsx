import { useState } from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Frequence() {

    const FrequencyImage = () => (
        <img src="http://localhost:5000/assets/images/frequences/stress.png" alt="stress frequency illustration" style={{width: "400px"}}/>
    );
    const Player = () => (
        <AudioPlayer
            autoPlay
            src="http://localhost:5000/audio/successmp3.mp3"
            onPlay={e => console.log("onPlay")}
            type="audio/mp3"
        // other props here
        />
    );
    return (
        <div>
            <FrequencyImage />
            <Player />
        </div>
    );
}

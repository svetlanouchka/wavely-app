import { useState } from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default function Frequence() {

    const FrequencyImage = () => (
        <img src="http://localhost:5000/assets/images/frequences/stress.png" alt="stress frequency illustration" style={{width: "200px"}}/>
    );
    const Player = () => (
        <AudioPlayer
            autoPlay
            src="http://localhost:5000/audio/success.ogg"
            onPlay={e => console.log("onPlay")}
            type="audio/ogg"
        // other props here
        />
    );
    return (
        <div>
            <h1 className="text-5xl font-righteous text-slate">Wavely</h1>
            <FrequencyImage />
            <Player />
        </div>
    );
}

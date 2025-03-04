import Player from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function AudioPlayer({ id, src, color }) {
	return (
		<>
			<Player
				id={id}
				showJumpControls={false}
				autoPlay={false}
				src={src}
				onPlay={(e) => console.log("onPlay")}
				type="audio/ogg"
				className={`max-w-[30rem] h-[5rem] mx-auto rounded ${color} !shadow-none p-2 w-full`}
			/>
		</>
	);
}

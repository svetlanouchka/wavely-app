import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import AudioPlayer from "../ui/AudioPlayer";
import oceanWaves from "../../../backend/public/audio/sea_sound.wav";
import ButtonMain from "../ui/ButtonMain";
import Modal from "../ui/Modal";
import AffirmationScreen from "./AffirmationScreen";

export default function Seance() {
	const { id } = useParams();
	const [frequency, setFrequency] = useState([]);
	const [affirmations, setAffirmations] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const location = useLocation();
	const state = location.state;

	useEffect(() => {
		fetch(`http://localhost:5000/frequencies/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setFrequency(data);
				setAffirmations(data.affirmation);
			})
			.catch((error) =>
				console.error("Erreur de chargement de la fréquence", error),
			);
	}, [id]);

	function splitString(stringToSplit, separator) {
		const arrayOfString = stringToSplit.split(separator);
		console.log("Tableau chaine de caractère -->", arrayOfString);
		return arrayOfString; // 🔥 Ajout du return !
	}

	const point = ".";
	const splittedAffirmations =
		typeof affirmations === "string" ? splitString(affirmations, point) : [];

	return (
		<>
			<div
				className="flex flex-col items-center mx-5 relative"
				key={frequency.id}
			>
				<div className="my-10">
					<h1 className="text-[2rem] md:text-[3rem] font-righteous text-center mb-10 text-white">
						{frequency.name}
					</h1>
					<p className="text-left max-w-[30rem] mx-auto font-albert-sans text-white">
						{frequency.description}
					</p>
				</div>
				{/* <div className="bg-gray-light shadow-lg rounded-md max-w-[30rem] flex flex-col justify-center items-center mb-10"> */}
				<img
					src={frequency.image_url}
					alt="Illustration de fréquence"
					className="w-[15rem] animate-[float_3s_ease-in-out_infinite]"
				/>
				<AffirmationScreen
					splitString={splitString}
					splittedAffirmations={splittedAffirmations}
				/>
				{/* </div> */}
				<div className="flex flex-col items-center w-full max-w-[480px]">
					<div className="grid grid-cols-2 w-full gap-3">
						<div className="col-span-2">
							<AudioPlayer
								id="audioFrequency"
								src={frequency.audio_url}
								color="!bg-blue-light"
							/>
						</div>
						{state.preferences.affirmations && (
							<AudioPlayer
								id="audioAffirmation"
								src={frequency.affirmation_audio_url}
								color="!bg-blue-violet"
							/>
						)}

						{state.preferences.relaxingSound && (
							<AudioPlayer
								id="audioOceanWaves"
								src={oceanWaves}
								color="!bg-blue-dark"
							/>
						)}
					</div>
					<ButtonMain
						idButton="finish-session"
						text="Terminer"
						onClick={() => setIsModalOpen(true)}
						style={{
							backgroundColor: "#C1FF72",
							color: "#000000",
							borderRadius: "50px",
							width: "200px",
							marginTop: "6rem",
						}}
					/>
				</div>
				{isModalOpen && (
					<Modal
						id={id}
						initialStep={4}
						newNoteBefore={state.noteBefore}
						onClose={() => setIsModalOpen(false)}
					/>
				)}
			</div>
		</>
	);
}

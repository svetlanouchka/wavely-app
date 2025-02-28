import { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import closeCrossIcon from "../assets/closeCrossIcon.svg";

export default function ModalSession({
	idSession,
	sessionsData,
	showModal,
	setShowModal,
}) {
	const [session, setSession] = useState([]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetch(`http://localhost:5000/sessions/${idSession}`)
			.then((response) => response.json())
			.then((session) => {
				console.log(session);

				setSession(session);
			})
			.catch((error) =>
				console.error("Erreur de chargement de la fréquence", error),
			);
	}, []);

	const filteredData = sessionsData.filter((f) => f.id === idSession);

	const newDate = format(
		parseISO(filteredData[0].created_at),
		"dd/MM/yyyy à HH:mm",
	);

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-blue-dark/45 backdrop-blur-sm z-50">
			<div className="bg-green-light rounded-sm md:max-w-lg w-[85%] py-4 px-6 relative font-albert-sans flex flex-col items-start justify-center text-[16px]">
				<h1 className="font-semibold self-center my-4 text-xl">
					Historique de votre séance
				</h1>
				<p className="mb-2">
					<span className="font-medium">Nom de la fréquence :</span>{" "}
					{filteredData[0].name}
				</p>
				<p className="mb-2">
					<span className="font-medium">Date :</span> {newDate}
				</p>
				<p className="mb-2">
					<span className="font-medium">
						Évaluation du stress avant la séance :
					</span>{" "}
					{session.note_before}
				</p>
				<p className="mb-2">
					<span className="font-medium">
						Évaluation du stress après la séance :
					</span>{" "}
					{session.note_after}
				</p>
				<p>
					<span className="font-medium">Vos impressions :</span>{" "}
				</p>
				<div className="border-1 border-gray-500 h-18 w-[calc(100%-8px)] m-1 overflow-scroll overflow-x-hidden">
					<p className="p-1">{session.comment}</p>
				</div>
				<button
					type="button"
					className="absolute top-3 right-3 w-6 h-6 text-gray-500 hover:text-gray-800 cursor-pointer"
					onClick={() => setShowModal(false)}
				>
					<img src={closeCrossIcon} alt="Fermer" className="w-5 h-5" />
				</button>
			</div>
		</div>
	);
}

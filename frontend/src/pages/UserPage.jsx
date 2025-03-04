import { useEffect, useState } from "react";
import Rectangle from "@components/Rectangle";
import ButtonMain from "../ui/ButtonMain";
import { Link, useParams } from "react-router-dom";
import playButton from "../assets/Play_blur.png";
import ModalSession from "@components/ModalSession";

export default function UserPage() {
	const [sessionsData, setSessionsData] = useState([]);
	const [showModal, setShowModal] = useState(false);
	const [sessionId, setSessionId] = useState([]);

	const handleClickModal = (id) => {
		setShowModal(true);
		setSessionId(id);
	};

	const id = localStorage.getItem("userId");

	const token = localStorage.getItem("token");

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetch(`${import.meta.env.VITE_BACKEND_URL}/users/${id}/sessions`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setSessionsData(data);
			})
			.catch((error) =>
				console.error("Erreur de chargement de la fréquence", error),
			);
	}, []);

	return (
		<div>
			{!token && !id ? (
				<p className="text-center m-16 font-albert-sans">
					Vous avez été déconnecté. Cliquez sur Lancer pour vous reconnecter.
				</p>
			) : (
				<>
					<div className="flex flex-col items-center justify-center">
						<h1 className="mt-8 mx-4 mb-12 font-albert-sans font-medium text-3xl md:text-2xl text-center">
							Bienvenue dans votre espace de bien-être
						</h1>
						<div className="mx-6 max-w-[26rem]">
							<Link to="/frequencies">
								<div className="flex flex-row items-center justify-center font-albert-sans border border-gray-400 rounded-lg bg-gray-light text-center pr-4.5 transition-transform duration-200 hover:scale-105">
									<img
										className="h-[70px]"
										type="button"
										src={playButton}
										alt="Play"
									/>
									<p>Lancer nouvelle séance</p>
								</div>
							</Link>
						</div>
						<h2 className="font-albert-sans text-2xl mt-8 mb-12">
							Mes séances passées
						</h2>
						<div className="mx-6 max-w-[26rem]">
							{sessionsData.map((session) => {
								return (
									<Rectangle
										key={session.id}
										id={session.id}
										date={session.created_at}
										name={session.name}
										pic={session.image_url}
										onClick={() => handleClickModal(session.id)}
									/>
								);
							})}
						</div>
					</div>
					<div className="flex justify-center">
						<Link to="/my-profile">
							<ButtonMain
								text="Mon profil utilisateur"
								style={{
									backgroundColor: "#0356fc",
									color: "white",
									borderRadius: "1rem",
									padding: "1rem",
									margin: "2.5rem auto",
								}}
							/>
						</Link>
					</div>
					{showModal && (
						<ModalSession
							sessionsData={sessionsData}
							key={sessionId}
							idSession={sessionId}
							showModal={showModal}
							setShowModal={setShowModal}
						/>
					)}
				</>
			)}
		</div>
	);
}

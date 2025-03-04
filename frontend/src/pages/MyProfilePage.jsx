import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import UserPhoto from "../assets/user.png";
import { format } from "date-fns";
import ButtonMain from "../ui/ButtonMain";
import LogoutButton from "../ui/LogoutButton";
import ModifyProfil from "../components/Modals/ModifyProfil";

export default function MyProfilePage() {
	const navigate = useNavigate();
	const { userId } = useUser();
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const token = localStorage.getItem("token");

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		async function getUser() {
			try {
				const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/me`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${token}`,
					},
				});
				const data = await response.json();

				setUser(data);
			} catch (error) {
				setError(error);
			}
		}

		if (userId && !isModalOpen) {
			getUser();
		}
	}, [userId, isModalOpen]);

	const formatDate = (dateString) => {
		if (!dateString) return "Date inconnue";
		return format(new Date(dateString), "MM/dd/yyyy");
	};

	return (
		<div>
			{!token && !userId ? (
				<p className="text-center m-16 font-albert-sans">
					Vous avez été déconnecté. Cliquez sur Lancer pour vous reconnecter.
				</p>
			) : (
				<>
					<h1 className="text-3xl font-bold font-righteous text-center mt-8">
						Mon profil
					</h1>
					<div className="w-[70%] md:w-[40%] mx-auto relative flex flex-col items-center h-screen md:h-[70%] my-10 md:my-20 p-10 md:p-20 gap-10 bg-gray-light shadow-sm rounded-sm">
						<img
							src={user?.image_url ? user?.image_url : UserPhoto}
							alt="User"
							className="md:w-1/3 h-auto rounded-4xl"
						/>
						<div className="justify-center text-lg text-center">
							<div className="flex gap-2 bg-white border-1 rounded-2xl border-blue-violet justify-center text-center font-albert-sans my-5 p-2">
								<p className="font-bold">Prénom </p>{" "}
								<p> {user?.user.first_name}</p>
							</div>
							<div className="flex gap-2 bg-white border-1 rounded-2xl border-blue-violet justify-center text-center font-albert-sans my-5 p-2">
								<p className="font-bold"> Nom </p>{" "}
								<p> {user?.user.last_name}</p>
							</div>
							<div className="flex gap-2 bg-white border-1 rounded-2xl border-blue-violet justify-center text-center font-albert-sans my-5 p-2">
								<p className="font-bold">Date de naissance </p>{" "}
								<p> {formatDate(user?.user.birth_date)}</p>
							</div>
							<div className="flex gap-2 bg-white border-1 rounded-2xl border-blue-violet justify-center text-center font-albert-sans my-5 p-2">
								<p className="font-bold">Email </p> <p> {user?.user.email}</p>
							</div>
						</div>
						<ButtonMain text="Modifier" onClick={() => setIsModalOpen(true)} />
						{isModalOpen && (
							<ModifyProfil onClose={() => setIsModalOpen(false)} />
						)}
						<LogoutButton />
						<ButtonMain
							text="Mon espace"
							style={{
								backgroundColor: "#0356fc",
								color: "white",
								borderRadius: "1rem",
								padding: "1rem",
							}}
							onClick={() => navigate("/myspace")}
						/>
					</div>
				</>
			)}
		</div>
	);
}

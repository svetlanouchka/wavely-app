import { useState, useEfect, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import ButtonMain from "../../ui/ButtonMain";
import closeCrossIcon from "../../assets/closeCrossIcon.svg";
import { useUser } from "../../context/UserContext";

export default function ModifyProfil({ onClose }) {
	const { userId } = useUser();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [isConfirmOpen, setIsConfirmOpen] = useState(false);
	const token = localStorage.getItem("token");

	useEffect(() => {
		async function getUser() {
			try {
				const response = await fetch(
					`${import.meta.env.VITE_BACKEND_URL}/users/${userId}`,
				);
				const data = await response.json();
				setUser(data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		}
		if (userId) getUser();
	}, [userId]);

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			first_name: user ? user.first_name : "",
			last_name: user ? user.last_name : "",
			birth_date: user ? user.birth_date : "",
			email: user ? user.email : "",
		},
		validationSchema: yup.object({
			first_name: yup
				.string()
				.required("Le prénom est requis")
				.matches(
					/^[a-zA-Z\s]*-?[a-zA-Z\s]*$/,
					"Le prénom ne peut contenir que des lettres et au maximum un seul tiret",
				)
				.min(2, "Le prénom doit contenir au moins 2 caractères")
				.max(30, "Le prénom doit contenir au maximum 30 caractères"),
			last_name: yup
				.string()
				.required("Le nom est requis")
				.matches(
					/^[a-zA-Z\s]*-?[a-zA-Z\s]*$/,
					"Le nom ne peut contenir que des lettres et au maximum un seul tiret",
				)
				.min(2, "Le nom doit contenir au moins 2 caractères")
				.max(30, "Le nom doit contenir au maximum 30 caractères"),
			birth_date: yup
				.date()
				.required("La date de naissance est requise")
				.max(
					new Date(),
					"La date de naissance doit être inférieure à la date actuelle",
				),
			email: yup
				.string()
				.email("Adresse email invalide")
				.required("L'adresse email est requise"),
		}),
		onSubmit: async (values) => {
			console.log("début submit", formik.values);
			try {
				const response = await fetch(
					`${import.meta.env.VITE_BACKEND_URL}/users/${userId}`,
					{
						method: "PATCH",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${token}`,
						},
						body: JSON.stringify(values),
					},
				);

				if (!response.ok) {
					console.log(response);
					throw new Error("Une erreur est survenue");
				}
				const data = await response.json();
				console.log("Données mises à jour", data);
				setIsConfirmOpen(true);
			} catch (error) {
				console.error("Erreur:", error);
			}
		},
	});

	if (loading) return <p>Chargement de vos données...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<>
			<div className="fixed inset-0 flex items-center justify-center bg-blue-dark/45 backdrop-blur-sm z-50">
				<div className="bg-gray-light md:px-20 px-4 md:py-6 py-10 rounded-sm md:max-w-lg w-[60%] relative animate-fadeIn">
					<button
						type="button"
						className="absolute top-3 right-3 w-6 h-6 text-gray-500 hover:text-gray-800"
						onClick={() => {
							onClose();
						}}
					>
						<img src={closeCrossIcon} alt="Fermer" className="w-5 h-5" />
					</button>

					<form
						onSubmit={formik.handleSubmit}
						className="w-[90%] md:w-[80%] mx-auto bg-gray-light p-6 rounded-sm flex flex-col items-center"
					>
						{[
							{ name: "first_name", type: "text", placeholder: "Prénom" },
							{ name: "last_name", type: "text", placeholder: "Nom" },
							{
								name: "birth_date",
								type: "date",
								placeholder: "Date de naissance",
							},
							{ name: "email", type: "email", placeholder: "Email" },
						].map(({ name, type, placeholder }) => (
							<div className="mb-4 w-full" key={name}>
								<input
									type={type}
									id={name}
									name={name}
									placeholder={placeholder}
									className={`w-full rounded-md px-4 p-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue
                                ${formik.touched[name] && formik.errors[name] ? "border-red-500 text-red-400" : "border-gray-300 text-gray"}`}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values[name]}
								/>
								{formik.touched[name] && formik.errors[name] ? (
									<div className={`error-${name}`}>{formik.errors[name]}</div>
								) : null}
							</div>
						))}
						<ButtonMain
							idButton="validation-btn"
							type="submit"
							text="Valider"
						/>
					</form>
				</div>
			</div>
			{isConfirmOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-blue-dark/45 backdrop-blur-sm z-50">
					<div className="bg-green-light md:px-20 px-4 md:py-6 py-10 rounded-sm md:max-w-lg w-[80%] relative animate-fadeIn">
						<p className="text-center font-albert-sans p-2 pb-6">
							Vos informations ont bien été mises à jour
						</p>
						<button
							type="button"
							className="absolute top-3 right-3 w-6 h-6 text-gray-500 hover:text-gray-800"
							onClick={() => {
								setIsConfirmOpen(false);
							}}
						>
							<img src={closeCrossIcon} alt="Fermer" className="w-5 h-5" />
						</button>
					</div>
				</div>
			)}
		</>
	);
}

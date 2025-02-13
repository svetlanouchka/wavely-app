import { useFormik } from "formik";
import ButtonMain from "../ui/ButtonMain";
import * as Yup from "yup";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
	const [loadingButton, setLoadingButton] = useState();
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: Yup.object({
			email: Yup.string().required("Champ requis ↑"),
			password: Yup.string().required("Champ requis ↑"),
		}),
		onSubmit: async (values, { resetForm }) => {
			console.log("formik", formik);
			console.log("formik email ---", formik.values.email);
			setLoadingButton(true);

			setErrorMessage("");
			try {
				const response = await fetch("http://localhost:5000/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(values),
				});

				if (!response.ok) {
					setErrorMessage("Email ou mot de passe incorrect.");
					throw new Error("Une erreur est survenue");
				}
				const data = await response.json();
				console.log(data);
				resetForm();
				navigate("/frequencies");
			} catch (error) {
				console.error("Erreur:", error);
			} finally {
				setLoadingButton(false);
			}
		},
	});
	console.log("???", formik);
	return (
		<div className=" h-full flex justify-center mx-auto bg-gray-light p-6 rounded-sm flex-col items-center w-[90%] max-w-[23rem] shadow-sm">
			<h1 className="text-4xl font-bold font-albert-sans text-center p-6">
				Connectez vous
			</h1>
			<p className="text-center font-albert-sans p-2 pb-6">
				Commencez à partager des bonnes ondes aujourd'hui
			</p>
			<form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
				{[
					{ name: "email", type: "email", placeholder: "Email" },
					{ name: "password", type: "text", placeholder: "Mot de passe" },
				].map(({ name, type, placeholder }) => (
					<div className="w-full h-14" key={name}>
						<input
							type={type}
							id={name}
							name={name}
							placeholder={placeholder}
							className={`w-full rounded-md px-4 p-2 bg-white ${errorMessage ? "ring-2 ring-red-600" : "focus:ring-blue focus:ring-2 focus:outline-none"}
                        `}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							value={formik.values[name]}
						/>
						{formik.touched[name] && formik.errors[name] ? (
							<div className="text-red-500 text-sm mt-1">
								{formik.errors[name]}
							</div>
						) : null}
					</div>
				))}
				<div className="h-2 flex items-center text-sm">
					{errorMessage && <p className="text-red-500">{errorMessage}</p>}
				</div>
				<ButtonMain
					idButton="login-btn"
					type="submit"
					text={loadingButton ? "Connexion..." : "Se connecter"}
					disabled={loadingButton}
				/>
			</form>
			<p className="mt-4">
				<i>
					Pas encore inscrit ?{" "}
					<Link to="/signup">
						<u className="cursor-pointer">Cliquez ici</u>
					</Link>
				</i>
			</p>
		</div>
	);
}

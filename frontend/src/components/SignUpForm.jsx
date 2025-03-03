import { format, parse } from "date-fns";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import ButtonMain from "../ui/ButtonMain";

export default function SignUpForm() {
	const formik = useFormik({
		initialValues: {
			first_name: "",
			last_name: "",
			birth_date: "",
			email: "",
			password: "",
			confirmPassword: "",
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
			password: yup
				.string()
				.required("Le mot de passe est requis")
				.min(8, "Le mot de passe doit contenir au moins 8 caractères")
				.matches(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&?*])[A-Za-z\d!@#$%^&?*]*$/,
					"Le mot de passe doit comporter au moins une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial parmi !@#$%^&?*",
				),
			confirmPassword: yup
				.string()
				.oneOf(
					[yup.ref("password"), null],
					"Les mots de passe ne correspondent pas",
				),
		}),
		onSubmit: async (values) => {
			console.log("début submit", formik.values);
			const valuesTransformed = {
				...values,
				birth_date: format(
					parse(values.birth_date, "yyyy-MM-dd", new Date()),
					"dd/MM/yyyy",
				),
			};
			// biome-ignore lint/performance/noDelete: <explanation>
			delete valuesTransformed.confirmPassword;
			console.log("new format ???", valuesTransformed);
			try {
				const response = await fetch("http://localhost:5000/users", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(valuesTransformed),
				});

				if (!response.ok) {
					console.log(response);
					throw new Error("Une erreur est survenue");
				}
				const data = await response.json();
				console.log("data ? -->", data);
			} catch (error) {
				console.error("Erreur:", error);
			}
		},
	});

	return (
		<form
			onSubmit={formik.handleSubmit}
			className="w-full md:w-full mx-auto bg-gray-light p-6 rounded-sm flex flex-col items-center"
		>
			{[
				{ name: "first_name", type: "text", placeholder: "Prénom" },
				{ name: "last_name", type: "text", placeholder: "Nom" },
				{ name: "birth_date", type: "date", placeholder: "Date de naissance" },
				{ name: "email", type: "email", placeholder: "Email" },
				{ name: "password", type: "password", placeholder: "Mot de passe" },
				{
					name: "confirmPassword",
					type: "password",
					placeholder: "Confirmer le mot de passe",
				},
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
			<ButtonMain idButton="signup-btn" type="submit" text="S'inscrire" />
		</form>
	);
}

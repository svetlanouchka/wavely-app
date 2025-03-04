import { useFormik } from "formik";
import ButtonMain from "../ui/ButtonMain";
import { Bounce, ToastContainer, toast } from "react-toastify";

export default function ContactForm() {
	const notify = () => toast("Votre message a bien été envoyé");

	const validate = (values) => {
		const errors = {};

		if (!values.email) {
			errors.email = "Champ requis ↑";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = "Invalid email address";
		}

		if (!values.message) {
			errors.message = "Champ requis ↑";
		} else if (values.message.length < 10) {
			errors.message = "Votre message doit faire au moins 10 caractères";
		}

		return errors;
	};
	const formik = useFormik({
		initialValues: {
			email: "",
			message: "",
		},
		validate,
		validateOnBlur: false,
		validateOnChange: false,
		onSubmit: async (values, { resetForm }) => {
			try {
				const response = await fetch(
					`${import.meta.env.VITE_BACKEND_URL}/contact`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(values),
					},
				);
				if (!response.ok) {
					throw new Error("Une erreur est survenue");
				}

				const data = await response.json();
				console.log("contact data", data);

				notify();
				resetForm();
			} catch (error) {
				console.error("Erreur:", error);
			}
		},
	});
	return (
		<div className="relative h-full flex justify-center mx-auto my-[5rem] bg-gray-light p-6 rounded-sm flex-col items-center w-[90%] max-w-[28rem] shadow-sm">
			<h1 className="text-4xl font-bold font-albert-sans text-center p-6">
				Contactez-nous
			</h1>
			<p className="text-center font-albert-sans p-2 pb-6">
				Une question ? Nous vous répondons
			</p>

			<form
				onSubmit={formik.handleSubmit}
				className="flex flex-col gap-4 w-[90%] md:w-[80%]"
			>
				<div className="flex flex-col">
					<input
						id="email"
						name="email"
						type="email"
						placeholder="Votre email"
						onChange={formik.handleChange}
						value={formik.values.email}
						onBlur={formik.handleBlur}
						className={`w-full rounded-md px-4 p-2 bg-white ${formik.errors.email ? "ring-2 ring-red-600 focus:ring-blue focus:outline-none" : "focus:ring-blue focus:ring-2 focus:outline-none"}
                        `}
					/>

					<div className="h-8">
						{formik.touched.email && formik.errors.email && (
							<p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
						)}
					</div>
					<textarea
						id="message"
						name="message"
						type="text"
						placeholder="Votre message"
						onChange={formik.handleChange}
						value={formik.values.message}
						onBlur={formik.handleBlur}
						className={`w-full rounded-md px-4 p-2 bg-white ${formik.errors.message ? "ring-2 ring-red-600 focus:ring-blue focus:outline-none" : "focus:ring-blue focus:ring-2 focus:outline-none"}
                        `}
					/>
					<div className="h-8">
						{formik.errors.message && (
							<p className="text-red-500 text-sm mt-1">
								{formik.errors.message}
							</p>
						)}
					</div>
				</div>
				<ButtonMain type="submit" text="Envoyer" />
			</form>
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
				transition={Bounce}
			/>
		</div>
	);
}

import Rectangle from "@components/Rectangle";
import ButtonMain from "../ui/ButtonMain";
import { Link } from "react-router-dom";

export default function UserPage() {
	return (
		<div className="">
			<div className="flex flex-col items-center justify-center">
				<h1 className="my-8 font-righteous text-3xl md:text-2xl text-center">
					Bienvenue dans votre espace de bien-être
				</h1>
				<div className="w-[80%] max-w-[20rem]">
					<Link to="/frequencies">
						<div className="font-albert-sans border-1 border-gray-400 rounded-lg bg-gray-light px-8 py-4 text-center">
							Lancer nouvelle séance
						</div>
					</Link>
				</div>
				<h2 className="font-albert-sans text-2xl my-8">Mes séances passées</h2>
				<div className="w-[80%] max-w-[20rem]">
					<Rectangle />
					<Rectangle />
					<Rectangle />
				</div>
			</div>
			<div className="flex justify-center">
				<Link to="/">
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
		</div>
	);
}

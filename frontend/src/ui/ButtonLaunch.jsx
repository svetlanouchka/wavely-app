import { Link } from "react-router-dom";
import BlurButton from "../assets/button_blur.png";
export default function ButtonLaunch({ toggleMenu }) {
	return (
		<Link to="/login">
			<button
				type="button"
				onClick={toggleMenu}
				className="relative p-2 m-0 border-0 bg-transparent"
			>
				<img
					src={BlurButton}
					alt="Lancer l'application"
					className="w-full h-full object-cover"
				/>
				<span className="absolute inset-0 flex justify-center items-center text-white text-lg">
					Lancer
				</span>
			</button>
		</Link>
	);
}

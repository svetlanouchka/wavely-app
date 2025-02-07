import { Link } from "react-router-dom";

export default function ButtonLaunch() {
	return (
		<Link to="/signup">
			<button
				type="button"
				className="relative bg-blue blur-md rounded-full z-0"
			>
				Lancement
			</button>
			<p className="absolute text-white z-10 top-[47px] right-[220px]">
				Lancer
			</p>
		</Link>
	);
}

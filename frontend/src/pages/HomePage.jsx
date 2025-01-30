import Frequence from "../components/Seance";
import logo from "../assets/Logo_W.png";
import { Link } from "react-router-dom";

export default function HomePage() {
	return (
		<header className="App-header">
			<img src={logo} className="size-20" alt="logo" />
			<p>Wavely</p>
			<Link to="/about">
				<button type="button">
					<p className="text-black">About</p>
				</button>
			</Link>

			<Frequence />
		</header>
	);
}

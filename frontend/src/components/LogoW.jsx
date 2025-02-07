import { Link } from "react-router-dom";
import Logo from "../../src/assets/Logo_W.png/";

export default function LogoW() {
	return (
		<Link to="/">
			<button type="button">
				<img src={Logo} alt="logo" className="h-8 w-8" />
			</button>
		</Link>
	);
}

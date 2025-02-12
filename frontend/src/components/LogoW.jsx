import { Link } from "react-router-dom";
import Logo from "../../src/assets/Logo_W.png/";

export default function LogoW({ isHome }) {
	return (
		<Link to="/">
			<img
				src={Logo}
				alt="logo"
				className={`${!isHome ? "md:block" : "md:hidden"} h-10 w-10`}
			/>
		</Link>
	);
}

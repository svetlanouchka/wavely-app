import NavMobile from "@components/NavMobile";
import MenuBurger from "../../components/MenuBurger";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import CrossIcon from "@components/CrossIcon";
import NavDesktop from "@components/NavDesktop";

export default function Header({ backgroundColor, string, path }) {
	const location = useLocation();
	const isHome = location.pathname === "/";
	const [showMenu, setShowMenu] = useState(false);
	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};
	return (
		<header
			className={`w-[80%] max-w-[24rem] h-[4rem] rounded-full my-8 mx-2 flex justify-center items-center font-albert-sans relative ${backgroundColor}`}
		>
			<NavDesktop isHome={isHome} />
			{!showMenu ? (
				<MenuBurger toggleMenu={toggleMenu} />
			) : (
				<CrossIcon toggleMenu={toggleMenu} />
			)}
			{showMenu && (
				<NavMobile
					toggleMenu={toggleMenu}
					showMenu={showMenu}
					backgroundColor={backgroundColor}
					isHome={isHome}
				/>
			)}
			{/* <ButtonLaunch /> */}
		</header>
	);
}

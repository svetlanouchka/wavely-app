import NavMobile from "@components/NavMobile";
import MenuBurger from "../../components/MenuBurger";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import CrossIcon from "@components/CrossIcon";
import NavDesktop from "@components/NavDesktop";
import LogoW from "@components/LogoW";

export default function Header({ backgroundColor, string, path }) {
	const location = useLocation();
	const isHome = location.pathname === "/";
	const [showMenu, setShowMenu] = useState(false);
	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};
	return (
		<header
			className={`w-[80%] max-w-[36rem] h-[4rem] z-20 rounded-full mt-6 mx-auto flex md:flex-col justify-center items-center font-albert-sans relative  ${backgroundColor}`}
		>
			<NavDesktop isHome={isHome} />
			{!showMenu ? (
				<div className="md:hidden flex items-center w-full justify-between mr-3 ml-4">
					<LogoW isHome={isHome} />
					<MenuBurger toggleMenu={toggleMenu} />
				</div>
			) : (
				<CrossIcon isHome={isHome} toggleMenu={toggleMenu} />
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

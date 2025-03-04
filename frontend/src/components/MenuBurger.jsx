import menuBurger from "../assets/menuBurgerIcon.svg";

export default function MenuBurger({ toggleMenu }) {
	return (
		<>
			<button
				className="w-14 h-14 md:hidden"
				onClick={toggleMenu}
				type="button"
			>
				<img src={menuBurger} alt="menu burger button" />
			</button>
		</>
	);
}

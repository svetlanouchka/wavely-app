import closeButton from "../assets/closeCrossIcon.svg";

export default function CrossIcon({ isHome, toggleMenu }) {
	return (
		<button
			className={`w-8 ${isHome ? "bottom-[26rem]" : "bottom-[-26rem]"} right-0 relative z-10 md:hidden`}
			type="button"
			onKeyDown={toggleMenu}
			onClick={toggleMenu}
		>
			<img src={closeButton} alt="croix de fermeture" />
		</button>
	);
}

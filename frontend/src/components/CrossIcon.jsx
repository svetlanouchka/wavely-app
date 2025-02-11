import closeButton from "../assets/closeCrossIcon.svg";

export default function CrossIcon({ toggleMenu }) {
	return (
		<button
			className="w-14 h-14 absolute z-10"
			type="button"
			onKeyDown={toggleMenu}
			onClick={toggleMenu}
		>
			<img src={closeButton} alt="croix de fermeture" />
		</button>
	);
}

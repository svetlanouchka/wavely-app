import logo from "../../assets/Logo_W.png";

export default function Footer() {
	return (
		<footer className="bg-green h-16 text-white text-center p-4 flex justify-center items-center gap-[1.5rem]">
			&copy; 2025 - Wavely
			<img src={logo} alt="logo" className="h-12 w-12" />
		</footer>
	);
}

import logo from "../../assets/Logo_W.png";

export default function Footer() {
	return (
		<footer className="bg-green-header h-16 text-white text-center p-4 flex justify-center items-center">
			&copy; 2025 - Wavely
			<img src={logo} alt="logo" className="h-12 w-12" />
		</footer>
	);
}

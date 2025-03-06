import logo from "../../assets/Logo_W.png";

export default function Footer() {
	return (
		<footer className="bg-green-header h-16 text-white text-center p-4 justify-center items-center">
			<p className="text-sm text-gray-800"> © 2025 – Application web Wavely réalisée dans le cadre de la formation en développement web par ses élèves. La créatrice des fréquences est Yulia Taubin.</p>
			<img src={logo} alt="logo" className="h-5 w-5 mx-auto" />
		</footer>
	);
}

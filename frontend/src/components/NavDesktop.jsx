import { Link } from "react-router-dom";

export default function NavDesktop({ isHome }) {
	return (
		<div className="hidden md:flex md:gap-[2rem] md:px-[1rem] md:whitespace-nowrap">
			<Link to="/about">
				<button type="button">
					<p className="text-gray cursor-pointer">La méthode</p>
				</button>
			</Link>
			{isHome ? (
				<Link to="/frequencies">
					<button type="button">
						<p className="text-gray cursor-pointer">Les fréquences</p>
					</button>
				</Link>
			) : (
				<Link to="/faq">
					<button type="button">
						<p className="text-gray cursor-pointer">Foire aux questions</p>
					</button>
				</Link>
			)}
			<Link to="/contact">
				<button type="button">
					<p className="text-gray cursor-pointer">Contact</p>
				</button>
			</Link>
		</div>
	);
}

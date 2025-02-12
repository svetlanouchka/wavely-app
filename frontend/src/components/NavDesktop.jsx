import { Link } from "react-router-dom";
import LogoW from "./LogoW";
import ButtonLaunch from "../ui/ButtonLaunch";

export default function NavDesktop({ isHome }) {
	return (
		<div className="hidden md:flex md:gap-[2rem] md:px-[1rem] md:whitespace-nowrap">
			<div
				className={`md:flex md:items-center text-[18px] font-normal ${isHome ? "gap-12" : "gap-6"} `}
			>
				{!isHome && <LogoW />}
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
				<ButtonLaunch />
			</div>
		</div>
	);
}

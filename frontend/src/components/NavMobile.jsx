import { Link } from "react-router-dom";
import ButtonLaunch from "../ui/ButtonLaunch";
import { useUser } from "../context/UserContext";

export default function NavMobile({ toggleMenu, backgroundColor, isHome }) {
	const { userId } = useUser();

	return (
		<div
			className={`md:hidden absolute w-[100%] h-[30rem] ${backgroundColor} ${isHome ? "bottom-0" : "top-0"}  rounded-[2rem]`}
		>
			<ul className="flex flex-col items-center justify-center h-[100%] gap-4 text-[1.4rem]">
				<li>
					<Link to="/about">
						<button type="button" onClick={toggleMenu}>
							<p className="text-gray">La méthode</p>
						</button>
					</Link>
				</li>
				{isHome ? (
					<li>
						<Link to="frequencies">
							<button type="button" onClick={toggleMenu}>
								<p className="text-gray">Les fréquences</p>
							</button>
						</Link>
					</li>
				) : (
					<li>
						<Link to="faq">
							<button type="button" onClick={toggleMenu}>
								<p className="text-gray">Foire aux questions</p>
							</button>
						</Link>
					</li>
				)}
				<li>
					<Link to="/contact">
						<button type="button" onClick={toggleMenu}>
							<p className="text-gray">Contact</p>
						</button>
					</Link>
				</li>
				<li>
					{userId ? (
						<Link to="/my-profile">
							<button
								type="button"
								className="flex items-center gap-2 border-1 border-blue-violet rounded-full p-2"
							>
								<p className="text-blue-violet cursor-pointer">Mon Profil</p>
							</button>
						</Link>
					) : (
						<ButtonLaunch toggleMenu={toggleMenu} />
					)}
				</li>
			</ul>
		</div>
	);
}

import { Link } from "react-router-dom";

export default function Header({ backgroundColor, string, path }) {
	return (
		<header
			className={`w-[23rem] rounded-full p-4 my-8 mx-2 flex justify-center items-center font-albert-sans ${backgroundColor}`}
		>
			<div className="flex gap-4">
				<Link to="/about">
					<button type="button">
						<p className="text-gray">La méthode</p>
					</button>
				</Link>
				<Link to={path}>
					<button type="button">
						<p className="text-gray">{string}</p>
					</button>
				</Link>
				<Link to="/contact">
					<button type="button">
						<p className="text-gray">Contact</p>
					</button>
				</Link>
			</div>
			{/* <ButtonLaunch /> */}
		</header>
	);
}

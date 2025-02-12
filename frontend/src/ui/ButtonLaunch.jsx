import { Link } from "react-router-dom";

export default function ButtonLaunch() {
	return (
		<Link to="/login">
			<button type="button" className=" bg-blue px-3 py-1 rounded-full">
				Launch
			</button>
		</Link>
	);
}

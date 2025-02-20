import Seance from "@components/Seance";
import BackgroundCanvas from "@components/BackgroundCanvas";

export default function SeancePage() {
	const animationClassName = "animated-background-session";
	return (
		<>
			<div className="relative w-full min-h-full">
				<Seance />
				<BackgroundCanvas animationClassName={animationClassName} />
			</div>
		</>
	);
}

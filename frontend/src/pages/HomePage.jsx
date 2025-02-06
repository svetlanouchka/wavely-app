import Frequence from "../components/Seance";
import AnimatedBackground from "@components/BackgroundCanvas";

export default function HomePage() {
	const animationClassName = "animated-background-session";
	return (
		<>
			<Frequence />
			<AnimatedBackground animationClassName={animationClassName} />
		</>
	);
}

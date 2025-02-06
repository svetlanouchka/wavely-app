import Frequence from "../components/Seance";
import AnimatedBackground from "@components/BackgroundCanvas";

export default function HomePage() {
	const animationClassName = "animated-background-home";
	return (
		<>
			<Frequence />
			<AnimatedBackground animationClassName={animationClassName} />
		</>
	);
}

import Frequence from "../components/Seance";
import Frequency from "@components/Frequency";
import AnimatedBackground from "@components/BackgroundCanvas";

export default function HomePage() {
	const animationClassName = "animated-background-home";
	return (
		<>
    			<AnimatedBackground animationClassName={animationClassName}/>
		</>
	);
}

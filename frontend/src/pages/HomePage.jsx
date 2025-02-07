import Header from "../components/Layout/Header";
import AnimatedBackground from "@components/BackgroundCanvas";

export default function HomePage() {
	const animationClassName = "animated-background-home";
	return (
		<div className="flex flex-row items-end justify-center h-screen relative">
			<div className="absolute top-[50%] translate-y-[-50%]">
				<h1 className="font-righteous text-7xl md:text-9xl">Wavely</h1>
				<h2 className="font-albert-sans text-md md:text-2xl font-medium text-center mt-1.5">
					Partager des bonnes ondes
				</h2>
			</div>
			<Header
				backgroundColor="bg-gray-light"
				string="Les Fréquences"
				path="/frequencies"
			/>
			<AnimatedBackground animationClassName={animationClassName} />
		</div>
	);
}

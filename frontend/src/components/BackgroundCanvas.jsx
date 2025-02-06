import "../BackgroundAnimation.css";

export default function AnimatedBackground({ animationClassName }) {
	return <div className={`animated-background ${animationClassName}`} />;
}

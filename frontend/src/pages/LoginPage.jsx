import BackgroundShapes from "@components/BackgroundShapes";
import LoginForm from "@components/LoginForm";

export default function LoginPage() {
	return (
		<div className="relative flex flex-col items-center justify-center h-screen">
			<BackgroundShapes />
			<LoginForm />
		</div>
	);
}

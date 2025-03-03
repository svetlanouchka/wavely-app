import BackgroundShapes from "@components/BackgroundShapes";
import ContactForm from "@components/ContactForm";

export default function ContactPage() {
	return (
		<>
			<div className="relative flex flex-col items-center justify-center h-screen my-10">
				<BackgroundShapes />
				<ContactForm />
			</div>
		</>
	);
}

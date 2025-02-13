export default function ButtonMain({ idButton, text, onClick }) {
	return (
		<button
			id={idButton}
			onClick={onClick}
			className="px-4 py-2 bg-green font-semibold rounded-3xl transition-all cursor-pointer hover:bg-green-header m-auto"
		>
			{text}
		</button>
	);
}

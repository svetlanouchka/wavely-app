export default function FieldComment({ value, onChange }) {
	return (
		<textarea
			className="w-full mt-3 p-2 border rounded-lg focus:ring focus:ring-yellow-300"
			rows="2"
			placeholder="Votre commentaire..."
			value={value}
			onChange={(e) => onChange(e.target.value)}
		/>
	);
}

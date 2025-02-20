export default function FieldComment({ value, onChangeComment }) {
    return (
        <textarea
            className="w-full mt-3 p-2 border rounded-lg focus:ring focus:ring-yellow-300"
            rows="2"
            placeholder="Votre commentaire..."
            value={value}
            onChange={(e) => onChangeComment(e.target.value)}
        ></textarea>
    );
}
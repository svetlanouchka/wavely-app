export default function ButtonMain({ idButton, text, type, style = {}, onClick }) {
    return (
        <button
            id={idButton}
            style={style}
            type={type}
            onClick={onClick}
            className="px-4 py-2 bg-green font-semibold rounded-3xl transition-all cursor-pointer hover:bg-green-header">
            {text}
        </button>
    );
}

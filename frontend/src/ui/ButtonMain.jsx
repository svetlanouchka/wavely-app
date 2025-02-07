export default function ButtonMain ({idButton, text, style = {}, onClick}) {
    return (
        <button 
        id={idButton}
        style={style} 
        onClick={onClick}
        className="px-4 py-2 font-semibold rounded-lg transition-all cursor-pointer">
            {text}
        </button>
    );
}
export default function LoadingOverlay() {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-blue-dark/70 backdrop-blur-sm flex items-center justify-center z-50">
            <button 
            type="button" 
            className="bg-blue-violet text-white py-2 px-4 rounded-xl flex items-center cursor-not-allowed" disabled>
                <svg 
                className="mr-3 h-5 size-5 animate-spin" 
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                    <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"></circle>
                    <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8VOC5.373 0 0 5.373 0 12h4z"></path>
                </svg>
                En train de préparer votre séance
            </button>
        </div>
    );
    }
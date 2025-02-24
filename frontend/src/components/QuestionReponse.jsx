import { useState } from "react";
import FaqIcon from "@assets/faq_icon.png"

export default function QuestionReponse({title, children}) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="md:w-[60%] w-[90%] mx-auto">
                <button onClick={() => setIsOpen(!isOpen)} 
                    className="flex items-center w-full shadow-md bg-gray-light border border-gray-200 py-2 px-4 text-left focus:outline-none transition-all duration-500">
                <h3 className="flex-1 text-lg font-albert-sans py-6 font-semibold text-center">{title}</h3>
                    <img src ={FaqIcon} 
                    alt="icon" 
                    className={`h-20 w-20 transform transition-transform duration-500 ${
                    isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    />
                </button>
                {isOpen && (<div className="w-full p-4 text-center transition-all duration-500">{children}</div>)}
            </div>
        </>
    );

}
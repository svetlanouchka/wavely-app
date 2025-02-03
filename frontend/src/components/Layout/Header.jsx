import { Link } from "react-router-dom";
import logo from "../../assets/Logo_W.png";

export default function Header() {
    return (
        <header className="h-16 bg-green-header text-center rounded-full p-4 my-8 mx-36 flex justify-around">
            <Link to="/">
                <button type="button">
                    <img src={logo} alt="logo" className="h-8 w-8" />
                </button>
            </Link>      
            
            <Link to="/about">
            <button type="button">
                <p className="text-gray">La méthode</p>
            </button>       
            </Link>
            <Link to="/faq">
            <button type="button">
                <p className="text-gray">Questions / Réponses</p>
            </button>
            </Link>
            <Link to="/contact">
            <button type="button">
                <p className="text-gray">Contact</p>
            </button>
            </Link>
            <Link to="/signup">
                    <button
                        type="button"
                        className="relative bg-blue blur-md rounded-full z-0"
                    >Lancement

                    </button>
                <p className="absolute text-white z-10 top-[47px] right-[220px]">Lancer</p>
            </Link>

        </header>
    );
}
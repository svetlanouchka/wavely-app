import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
    const { setUserId } = useUser();
    const navigate = useNavigate();

    const handleLogout = () => {

        setUserId(null);

        localStorage.removeItem("userId");
        navigate("/");
    };

    return (
        <button
            onClick={handleLogout}
            className="text-gray-400 italic hover:underline px-4 py-2 rounded cursor-pointer"
        >
            Déconnectez-vous
        </button>
    );
}

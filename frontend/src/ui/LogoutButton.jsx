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
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
            Déconnectez-vous
        </button>
    );
}

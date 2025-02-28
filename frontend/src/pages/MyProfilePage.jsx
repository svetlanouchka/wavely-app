import { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";
import UserPhoto from "../assets/user.png";
import { format } from "date-fns";
import ButtonMain from "../ui/ButtonMain";
import ModifyProfil from "../components/Modals/ModifyProfil";

export default function MyProfilePage() {
    const { userId } = useUser();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        async function getUser() {
            try {
                const response = await fetch(`http://localhost:5000/users/${userId}`);
                const data = await response.json();
                setUser(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        if (userId && !isModalOpen) {
            getUser();
        }
    }, [userId, isModalOpen]);

    if (loading) return <p>Chargement de vos données...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const formatDate = (dateString) => {
        if (!dateString) return "Date inconnue";
        return format(new Date(dateString), "MM/dd/yyyy");
    };

    
    return (
        <>
        <h1 className="text-3xl font-bold font-righteous text-center mt-8">Mon profil</h1>
        <div className="w-[70%] md:w-[40%] mx-auto relative flex flex-col items-center h-screen md:h-[70%] my-10 md:my-20 p-10 md:p-20 gap-10 bg-gray-light shadow-sm rounded-sm">
            <img src={user.image_url ? user.image_url : UserPhoto} alt="User" className="md:w-1/3 h-auto rounded-4xl" />
            <div className="justify-center text-lg text-center">
                    <div className="flex gap-2 bg-white border-1 rounded-2xl border-blue-violet justify-center text-center font-albert-sans my-5 p-2">
                        <p className="font-bold">Prénom </p> <p> {user.first_name}</p></div>
                    <div className="flex gap-2 bg-white border-1 rounded-2xl border-blue-violet justify-center text-center font-albert-sans my-5 p-2">
                        <p className="font-bold"> Nom </p> <p> {user.last_name}</p></div>
                    <div className="flex gap-2 bg-white border-1 rounded-2xl border-blue-violet justify-center text-center font-albert-sans my-5 p-2">
                        <p className="font-bold">Date de naissance </p> <p> {formatDate(user.birth_date)}</p></div>
                    <div className="flex gap-2 bg-white border-1 rounded-2xl border-blue-violet justify-center text-center font-albert-sans my-5 p-2">
                        <p className="font-bold">Email </p> <p> {user.email}</p></div>
            </div>
            <ButtonMain
                text="Modifier"
                onClick={() => setIsModalOpen(true)}/>
            {isModalOpen && <ModifyProfil onClose={() => setIsModalOpen(false)} />}
        </div>
        </>
    );
}
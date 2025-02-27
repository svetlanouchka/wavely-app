import { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";

export default function MyProfilePage() {
    const { userId } = useUser();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

        getUser();
    }, [userId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="relative flex flex-col items-center justify-center h-screen">
            <h1>My Profile</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}
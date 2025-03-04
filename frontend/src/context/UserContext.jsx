import { createContext, useState, useContext, useEffect } from "react";


const UserContext = createContext();


export function UserProvider({ children }) {
    const [userId, setUserId] = useState(() => localStorage.getItem("userId") || null);

    useEffect(() => {
        if (userId) {
            localStorage.setItem("userId", userId);
        }
        else {
            localStorage.removeItem("userId");
        }
    }
, [userId]);


    return (
        <UserContext.Provider value={{ userId, setUserId }}>
            {children}
        </UserContext.Provider>
    );
}


export function useUser() {
    return useContext(UserContext);
}

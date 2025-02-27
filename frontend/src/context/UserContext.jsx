import { createContext, useState, useContext } from "react";


const UserContext = createContext();


export function UserProvider({ children }) {
    const [userId, setUserId] = useState(null); 

    return (
        <UserContext.Provider value={{ userId, setUserId }}>
            {children}
        </UserContext.Provider>
    );
}


export function useUser() {
    return useContext(UserContext);
}

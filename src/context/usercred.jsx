import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase";

export const userCredContext = createContext();

const UserCredContextProvider = ({ children }) => {
    const [user, setUser] = useState();

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
    })

    return (
        <userCredContext.Provider value={user}>
            {children}
        </userCredContext.Provider>
    )
}

export default UserCredContextProvider
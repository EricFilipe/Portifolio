import { createContext, useState } from "react";
import api from "../api";

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
    const [user, setUser] = useState({});

    const handelSubmit = (name, email, message) => {
        api.post('/', {name, email, message}).then(({data}) => {
            setUser(data)
        }).catch((error) => {
            console.log('não foi possivel enviar',error)
        })
    }

    return (
        <UserContext.Provider value={{ user, handelSubmit }}>
            {children}
        </UserContext.Provider>
    )
}
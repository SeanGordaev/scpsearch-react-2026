import { createContext, useState } from "react"

export const context = createContext();

export const Data = ({ children }) => {

    const [level, setLevel] = useState();

    return (
        <context.Provider value={[level, setLevel]}>
            { children }
        </context.Provider>
    )

}
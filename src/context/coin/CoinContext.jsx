import { createContext, useReducer } from "react";
import CoinReducer from "./CoinReucer";

const CoinContext = createContext()

export const CoinProvider = ({ children }) => {

    const initialstate = {
        coins: [],
        coindata : null
    }


    const [state, dispatch] = useReducer(CoinReducer, initialstate)

    return (
        <CoinContext.Provider value={{ ...state, dispatch }}>{children}</CoinContext.Provider>
    )
}


export default CoinContext
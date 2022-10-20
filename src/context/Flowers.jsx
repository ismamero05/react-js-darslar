import { useContext, useReducer } from "react";
import { createContext } from "react";
import { data } from "../utils/data";
import { reducer } from "./reducer";

export const FlowerContext = createContext();

const FlowersContext = ({children}) => {

    const [state, dispatch] = useReducer(reducer, {
        data: data,
        products: [],
        basket: false
    })

    return(
        <FlowerContext.Provider value={[state, dispatch]}>
            {children}
        </FlowerContext.Provider>
    )
}

export default FlowersContext
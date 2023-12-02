import { createContext,useReducer } from "react";
import reducer, { initState } from "../reducer/reducer";

export const ShoeContext = createContext()
/*
    1.createContext
    2.provider
    3.consumer
*/

function ShoeProvider({children}){
    const [state,dispatch] = useReducer(reducer,initState)
    return(
        <ShoeContext.Provider value={{state,dispatch}}>
                {children}
        </ShoeContext.Provider>
    )
}

export default ShoeProvider;


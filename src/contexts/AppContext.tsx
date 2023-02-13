import { createContext, useReducer } from "vm";
import { reducer } from "../reducers/appReducer";

export const AppContext = createContext({});

type Props = {
    children: ReactNode;
}

const AppProvider: React.FC<Props> = ({ children}) =>{

    const initialState = {
        darkMode: true,
    }

    const [ appState, dispatch] = useReducer(reducer, initialState);

    return <AppContext.Provider >{children}</AppContext.Provider>
}
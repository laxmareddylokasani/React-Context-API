import React, { createContext, useReducer, useContext } from "react";
import { initialState, StateProps, reducer } from "./reducer";

type StoreProps = {
    state: StateProps,
    dispatch: (action: any) => void;
}

export const Store = createContext({} as StoreProps);

export const StoreProvider = (props: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Store.Provider value={{ state, dispatch }}>
            {props.children}
        </Store.Provider>
    );
};

export const useStateValue = () => useContext(Store);
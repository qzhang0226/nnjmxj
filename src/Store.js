import React from 'react';

const initialState = {
    products: [],
}

export const Store = React.createContext(initialState);

function reducer(state, action){
    switch (action.type) {
        case 'FETCH_DATA':
            return {...state, products: action.payload}    
        default:
            return state;
    }
}

export function StoreProvider({children}){
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>
}


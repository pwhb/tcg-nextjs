
import React, { createContext, useReducer } from "react"


const ACTIONS = {
    INIT: "init",
    FETCH: "fetch"

}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case ACTIONS.INIT:
            return { ...action.payload, ...state }
        case ACTIONS.FETCH:
            return { ...state, cards: [...state.cards, action.payload] }
        default:
            return state
    }
}

const initialState = {
    cards: [],
    filters: { name: "", type: "", rarity: "", set: "" },
    types: [],
    sets: [],
    rarity: []
}
const CardContext = React.createContext(initialState)

function CardProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)
    return <CardContext.Provider value={{ state, dispatch }}>
        {children}
    </CardContext.Provider>
}

export { CardContext, CardProvider, ACTIONS }
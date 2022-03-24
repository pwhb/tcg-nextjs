import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
    name: "cards",
    initialState: {
        cards: [],
        page: 1,
        loading: false,
        filters: { name: "", type: "", rarity: "", set: "" },
    },
    reducers: {
        fetchCards: (state, action) => {
            state.cards = state.cards.concat(action.payload)
            state.page += 1
        },
        startLoading: (state) => {
            state.loading = true
        },
        endLoading: (state) => {
            state.loading = false
        },
        toggleTotal: (state, action) => ({
            ...state,
            cards: state.cards.map((card) => card.id === action.payload.id ? ({ ...card, set: { ...card.set, total: card.set.total + action.payload.amount } }) : card)
        }),
        updateFilters: (state, action) => ({
            ...state,
            filters: {
                ...state.filters,
                [action.payload.name]: action.payload.value
            }
        })
    }
})

export const { fetchCards, startLoading, endLoading, toggleTotal, updateFilters } = cardSlice.actions

export default cardSlice.reducer
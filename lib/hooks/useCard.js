import { useDispatch, useSelector } from "react-redux"
import { startLoading, endLoading, fetchCards, filterCards, updateFilters } from "../redux/cardSlice"

export const BASE_URL = "https://api.pokemontcg.io/v2"
export const PAGE_SIZE = 12

export function useCard() {
    const { cards, filters, page } = useSelector(state => state.cards)

    const dispatch = useDispatch()

    const initialFetch = (initialCards) => {
        dispatch(fetchCards(initialCards))
    }

    const fetchMore = async () => {
        dispatch(startLoading())
        const res = await fetch(`${BASE_URL}/cards?pageSize=${PAGE_SIZE}&page=${page}`)
        const { data } = await res.json()
        dispatch(fetchCards(data))
        dispatch(endLoading())
    }

    const onChange = (e) => {
        const { name, value } = e.target
        // dispatch(filterCards({ name, value }))
        dispatch(updateFilters({ name, value }))
    }

    const filteredCards = () => {
        let temp = cards
        if (filters.name) {
            temp = temp.filter((val) => val.name.toLowerCase().includes(filters.name))
        }
        if (filters.type && filters.type !== "Type") {
            temp = temp.filter((val) => val.types.includes(filters.type))
        }
        if (filters.rarity && filters.rarity !== "Rarity") {
            temp = temp.filter((val) => val.rarity === filters.rarity)
        }
        return temp
    }

    return {
        initialFetch,
        filteredCards,
        fetchMore,
        onChange,
    }
}

export default useCard
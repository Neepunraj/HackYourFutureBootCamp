
"use client"
import { createContext, useContext, useReducer } from "react"

export const intitalCounterState = {
    count: 0
}

export function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return {
                count: state.count - 1
            }
        case 'reset':
            return {
                count: 0
            }
        default:
            throw new Error(`Unknow error ${action.type}`)
    }
}
const CounterContext = createContext()

export function CounterContextProvider({ children }) {
    const [state, dispatch] = useReducer(counterReducer, intitalCounterState)

    return <CounterContext.Provider value={{ state, dispatch }}>
        {children}
    </CounterContext.Provider>
}
export const useCounterReducerContext = () => useContext(CounterContext) 
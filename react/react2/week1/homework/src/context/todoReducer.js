"use client"
import { createContext, useContext, useReducer, useState } from "react";


const TodoReducerContext = createContext()

function todoReducerFunction(state, action) {
    switch (action.type) {
        case "ADD":
            return [...state, {
                id: Date.now(),
                todo: action.payload,
                isDone: false
            }]
        case "TOGGLE":
            return state.map(todo => todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo)
        case "REMOVE":
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state
    }
}
export function TodoContextProvider({ children }) {
    const [state, dispatch] = useReducer(todoReducerFunction, [])
    return <TodoReducerContext.Provider value={{ todos: state, dispatch }}>
        {children}
    </TodoReducerContext.Provider>
}


export const useTodoReducer = () => useContext(TodoReducerContext)
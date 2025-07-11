
"use client"

import { useCounterReducerContext } from "@/context/couterReducerContext"


export default function Counter() {
    const { state, dispatch } = useCounterReducerContext()
    return (
        <div className='items-center flex flex-col'>
            <h1> count: {state.count}</h1>
            <div className="flex flex-col gap-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition" onClick={() => dispatch({ type: 'increment' })}>Add</button>
                <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition" onClick={() => dispatch({ type: 'decrement' })}>Subtract</button>
                <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition" onClick={() => dispatch({ type: 'reset' })}>Reset</button>

            </div>

        </div>
    )
}

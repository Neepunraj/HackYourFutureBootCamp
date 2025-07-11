"use client"
import { useTodoReducer } from '@/context/todoReducer'
import React, { useState } from 'react'



export default function TodoItem() {
    const [addTodo, setAddTodo] = useState('')
    const { todos, dispatch } = useTodoReducer()
    const handleAdd = () => {
        dispatch({ type: 'ADD', payload: addTodo })
        setAddTodo('')
    }
    return (
        <div className='mt-10 border-t-2'>
            <div className="border-2 p-2 m-1">
                {
                    todos && todos.length > 0 ? (
                        todos.map(item => <div className="flex gap-2 justify-between p-2 items-center" key={item.id}>
                            <p className={`${item.isDone ? "line-through" : ""}`}>
                                {
                                    item.todo
                                }
                            </p>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition " onClick={() => dispatch({ type: 'TOGGLE', payload: item.id })}>Toggle</button>
                                <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition" onClick={() => dispatch({ type: 'REMOVE', payload: item.id })}>Remove</button>

                            </div>
                        </div>)
                    ) : (
                        <p>NO TODO ITEMS PLEASE ADD</p>
                    )
                }
            </div>
            <div className="mt-5 border-2 border-amber-400 p-2">
                <label htmlFor="todo">Add Todo Here</label>
                <input type="text" id='todo' name='todo' placeholder='Enter Todo Items' className='w-full p-2' value={addTodo} onChange={(e) => setAddTodo(e.target.value)} />
            </div>
            <div className="flex flex-col gap-2 mt-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition" onClick={handleAdd}>Add</button>

            </div>

        </div >
    )
}

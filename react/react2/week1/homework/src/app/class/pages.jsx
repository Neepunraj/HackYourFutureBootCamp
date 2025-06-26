"use client"
import React, { useEffect, useState } from 'react'

export default function NasaPage() {
    const [nasaData, setNasaData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    async function fetchNasaData() {
        setIsLoading(true)
        try {
            const response = await fetch('')
            if (!response.ok) {
                setError("Error Occur")
            }
            const data = await response.json()
            setNasaData(data)
            setIsLoading(false)
        } catch (error) {
            setError("Error")
            setIsLoading(false)
        }

    }
    useEffect(() => {
        fetchNasaData()
    }, [])
    if (isLoading) return <div><p>loading..</p></div>
    if (error) return <div className=""><p>Error : {error}</p></div>
    return (
        <div>

            <div className="">
                <h1>NaSa Data</h1>
            </div>
        </div>
    )
}

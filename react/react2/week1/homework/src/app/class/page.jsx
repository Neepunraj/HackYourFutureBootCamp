"use client"
import React, { useEffect, useState } from 'react'
/* hw 2 client side rending with states  dynamic rending*/
export default function NasaPage() {
    const [nasaData, setNasaData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchNasaData() {
        setIsLoading(true)
        try {
            const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DwjlGrrofRrlyT0iCBmdqW869l2WbpD8rceAXa5y')
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
    console.log(nasaData)
    useEffect(() => {
        fetchNasaData()
    }, [])

    if (isLoading) return <div><p>loading..</p></div>
    if (error) return <div className=""><p>Error : {error}</p></div>
    return (
        <div className='w-full h-full flex justify-center items-center'>

            <div className="justify-center items-center flex flex-col">
                <h1>{nasaData?.title}</h1>
                <p>{nasaData?.description}</p>
                <p>
                    <span>{nasaData?.date}</span>
                    <span>{nasaData?.service_version}</span>
                </p>
                <img src={nasaData?.url} />

            </div>
        </div>
    )
}

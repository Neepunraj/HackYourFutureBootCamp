/* hw 1 server side rending without states */

export default async function NasaPage() {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DwjlGrrofRrlyT0iCBmdqW869l2WbpD8rceAXa5y')
    const data = await response.json()

    const { date, url, title, description, service_version } = data


    return (
        <div className='w-full h-full flex justify-center items-center'>

            <div className="justify-center items-center flex flex-col">
                <h1>{title}</h1>
                <p>Server side Rendering </p>
                <p>{description}</p>
                <p>
                    <span>{date}</span>
                    <span>{service_version}</span>
                </p>
                <img src={url} />

            </div>
        </div>
    )
}

import { useEffect, useState } from "react";


export default function ImagSlider({ url, page=2,limit=5 }) {
    const [image, setImage] = useState([])
    const [currentslide, setSetcurrenstslide] = useState(0)
    const [errormsg, setErrormsg] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchImages(geturl) {
        try {
            setLoading(true)
            const response = await fetch(`${geturl}?page=${page}&limit=${limit}`)
            const data = await response.json()

            if (data) {
                setImage(data)
                setLoading(false)
            }
        } catch (e) {
            setErrormsg(e.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (url !== '') fetchImages(url)
    }, [url])

    console.log(image)

    if(loading){
        return <div>Loading Data ! please wait  </div>
    }
    if(errormsg !== null){
        return <div> Error Occureed ! {errormsg}</div>
    }

    return <div className="container"></div>

}

import { useState } from "react"
import { FaStar } from "react-icons/fa"
import './index.css'

export default function Starrate({ noOfstars = 10 }) {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleMouseClick(getIndex) {
        setRating(getIndex)
    }

    function handleMousenter(getIndex) {
        setHover(getIndex)
    }

    function handelMouseLeave() {
        setHover(rating)
    }
    return (
        <div className="stars">
            {
                [...Array(noOfstars)].map((_, index) => {
                    index += 1

                    return <FaStar
                    className= {index <= (rating || hover) ? 'active' : 'inactive'}
                        key={index}
                        onClick={() => handleMouseClick(index)}
                        onMouseMove={() => handleMousenter(index)}
                        onMouseLeave={() => handelMouseLeave(index)}
                        size={30}

                    />
                })
            }
        </div>
    )
}
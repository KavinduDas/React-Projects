import { useState } from "react"
import DataMenu from "./data-menu"
import {FaMinus , FaPlus} from "react-icons/fa"

export default function DataItem({item}){
    const [display , setDisplay] = useState({})

    function handleToggle(getcurrent){
        setDisplay({
            ...display,
            [getcurrent]: !display[getcurrent]
        })
    }
    console.log(display)

    return (
    <ul>
        <div style={{ display : "flex" , gap:"20px"}}>
            {
                item && item.children && item.children.length  ? <span onClick={()=> handleToggle(item.label)}>
                    {
                        display[item.label] ? <FaMinus /> : <FaPlus color="#fff" size="25"/>
                    }
                </span> : null
            }
        </div>
    <p>{item.label}</p>
    {
        item && item.children && item.children.length >  0 && display[item.label] ? 
        (<DataMenu list={item.children} />)
        : null
    }
    </ul>
)

}
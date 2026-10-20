import { useEffect, useState } from "react"
import './color.css'
export default function Randomcolor() {
    const [typeOfcolor, setTypeofColor] = useState('hex')
    const [color, setColor] = useState('#000480')

    function randomColor(length){
        return Math.floor(Math.random()*length)
    }
    function handleRandomHex(){
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexcolor = '#'

        for(let i=0; i<6;i++){
            hexcolor+= hex[randomColor(hex.length)]
        }
        

        setColor(hexcolor)
    }
   

    function handleRandomRgb(){
        const r = randomColor(256)
        const g = randomColor(256)
        const b = randomColor(256)

        setColor(`rgb(${r},${g},${b})`)

    }
    useEffect(()=>{
        if(typeOfcolor==="rgb") handleRandomRgb()
        else handleRandomHex()
    },[typeOfcolor])

    return (
        <div className="color-app" style={{ background : color}}>
            <div className="button-app">
                <button onClick={() => setTypeofColor('hex')}>Hex Color</button>
                <button onClick={() => setTypeofColor('rgb')}>RGB color</button>
                <button onClick={typeOfcolor === 'hex'? handleRandomHex : handleRandomRgb}>Create a Random</button>
                <div style={{
                    display :'flex',
                    justifyContent:'center',
                    margin:10 ,
                    alignItems: "center",
                    color: '#fff',
                }}>
                    <h2>{typeOfcolor === 'rgb' ? 'RGB Color' : 'Hex Color'}</h2>
                    <h3>{color}</h3>
                </div>
            </div>
        </div>
    )
}
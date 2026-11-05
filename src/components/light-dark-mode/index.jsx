import { useState } from "react";
import useLocalStorage from "./useLocalStorage";


export default function LightDarkMode(){
    const [theme , setTheme] = useLocalStorage('theme', 'dark')

    function handletoggleTheme(){
        setTheme((prev)=>(prev === "light" ? "dark" :"light"))
    }
    console.log(theme)
    return <div className="light-dark-mode">
        <div className="container">
            <p>Hello World </p>
            <button onClick={handletoggleTheme}>Change Theme </button>
        </div>
    </div>
}
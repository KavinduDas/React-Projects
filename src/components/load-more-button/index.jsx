import { useState , useEffect } from "react";
import "./styles.css"

export default function Morebutton(){
    
    const [loading , setLoading] = useState(false)
    const [prodcuts , setProducts] = useState([])
    const [count , setCount] = useState(0)
    const [disable , setDisable ] = useState(false)

    async function fetchProducts(){
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products/?limit=20&skip=${count === 0 ? 0 : count*20}`)

            const result = await response.json()
            console.log(result)

            if(result && result.products && result.products.length){
                setProducts((prev)=>[...prev,...result.products])
                setLoading(false)
        
    }
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(()=>{
        fetchProducts()
    },[count])

    useEffect(()=>{
        if(prodcuts && prodcuts.length == 100) setDisable(true)
    },[prodcuts])

    if(loading){
        <div>Please wait !! stil kloading</div>
    }

    return <div className="load-container">
        <div className="product-container">
            {
                prodcuts && prodcuts.length ? 
                prodcuts.map((item)=> (
                    <div className="product" key={item.id}>
                        <img src= {item.images[0]} alt={item.category} />
                        <p>{item.category}</p>
                    </div>
                )) :null
            }
        </div>
        <div className="button-container">
            <button disabled={disable}  onClick={()=> setCount(count+1)}>Load more</button>
            {
                disable ? <p>You have reached 100 plroducts</p> : null
            }
        </div>
    </div>
}
import data from './data'
import { useState } from 'react'
import './card.css'

export default function Accordion() {
  const [selected, setselected] = useState(null)
  const [enableMultiSelection , setEnableMultiSelection] = useState(false)
  const [multiple , setMultiple] = useState([])

  function handleSelection(getselect){
    setselected(getselect === selected ? null : getselect)
  }

  function Multiselection(getselect){
      let copyMultipple = [...multiple]
      const currentIndex = copyMultipple.indexOf(getselect)

      console.log(currentIndex)
      if(currentIndex == -1) copyMultipple.push(getselect)
      else copyMultipple.splice(currentIndex ,1)

      setMultiple(copyMultipple)

  }
    console.log(selected , multiple)
  console.log(Array.isArray(data));
  return (
    <div className='wrapper'>
      <div className="accordion">
        <button onClick={()=> setEnableMultiSelection(!enableMultiSelection)}>Enable Multi selection</button>
        {data ? (
          data.map(dataItem => (
            <div  onClick={enableMultiSelection ?
             ()=> Multiselection(dataItem.title):
             ()=> handleSelection(dataItem.title)} className='card'>
              <h2>{dataItem.category}</h2>
              <p>{dataItem.title}</p>
     
             {
              
              enableMultiSelection ?
               multiple.indexOf(dataItem.title) !== -1 &&
                (<div className='content'>{dataItem.description}</div>) :
               selected == dataItem.title && ( <div className='content'>{dataItem.description}</div>)
              }
            </div>
          ))
        ) : <h1>No Data</h1>
        }
      </div>
    </div>
  )


}
import data from './data'
import { useState } from 'react'
import './card.css'

export default function Accordion() {
  const [selected, setselected] = useState(null)

  function handleSelection(getselect){
    setselected(getselect === selected ? null : getselect)
  }
  console.log(Array.isArray(data));
  return (
    <div className='wrapper'>
      <div className="accordion">
        {data ? (
          data.map(dataItem => (
            <div  onClick={()=> handleSelection(dataItem.title)} className='card'>
              <h2>{dataItem.category}</h2>
              <p>{dataItem.title}</p>

              { selected == dataItem.title ? (<div className='content'>{dataItem.description}</div>): null}
            </div>
          ))
        ) : <h1>No Data</h1>
        }
      </div>
    </div>
  )


}
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Accordion from './App.jsx'
import Randomcolor from './components/random-color/index.jsx'
import Starrate from './components/star-rating/index.jsx'
import ImagSlider from './components/image-Slider/index.jsx'
import Morebutton from './components/load-more-button/index.jsx'
import TreeView from './components/tree-view/index.jsx'
import menus from './components/tree-view/data.js'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Accordion /> */}
    {/* <Randomcolor /> */}
    {/* <Starrate /> */}
    {/* <ImagSlider url={"https://picsum.photos/v2/list"}
      pahe={"2"}
      limit={"5"} /> */}
      {/* <Morebutton /> */}
      <TreeView menus={menus}/>
  </StrictMode>,
)

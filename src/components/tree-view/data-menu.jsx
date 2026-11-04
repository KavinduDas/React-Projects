import DataItem from "./data-item";

export default function DataMenu({list =[]}){
    return <ul className="list-container">
        {
                list && list.length ?
                list.map((item) => <DataItem key={item.label} item={item}/>)
                :null
        }
    </ul>
}
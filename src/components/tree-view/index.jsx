import DataMenu from "./data-menu";
import './style.css'

export default function TreeView({menus = []}){
    return <div className="main-continer">
        <DataMenu list={menus} />
    </div>
}
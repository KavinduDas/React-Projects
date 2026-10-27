import { useState } from "react"
import DataMenu from "./data-menu"
import { FaMinus, FaPlus } from "react-icons/fa"

export default function DataItem({ item }) {
    const [isOpen, setIsOpen] = useState(false)
    const hasChildren = item?.children?.length > 0

    return (
        <li className="tree-item">
            <div className="tree-row">
                {hasChildren ? (
                    <button
                        type="button"
                        className="tree-toggle"
                        aria-expanded={isOpen}
                        aria-label={`${isOpen ? "Collapse" : "Expand"} ${item.label}`}
                        onClick={() => setIsOpen((open) => !open)}
                    >
                        {isOpen ? <FaMinus /> : <FaPlus />}
                    </button>
                ) : (
                    <span className="tree-toggle-spacer" aria-hidden="true" />
                )}
                <p className="tree-label">{item.label}</p>
            </div>
            {hasChildren && isOpen ? <DataMenu list={item.children} /> : null}
        </li>
    )
}

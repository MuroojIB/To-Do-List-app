import { Check } from "lucide-react";

function Item({id, description, selected, onToggleItem, onDeleteItem}){
    return (
        <li className="list-item">
            <div>
                <label className = "custom-checkbox"> 
                    <input type="checkbox" onClick= { () => onToggleItem (id) }/>
                    {selected ? <Check color="#fff" /> : <span className = "checkmark"></span>}
                </label>
                <span className= {`description ${ selected && "selected" }`}>
                    {description}
                </span>
            </div>
            <button className = "btn-close" onClick={() => onDeleteItem(id) }>
                &times;
            </button>
        </li>
    );
}

export default Item;
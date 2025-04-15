import { Check } from "lucide-react";

function Item({ id, description, selected, onToggleItem, onDeleteItem, onEditItem }) {
  return (
    <li className="list-item">
    <div>
        <label className="custom-checkbox">
        <input type="checkbox" onClick={() => onToggleItem(id)} />
        {selected ? <Check color="#fff" /> : <span className="checkmark"></span>}
        </label>
        <span className={`description ${selected ? "selected" : ""}`}>
        {description}
        </span>
    </div>
    <div className="actions">
        <button className="btn-close" onClick={() => onDeleteItem(id)}>
        &times;
        </button>
        <button className="btn-edit" onClick={() => onEditItem(id)}>
        ✏️
        </button>
    </div>
    </li>
  );
}

export default Item;
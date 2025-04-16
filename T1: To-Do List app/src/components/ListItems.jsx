import Item from "./Item.jsx";

function ListItems({ items, onToggleItem, onDeleteItem, onEditItem }) {
  return (
    <ul className="List-items">
      {items.map((item) => {
        const { id, description, selected } = item;
        return (
          <Item
            key={id}
            id={id}
            description={description}
            selected={selected}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
            onEditItem={onEditItem} 
          />
        );
      })}
    </ul>
  );
}

export default ListItems;

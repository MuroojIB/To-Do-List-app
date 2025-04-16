import Item from "./Item";

function ListItems({ items, onToggleItem, onDeleteItem, onEditItem }) {
  return (
    <ul className="List-items">
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          description={item.description}
          selected={item.selected}
          onToggleItem={onToggleItem}
          onDeleteItem={onDeleteItem}
          onEditItem={onEditItem}
        />
      ))}
    </ul>
  );
}

export default ListItems;

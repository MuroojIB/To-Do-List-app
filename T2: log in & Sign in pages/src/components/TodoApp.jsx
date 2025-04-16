import { useEffect, useState } from "react";
import Title from "./Title";
import ListItems from "./ListItems";
import Form from "./Form";

function TodoApp({ onLogout }) {

  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const [description, setDescription] = useState("");
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);


  function handleAddItem(newItemArg) {
    if (editingItem) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editingItem.id ? { ...item, description: description } : item
        )
      );
      setEditingItem(null);
    } else {
      setItems((prevItems) => [...prevItems, newItemArg]);
    }
    setDescription("");
  }

  function handleToggleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleEditItem(id) {
    const itemToEdit = items.find((item) => item.id === id);
    setEditingItem(itemToEdit);
    setDescription(itemToEdit.description);
  }

  return (
    <main id="main">
      <div className="todo-list">
        <Title />
        <Form
          description={description}
          setDescription={setDescription}
          onAddItems={handleAddItem}
          editingItem={editingItem}
        />
        <ListItems
          items={items}
          onToggleItem={handleToggleItem}
          onDeleteItem={handleDeleteItem}
          onEditItem={handleEditItem}
        />
      </div>
      {}
      <button className="btn-logout-fixed" onClick={onLogout}>
        Logout
      </button>
    </main>
  );
}

export default TodoApp;
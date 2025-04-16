import { useEffect, useState } from "react";
import Title from "./components/Title";
import ListItems from "./components/ListItems";
import Form from "./components/Form";

function App() {

  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const [description, setDescription] = useState("");
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  function handleAddItem(newItem) {
    if (editingItem) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editingItem.id
            ? { ...item, description: description }
            : item
        )
      );
      setEditingItem(null);
    } else {
      setItems((prevItems) => [...prevItems, newItem]);
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
      <div className="container">
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
      </div>
    </main>
  );
}

export default App;

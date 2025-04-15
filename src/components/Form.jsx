function Form({ description, setDescription, onAddItems, editingItem }) {

    function handleSubmit(e) {
      e.preventDefault();
  
      if (!description.trim()) {
        return alert("You must add value ! ");
      }
  
      if (editingItem) {
        onAddItems();
      } else {
        const newItem = {
          id: Date.now(),
          description,
          selected: false,
        };
        onAddItems(newItem);
      }
    }
  
    return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Enter a task"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="btn-Add">
            {editingItem ? "Save" : "Add"}
          </button>
        </div>
      </form>
    );
  }
  
  export default Form;
  
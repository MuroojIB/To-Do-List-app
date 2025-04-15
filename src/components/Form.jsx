function Form({description, setDescription, onAddItems}){

    function handleSubmite(e){
        e.preventDefault();

        if (!description){
            return alert("You must add a value");
        }

        const newItems = {
            id: Date.now(),
            description,
            selected: false,
        }

        onAddItems(newItems);

        setDescription ("");
    }

    return(
        <form className="form" onSubmit={handleSubmite}>
            <div className="form-control">
                <input 
                type="text"
                placeholder="Enter a task" 
                value={description}
                onChange= {(e)=> setDescription(e.target.value)}
                />
                <button className="btn-Add">Add</button>
            </div>
        </form>
    );
}

export default Form;
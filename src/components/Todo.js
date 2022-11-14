import { useState } from "react";
export default function Todo({ item, onUpdate, onDelete }) {

  const [edit, setEdit] = useState(false);



  function FormEdit() {

    const [newValue, setNewValue] = useState(item.title);

    function handleSubmit(e) {
      e.preventDefault();
    }
    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClick() {
      onUpdate(item.id, newValue);
      setEdit(false);
    }


    return (
      <form className="todoUpadateForm" onSubmit={handleSubmit}>
        <input type='text' className="todoInput" onChange={handleChange}
          value={newValue} />
        <button className="button" onClick={handleClick}>
          Update
        </button>
      </form>
    )
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        <span className="todoTitle">{item.title}</span>
        <button className="button" onClick={() => {
          setEdit(true);
        }}>Edit</button>
        <button className="buttonDelete" onClick={(e) => {
          onDelete(item.id)
        }}>Delete</button>
      </div>
    )
  }

  return (

    <div className="todo">
      {edit ? <FormEdit /> : <TodoElement />}
    </div>
  );
}
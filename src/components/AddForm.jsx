import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";

function AddForm() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    dispatch(   
      addTodo({
        id: new Date().getTime(),
        title: todo,
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />

      <button onClick={handleAddTodo}>추가</button>
    </div>
  );
}

export default AddForm;

import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/modules/todos";
import { useState } from "react";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [inputValue, setInputValue] = useState("");
  const [selectedTodoId, setSelectedTodoId] = useState(null);

  const handleDeleteClick = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditClick = (id) => {
    /* 
       1번 수정눌렀을 때 input이 열리고
       
       inputValue를 수정하고 2번째로 수정버튼을 클릭했을 때
       if분기점에서 inputValue값을 todos값에 업데이트

       그외에 리스트에서 1번째 input수정을 누르고 2번째로 수정을 누르지않고
       다른 리스트의 수정버튼을 누르거나 혹은 2번째로 수정을 누르지않으면
       todos에 값이 업데이트 되지 않는 로직.
    */
    if (selectedTodoId === id) {
      dispatch(updateTodo({id, title: inputValue}))

      setSelectedTodoId(null);
      setInputValue("");
      return;
    }

    setSelectedTodoId(id); // 선택한 TodoId 저장
    const currentTodo = todos.find((todo) => todo.id === id);
    // 기존 todo.id값에서 현재 id값이 매칭되면 해당 title 상태변경
    setInputValue(currentTodo.title);
  };

  return (
    <div>
      {todos.map((todo, idx) => {
        return (
          <div key={todo.id} className="todo__list__wrap">
            {todo.id === selectedTodoId ? (
              <input
                data-id={idx}
                type="text"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
            ) : (
              <p>{todo.title}</p>
            )}

            <div className="todo__button__wrap">
              <button onClick={() => handleEditClick(todo.id)}>수정</button>
              <button onClick={() => handleDeleteClick(todo.id)}>삭제</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;

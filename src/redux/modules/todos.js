import { v4 as uuidv4 } from "uuid";

// state init
const initialState = [
  {
    id: uuidv4(),
    title: "react를 배워봅시다.",
  },

  {
    id: uuidv4(),
    title: "redux를 배워봅시다.",
  },
];

// action type
const ADD_TODO = "ADD_TODO";
const UPDATED_TODO = "UPDATED_TODO";
const DELETE_TODO = "DELETE_TODO";

// action createors 정의하고 export
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: UPDATED_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state];

    case UPDATED_TODO:
      return state.map(todo => todo.id === action.payload.id? {...todo, title: action.payload.title} : todo);
      // )); //action.payload에서 수정할 타이틀과 아이디를 전달받고 기존 todo.id와 매칭되면 수정.

    case DELETE_TODO:
      return state.filter((todo) => (todo.id !== action.payload));
      // todo.id와 payload로 받은 삭제id 값으로
      // 이전 상태값에서 삭제id를 제외한 나머지 값을 필터링한다.

    default:
      return state; // read 포함
  }
};

export default todos;

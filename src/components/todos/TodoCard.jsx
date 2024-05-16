function TodoCard({ todo, markAsDone, deleteTodo, isDone }) {
  return (
    <>
      {todo && (
        <div className="list__card__items">
          <div className="card__items__info">
            <div className="items__info__words">
              <span>{todo.title}</span>
              <p>{todo.content}</p>
            </div>

            <div className="items__info__btns">
              <button
                type="button"
                className="info__btns--del"
                onClick={deleteTodo}
              >
                삭제하기
              </button>

              <button
                type="button"
                className="info__btns--done"
                onClick={markAsDone}
              >
                {isDone ? "취소" : "완료"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TodoCard;

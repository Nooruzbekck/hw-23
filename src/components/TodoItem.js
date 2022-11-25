import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/reducers/todoSlice";
import "./TodoItem.css";

function TodoItem() {
  const { todo, isChecked } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  // const deleteHandler = ({ id, isChecked }) => {
  //   dispatch(todoActions.deleteTodo({ id: id, isChecked: isChecked }));
  // };

  return (
    <div>
      {todo.map((item) => (
        <ul key={item.id}>
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => dispatch(todoActions.toggleStatus(item.id))}
            />
            <span>{item.text}</span>
            <button
              onClick={() =>
                dispatch(
                  todoActions.deleteTodo({
                    id: item.id,
                    isChecked: item.isChecked,
                  })
                )
              }
            >
              delete
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default TodoItem;

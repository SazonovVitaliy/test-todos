import { FC } from "react";
import styles from "./TodoItem.module.css";
import { useAppDispatch } from "../../hooks/redux";
import { completeTodo, removeTodo } from "../../store/todoSlice";
import { ITodo } from "../../types";

const TodoItem: FC<ITodo> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  const handleChecked = (id: number) => {
    dispatch(completeTodo(id));
  };
  const handleRemove = (id: number) => {
    dispatch(removeTodo(id));
  };
  return (
    <li className={styles.todoitem}>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => handleChecked(id)}
        />
        <div className={completed ? styles.title_checked : styles.title}>
          {title}
        </div>
      </div>
      <button className={styles.btn} onClick={() => handleRemove(id)}>
        &times;
      </button>
    </li>
  );
};

export default TodoItem;

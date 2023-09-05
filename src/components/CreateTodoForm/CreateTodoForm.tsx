import { FC, useState } from "react";
import styles from "./CreateTodoForm.module.css";
import { useAppDispatch } from "../../hooks/redux";
import { addTodo } from "../../store/todoSlice";

const CreateTodoForm: FC = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");

  const handleCreateTodo = () => {
    title.length && dispatch(addTodo(title));
    setTitle("");
  };

  return (
    <div className={styles.form}>
      <label>
        <input
          className={styles.form__input}
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className={styles.form__btn} onClick={handleCreateTodo}>
          Add todo
        </button>
      </label>
    </div>
  );
};

export default CreateTodoForm;

import { FC, useEffect, useState } from "react";
import styles from "./TodoList.module.css";
import { useAppSelector } from "../../hooks/redux";
import { ITodo } from "../../types";
import FilterBar from "../FilterBar/FilterBar";
import TodoItem from "../TodoItem/TodoItem";

const TodoList: FC = () => {
  const todos = useAppSelector((state) => state.todos.list);
  const [filtered, setFiltered] = useState<ITodo[]>(todos);

  const todosFilter = (status: string | boolean) => {
    if (status === "all") {
      setFiltered(todos);
    } else {
      let newTodos = [...todos].filter((todo) => todo.completed === status);
      setFiltered(newTodos);
    }
  };

  useEffect(() => {
    setFiltered(todos);
  }, [todos]);

  return (
    <>
      <ul className={styles.list}>
        {filtered.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
      <FilterBar todosFilter={todosFilter} />
    </>
  );
};

export default TodoList;

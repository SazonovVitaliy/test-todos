import { FC } from "react";
import styles from "./FilterBar.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { removeCompletedTodo } from "../../store/todoSlice";
import { FilterBarProps } from "./FilterBar.props";

const FilterBar: FC<FilterBarProps> = ({ todosFilter }) => {
  const { list: todos } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  const removeCompletedtodos = () => {
    dispatch(removeCompletedTodo());
  };
  const viewAllTodos = () => {
    todosFilter("all");
  };
  const viewCompletedTodos = () => {
    todosFilter(true);
  };
  const viewActiveTodos = () => {
    todosFilter(false);
  };
  const itemsLeft = todos.filter((todo) => todo.completed === !true);
  return (
    <div className={styles.filterbar}>
      <div>{itemsLeft.length} items left</div>
      <div>
        <button className={styles.filterbar__btn} onClick={viewAllTodos}>
          All
        </button>
        <button className={styles.filterbar__btn} onClick={viewActiveTodos}>
          Active
        </button>
        <button className={styles.filterbar__btn} onClick={viewCompletedTodos}>
          Completed
        </button>
      </div>
      <button
        className={styles.filterbar__btn_clear}
        onClick={removeCompletedtodos}
      >
        Clear completed
      </button>
    </div>
  );
};

export default FilterBar;

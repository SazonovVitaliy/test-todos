import todoReducer, {
  addTodo,
  completeTodo,
  removeCompletedTodo,
  removeTodo,
} from "../todoSlice";

const state = { list: [] };

describe("todoSlice", () => {
  it("should return default state when passed an empty action", () => {
    const result = todoReducer(undefined, { type: "" });

    expect(result).toEqual(state);
  });

  it("should return new todo item with 'addTodo' action", () => {
    const action = { type: addTodo.type, payload: "redux" };

    const result = todoReducer(state, action);

    expect(result.list[0].title).toBe("redux");
    expect(result.list[0].completed).toBe(false);
  });

  it("should toggle completed status with 'completeTodo' action", () => {
    const todos = { list: [{ id: 1111, title: "redux", completed: false }] };
    const action = { type: completeTodo.type, payload: 1111 };

    const result = todoReducer(todos, action);

    expect(result.list[0].completed).toBe(true);
  });

  it("should remove by id whit 'removeTodo' action", () => {
    const todos = { list: [{ id: 1111, title: "redux", completed: false }] };
    const action = { type: removeTodo.type, payload: 1111 };

    const result = todoReducer(todos, action);

    expect(result.list).toEqual(state.list);
  });
  it("should remove by status whit 'removeCompletedTodo' action", () => {
    const todos = {
      list: [
        { id: 1111, title: "redux", completed: false },
        { id: 2222, title: "redux-toolkit", completed: true },
        { id: 3333, title: "react", completed: true },
      ],
    };

    const todosWithoutCompleted = [
      { id: 1111, title: "redux", completed: false },
    ];

    const action = { type: removeCompletedTodo.type };

    const result = todoReducer(todos, action);

    expect(result.list).toEqual(todosWithoutCompleted);
  });
});

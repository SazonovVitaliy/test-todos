import CreateTodoForm from "./components/CreateTodoForm/CreateTodoForm";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  return (
    <>
      <h1>todos</h1>
      <div className="todos">
        <CreateTodoForm />
        <TodoList />
      </div>
    </>
  );
};

export default App;

export interface CreateTodoFormProps {
  value: string;
  createTitle: (title: string) => void;
  handleCreateTodo: () => void;
}

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodos {
  list: ITodo[];
}

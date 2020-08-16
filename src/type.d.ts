import { Action, ActionOn } from "easy-peasy";

export interface Todo {
  id: string;
  desc: string;
  isComplete: boolean;
}

export interface State {
  todos: Todo[];
  selectedTodo: string | null;
  counter: number;
}

export interface TodosModel {
  items: Todo[];
  addTodo: Action<TodosModel, { desc: string }>;
  deleteTodo: Action<TodosModel, { id: string }>;
  editTodo: Action<TodosModel, { id: string; desc: string }>;
  toggleTodo: Action<TodosModel, { id: string }>;
}

export interface SelectedTodoModel {
  id: string | null;
  selectTodo: Action<SelectedTodoModel, { id: string }>;
}

export interface CounterModel {
  value: number;
  updateCounterOnAdd: ActionOn<CounterModel, StoreModel>;
  updateCounterOnEdit: ActionOn<CounterModel, StoreModel>;
  updateCounterOnDelete: ActionOn<CounterModel, StoreModel>;
  updateCounterOnToggle: ActionOn<CounterModel, StoreModel>;
}

interface StoreModel {
  todos: TodosModel;
  selectedTodo: SelectedTodoModel;
  counter: CounterModel;
}

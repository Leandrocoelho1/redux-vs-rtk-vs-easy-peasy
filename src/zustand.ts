/* eslint-disable no-param-reassign */
import produce from "immer";
import create, { SetState, GetState, StoreApi, StateCreator } from "zustand";
import { v1 as uuid } from "uuid";

import { Todo } from "./type";

const immer = <T>(config: StateCreator<T>) => (
  set: (fn: (partial: T) => void) => void,
  get: GetState<T>,
  api: StoreApi<T>
) => config((fn: any) => set(produce(fn)), get, api);

interface State {
  todos: Todo[];
  selectedTodo: string | null;
  counter: number;
  addTodo: (descritption: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, descritption: string) => void;
  toggleTodo: (id: string) => void;
  selectTodo: (id: string) => void;
}

const store = (set: SetState<State>): State => ({
  todos: [
    {
      id: uuid(),
      desc: "LEk",
      isComplete: true,
    },
    {
      id: uuid(),
      desc: "Learn Redux",
      isComplete: true,
    },
    {
      id: uuid(),
      desc: "Learn Redux-ToolKit",
      isComplete: false,
    },
  ],
  selectedTodo: null,
  counter: 0,
  addTodo: (description: string) =>
    set((state: State) => {
      const todo = { id: uuid(), desc: description, isComplete: false };
      state.todos.push(todo);
      state.counter += 1;
    }),
  deleteTodo: (id: string) =>
    set((state: State) => {
      const index = state.todos.findIndex((todo: Todo) => todo.id === id);
      state.todos.splice(index, 1);
      state.counter += 1;
    }),
  editTodo: (id: string, description: string) =>
    set((state: State) => {
      const todoToEdit = state.todos.find((todo: Todo) => todo.id === id);
      if (todoToEdit) {
        todoToEdit.desc = description;
      }
      state.counter += 1;
    }),
  toggleTodo: (id: string) =>
    set((state: State) => {
      const todoToToggle = state.todos.find((todo: Todo) => todo.id === id);
      if (todoToToggle) {
        todoToToggle.isComplete = !todoToToggle.isComplete;
      }
      state.counter += 1;
    }),
  selectTodo: (id: string) =>
    set((state: State) => {
      if (id.length) {
        state.selectedTodo = id;
      } else {
        state.selectedTodo = null;
      }
    }),
});

const [useStore] = create<State>(immer(store));

export default useStore;

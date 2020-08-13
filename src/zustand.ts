import produce from "immer";
import create from "zustand";
import { v1 as uuid } from "uuid";

import { Todo } from "./type";

const immer = (config: any) => (set: any, get: any, api: any) =>
  config((fn: any) => set(produce(fn)), get, api);

const store = (set: any, get: any) => ({
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
    set((state: any) => {
      const todo = { id: uuid(), desc: description, isComplete: false };
      state.todos.push(todo);
      state.counter++;
    }),
  deleteTodo: (id: string) =>
    set((state: any) => {
      const index = state.todos.findIndex((todo: any) => todo.id === id);
      state.todos.splice(index, 1);
      state.counter++;
    }),
  editTodo: (id: string, description: string) =>
    set((state: any) => {
      const todoToEdit = state.todos.find((todo: any) => todo.id === id);
      if (todoToEdit) {
        todoToEdit.desc = description;
      }
      state.counter++;
    }),
  toggleTodo: (id: string) =>
    set((state: any) => {
      const todoToToggle = state.todos.find((todo: any) => todo.id === id);
      if (todoToToggle) {
        todoToToggle.isComplete = !todoToToggle.isComplete;
      }
      state.counter++;
    }),
  selectTodo: (id: string) =>
    set((state: any) => {
      if (id.length) {
        state.selectedTodo = id;
      } else {
        state.selectedTodo = null;
      }
    }),
});

const [useStore] = create(immer(store));

export default useStore;

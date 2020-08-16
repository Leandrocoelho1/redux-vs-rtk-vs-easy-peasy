/* eslint-disable no-param-reassign */
import { createStore, action, actionOn, createTypedHooks } from "easy-peasy";
import { v1 as uuid } from "uuid";

import {
  Todo,
  StoreModel,
  TodosModel,
  CounterModel,
  SelectedTodoModel,
} from "./type";

const todosInitialState: Todo[] = [
  {
    id: uuid(),
    desc: "Learn React",
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
];

const todos: TodosModel = {
  items: todosInitialState,
  addTodo: action((state, { desc }) => {
    const todo = { id: uuid(), desc, isComplete: false };
    state.items.push(todo);
  }),
  deleteTodo: action((state, { id }) => {
    const index = state.items.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      state.items.splice(index, 1);
    }
  }),
  editTodo: action((state, { id, desc }) => {
    const todoToEdit = state.items.find((todo) => todo.id === id);
    if (todoToEdit) {
      todoToEdit.desc = desc;
    }
  }),
  toggleTodo: action((state, { id }) => {
    const todoToToggle = state.items.find((todo) => todo.id === id);
    if (todoToToggle) {
      todoToToggle.isComplete = !todoToToggle.isComplete;
    }
  }),
};

const selectedTodo: SelectedTodoModel = {
  id: null,
  selectTodo: action((state, { id }) => {
    id.length ? (state.id = id) : (state.id = null);
  }),
};

const counter: CounterModel = {
  value: 0,

  updateCounterOnAdd: actionOn(
    (actions, storeActions) => storeActions.todos.addTodo,
    (state) => {
      state.value += 1;
    }
  ),
  updateCounterOnEdit: actionOn(
    (actions, storeActions) => storeActions.todos.editTodo,
    (state) => {
      state.value += 1;
    }
  ),
  updateCounterOnDelete: actionOn(
    (actions, storeActions) => storeActions.todos.deleteTodo,
    (state) => {
      state.value += 1;
    }
  ),
  updateCounterOnToggle: actionOn(
    (actions, storeActions) => storeActions.todos.toggleTodo,
    (state) => {
      state.value += 1;
    }
  ),
};

const model: StoreModel = {
  todos,
  selectedTodo,
  counter,
};

const store = createStore(model);
export default store;

const typedHooks = createTypedHooks<StoreModel>();
export const { useStoreActions, useStoreDispatch, useStoreState } = typedHooks;

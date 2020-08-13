import React from "react";
import { AnimatePresence } from "framer-motion";
import { MdModeEdit, MdDelete } from "react-icons/md";
// For Redux and RTK
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodoActionCreator,
  toggleTodoActionCreator,
  selectTodoActionCreator,
} from "../../redux-og";

import { State, Todo as TodoType } from "../../type";
import { Container, TodoContainer } from "./styles";
import Checkbox from "../Checkbox";

interface TodoProps {
  todo: TodoType;
  onEditClick: (id: string) => void;
  onDeleteClick: (id: string) => void;
  onToggleClick: (todo: TodoType) => void;
}

const Todo: React.FC<TodoProps> = ({
  todo,
  onEditClick,
  onDeleteClick,
  onToggleClick,
}) => {
  return (
    <TodoContainer
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      <Checkbox
        id={`checkbox-${todo.id}`}
        checked={todo.isComplete}
        onChange={() => onToggleClick(todo)}
      />
      <p>{todo.desc}</p>
      <div>
        <button onClick={() => onEditClick(todo.id)} type="button">
          <MdModeEdit size={20} />
        </button>
        <button onClick={() => onDeleteClick(todo.id)} type="button">
          <MdDelete size={20} />
        </button>
      </div>
    </TodoContainer>
  );
};

const Todos: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: State) => state.todos);

  const handleToggle = (todo: TodoType): void => {
    dispatch(
      toggleTodoActionCreator({ id: todo.id, isComplete: !todo.isComplete })
    );
  };

  const handleSelectToEdit = (id: string): void => {
    dispatch(selectTodoActionCreator({ id }));
  };

  const handleDelete = (id: string): void => {
    dispatch(deleteTodoActionCreator({ id }));
  };
  return (
    <Container>
      <h2>Your Todos</h2>
      <div>
        <AnimatePresence>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onEditClick={handleSelectToEdit}
              onDeleteClick={handleDelete}
              onToggleClick={handleToggle}
            />
          ))}
        </AnimatePresence>
      </div>
    </Container>
  );
};

export default Todos;

import React, {
  useState,
  FormEvent,
  ChangeEvent,
  useRef,
  useEffect,
} from "react";
import { MdAdd, MdCheck, MdClose } from "react-icons/md";
// For Redux and RTK
import { useSelector, useDispatch } from "react-redux";
import {
  createTodoActionCreator,
  editTodoActionCreator,
  selectTodoActionCreator,
} from "../../redux-og";

import { Todo, State } from "../../type";
import { Container } from "./styles";

const AddTodoForm: React.FC = () => {
  const dispatch = useDispatch();
  const addTodoInput = useRef<HTMLInputElement>(null);
  const [addTodoValue, setAddTodoValue] = useState<string>("");

  const handleNewInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setAddTodoValue(e.target.value);
  };

  const handleAddSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!addTodoValue.length) {
      addTodoInput?.current?.focus();
      return;
    }

    dispatch(createTodoActionCreator({ desc: addTodoValue }));
    setAddTodoValue("");
  };
  return (
    <>
      <h2>Add new Todo:</h2>
      <form onSubmit={handleAddSubmit}>
        <input
          ref={addTodoInput}
          type="text"
          value={addTodoValue}
          onChange={handleNewInputChange}
        />
        <button type="submit">
          <MdAdd size={20} />
        </button>
      </form>
    </>
  );
};

interface EditTodoProps {
  selectedTodo: Todo;
}

const EditTodoForm: React.FC<EditTodoProps> = ({ selectedTodo }) => {
  const dispatch = useDispatch();
  const editTodoInput = useRef<HTMLInputElement>(null);
  const [editTodoValue, setEditTodoValue] = useState<string>(selectedTodo.desc);

  const handleEditInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEditTodoValue(e.target.value);
  };

  const handleEditSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!editTodoValue.length) {
      editTodoInput?.current?.focus();
      return;
    }

    dispatch(
      editTodoActionCreator({ id: selectedTodo.id, desc: editTodoValue })
    );
    dispatch(selectTodoActionCreator({ id: "" }));
  };

  const handleCancelEdit = (): void => {
    dispatch(selectTodoActionCreator({ id: "" }));
  };

  useEffect(() => {
    editTodoInput?.current?.focus();
  }, []);
  return (
    <>
      <h2>Edit Todo:</h2>
      <form onSubmit={handleEditSubmit}>
        <input
          ref={editTodoInput}
          type="text"
          value={editTodoValue}
          onChange={handleEditInputChange}
        />
        <div>
          <button type="submit">
            <MdCheck size={20} />
          </button>
          <button onClick={handleCancelEdit} type="button">
            <MdClose size={20} />
          </button>
        </div>
      </form>
    </>
  );
};

const Form: React.FC = () => {
  const todos = useSelector((state: State) => state.todos);
  const selectedTodoId = useSelector((state: State) => state.selectedTodo);
  const selectedTodo =
    (selectedTodoId && todos.find((todo) => todo.id === selectedTodoId)) ||
    null;
  return (
    <Container>
      {selectedTodo ? (
        <EditTodoForm selectedTodo={selectedTodo} />
      ) : (
        <AddTodoForm />
      )}
    </Container>
  );
};

export default Form;

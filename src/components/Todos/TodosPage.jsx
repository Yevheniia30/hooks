import { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { toast } from 'react-toastify';

// import axios from 'axios';
import TodosInputForm from './TodosInputForm';
import TodosList from './TodosList';
import todosApi from '../../services/todos-api';
// import todosApiAdd from '../../services/todos-api';
// import todosApiDel from '../../services/todos-api';
// import todosApiUpdate from '../../services/todos-api';
import ModalTodos from './ModalTodos';

const TodosPage = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentTodo, setCurrentTodo] = useState();

  // добавление тодо в массив (кроме тех которые уже там есть)
  const handleSubmit = todo => {
    if (todos.find(({ value }) => value === todo.value)) {
      alert(`${todo.value} is already in list`);
    }

    setIsloading(true);

    todosApi
      .addTodo(todo)
      .then(todo => setTodos(prevstate => [todo, ...prevstate]))
      .catch(error => toast(error.message, { type: 'error' }))
      .finally(() => setIsloading(false));
  };

  // удаление тодо из массива
  const handleDeleteTodo = id => {
    setCurrentTodo(todos.find(todo => todo.id === id));
    setShowModal(true);
  };
  // setTodos(prevstate => prevstate.filter(todo => todo.id !== id));

  // отмена удаления тодо
  const handleCancelModal = () => {
    setShowModal(false);
  };

  // подтверждение удаления тодо
  const handleOkModal = () => {
    setShowModal(false);
    setIsloading(true);
    todosApi
      .deleteTodo(currentTodo.id)
      .then(id =>
        setTodos(prevstate => prevstate.filter(todo => todo.id !== id)),
      )
      .then(() =>
        toast(`${currentTodo.value} is succesfully deleted`, {
          type: 'success',
        }),
      )
      .catch(error => toast(error.message, { type: 'error' }))
      .finally(() => setIsloading(false));
  };
  // отметка сделанніх тодо \
  // меняем isDone и отправляем изменение на бекенд
  const handleToggleTodo = id => {
    const todo = todos.find(todo => todo.id === id);
    console.log(todo);
    setIsloading(true);

    todosApi
      .updateTodo(id, { isDone: !todo.isDone })
      .then(updatedTodo =>
        setTodos(prevstate =>
          prevstate.map(todo =>
            todo.id === updatedTodo.id ? updatedTodo : todo,
          ),
        ),
      )
      .catch(error => toast(error.message, { type: 'error' }))
      .finally(() => setIsloading(false));

    setTodos(prevstate =>
      prevstate.map(todo =>
        todo.id === id
          ? {
              ...todo,
              isDone: !todo.isDone,
            }
          : todo,
      ),
    );
  };

  // cохраняем данные из локалсторейдж (аналог didMount)
  // также запрос на апи
  useEffect(() => {
    // setTodos(JSON.parse(localStorage.getItem('todos')));
    setIsloading(true);
    todosApi
      .fetchTodos()
      .then(todos => setTodos(todos))
      .catch(error => toast(error.message, { type: 'error' }))
      .finally(() => setIsloading(false));
  }, []);

  // запишем тодо в локалсторейдж (аналог didUpdate)
  useEffect(() => {
    // localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todos">
      <h1>Todos</h1>
      <TodosInputForm onSubmit={handleSubmit} />
      {isLoading && <ClipLoader />}
      <TodosList
        todos={todos}
        onDelete={handleDeleteTodo}
        onToggle={handleToggleTodo}
      />
      {showModal && (
        <ModalTodos
          text={currentTodo.value}
          onCancel={handleCancelModal}
          onOk={handleOkModal}
        />
      )}
    </div>
  );
};

export default TodosPage;

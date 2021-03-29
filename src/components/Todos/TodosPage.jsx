import { useState, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

// import axios from 'axios';
import TodosInputForm from './TodosInputForm';
import TodosList from './TodosList';
import todosApi from '../../services/todos-api';
import todosApiAdd from '../../services/todos-api';

const TodosPage = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  // добавление тодо в массив (кроме тех которые уже там есть)
  const handleSubmit = todo => {
    if (todos.find(({ value }) => value === todo.value)) {
      alert(`${todo.value} is already in list`);
    }

    setIsloading(true);

    todosApiAdd
      .addTodo(todo)
      .then(todo => setTodos(prevstate => [todo, ...prevstate]))
      .catch(error => console.log(error.msg))
      .finally(() => setIsloading(false));
  };

  // удаление тодо из массива
  const handleDeleteTodo = id =>
    setTodos(prevstate => prevstate.filter(todo => todo.id !== id));

  // отметка сделанніх тодо
  const handleToggleTodo = id => {
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
      .catch(error => console.log(error.msg))
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
    </div>
  );
};

export default TodosPage;

import { useState, useEffect } from 'react';
import TodosInputForm from './TodosInputForm';
import TodosList from './TodosList';

const TodosPage = () => {
  const [todos, setTodos] = useState([]);

  // добавление тодо в массив (кроме тех которые уже там есть)
  const handleSubmit = todo => {
    if (todos.find(({ value }) => value === todo.value)) {
      alert(`${todo.value} is already in list`);
    }
    setTodos(prevstate => [todo, ...prevstate]);
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
  useEffect(() => {
    // setTodos(JSON.parse(localStorage.getItem('todos')));
  }, []);

  // запишем тодо в локалсторейдж (аналог didUpdate)
  useEffect(() => {
    // localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todos">
      <h1>Todos</h1>
      <TodosInputForm onSubmit={handleSubmit} />
      <TodosList
        todos={todos}
        onDelete={handleDeleteTodo}
        onToggle={handleToggleTodo}
      />
    </div>
  );
};

export default TodosPage;

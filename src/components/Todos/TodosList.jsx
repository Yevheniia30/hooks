import TodoItem from './TodoItem';

const TodosList = ({ todos, onDelete, onToggle }) => {
  return (
    <div className="todoslist">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodosList;

import TodosInputForm from './TodosInputForm';
import TodosList from './TodosList';

const TodosPage = () => {
  return (
    <div className="todos">
      <h1>Todos</h1>
      <TodosInputForm />
      <TodosList />
    </div>
  );
};

export default TodosPage;

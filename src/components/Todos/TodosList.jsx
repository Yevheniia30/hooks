import TodoItem from './TodoItem';
import { makeStyles } from '@material-ui/core/styles';

// import cat from '../../images/cat.jpg';

const useStyles = makeStyles({
  todosList: {
    width: 600,
  },
});

const TodosList = ({ todos, onDelete, onToggle }) => {
  const classes = useStyles();

  return (
    <div className={classes.todosList}>
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

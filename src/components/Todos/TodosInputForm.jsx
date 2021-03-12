import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  todosInputForm: {
    display: 'flex',
    flexDirection: 'column',
    width: 300,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    display: 'inline-flex',
  },
  formBtns: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  radioBtns: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const TodosInputForm = () => {
  const classes = useStyles();
  return (
    <div className={classes.todosInputForm}>
      <button type="submit" className="addTodoBtn">
        Add todo
      </button>
      <form className={classes.form}>
        <input type="text" className={classes.input} />
        <div className={classes.radioBtns}>
          <span>Urgency: </span>
          <label htmlFor="">
            <input type="radio"></input> low
          </label>
          <label htmlFor="">
            <input type="radio"></input> medium
          </label>
          <label htmlFor="">
            <input type="radio"></input> high
          </label>
        </div>
        <div className={classes.formBtns}>
          <button>Cancel</button>
          <button>Add todo</button>
        </div>
      </form>
    </div>
  );
};

export default TodosInputForm;

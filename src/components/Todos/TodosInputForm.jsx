import shortid from 'shortid';
import moment from 'moment';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
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

const TodosInputForm = ({ onSubmit }) => {
  const classes = useStyles();
  const [showForm, setShowForm] = useState(false);
  // стейт для инпута
  const [value = '', setValue] = useState();
  // стейт для чекбоксов (по умолчанию low)
  const [urgency, setUrgency] = useState('low');

  // при клике на кнопку меняем значение showform на тру т е открываем форму
  const toggleForm = () => setShowForm(prevValue => !prevValue);

  // меняем  значение инпута
  const handleInputChange = e => {
    setValue(e.target.value);
  };
  // переключение чекбоксов
  const handleUrgencyChange = e => setUrgency(e.target.value);

  // SUBMIT ФОРМЫ
  const handleSubmit = e => {
    e.preventDefault();

    // если поле ввода пустое, тодо не добавляется
    if (!value) {
      alert('Enter name');
      return;
    }

    // создаем тодошку
    const newTodo = {
      id: shortid.generate(),
      value,
      urgency,
      date: moment().format('YYYY/MM/DD hh:mm:ss'),
      isDone: false,
    };
    // console.log('todo:', newTodo);

    // отправка тодо в список
    onSubmit(newTodo);
    // чистим форму
    setValue('');
    setUrgency('low');
    setShowForm(false);
  };

  return (
    <div className={classes.todosInputForm}>
      {/* если showform true то показ фформу если нет то кнопку */}
      {showForm ? (
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            id="standard-basic"
            label="Enter to do"
            variant="standard"
            type="text"
            className={classes.input}
            value={value}
            onChange={handleInputChange}
          />
          <div className={classes.radioBtns}>
            <span>Urgency: </span>
            <label htmlFor="">
              <input
                type="radio"
                value="low"
                onChange={handleUrgencyChange}
                checked={urgency === 'low'}
              ></input>{' '}
              low
            </label>
            <label htmlFor="">
              <input
                type="radio"
                value="medium"
                onChange={handleUrgencyChange}
                checked={urgency === 'medium'}
              ></input>{' '}
              medium
            </label>
            <label htmlFor="">
              <input
                type="radio"
                value="high"
                onChange={handleUrgencyChange}
                checked={urgency === 'high'}
              ></input>{' '}
              high
            </label>
          </div>
          <div className={classes.formBtns}>
            <Button variant="contained" onClick={toggleForm}>
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Add todo
            </Button>
          </div>
        </form>
      ) : (
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className="addTodoBtn"
          onClick={toggleForm}
        >
          Add todo
        </Button>
      )}
    </div>
  );
};

export default TodosInputForm;

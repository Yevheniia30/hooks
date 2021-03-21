import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/DeleteTwoTone';
// import { IconButton } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import {
  CardActions,
  CardContent,
  CardActionArea,
  Card,
  Checkbox,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    backgroundColor: '#eeeeff',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const TodoItem = ({
  todo: { value, urgency, date, isDone, id },
  onToggle,
  onDelete,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <p>{value}</p>
          <p>Urgency: {urgency}</p>
          <p>Date: {date}</p>
        </CardContent>
        <Divider />
        <CardActions>
          <Checkbox
            type="checkbox"
            checked={isDone}
            onChange={() => onToggle(id)}
            color="default"
            inputProps={{ 'aria-label': 'checkbox with default color' }}
          />

          <DeleteIcon
            color="primary"
            onClick={() => onDelete(id)}
            aria-label="Delete todo"
          />
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

// для доступности кнопок-иконок пишем проптайп ариа лейбл
DeleteIcon.propTypes = {
  'aria-label': PropTypes.string.isRequired,
};

export default TodoItem;

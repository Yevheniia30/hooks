import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import Timer from './Timer';
import TimerHooks from './TimerHooks';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const TimerPage = () => {
  const [showTimer, setShowTimer] = useState(false);

  const classes = useStyles();

  const toggleCounter = () => setShowTimer(prevState => !prevState);

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={toggleCounter}>
        {/* если  showTimer true то показіваем Timer*/}
        {showTimer ? 'Hide' : 'Show'}
      </Button>
      {showTimer && <TimerHooks />}
    </div>
  );
};

export default TimerPage;

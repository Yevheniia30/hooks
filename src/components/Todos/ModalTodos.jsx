import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // width: '100vw',
    // height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: 500,
    height: 300,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});

const ModalTodos = ({ text, onOk, onCancel }) => {
  const classes = useStyles();

  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <h2>Do you really want to delete:</h2>
        <span>{text}</span>
        <span>?</span>
        <div className={classes.btns}>
          <button className={classes.btn} onClick={onOk}>
            Ok
          </button>
          <button className={classes.btn} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalTodos;

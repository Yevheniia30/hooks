import { Component } from 'react';
import s from './App.module.css';

// import Example from './components/Example/Example';
import TodosPage from './components/Todos/TodosPage';
import Modal from './components/Modal/Modal';
// import TimerPage from './components/Timer/TimerPage';

// import Clock from './components/Clock/Clock';

class App extends Component {
  state = {
    showModal: false,
  };

  // открыть.закрыть модалку
  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <div className={s.App}>
        {/* <Example /> */}
        <button type="button" className={s.open_btn} onClick={this.toggleModal}>
          Open modal
        </button>
        {/* если шоумодал тру то рендерим модалку */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1 className={s.main_title}>
              {' '}
              Привет это контент модалки как children
            </h1>
            <p className={s.text}>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum{' '}
            </p>
            <button
              type="button"
              className={s.close_btn}
              onClick={this.toggleModal}
            >
              Close
            </button>
          </Modal>
        )}
        {/* <TimerPage /> */}
        <TodosPage />
        {/* <Clock /> */}
      </div>
    );
  }
}

export default App;

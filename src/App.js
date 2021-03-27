import { Component } from 'react';
import s from './App.module.css';

// import Example from './components/Example/Example';
// import TodosPage from './components/Todos/TodosPage';
import Modal from './components/Modal/Modal';
// import TimerPage from './components/Timer/TimerPage';
// import ArticleList from './components/ArticleList/ArticlelIst';
// import Clock from './components/Clock/Clock';
import ImageGallery from './components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    showModal: false,
    articles: [],
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
              Привет это контент модалки как children
            </h1>
          </Modal>
        )}
        {/* <TimerPage /> */}
        {/* <TodosPage /> */}
        {/* <Clock /> */}
        {/* <ArticleList articles={this.state.articles} /> */}
        <ImageGallery />
      </div>
    );
  }
}

export default App;

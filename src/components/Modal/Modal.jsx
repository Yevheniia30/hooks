import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
    //   закрытие по нажатию esc (при монтировани вешаем слушатель)
    window.addEventListener('keydown', this.handleKeyDown);
  }

  // при размонтировании снимаем слушатель
  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  // ф-ция для подвешивания и снятия слушаетля при закрытии модалки кнопкой ESC
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      //   візіваем ф-цию onClose
      this.props.onClose();
    }
  };

  // закрытие модалки нажатием на бекдроп
  handleClickOnBackdrop = e => {
    // на что кликаем и на чем происходит собітие, должні біть равні
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
    console.log('click on bkdrop');
  };

  render() {
    return createPortal(
      <div className={s.modal_backdrop} onClick={this.handleClickOnBackdrop}>
        <div className={s.modal_content}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;

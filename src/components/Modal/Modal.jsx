import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');

    //   закрытие по нажатию esc
    window.addEventListener('keydown', this.handleKeyDown);
  }

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

  render() {
    return createPortal(
      <div className={s.modal_backdrop}>
        <div className={s.modal_content}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;

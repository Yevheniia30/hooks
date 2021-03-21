import React, { Component } from 'react';
import s from './Clock.module.css';

class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalid = null;

  componentDidMount() {
    console.log('setInterval');

    this.intervalid = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000,
    );
  }

  // при размонтировании снимаем  таймер, и после размонтировани он не вызывается
  componentWillUnmount() {
    clearInterval(this.intervalid);
  }

  render() {
    return <div className={s.clock}>{this.state.time}</div>;
  }
}

export default Clock;

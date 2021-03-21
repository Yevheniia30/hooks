import { Component } from 'react';

class Timer extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this.id = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }
  // удаляем таймер при размонтировании
  componentWillUnmount() {
    clearInterval(this.id);
  }

  render() {
    return (
      <div>
        <h1>Timer</h1>
        <p>{this.state.time}</p>
      </div>
    );
  }
}

export default Timer;

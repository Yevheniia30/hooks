import { useState, useEffect } from 'react';

const TimerHooks = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // в хуках нет ф-ций жизненного цикла, используем useeffect
  // c пустім массивом он работает как componentDidMount
  useEffect(() => {
    const id = setInterval(() => {
      console.log('effect');
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // удаляем таймер при размонтировании (аналог componentWillUnmount)
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h1>Timer</h1>
      <p>{time}</p>
    </div>
  );
};

export default TimerHooks;

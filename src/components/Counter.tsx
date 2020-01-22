import React, { useContext } from 'react';
import useCounter from '../hooks/useCounter';

type CounterProps = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onIncreaseBy: (diff: number) => void;
};

function Counter() {
  const { count, onIncrease, onDecrease, onIncreaseBy } = useCounter();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  );
}
export default Counter;

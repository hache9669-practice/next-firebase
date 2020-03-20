import * as React from 'react';
const { useState } = React;

type Props = {
    initial: number
}

export const CountButton = (props: Props) => {
  const [count, setCount] = useState(props.initial);

  return (
    <p>
      <button onClick={() => setCount(count=>count-1)}>-</button>
      <b>{count}</b>
      <button onClick={() => setCount(count => count+1)}>+</button>
    </p>
  );
};
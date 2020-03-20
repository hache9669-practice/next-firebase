import * as React from "react";
const { useState } = React;

type Props = {
  initial: number;
};

export const CountButton = (props: Props): JSX.Element => {
  const [count, setCount] = useState(props.initial);

  return (
    <p>
      <button onClick={(): void => setCount(count => count - 1)}>-</button>
      <b>{count}</b>
      <button onClick={(): void => setCount(count => count + 1)}>+</button>
    </p>
  );
};

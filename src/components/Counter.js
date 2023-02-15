import {useEffect, useState} from "react";

const Counter = () => {

  let [count, setCount] = useState(undefined);

  useEffect(() => {
    if (count === undefined) {
      alert('mounted object')
      count = 0;
    } else {
      alert(count);
      document.title = count;
    }
  }, [count]);

  return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
  );
}

export default Counter;
import * as React from 'react';
import useCounter from '../hooks/useCounter';

export default function CounterHooks() {

  const {value, increment, decrement, reset} = useCounter(0)
return (
  <div className="counter">
        <h1>{value}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>RESET</button>    
  </div>
  )
  
}

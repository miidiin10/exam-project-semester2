import * as React from 'react';
import useCounter from '../hooks/useCounter';
import { Helmet } from 'react-helmet'

export default function CounterHooks() {

  const {value, increment, decrement, reset, setValue} = useCounter(0)
return (
  <div className="counter">
    <Helmet>
        <title>CounterHooks</title>
        <meta name='description' content='Counter App using react hook' />
    </Helmet>
    
        <label>
                    {`Start counting from: `}
                <input 
                    placeholder={'enter your value'}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
      
                />
        </label>
        <h1>{value}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>RESET</button>    
  </div>
  )
  
}

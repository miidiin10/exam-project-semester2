import * as React from 'react';
import useCounter from '../hooks/useCounter';
import { Helmet } from 'react-helmet'
// import './App.css';

export default function CounterHooks() {

  const {value, increment, decrement, reset, setValue} = useCounter(0)
return (
  <div className="counterHook">
    <Helmet>
        <title>CounterHooks</title>
        <meta name='description' content='Counter App using react hook' />
    </Helmet>
    
        <babel>
                    {`Start counting from: `}
                <input 
                    placeholder={'enter your value'}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
      
                />
        </babel>
        <h1 className="every">{value}</h1>
        <button className="every" onClick={increment}>Increment</button>
        <button className="every" onClick={decrement}>Decrement</button>
        <button className="every" onClick={reset}>RESET</button>    
  </div>
  )
  
}

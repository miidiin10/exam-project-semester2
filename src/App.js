import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import useCounter from './hooks/useCounter';
// import countReducer from './hooks/countReducer';
import UseReducerHook from './components/UseReducerHook';


export function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    let nextState = reducer(state, action)
    setState(nextState)
  }

  return [state, dispatch]
}

function App() {

  

  const {value, increment, decrement, reset} = useCounter(0)



  return (
    <>
      <div className="counter">
        <h1>{value}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>RESET</button>
        
      </div>

      <UseReducerHook />
    </>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import useCounter from './hooks/useCounter';
// import countReducer from './hooks/countReducer';
import UseReducerHook from './components/UseReducerHook';
import CounterHooks from './components/CounterHooks'


export function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    let nextState = reducer(state, action)
    setState(nextState)
  }

  return [state, dispatch]
}

function App() {


  return (
    <>
      <CounterHooks />

      <UseReducerHook />
    </>
  );
}

export default App;
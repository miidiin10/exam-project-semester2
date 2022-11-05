import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import useCounter from './hooks/useCounter';


function App() {

  const {value, increment, decrement, reset} = useCounter(0)

  return (
    <>
      <div className="counter">
        <h1>{value}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>RESET</button>
        <Counter />
      </div>
    </>
  );
}

export default App;

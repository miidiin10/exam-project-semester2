import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//React-Router DOM
import {BrowserRouter as Router, Route, Routes,Link} from "react-router-dom"

//Components or 
import Home from "./components/Home";
import UseReducerHook from './components/UseReducerHook';
import CounterHooks from './components/CounterHooks'
import NotFound404 from './components/NotFound404'
import ErrorFallback from './components/ErrorFallback';

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
        <Router>
          <div>
        <ul>
          <li><Link to="/Home">Back to Home</Link></li>
          <li><Link to="/CounterHooks">Custom Hooks</Link></li>
          <li><Link to="/UseReducerHook">useReducer Hook</Link></li>
          <li><Link to="/ErrorFallback">Error Boundary</Link></li>

        </ul>
        </div>


        <Routes>
          <Route exact path="/Home" element={<Home />}/>
          <Route exact path="/CounterHooks" element={<CounterHooks />}/>
          <Route exact path="/UseReducerHook" element={<UseReducerHook />}/>
          <Route exact path="/ErrorFallback" element={<ErrorFallback />}/>
          <Route exact path="/*" element={<NotFound404 />}/>

        </Routes>
      </Router>
  );
}

export default App;
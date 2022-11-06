import { useState, useReducer, useEffect } from "react";
import React from "react";
import countReducer from "../hooks/countReducer";
import { Helmet } from 'react-helmet'


export default function UseReducerHook() {
  const [state, dispatch] = useReducer(countReducer, 0);
  // const [value, setValue] = useState(0);

  const handleChange = (event) => {
    state(event.target.value);
  };

  return (
    <div className="reduceCounter">
      <Helmet>
        <title>UseReducerHook</title>
        <meta name="description" content="Counter App using useReducer hook" />
      </Helmet>
      <label>
        {`Start counting from: `}
        <input
          placeholder={"enter your value"}
          value={state}
          onChange={handleChange}
        />
      </label>

      <h1>{state}</h1>
      <button onClick={() => dispatch("increment")}> + </button>
      <button onClick={() => dispatch("decrement")}> - </button>
      <button onClick={() => dispatch("reset")}> Reset </button>
    </div>
  );
}

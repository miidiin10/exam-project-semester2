import * as React from "react";


export default function countReducer(initialState = 0, action) {

  switch (action) {
    case 'increment':
      return initialState + 1;
    case 'decrement':
      return initialState - 1;
    case 'reset':
        return initialState - initialState;
    default:
        return initialState;
  }
}

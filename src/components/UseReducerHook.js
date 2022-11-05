import { useState, useReducer } from 'react'
import React from 'react'
import countReducer from '../hooks/countReducer'


export default function UseReducerHook() {

    const [state, dispatch] = useReducer(countReducer, 0);

  return (
    <div>
        <div className='reduceCounter'>
        <h1>{state}</h1>
        <button onClick={() => dispatch('increment')}> + </button>
        <button onClick={() => dispatch('decrement')}> - </button>
        <button onClick={() => dispatch('reset')}> Reset </button>
      </div>
    </div>
  )
}

import * as React from 'react'


//custom hook created

export default function useCounter(initialValue) {
    const [value, setValue] = React.useState(initialValue || 0)

    const increment = () => setValue((x) => x + 1)
    const decrement = () => setValue((x) => x - 1)
    const reset = () => setValue(initialValue || 0)
     

  return {
    value,
    increment,
    decrement,
    reset,
    setValue,
  }
}

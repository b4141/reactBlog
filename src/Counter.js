import { useState, useEffect } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('interval....');
      setCounter((prev) => prev + 1);
    }, 1000)
    return () => clearInterval(interval);
  }, [])

  return (
    <span>{counter}</span>
  )
}

export default Counter;

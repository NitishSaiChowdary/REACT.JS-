import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './slices/CounterSlice';
import Orders from './pages/Orders';

function App() {
  const counter = useSelector((state) => state.counter);
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();

  return (
    <>
      <p>Counter: {counter.value}</p>

      {/* <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button> */}

      <Orders/>
    </>
  )
}

export default App

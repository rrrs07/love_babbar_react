import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from "../redux/slices/CounterSlice";

const Counter = () => {

  const count = useSelector((state) => state.counter.value); // useSelector is a hook from react-redux that allows you to extract data from the Redux store state, using a selector function.

  const dispatch = useDispatch(); // useDispatch is a hook from react-redux that returns a reference to the dispatch function from the Redux store.


  return (
    <div className='flex flex-col justify-center items-center bg-slate-900 w-screen h-screen text-white font-bold text-3xl'>
      <button className='hover:bg-cyan-500 rounded-md p-2 bg-cyan-800 border border-white'
      onClick={() => dispatch(increment())}>
        Increment
      </button>
      <br />
      <br />

      <div className='rounded-full w-[120px] h-[120px]  bg-cyan-800 border border-white flex justify-center items-center'>{count}</div>
      <br />
      <br />

      <button className='hover:bg-cyan-500 rounded-md p-2 bg-cyan-800 border border-white'
      onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  )
}

export default Counter

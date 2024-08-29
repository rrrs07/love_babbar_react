import { useState } from 'react'
import Random from './components/Random'
import Tag from './components/Tag'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen flex flex-col background relative overflow-x-hidden items-center'>
      <h1 className='bg-white rounded-md w-11/12 text-center mt-[40px] text-3xl font-bold px-10 py-2 '>Random Gifs</h1>

      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">

        <Random />
        <Tag />
      </div>
    </div>
  )
}

export default App

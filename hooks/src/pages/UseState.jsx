import { useState } from 'react'
import { Button } from "../components"

export function UseState() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100'>
      <h1 className='text-4xl my-4'>{count}</h1>
      <section className='space-x-4'>

        <Button variant='outlined' onClick={increment}>
          Increment
        </Button>

        <Button variant='filled' onClick={reset}>
          Reset
        </Button>

        <Button variant='outlined' onClick={decrement}>
          Decrement
        </Button>

      </section>
    </main>
  )
}



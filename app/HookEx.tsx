import React from 'react'

function HookEx(): JSX.Element {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = React.useState<number>(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me!!
      </button>
    </div>
  )
}

export default HookEx

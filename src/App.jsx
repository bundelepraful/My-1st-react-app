import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1> My Counter App </h1>
      <h2> Count: {count} </h2>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>

       <button onClick={() => setCount(count - 1)}>
        -
      </button>

       <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;
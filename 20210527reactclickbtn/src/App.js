import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(()=> {
    if(count < 0) setCount(0);
  }, [count])
  
  function addCount() {
    setCount(count + 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div className="App">
      <button onClick={ addCount }>+1</button>
      <button onClick={ resetCount }>Reset</button>
      <h1>Count: { count }</h1>
    </div>
  );
}

export default App;

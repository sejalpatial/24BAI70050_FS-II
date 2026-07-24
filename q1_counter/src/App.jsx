import { useState } from 'react'
import './App.css'

function App() {

  const [addCount, setAddCount] = useState(10);
  const [minusCount, setMinusCount] = useState(10);

  const addButton = () => {
    setAddCount(addCount + 1);
  }

  const minusButton = () => {
    setMinusCount(minusCount - 1);
  }

  return (
    <>
      <h2>Add Count: {addCount}</h2>
      <h2>Minus Count: {minusCount}</h2>

      <button onClick={addButton}>
        Add {addCount}
      </button>

      <br /><br />

      <button onClick={minusButton}>
        Minus {minusCount}
      </button>
    </>
  );
}

export default App;
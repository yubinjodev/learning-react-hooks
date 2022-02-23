import {useState} from 'react'

export const State = () =>{
  const [counter, setCounter] = useState(0)
  const [input, setInput] = useState("I love React!")

  const increment = () => {
    setCounter(counter + 1)
  }
  
  const decrement = () => {
    setCounter(counter - 1)
  }

  const inputHandler = (e) =>{
    const newInput = e.target.value;
    setInput(newInput)
  }

  return(
    <div>
      <div>
        usetate is like a variable, and the set is used to change the value of the variable!
      </div>
      
      <div>
        <h1>Example Using Counter</h1>
        <h2>{counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <div>
        <h1>Example Using Input</h1>
        <input onChange={inputHandler}></input>
        <div>{input}</div>
      </div>      
    </div>
  )
}
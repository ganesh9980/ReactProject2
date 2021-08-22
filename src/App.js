import React from 'react'
import './App.css'
const App = () => {
  const [state, setstate] = React.useState("")
  const clear=()=>
  {
    setstate("");
  }
  const c=()=>
  {
    const newval=state.slice(0,-1);
    setstate(newval)
  }
  const value=(char)=>
  {
    setstate(state.concat(char))
  }
  const result = ()=>
  {
    try{
    setstate(eval(state).toString())
    }
    catch(err)
    {
      setstate("Error!!")
    }
  }
  return (
    <>
        <div className="container">
          <input type="text" class="para" value={state} />
          <div class="keypad">
          <button id="clear"  class="box" onClick={clear}>Clear</button>
          <button id="highlight"class="box" onClick={c}>c</button>
          <button id="highlight" class="box" onClick={()=>value("/")}>&divide;</button>
          <button class="box" onClick={()=>value("7")}>7</button>
          <button class="box" onClick={()=>value("8")}>8</button>
          <button class="box" onClick={()=>value("9")}>9</button>
          <button  id="highlight" class="box" onClick={()=>value("*")}>*</button>
          <button class="box" onClick={()=>value("4")}>4</button>
          <button class="box" onClick={()=>value("5")}>5</button>
          <button class="box" onClick={()=>value("6")}>6</button>
          <button id="highlight" class="box" onClick={()=>value("-")}>-</button>
          <button class="box" onClick={()=>value("1")}>1</button>
          <button class="box" onClick={()=>value("2")}>2</button>
          <button class="box" onClick={()=>value("3")}>3</button>
          <button id="highlight" class="box" onClick={()=>value("+")}>+</button>
          <button class="box" onClick={()=>value("0")}>0</button>
          <button class="box" onClick={()=>value(".")}>.</button>
          <button id="result"class="box" onClick={result}>=</button>
          </div>
        </div>
    </>
  )
}

export default App

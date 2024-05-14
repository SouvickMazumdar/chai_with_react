import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  
  let [counter,setCounter]=useState(5)//counter=variable; setCounter = function ; responsible for updation in counter variable; function name can be anything
  // let counter=5
  const addValue=()=>{
    // console.log("value added",Math.random());
    // console.log("Clicked",Math.random(),counter);
    // counter=counter+1
    if(counter==20)setCounter(20);//now value will not go above 20
    else
    setCounter(counter+1)
    
  }
  const removeValue=()=>{
    // console.log("value removed",Math.random());
    // console.log("Clicked",Math.random(),counter);
    // counter=counter-1
    if(counter==0)setCounter(0);//now value will not go below 0
    else
    setCounter(counter-1);

    
  }

  return (
    <>
      <h1>Chai ar react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br/>
      <button  onClick={removeValue}>Remove Value {counter}</button>
      </>
  )
}

export default App

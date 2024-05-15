import { useState } from "react"


function App() {
  const [color,setColor]=useState("maroon");//maroon will be the default

  return (
    <>
      <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}//double parenthesis hai toh variable ko use karne ke liye fir curly braces nhi chahiye
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shalow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={()=>{setColor("red")}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"red"}}>
              Red
          </button>
          <button
            onClick={()=>{setColor("green")}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"green"}}>
              Green
          </button>
          <button
            onClick={()=>{setColor("blue")}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"blue"}}>
              Blue
          </button>
          <button
            onClick={()=>{setColor("olive")}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"olive"}}>
              Olive
          </button>
          <button
            onClick={()=>{setColor("lavender")}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"lavender"}}>
              Lavender
          </button>
          <button
            onClick={()=>{setColor("black")}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"black"}}>
              Black
          </button>
          <button
            onClick={()=>{setColor("orange")}}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:"orange"}}>
              Orange
          </button>
        </div>
      </div>
    </>
  )
}

export default App

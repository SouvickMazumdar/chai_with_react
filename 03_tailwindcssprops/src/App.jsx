import { useState } from 'react'
import Cards from './components/Cards'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    age:21,
    name:'Souvick'
  }
  let newArr=[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p4 rounded-xl mb-4'>Tailwind Test</h1>
      <Cards userName="chaiaurcode" btnText="click me"someObj={myObj} someArr={newArr}/>
      <Cards userName="Souvick" btnText="Visit me"/>
    </>
  )
}

export default App

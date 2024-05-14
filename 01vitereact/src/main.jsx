import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

function MyApp(){
  return (
    <div>
    <h1>Custom App |chai</h1>
    </div>
  )
}
// const ReactElement={
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }
const anotherElement=(
  <a href="http://google.com" target='_blank'> Visit google</a>

)
const anotherUser="chai aur react"
const ReactElement=React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'click me to visit google',
  anotherElement//evaluated expression
)
// React.createElement(<type or tag>,<object or key>,<ref or text>,<props>)//arguments of createElement
ReactDOM.createRoot(document.getElementById('root')).render(
  
    // MyApp()
  ReactElement
)

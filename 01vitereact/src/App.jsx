
import Chai from "./chai"
function App() {
  const username="chai aur code"

  return (
   <>
   <h1>CHAI AUR REACT  {username}</h1>
   {/* inside {} we have to write only evaluated expression */}
   <p>test para</p>
   <Chai />
   </>
  )
}

export default App

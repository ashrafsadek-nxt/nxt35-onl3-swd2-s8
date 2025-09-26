

import "./App.css"

import Greeting from "./Prop/Greeting"
import M from "./Prop/M"
function App() {
  const handleHello = (name) => {
    alert(`how are you ${name}`);
  }
  
  return (
    <div className="app">
     
        <div className="main" >
          
      </div>
      
      
      <Greeting name="shosho" onHello={handleHello} />
      <M></M>
    </div>
  )
}

export default App


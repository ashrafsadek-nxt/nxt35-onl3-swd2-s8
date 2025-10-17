
import './App.css';
import Greeting from './prop/Greeting';
import X from './prop/X';
function App() {
  const handleHello = (name) => {
    alert(`how are you ${name}`);
  }

  return (
    <div>
      <Greeting name='ahmed aly amr ' onHello={handleHello}></Greeting>
      <X></X>
      
    </div>
  )
}

export default App

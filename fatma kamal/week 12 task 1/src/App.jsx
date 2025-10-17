
import './App.css'
import Content from './content/Content'
import Footer from './layouts/Footer/Footer'
import Header from './layouts/Header/Header'
import Navbar from './layouts/navbar/Navbar'
import Sidebar from './sidebar/Sidebar'

function App() {
  

  return (
    <>
      <div className='app'>
      <Navbar></Navbar>
      </div>
      <div className='main'>
        <Sidebar></Sidebar>
        <Content></Content>
        
      </div>
      <Footer></Footer>
    </>
  )
}

export default App

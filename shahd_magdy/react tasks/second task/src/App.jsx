
import Navbar from "./layout/navbar/navbar"
import Sidebar from "./sidebar/Sidebar"
import "./App.css"
import Content from "./content/Content"
import Footer from  "./Footer/Footer"
import Page from "./Page/Page"
function App() {
  
  return (
    <div className="app">
      <Navbar/>
        <div className="main" >
          <Sidebar></Sidebar>
          <Page></Page>
         
      </div>
      
      <Footer></Footer>
      
    </div>
  )
}

export default App


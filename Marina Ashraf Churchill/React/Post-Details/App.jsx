import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Home from './components/Home';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import About from './components/About'; 
// import Navbar from './components/Navbar';
import Contact from './components/Contact'; 
// import Posts from './components/Posts';
import NavTask from './components/NavTask';
import SideBar from './components/SideBar';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';
import { postsContext } from './Context/PostContext';
import NotFound from './NotFound';
function App() {

let postsData=[
    {
        id:1,
        title: " item 1",
        body: "jlk klk;; olkdkdkl jokokkl",
        image: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:437,cw:1125,ch:1125,q:80,w:1125/jwCisXTqtjfUuvo8PGYQpd.jpg",
    },
     {
        id:2,
        title:" item 2",
        body:"jlk klk;; olkdkdkl jokokkl",
          image: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:437,cw:1125,ch:1125,q:80,w:1125/jwCisXTqtjfUuvo8PGYQpd.jpg",
    },
     {
        id:3,
        title:" item 3",
        body:"jlk klk;; olkdkdkl jokokkl",
          image: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:437,cw:1125,ch:1125,q:80,w:1125/jwCisXTqtjfUuvo8PGYQpd.jpg",
    }

]
  return (
 
<BrowserRouter>

<div className='layout'>
<header className="navh">
<NavTask />
</header>
<div className="main">

  <aside className="sided"> 
    <SideBar />
    </aside>

<postsContext.Provider  value={postsData}>

<section className="displayElement">
  <Routes>
     <Route path="/" element={ <Home />}/>
         {/* <Route path="/about" element={<About/>} />
               <Route path="/contact" element={ <Contact />}/> */}
                <Route path="/posts" element={ <Posts/>}/>
                <Route  path="/PostDetails/:postId" element={<PostDetails />}></Route>
                <Route path="*" element={<NotFound />}></Route>
  </Routes>
</section>
</postsContext.Provider>
</div>

</div>


    </BrowserRouter>
  )
}

export default App

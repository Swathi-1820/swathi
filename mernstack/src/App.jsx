import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About.jsx'
import Navbar from './components/Navbar'
import {Route,Routes} from "react-router-dom"
import State from "./Hooks/State";
import Form from "./Hooks/Form";
import { useEffect } from 'react'
import Effects from './Hooks/Effects'
import Ref from './Hooks/Ref'
import Reducer from './Hooks/Reducer'
import Context from './Hooks/Context.jsx'
import Todos from './pages/Todos.jsx'


function App(){
  let name ='vijay'


  useEffect(()=>{
    console.log("Component mounted")
    return(()=>{
      console.log("component unmounted");    
    })
  },[])

  return(
    <>
        <Navbar/>
        <Routes>
          <Route path="/Home" element={<Home name={name}/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/state" element={<State/>}/>
          <Route path="/Form" element={<Form/>}/>
          <Route path="/effects" element ={<Effects/>}/>
          <Route path="/Ref" element ={<Ref/>}/>
          <Route path="/Reducer" element ={<Reducer/>}/>
          <Route path="/Context" element ={<Context/>}/>
          <Route path="/todos" element ={<Todos/>}/>
        </Routes>
          
        
        {/* <Home/>
        <About/>
        <ContactUs/> */}
    </>
  )
}


export default App;

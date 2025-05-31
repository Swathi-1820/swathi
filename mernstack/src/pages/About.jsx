import React, { useContext } from 'react'
import Context from '../Hooks/Context.jsx'




const About = () => {
  const {user,age,email}=useContext(Context)
  return (
    <div>
      <h1>I am {user}</h1>
      <h2>Age:{age}</h2>
      <h2>Email:{email}</h2>
    </div>
  )
}


export default About;
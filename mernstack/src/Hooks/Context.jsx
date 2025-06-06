import React, { createContext } from 'react'


const Context = createContext()


export const ContextProvider=({children})=>{
    let user= 'Ronaldo'
    let age= 40
    let email= 'ronaldo@gmail.com'
    let value={user,age,email}
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}


export default Context

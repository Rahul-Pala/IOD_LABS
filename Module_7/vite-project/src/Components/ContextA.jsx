import React, { useState } from 'react'
import ContextB from './ContextB'
import { createContext } from 'react'

export const userContext = createContext();


function ContextA() {

    const [user, setUser] = useState("Superman")
   return(

    <div>
        <h1>Component A</h1>
        <h2>{`Hello ${user}`}</h2>
        <userContext.Provider value={user}>
        <ContextB></ContextB>
        </userContext.Provider>
        

    </div>
   )
}

export default ContextA
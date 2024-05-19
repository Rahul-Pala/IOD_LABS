 import { useState } from 'react'

 function HookCounter3() {

    const [name, setName] = useState({ firstName: ' ', lastName: ' ' })

return(
    <form>
        <input
        type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})}> </input>
        
        <input
        type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}> </input>
        
        <p>Your Firstname is {name.firstName}</p>
        <p>Your Lastname is {name.lastName}</p>
        <h1>{JSON.stringify(name)}</h1>
       
    </form>
  )
}

export default HookCounter3 

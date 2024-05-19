import { useState, useEffect } from 'react'

function HookCounter4() 
{
    const [count, setcount] = useState(0)
    const [name, setname] = useState(' ')

    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `You clicked ${count} times`
    }, [count] //Specify the 2nd parameter to use Effect. This 2nd parameter is the Array of Values that the effect depends on. If
    // the values dont change between renders, the Effect is simply not run. 
)

return(
<div>
    <input type='text' value={name} onChange={e => setname(e.target.value)}></input>
    <button onClick={() => setcount(count + 1)}>Click {count} times </button>
</div>
)
}

export default HookCounter4;
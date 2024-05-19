import { useState } from "react";

function HookCounter()
{
    const [count,setcount] = useState(0) //This is Array Destructuring
    return(
     <button onClick={() => setcount(count + 1)}>count {count}</button>
    )
    
}
export default HookCounter
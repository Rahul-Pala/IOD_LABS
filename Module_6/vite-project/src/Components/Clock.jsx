import { useState, useEffect } from "react";

// Renders a digital time that updates every second
function Clock() {
   const [date, setDate] = useState(new Date());

   useEffect(() => { // first arg is usually an arrow function
      let clockinterval = setInterval(() => tick(), 1000);
       console.log('Clock component mounted');

       return () => {
        console.log('Clock component unmounted');
        clearInterval(clockinterval)
       }
    
   }, []); // second arg is an array of dependencies

   
   const tick = () => {
       setDate(new Date());
       console.log('tick'); // track the effect frequency
   };

   return (
       <div className="Clock">
           <h3>Digital Clock</h3>
           {date.toLocaleTimeString()}
       </div>
   );    
}
export default Clock

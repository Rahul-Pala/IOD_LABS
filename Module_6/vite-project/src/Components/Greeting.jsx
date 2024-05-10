function Greeting(props)  {/*Part 1*/}
{
    return(
<div>
      {props.name ? <h2>Hello: {props.name}</h2> : <h2>Hello World!</h2>} {/*Part 2 and 3*/}
      <br></br>
      {props.children}
</div>
)
}

export default Greeting
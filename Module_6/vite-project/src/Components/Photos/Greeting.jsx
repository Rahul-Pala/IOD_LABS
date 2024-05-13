function Greeting(props)
{
    return(
     <div>
      {props.name ? <h2>Hello: {props.name}</h2> : <h2>Hello World!</h2>}
      {props.children}
     </div>
)
}

export default Greeting
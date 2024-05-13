{/* function Greet()
{
    return(
            <h2>Greeting</h2>
    )
    
} */}

const Greet = (props) => {
return(
<div>
    <h2>Greeting {props.name} aka {props.heroname}</h2>
    {props.children}
</div>
)

}

export default Greet 
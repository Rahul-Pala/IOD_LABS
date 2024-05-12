import NamePart from "./NamePart"

function FullName(props)
{
    return(
        <div>
          Full Name: <NamePart value={props.firstName}></NamePart> <NamePart value={props.lastName}></NamePart>
        </div>
    )
}

export default FullName

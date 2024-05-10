import SchoolInfo from "./SchoolInfo";
import CollegeInfo from "./CollegeInfo";
import "../App.css";

function Userinfo (props)
{
    const divStyle = { border: '1px solid #aaa', margin: '1em', padding: '1em', background: '#efefef'}
        
return (
    <>
    <div className="componentBox">
    <p>This is user information components resource</p>
    <label>First name: </label><label>{props.firstName}</label>
    <br></br>
    <label>Last name: </label><label>{props.lastName}</label>
    {props.children}
    </div>
    <div style={{background:"skyblue", color:"whitesmoke"}}>
        <SchoolInfo></SchoolInfo>
        <br></br>
        <CollegeInfo></CollegeInfo>
    </div>
    <div style={divStyle}><h3>DivSstyle mode ON</h3>
    </div>
    </>

)

}

export default Userinfo
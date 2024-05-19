function LoginUncontrolledForm()
{

    function handleFoormSubmission(e)
    {
      e.preventDefault()
    }

    return(
        <form>
             <div>
            <label>User Name:</label>
            <input type="text"></input><br></br>
            <label>Email:</label>
            <input type="email"></input><br></br>
            <label>Password:</label>
            <input type="password"></input><br></br>
            <input type="submit" value="Submit"></input>
        </div>
        </form>

    )
}

export default LoginUncontrolledForm
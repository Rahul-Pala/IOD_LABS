import { useState } from "react"

function AddCatForm()
{
    const [nameElement, setName] =useState(" ")
    const [latinNameElement, setlatinNameEmail] =useState(" ")
    const [imageElement, setImage] =useState(" ")

    function handleFormSubmission()
    {
        let catsName = nameElement //document.getElementById("txtUserName").value;
        let latinName= latinNameElement   //document.getElementById("txtEmail").value;
        let catImage = imageElement //document.getElementById("txtPassword").value;
        alert(catsName + " " + latinName + " " + catImage)
    }


    return(
        <div>
        <label>Cat Name:</label>
        <input type="text" id="catName" value={nameElement} onChange={(e) => setName(e.target.value)}></input><br></br>
        <label>Cat Latin Name:</label>
        <input type="email" id="latinName" value={latinNameElement} onChange={(e) => setlatinNameEmail(e.target.value)}></input><br></br>
        <label>Cat Image:</label>
        <input type="Image" id="catImage" value={imageElement} onChange={(e) => setImage(e.target.value)}></input><br></br>
        <input type="button" onClick={handleFormSubmission} value="Submit"></input>
    </div>

    )
}
export default AddCatForm
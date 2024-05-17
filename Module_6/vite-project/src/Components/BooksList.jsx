function BooksList(props)
{
    function AddBook()
    {
        let BookTitle = document.getElementById("txtBooktitle").value
        alert(BookTitle)
    }
    return(
<>
    <ol>
        {props.books.map(book => (
            <li key={book}>{book}</li>
        ))}
    </ol>
    <div>
        <label>Book Title</label><input type="text" id="txtBookTitle"/>
    </div>
    <div>
        <button onClick={AddBook}>Add Book</button>
    </div>
</>
    )
}

export default BooksList;
import BooksList from "./BooksList"
import { useState } from "react";

function Books()
{
    let books = ["Money Magnet", "Rich Dad poor dad", "The Hunger Games"]

    const [booksList, SetBooksList] = useState(books)

    return(
        <BooksList books={books}></BooksList> 

    )
}
export default Books;
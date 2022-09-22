// import axios from "axios";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "../BookCard/BookCard";
import "./BooksPreview.scss";

function BooksPreview() {

    // const [books, setBooks] = useState([]);
    // useEffect(()=>{
    //     axios
    //         .get("http://localhost:8080/books")
    //         .then((response)=>{
    //             setBooks(response.data);
    //         })
    // }, [])

    // if(books === []) {
    //    return <p>loading</p>
    // }
  return (
    <div className="books-preview__background">
        <div className="books-preview">
            <h1 className="books-preview__title">Books</h1>
            <div className="books-preview__products">
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
            </div>
            <Link className="books-preview__link">See all books</Link>
        </div>
    </div>
  )
}

export default BooksPreview
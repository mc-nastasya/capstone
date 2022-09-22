import axios from "axios";
import { useEffect, useState } from "react";
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
    <div>
        {/* <h1>hello</h1> */}
        {/* {books.map((book)=>{ */}
        <BookCard/>
        {/* })} */}
    </div>
  )
}

export default BooksPreview
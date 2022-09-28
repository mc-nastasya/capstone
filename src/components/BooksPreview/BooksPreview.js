import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "../BookCard/BookCard";
import "./BooksPreview.scss";
import {scrollToTop} from '../../utilities/utilities';

function BooksPreview() {

  const [books, setBooks] = useState([]);

  //get 4 books from the list of books in database
  useEffect(()=>{
      axios
          .get(`${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/books-preview`)
          .then((response)=>{
              setBooks(response.data);
          })
  }, [])

  if(books === []) {
      return <p>Loading...</p>
  }

  return (
    <div className="books-preview__background">
        <div className="books-preview">
            <h1 className="books-preview__title">Books</h1>
            <div className="books-preview__products">
                {
                  books.map((book)=>{
                    return <BookCard key={book.id} book = {book}/>
                  })
                }
            </div>
            <Link to='/books' onClick={scrollToTop} className="books-preview__link">See all books</Link>
        </div>
    </div>
  )
}

export default BooksPreview
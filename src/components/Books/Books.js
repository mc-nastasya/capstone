import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Book from "../Book/Book";
import "./Books.scss";


function Books() {

  const [childrenBooks, setChildrenBooks] = useState();
  const [youngAdultBooks, setYoungAdultBooks] = useState();
  const [section, setSection] = useState(true);
  const [ books, setBooks] = useState();

    useEffect(()=>{
      axios
        .get(`${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/books/children`)
        .then((response)=>{
          setChildrenBooks(response.data);
          setBooks(response.data);
        })
    }, [])

    useEffect(()=>{
      axios
        .get(`${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/books/young-adult`)
        .then((response)=>{
          setYoungAdultBooks(response.data);
        })
    }, [])

    const changeBooks = () => {
      !section? setBooks(childrenBooks) : setBooks(youngAdultBooks);
    }

    const handleChange = () => {
      setSection(!section);
      changeBooks();
    }

    if(!books) {
      return <p>Loading...</p>
    }


    return (
      <div className="books__background">
          <div className="books">
              <div className="books__nav-bar">
                <p onClick={handleChange} className={`books__link ${section? 'books__link--active' : null}`}>Picture Books & Middle Grade</p>
                <p onClick={handleChange} className={`books__link ${!section? 'books__link--active' : null}`}>Young Adult</p>
              </div>
              <div className="books__list">
                {books.map((book)=>{
                  return <Book key={book.id} book={book} />
                })}
              </div>
            </div>
      </div>
    )
}

export default Books
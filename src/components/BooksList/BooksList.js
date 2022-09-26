import { useState } from 'react';
import BooksInWork from '../BooksInWork/BooksInWork';
import PrintedBooks from '../PrintedBooks/PrintedBooks';
import './BooksList.scss';

function BooksList() {
  const [section, setSection] = useState(false);

  const handleClick = () => {
    setSection(!section);
  }
  return (
    <div className='books-list'>
        <div className="books-list__nav">
            <p onClick={handleClick} className={`books-list__link ${section? null : 'books-list__link--active'}`}>Printed books</p>
            <p onClick={handleClick} className={`books-list__link ${!section? null : 'books-list__link--active'}`}>Books in work</p>
        </div>
        <div className='books-list__content'>
            {!section ? <PrintedBooks /> : <BooksInWork />}            
        </div>
    </div>
  )
}

export default BooksList
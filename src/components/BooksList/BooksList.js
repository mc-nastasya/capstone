import BooksInWork from '../BooksInWork/BooksInWork';
import PrintedBooks from '../PrintedBooks/PrintedBooks';
import './BooksList.scss';

function BooksList() {
  return (
    <div className='books-list'>
        <div className="books-list__nav">
            <p className="books-list__link books-list__link--active">Printed books</p>
            <p className="books-list__link books-list__link--active">Books in work</p>
        </div>
        <div className='books-list__content'>
            {/* <PrintedBooks /> */}
            <BooksInWork />
        </div>
    </div>
  )
}

export default BooksList
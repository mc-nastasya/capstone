import "./Book.scss";
import {scrollToTop} from '../../utilities/utilities';
import { Link} from "react-router-dom";

function Book({book}) {
    
  return (
    <div className="book">
        <img className="book__image" src={book.image} alt='cover' />
        <h2 className="book__title">{book.title.length > 25 ? `${book.title.substring(0, 25)}...` : book.title}</h2>
        <p className="book__description">
            {book.description.length > 100 ? `${book.description.substring(0, 100)}...` : book.description}
        </p>
        <Link to={`/book/${book.id}`} onClick={scrollToTop} className="book__learn-more">Learn more</Link>
    </div>
  )
}

export default Book

import "./BookCard.scss";
import { Link } from "react-router-dom";
import {scrollToTop} from '../../utilities/utilities';

function BookCard({book}) {
  return (
    <div className="book-card">
        <img src={book.image} alt="book" className="book-card__cover"/>
        <h3 className="book-card__title">{book.title}</h3>
        <Link onClick={scrollToTop} to={`/book/${book.id}`} className="book-card__link">Learn more</Link>
    </div>
  )
}

export default BookCard
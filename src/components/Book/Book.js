import "./Book.scss";
import Photo from "../../assets/images/DSC01579.jpg";
import {scrollToTop} from '../../utilities/utilities';
import { Link} from "react-router-dom";

function Book({book}) {
    const description = "A little bear doesn’t like to go to bed. Every night he lies without sleep, and then wanders sad and tired all day. But one night a moth flies into his room and everything changes";

  return (
    <div className="book">
        <img className="book__image" src={book.image} />
        <h2 className="book__title">{book.title}</h2>
        <p className="book__descriptoin">
            {book.description.length > 100 ? `${book.description.substring(0, 100)}...` : book.description}
        </p>
        <Link to={`/book/${book.id}`} onClick={scrollToTop} className="book__learn-more">Learn more</Link>
    </div>
  )
}

export default Book
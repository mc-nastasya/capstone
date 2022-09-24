import "./BookCard.scss";
import Sova from "../../assets/images/sovenya.jpg";
import { Link } from "react-router-dom";

function BookCard() {
  return (
    <div className="book-card">
        <img src={Sova} alt="owl book" className="book-card__cover"/>
        <h3 className="book-card__title">An Owlet who walked the echo</h3>
        <Link className="book-card__link">Learn more</Link>
    </div>
  )
}

export default BookCard
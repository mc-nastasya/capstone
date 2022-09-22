import "./BookCard.scss";
import Sova from "../../assets/images/sovenya.jpg";
import { Link } from "react-router-dom";

function BookCard() {
  return (
    <div className="book">
        <img src={Sova} alt="owl book" className="book__cover"/>
        <h3 className="book__title">An Owlet who walked the echo</h3>
        <Link className="book__link">Learn more</Link>
    </div>
  )
}

export default BookCard
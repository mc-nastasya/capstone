import { Link } from "react-router-dom";
import Book from "../Book/Book";
import "./Books.scss";


function Books() {


    return (
      <div className="books__background">
          <div className="books">
              <div className="books__nav-bar">
                <p className="books__link books__link--active">Picture Books & Middle Grade</p>
                <p className="books__link books__link--active">Young Adult</p>
              </div>
              <div className="books__list">
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
                <Book />
              </div>
            </div>
      </div>
    )
}

export default Books
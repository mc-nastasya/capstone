import "./Book.scss";
import Photo from "../../assets/images/DSC01579.jpg";

function Book() {
    const description = "A little bear doesn’t like to go to bed. Every night he lies without sleep, and then wanders sad and tired all day. But one night a moth flies into his room and everything changes";

  return (
    <div className="book">
        <img className="book__image" src={Photo} />
        <h2 className="book__title">Storybook “Bedtime reading”</h2>
        <p className="book__descriptoin">
            {description.length > 100 ? `${description.substring(0, 100)}...` : description}
        </p>
        <button className="book__learn-more">Learn more</button>
    </div>
  )
}

export default Book
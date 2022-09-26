import { Link } from 'react-router-dom';
import './BookComponent.scss';
import Sova from '../../assets/images/sovenya.jpg';

function BookComponent() {
  return (
    <div className='book-component__background'>
        <div className='book-component'>
            <div className='book-component__navigate'>
                <p className='book-component__back'>Back</p>
            </div>
            <div className='book-component__top'>
                <img src={Sova} alt='book cover' className='book-component__cover'/>
            </div>
            <div className='book-component__info'>
                <h1 className='book-component__title'>Hedgehog and the maple leaf</h1>
                <p className='book-component__description'>
                    Little hedgehog Greg forgot to wish his mom happy birthday. But he loves his mother very much and he did not want to upset her!
                </p>
                <p className='book-component__description'>
                    How will Greg make up for his blunder and what role will the red maple leaf play in this story? You will learn about it if you read the story of Eva Solska «Greg and the maple leaf» with amazing illustrations of Katerina Zotova.
                </p>
                <div className='book-component__buttons'>
                    <Link  className='book-component__link book-component__link--secondary'>Read Sample</Link>
                    <Link  className='book-component__link book-component__link--primary'>Buy on Amazon</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookComponent
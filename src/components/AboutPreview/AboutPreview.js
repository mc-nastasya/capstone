import './AboutPreview.scss';
import Portrait from "../../assets/images/portrait.png";
import { Link } from 'react-router-dom';

function AboutPreview() {
  return (
    <div className='author'>
        <div className='author__left'>
            <img src={Portrait} alt='author' className='author__image' />
            <p className='author__quote'>
                «If I were not a writer, I would become an actress, 
                musician or traveller. Although I still play and 
                travel all the time. And not only through the 
                pages of books.»
            </p>
        </div>
        <div className='author__right'>
            <h1 className='author__name'>Eva Solska</h1>
            <p className='author__quote'>
                Children’s writer, storyteller and traveller, 
                founder of the writing community «Geek Writers» 
                (Kharkiv) and the club of travelling writers 
                «Geek Writers Voyager Club»
            </p>
            <Link to='/about' className='author__read-more'>Read more about Eva</Link>
        </div>
    </div>
  )
}

export default AboutPreview
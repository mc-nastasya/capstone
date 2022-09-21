import './AboutPreview.scss';
import Portrait from "../../assets/images/portrait.png";
import { Link } from 'react-router-dom';

function AboutPreview() {
  return (
    <div className='author-container'>
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
                <p className='author__text'>
                    Children’s writer, storyteller and traveller, 
                    founder of the writing community «Geek Writers» 
                    (Kharkiv) and the club of travelling writers 
                    «Geek Writers Voyager Club».
                </p>
                <p className='author__text author__text--notmobile'>
                    Since 2017, she has worked as a children’s Ranker 
                    with the Ranok publishing house. The author of the 
                    fairy tales «Hedgehog and Maple Leaf,» «Kitten and 
                    Ladybug,» and «Lullaby for a Spider.», «The bear 
                    and the butterfly,» «Grigory and the rainbow,» «The owl 
                    that took the echo for a walk,» «Squirrels, skipper, 
                    albatross,» «Water frost and spring,» the cycle of teenage 
                    fantasies «Letty Gwyngyl.»
                </p>
                <p className='author__text author__text--notmobile'>
                    When she is not writing books or travelling, she usually 
                    teaches philosophy at the Kharkiv Regional Institute 
                    of Public Administration and arranges fabulous parties 
                    with her writer friends.
                </p>
                <Link to='/about' className='author__read-more'>Read more about Eva</Link>
            </div>
        </div>
    </div>
  )
}

export default AboutPreview
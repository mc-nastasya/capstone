import './Bio.scss';
import AuthorPhoto from '../../assets/images/photo.png';
import Divider from '../../assets/images/divider.png';
import Goblet from '../../assets/icons/goblet.svg';
import FAQPreview from '../FAQPreview/FAQPreview';

function Bio() {
  return (
    <div className='bio'>
        <div className='bio__image-container'>
            <img src={AuthorPhoto} alt='autor portrait' className='bio__image' />
        </div>
        <div className='bio__general'>
            <h1 className='bio__name'>Eva Solska</h1>
            <p className='bio__description'>
            Children’s writer, storyteller and traveller, 
            founder of the writing community «Geek Writers» 
            (Kharkiv) and the club of travelling writers «Geek 
            Writers Voyager Club».
            </p>
            <img className='bio__divider' src={Divider} alt='divider' />
            <p className='bio__text'>
                Graduated from Kharkiv Karazina University, 
                Faculty of Foreign Languages. At the beginning 
                of her professional activity, she worked in 
                international relations and travelled extensively. 
                Later, she became interested in modern philosophy, 
                defended her Ph.D. thesis and started an academic 
                career.
            </p>
            <p className='bio__text'>
                Since 2017, she has worked as a children’s Ranker 
                with the Ranok publishing house. The author of 
                the fairy tales «Hedgehog and Maple Leaf,» 
                «Kitten and Ladybug,» and «Lullaby for a Spider.», 
                «The bear and the butterfly,» «Grigory and 
                the rainbow,» «The owl that took the echo for 
                a walk,» «Squirrels, skipper, albatross,» 
                «Water frost and spring,» the cycle of teenage 
                fantasies «Letty Gwyngyl».
            </p>
            <div className='bio__info-card'>
                <img src={Goblet} alt='star' className='bio__goblet-icon'/>
                <p className='bio__info'>
                    In 2019, Eva Solska’s manuscript «Winged Kitsyk, 
                    Gergel and Zorya» won the literary contest «Write 
                    a book about me!»
                </p>
            </div>
            <p className='bio__text'>
                When she is not writing books or travelling, she usually 
                teaches philosophy at the Kharkiv Regional Institute 
                of Public Administration and arranges fabulous parties 
                with her writer friends.
            </p>
            <p className='bio__text'>
                She is fond of yoga, enjoys running in the evenings, 
                and is generally very fond of sports. She loves 
                opera and modern rock music. Speaks three foreign 
                languages.
            </p>
            <p className='bio__quote'>
                «Like Hemingway, I believe in „mot juste“ — the only 
                accurate word,» says the writer. — My greatest ambition 
                is learning to breathe life into words and write 
                heart-touching texts.»
            </p>
            <p className='bio__text'>
                She currently lives in Kharkiv with her husband, 
                daughter Khrystyna and cat Bonifatsii Romanovych.
            </p>
            <FAQPreview />
        </div>
    </div>
  )
}

export default Bio
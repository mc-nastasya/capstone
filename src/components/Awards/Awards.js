import './Awards.scss';
import Goblet from '../../assets/icons/goblet.svg';
import Star from '../../assets/icons/star.svg';

function Awards() {
  return (
    <div className='awards'>
        <h1 className='awards__title'>Awards</h1>
        <div className = "awards__card">
            <h4 className='awards__book-name'>Winged Moggy, Honking and the Star</h4>
            <div className='awards__pair'>
                <img src={Goblet} alt='goblet' className='awards__icon'/>
                <p className='awards__text'>
                     Winner of the Writing Competition 
                    “Write a book about me” 2019 (Ukraine)
                </p>
            </div>
        </div>
        <div className="awards__card">
            <h4 className='awards__book-name'>An Owlet who walked the echo</h4>
            <div className='awards__pair'>
                <img src={Star} alt='star' className='awards__icon'/>
                <p className='awards__text'>
                    Bestseller in 2019, 2020, 2021
                </p>
            </div>
            <div className='awards__pair'>
                <img src={Goblet} alt='goblet' className='awards__icon'/>
                <p className='awards__text'>
                    Nominee for the Lesya Ukrainka Government Prize (2022)
                </p>
            </div>
            <div className='awards__pair'>
                <img src={Goblet} alt='goblet' className='awards__icon'/>
                <p className='awards__text'>
                    Nominee for the Lesya Ukrainka Government Prize (2022)
                </p>
            </div>
        </div>
        <div className="awards__card">
            <h4 className='awards__book-name'>The Squirrels, The Skipper, The Albatross or a story about how snowboarding appeared</h4>
            <div className='awards__pair'>
                <img src={Star} alt='star' className='awards__icon'/>
                <p className='awards__text'>
                    Bestseller in 2020, 2021
                </p>
            </div>
            <div className='awards__pair'>
                <img src={Goblet} alt='goblet' className='awards__icon'/>
                <p className='awards__text'>
                    Longlist of the National Book Award “Espresso. The Reader Choice 2021”
                </p>
            </div>
        </div>
        <div className="awards__card">
            <h4 className='awards__book-name'>Kitten and Sunny</h4>
            <div className='awards__pair'>
                <img src={Star} alt='star' className='awards__icon'/>
                <p className='awards__text'>
                    Bestseller in 2019, 2020, 2021
                </p>
            </div>
            <div className='awards__pair'>
                <img src={Goblet} alt='goblet' className='awards__icon'/>
                <p className='awards__text'>
                    Longlist of the National Book Award “Espresso. The Reader Choice 2021”
                </p>
            </div>
        </div>
        <div className="awards__card">
            <h4 className='awards__book-name'>Hedgehog and the maple leaf</h4>
            <div className='awards__pair'>
                <img src={Star} alt='star' className='awards__icon'/>
                <p className='awards__text'>
                    Bestseller in 2019, 2020, 2021
                </p>
            </div>
            <div className='awards__pair'>
                <img src={Goblet} alt='goblet' className='awards__icon'/>
                <p className='awards__text'>
                    Longlist of the National Book Award “Espresso. The Reader Choice 2021”
                </p>
            </div>
        </div>
        <div className="awards__card">
            <h4 className='awards__book-name'>Storybook “Bedtime reading”</h4>
            <div className='awards__pair'>
                <img src={Star} alt='star' className='awards__icon'/>
                <p className='awards__text'>
                    Bestseller in 2020, 2021
                </p>
            </div>
        </div>
        <div className="awards__card">
            <h4 className='awards__book-name'>Letty Gwyngyll. Druid Cradle</h4>
            <div className='awards__pair'>
                <img src={Star} alt='star' className='awards__icon'/>
                <p className='awards__text'>
                    Top-5 of “Ranok” Publishing House in 2021
                </p>
            </div>
        </div>
    </div>
  )
}

export default Awards
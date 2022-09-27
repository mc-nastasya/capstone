import './UnsuccessModal.scss';
import UnsuccessImage from "../../assets/images/err.png";
import Cross from '../../assets/icons/cross.svg';
import Error from '../../assets/icons/error.svg'

function UnsuccessModal({setUnsuccess}) {

    const handleClick = (event) => {
        event.preventDefault();
        setUnsuccess(false);
    }
  return (
    <div className='unsuccess-modal'>
        <div className='unsuccess-modal__container'>
            <div className='unsuccess-modal__content'>
                <img onClick={handleClick} src={Cross} alt='cross' className="unsuccess-modal__cross" />
                <img className='unsuccess-modal__image' src={UnsuccessImage} alt='mice' />
                    <h2 className='unsuccess-modal__heading'>Something went wrong!</h2>
                <p className='unsuccess-modal__text'>Unfortunately, some error was happened. You can retry to send the letter by clicking button below.</p>
            </div>
            <button onClick={handleClick} className='unsuccess-modal__button'>Try again!</button>
        </div>
    </div>
  )
}

export default UnsuccessModal
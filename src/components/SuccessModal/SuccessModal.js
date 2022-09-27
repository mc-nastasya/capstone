import './SuccessModal.scss';
import SuccessImage from "../../assets/images/success.png";
import Cross from '../../assets/icons/cross.svg';

function SuccessModal({heading1, heading2, text, setSuccess}) {

    const handleClick = (event) => {
        event.preventDefault();
        setSuccess(false);
    }
  return (
    <div className='success-modal'>
        <div className='success-modal__container'>
            <div className='success-modal__content'>
                <img onClick={handleClick} src={Cross} alt='cross' className="success-modal__cross" />
                <img className='success-modal__image' src={SuccessImage} alt='kitten' />
                <h2 className='success-modal__heading'>{heading1}</h2>
                <h2 className='success-modal__heading'>{heading2}</h2>
                <p className='success-modal__text'>{text} </p>
            </div>
            <button onClick={handleClick} className='success-modal__button'>Great!</button>
        </div>
    </div>
  )
}

export default SuccessModal
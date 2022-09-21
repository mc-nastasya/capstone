import './EmailForm.scss';
import HedgehogMob from '../../assets/images/hedgehog.png';

function EmailForm() {
  return (
    <div className='email-form'>
        <div className='email-form__top'></div>
        <div className='email-form__bottom'>
            <h1 className='email-form__title'> Get book news first</h1>
            <img src={HedgehogMob} alt='hedgehog' className='email-form__image-mobile'/>
            <p className='email-form__description'>
                Book announcements, different literature events 
                and programs, sales for courses, TOP book 
                lists and much more! No spam :)
            </p>
            <form className='email-form__form'>
                <label className='email-form__label'> Your email</label>
                <input className='email-form__input' type="email" placeholder="my_email@example.com" />
                <button className='email-form__button'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default EmailForm
import './EmailForm.scss';
import HedgehogMob from '../../assets/images/hedgehog.png';
import HedgehogNotMob from '../../assets/images/hedgehog-notmob.png';
import { useState } from 'react';
import axios from 'axios';
import SuccessModal from '../SuccessModal/SuccessModal';
import UnsuccessModal from '../UnsuccessModal/UnsuccessModal';

function EmailForm() {

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [unsuccess, setUnsuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(false);

        const email = event.target.email.value;

        if(!email || !email.includes("@")) {
            setError(true);
            return
        }

        const newEmail = {
            email: email
        };

        axios
            .post(`${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/email`, newEmail)
            .then(()=>{
                setSuccess(true);
                event.target.email.value = "";
            })
            .catch((error)=>{
                console.log(error);
                setUnsuccess(true);
            })
    }

    const handleClick = ()=> {
        setError(false);
    }

    return (
        <div className='email-form'>
          {!success? null: <SuccessModal heading1='Great!' heading2='You successfully subscribed' text='Eva will send you the most important news!' setSuccess={setSuccess}/>}
          {!unsuccess? null : <UnsuccessModal setUnsuccess={setUnsuccess} />}
            <div className='email-form__top'></div>
            <div className='email-form__bottom-background'>
                <div className='email-form__bottom'>
                    <img src={HedgehogNotMob} alt='hedgehog' className='email-form__image-notmobile' />
                    <h1 className='email-form__title'> Get book news first</h1>
                    <img src={HedgehogMob} alt='hedgehog' className='email-form__image-mobile'/>
                    <p className='email-form__description'>
                        Book announcements, different literature events 
                        and programs, sales for courses, TOP book 
                        lists and much more! No spam :)
                    </p>
                    <form className='email-form__form'  onSubmit={handleSubmit}>
                        <label className='email-form__label'> Your email*</label>
                        <input className={`email-form__input ${error? "email-form__error-state" : null}`} name='email' type="text" placeholder="my_email@example.com" onClick={handleClick}/>
                        {error? <p className='email-form__error'>Enter valid email</p> : null}
                        <button type='submit' className='email-form__button'>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EmailForm;
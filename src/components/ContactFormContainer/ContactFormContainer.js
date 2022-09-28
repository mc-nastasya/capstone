import { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Profile from '../Profile/Profile';
import SuccessModal from '../SuccessModal/SuccessModal';
import UnsuccessModal from '../UnsuccessModal/UnsuccessModal';
import './ContactFormContainer.scss';

function ContactFormContainer({title, color}) {

  const [success, setSuccess] = useState(false);
  const [unsuccess, setUnsuccess] = useState(false);

  return (
    <div className='container__background'>
      <div className='container'>
          {!success? null: <SuccessModal heading1='Nice!' heading2='Your letter was sent' text='Eva will get it soon and would happily answer you.' button="Great!" setSuccess={setSuccess}/>}
          {!unsuccess? null : <UnsuccessModal setUnsuccess={setUnsuccess} />}
          <Profile />
          <ContactForm title={title} color={color} setSuccess={setSuccess} setUnsuccess={setUnsuccess}/>
      </div>
    </div>
  )
}

export default ContactFormContainer
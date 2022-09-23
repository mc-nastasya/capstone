import ContactForm from '../ContactForm/ContactForm';
import Profile from '../Profile/Profile';
import './ContactFormContainer.scss';

function ContactFormContainer({title}) {
  return (
    <div className='container__background'>
      <div className='container'>
          <Profile />
          <ContactForm title={title} />
      </div>
    </div>
  )
}

export default ContactFormContainer
import ContactForm from '../ContactForm/ContactForm';
import Profile from '../Profile/Profile';
import './ContactFormContainer.scss';

function ContactFormContainer() {
  return (
    <div className='container__background'>
      <div className='container'>
          <Profile />
          <ContactForm title="Contact" />
      </div>
    </div>
  )
}

export default ContactFormContainer
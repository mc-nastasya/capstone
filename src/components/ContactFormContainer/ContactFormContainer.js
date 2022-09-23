import ContactForm from '../ContactForm/ContactForm';
import Profile from '../Profile/Profile';
import './ContactFormContainer.scss';

function ContactFormContainer() {
  return (
    <div className='container'>
        <Profile />
        <ContactForm title="Contact" />
    </div>
  )
}

export default ContactFormContainer
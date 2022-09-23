import ContactForm from "../components/ContactForm/ContactForm"
import EmailForm from "../components/EmailForm/EmailForm"
import Profile from "../components/Profile/Profile"


function ContactPage() {
  return (
    <div>
        <Profile />
        <ContactForm title = "Contact"/>
        <EmailForm />
    </div>
  )
}

export default ContactPage
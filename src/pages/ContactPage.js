import ContactFormContainer from "../components/ContactFormContainer/ContactFormContainer";
import EmailForm from "../components/EmailForm/EmailForm";


function ContactPage() {
  return (
    <>
        <ContactFormContainer title="Contact" color='accent-2' />
        <EmailForm />
    </>
  )
}

export default ContactPage
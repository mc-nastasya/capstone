import ContactFormContainer from "../components/ContactFormContainer/ContactFormContainer";
import EmailForm from "../components/EmailForm/EmailForm";


function ContactPage() {
  return (
    <>
        <ContactFormContainer title="Contact" />
        <EmailForm />
    </>
  )
}

export default ContactPage
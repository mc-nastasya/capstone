import ContactFormContainer from "../components/ContactFormContainer/ContactFormContainer"
import FAQSection from "../components/FAQSection/FAQSection"

function FAQPage() {
  return (
    <>
        <FAQSection />
        <ContactFormContainer title="Another question?" color="accent-4" />
    </>
  )
}

export default FAQPage
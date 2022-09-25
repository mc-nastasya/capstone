import Awards from "../components/Awards/Awards"
import Bio from "../components/Bio/Bio"
import BooksList from "../components/BooksList/BooksList"
import Video from "../components/Video/Video"
import ContactFormContainer from '../components/ContactFormContainer/ContactFormContainer'


function AboutPage() {
  return (
    <>
        <Bio />
        <Video />
        <BooksList />
        <Awards />
        <ContactFormContainer title='Get in touch with Eva' color='accent-3'/>
    </>
  )
}

export default AboutPage
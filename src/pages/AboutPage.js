import Awards from "../components/Awards/Awards"
import Bio from "../components/Bio/Bio"
import BooksList from "../components/BooksList/BooksList"
import Video from "../components/Video/Video"


function AboutPage() {
  return (
    <>
        <Bio />
        <Video />
        <BooksList />
        <Awards />
    </>
  )
}

export default AboutPage
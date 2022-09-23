import "./FAQSection.scss";
import FAQCard from '../FAQCard/FAQCard';

function FAQSection() {

    const faq = [
        {
            id: "1",
            q: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            a: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        },
        {
            id: "2",
            q: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            a: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt Amet minim mollit non deserunt Amet minim mollit non deserunt Amet minim mollit non deserunt Amet minim mollit non deserunt"
        },
        {
            id: "3",
            q: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            a: "What are the three most important characteristics of this function? How would you stack rank yourself from strongest to least developed among these traits?"
        }
    ]
  return (
    <div className="faq">
        <h1 className="faq__title">Frequently Asked Questions to Eva</h1>
        {faq.map((pair , i)=>{
            return <FAQCard key={pair.id} i={i} pair={pair} />
        })}
    </div>
  )
}

export default FAQSection
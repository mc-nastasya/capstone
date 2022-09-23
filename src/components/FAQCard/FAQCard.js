import "./FAQCard.scss";

function FAQCard({pair, i}) {
  return (
    <div className="faq-card">
        <div className="faq-card__section">
            <h3 className="faq-card__title faq-card__question">{`Q${i+1}`}</h3>
            <p className="faq-card__text">{pair.q}</p>
        </div>
        <div className="faq-card__section">
            <h3 className="faq-card__title faq-card__answer">{`A${i+1}`}</h3>
            <p className="faq-card__text">{pair.a}</p>
        </div>
    </div>
  )
}

export default FAQCard
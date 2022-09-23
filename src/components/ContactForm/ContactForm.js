import "./ContactForm.scss";

function ContactForm({title, color}) {
  return (
    <div className="form">
        <h1 className={`form__title form__${color}`}>{title}</h1>
        <form className="form__form">
            <div className="form__name-container form__input-pair">
                <label className="form__label"> First Name*</label>
                <input type='text' className="form__input" placeholder="Zhong"/>
            </div>
            <div className="form__name-container form__input-pair">
                <label className="form__label" > Last Name</label>
                <input type='text' className="form__input"placeholder="Li"/>
            </div>
            <div className="form__input-pair">
                <label  className="form__label" > Email*</label>
                <input type='email' className="form__input" placeholder="my.e-mail@email.com"/>
            </div>
            <div className="form__input-pair">
                <label className="form__label" > Subject*</label>
                <input type='text' className="form__input" placeholder="School visit"/>
            </div>
            <div className="form__input-pair">
            <label className="form__label"> Message*</label>
                <textarea type='text' className="form__text" placeholder="Hi Eva! I'm writing you to..."/>
            </div>

            <button className="form__button">Send letter to Eva</button>
        </form>
    </div>
  )
}

export default ContactForm;
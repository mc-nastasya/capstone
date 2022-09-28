import axios from "axios";
import { useState } from "react";
import "./ContactForm.scss";

function ContactForm({title, color, setUnsuccess, setSuccess }) {

    //validation states
    const [firstNameValue, setFirstNameValue] = useState(true);
    const [emailValue, setEmailValue] = useState(true);
    const [subjectValue, setSubjectValue] = useState(true);
    const [messageValue, setMessageValue] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();

        const firstName = event.target.first_name.value;
        const lastName = event.target.last_name.value;
        const email = event.target.email.value;
        const subject = event.target.subject.value;
        const message = event.target.message.value;

        //validation
        //_____________________
        if(!firstName) {
            setFirstNameValue(false);
        }

        if(!email.includes("@")) {
            setEmailValue(false);
        }

        if(!subject) {
            setSubjectValue(false);
        }

        if(!message) {
            setMessageValue(false);
        }

        if(!message || !firstName || !email.includes("@") || !subject) {
            return ;
        }
        //validation ends
        //_____________________

        const newContact = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            subject: subject,
            message: message
        };

        axios
            .post(`${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/contact`, newContact)
            .then(()=>{
                setSuccess(true);
                event.target.first_name.value = "";
                event.target.last_name.value = "";
                event.target.email.value = "";
                event.target.subject.value = "";
                event.target.message.value = "";
            })
            .catch((error)=>{
                console.log(error);
                setUnsuccess(true);
            })

    }

    const handleClickName = ()=> {
        setFirstNameValue(true);
    }

    const handleClickEmail = ()=> {
        setEmailValue(true);
    }

    const handleClickSubject = ()=> {
        setSubjectValue(true);
    }

    const handleClickMessage = ()=> {
        setMessageValue(true);
    }

    return (
        <div className="form">
            <h1 className={`form__title form__${color}`}>{title}</h1>
            <form className="form__form" onSubmit={handleSubmit}>
                <div className="form__name-container form__input-pair">
                    <label className="form__label"> First Name*</label>
                    <input onClick={handleClickName} type='text' name='first_name' className={`form__input ${!firstNameValue? "form__error-state" : null}`} placeholder="Zhong"/>
                </div>
                <div className="form__name-container form__input-pair">
                    <label className="form__label" > Last Name</label>
                    <input type='text' name="last_name" className="form__input" placeholder="Li"/>
                </div>
                <div className="form__input-pair">
                    <label  className="form__label" > Email*</label>
                    <input onClick={handleClickEmail} type='text' name='email' className={`form__input ${!emailValue? "form__error-state" : null}`} placeholder="my.e-mail@email.com"/>
                </div>
                <div className="form__input-pair">
                    <label className="form__label" > Subject*</label>
                    <input onClick={handleClickSubject} type='text' name='subject' className={`form__input ${!subjectValue? "form__error-state" : null}`} placeholder="School visit"/>
                </div>
                <div className="form__input-pair">
                <label className="form__label"> Message*</label>
                    <textarea onClick={handleClickMessage} type='text' name='message' className={`form__text ${!messageValue? "form__error-state" : null}`} placeholder="Hi Eva! I'm writing you to..."/>
                </div>

                <button className="form__button" type="submit">Send letter to Eva</button>
            </form>
        </div>
    )
}

export default ContactForm;
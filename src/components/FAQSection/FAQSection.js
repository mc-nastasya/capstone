import "./FAQSection.scss";
import FAQCard from '../FAQCard/FAQCard';
import { useEffect, useState } from "react";
import axios from "axios";

function FAQSection() {

    const [faq, setFaq] = useState();

    useEffect(()=>{
        axios
            .get(`${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_PORT}/faq`)
            .then((response)=>{
                setFaq(response.data);
            })
    }, [])

    if(!faq) {
        return <p>Loading...</p>
    }


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
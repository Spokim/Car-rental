import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import './Faq.css';

export default function Faq() {
    const [activeAnswer, setActiveAnswer] = React.useState(0);

    const handleClick = (index) => {
        activeAnswer === index ? setActiveAnswer(3) : setActiveAnswer(index);
    }

    React.useEffect(() => {
        localStorage.setItem("activeAnswer", activeAnswer.toString());
    }, [activeAnswer])

    return (
        <section className="faq-section-container" id="faq-section">
            <div className="faq-background-picture">
                <div className="faq-headline-container">
                    <h3 className="h3">FAQ</h3>
                    <h2 className="h2">Frequently Asked Questions</h2>
                    <p>Frequently Asked Questions about Car's Car Rental Booking Process, Common Concerns, and Inquiries: Your Ultimate Guide</p>
                </div>
                <div className="faq-faqs-container">
                    <div className="faq-container" onClick={() => handleClick(0)}>
                        <div className={ activeAnswer === 0 ? "faq-question active-question" : "faq-question"}>
                            <p>1. Do you offer any additional services or packages with your car rentals?</p>
                            <FontAwesomeIcon icon={faAnglesDown} style={activeAnswer === 0 ? {color: "#ffffff"} : {color: "#ff3300"}} />
                        </div>
                        <div className={ activeAnswer === 0 ? "faq-answer active-answer" : "faq-answer" }>
                            <p>Yes, we offer a variety of additional services and packages to enhance your car rental experience. These may include options such as GPS navigation, additional drivers, and premium insurance coverage. You can customize your rental package based on your needs and preferences.</p>
                        </div>
                    </div>
                    <div className="faq-container" onClick={() => handleClick(1)}>
                        <div className={ activeAnswer === 1 ? "faq-question active-question" : "faq-question"}>
                            <p>2. Can I return the rental car to a different location than where I picked it up?</p>
                            <FontAwesomeIcon icon={faAnglesDown} style={activeAnswer === 1 ? {color: "#ffffff"} : {color: "#ff3300"}} />
                        </div>
                        <div className={ activeAnswer === 1 ? "faq-answer active-answer" : "faq-answer" }>
                            <p>Yes, in some cases, we may offer the option to return the rental car to a different location than where you picked it up, known as a one-way rental. However, additional fees or restrictions may apply, and availability may vary depending on the specific rental location and rental agreement. It's important to check the one-way rental policies and fees with our rental company at the time of booking.</p>
                        </div>
                    </div>
                    <div className="faq-container" onClick={() => handleClick(2)}>
                        <div className={ activeAnswer === 2 ? "faq-question active-question" : "faq-question"}>
                            <p>3. What is your cancellation and refund policy for car rentals?</p>
                            <FontAwesomeIcon icon={faAnglesDown} style={activeAnswer === 2 ? {color: "#ffffff"} : {color: "#ff3300"}} />
                        </div>
                        <div className={ activeAnswer === 2 ? "faq-answer active-answer" : "faq-answer" }>
                            <p>Our cancellation and refund policy for car rentals may vary depending on the specific rental location and booking terms. It's important to review the cancellation and refund policy at the time of booking or contact our customer service for details. In general, cancellation fees may apply if you cancel your reservation within a certain timeframe prior to the scheduled rental pickup. Refunds, if applicable, may be subject to deductions for any fees or charges incurred.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
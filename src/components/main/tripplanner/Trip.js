import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faCarSide, faHandPointer } from '@fortawesome/free-solid-svg-icons'
import './Trip.css';

export default function Trip() {
    return (
        <section className="trip-container">
            <h3 className="h3">Plan your trip now</h3>
            <h2 className="h2">Quick & easy car rental</h2>
            <div className="trip-about-container">
                <div className="select-a-car-container">
                    <div><FontAwesomeIcon icon={faHandPointer} size="2xl" style={{color: "#ff3300",}} /></div>
                    <h3 className="h3">Select a Car</h3>
                    <p>At Car's Car Rental, we are committed to providing you with the best selection of top-quality SUV vehicles, all equipped with the latest features and technologies. Whether you are planning a family road trip or need a reliable vehicle for your daily commute, our extensive range of SUVs has got you covered. Choose from our exceptional fleet of vehicles and rent your dream SUV today. With Car's Car Rental, you can enjoy a comfortable and enjoyable ride, every time.</p>
                </div>
                <div className="contact-an-operator-container">
                    <div><FontAwesomeIcon icon={faPhone} size="2xl" style={{color: "#ff3300" }}/></div>
                    <h3 className="h3">Support</h3>
                    <p>We take pride in having a team of highly skilled and approachable operators who are available 24/7. Whether you require assistance with a specific issue or have a general inquiry, our operators are well-equipped to address your concerns promptly and efficiently. Rest assured that with our capable team at your service, you can expect a hassle-free experience every time.</p>
                </div>
                <div className="lets-drive-container">
                    <div><FontAwesomeIcon icon={faCarSide} size="2xl" style={{color: "#ff3300",}} /></div>
                    <h3 className="h3">Let's Drive</h3>
                    <p>At Car's Car Rental, we understand that our customers have diverse needs and preferences. Whether you are planning an off-road adventure, exploring hillside areas, venturing into mountainous terrain, or simply navigating through big cities, we have the perfect SUV to suit your occasion. With our well-maintained and versatile SUV fleet, you can enjoy a smooth and comfortable ride, regardless of your destination. So sit back, relax, and enjoy the journey with Car's Car Rental.</p>
                </div>
            </div>
        </section>
    )
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import './Footer.css';

export default function Footer() {
    return (
        <section className="footer-section" id="contact-section">
            <div className="footer-container">
                <div className="footer-content-container">
                    <h3 className="h3"><span className="text-color-change">CAR'S</span> CAR RENTAL</h3>
                    <p>SUVs Unleashed: Drive the Best, Rent with <span className="text-color-change">Car's</span> Car Rental!</p>
                    <ul>
                        <li><FontAwesomeIcon icon={faPhone} style={{color: "#000000",}} /> (123)-456-789</li>
                        <li><FontAwesomeIcon icon={faEnvelope} style={{color: "#000000",}} /> CarsCarRental@gmail.com</li>
                        <li>Designed by Car's Car Rental</li>
                    </ul>
                </div>
                <div>
                    <h3 className="h3">COMPANY</h3>
                    <ul>
                        <li>Huston, Texas</li>
                        <li>Careers</li>
                        <li>Mobile</li>
                        <li>Blog</li>
                        <li>How we work</li>
                    </ul>
                </div>
                <div>
                    <h3 className="h3">WORKING HOURS</h3>
                    <ul>
                        <li>Mon - Fri: 9:00AM - 8:00PM</li>
                        <li>Sat - Sun: 9:00AM - 9:00PM</li>
                        <li>Phone Support: 24 / 7</li>
                    </ul>
                </div>
                <div>
                    <h3 className="h3">SUBSCRIPTION</h3>
                    <p>Subscribe with your email for all the latest news & updates</p>
                    <input type="email" id="email" name="email" placeholder="Enter email address" className="footer-input"/>
                    <button className="footer-button">Submit</button>
                </div>
            </div>
        </section>

    )
}
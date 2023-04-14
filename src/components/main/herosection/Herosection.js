import React from "react";
import Volvoxc60 from '../../../images/Volvo Hero.jpeg';
import './Herosection.css';

export default function Herosection(props) {
    return (
        <section className="herosection-container" id="herosection-section">
            <div className="herosection-text-container">
                <h3 className="h3">Plan your trip now</h3>
                <h1 className="h1">Save <span className="text-color-change">big</span> with <span className="text-color-change">Car's</span> car rental</h1>
                <p>Unbeatable prices, flexible pick-up options and unlimited miles. Rent your dream car today!</p>
                <div className="herosection-link-container">
                    <a href="/#" key="book-ride" className="herosection-button book-ride" onClick={(e) => props.handleClick("book", e)}>Book Ride</a>
                    <a href="/#" key="learn-more" className="herosection-button learn-more" onClick={(e) => props.handleClick("about", e)}>Learn More</a>
                </div>
            </div>
            <div className="herosection-picture-container">
                <img className="V" src={Volvoxc60} alt="Volvo XC 60" />
            </div>
        </section>
    )
}
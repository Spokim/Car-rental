import React from "react";
import Apple from '../../../images/Applestore.png';
import Google from '../../../images/Googlestore.png';
import "./Appdl.css";

export default function Appdl(props) {
    return (
        <section className="appdl-section" id="appdl-section">
            <div className="appdl-content-container">
                <div className="appdl-text-container">
                    <h2 className="h2">Unlock the full potential of our app by downloading it now!</h2>
                    <p>Download our app to maximize your experience with Car's Car Rental! Gain access to our latest promotions, exclusive deals, and exciting giveaways. Don't miss out on the best offers and perks by downloading our app today!</p>
                    <div className="appdl-image-container">
                        <a href="/#herosection-section" key="herosection" onClick={(e) => props.handleClick("herosection", e)}><img src={Google} alt="Google play app" /></a>
                        <a href="/#book-section" key="book" onClick={(e) => props.handleClick("book", e)}><img src={Apple} alt="Apple store app" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
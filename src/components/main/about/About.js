import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoad, faTags, faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Volvo from '../../../images/Volvo xc90 about.jpg';
import './About.css'

export default function About(props) {
    return (
        <section className="about-container" id="about-section">
            <div className="about-image-container">
                <img src={Volvo} alt="Volvo xc 90 Turbo" />
            </div>
            <div className="about-text-container">
                <div className="about-choose-container">
                    <h3 className="h3">Why Choose us</h3>
                    <h2 className="h2">Unbeatable Value for Your Money</h2>
                    <p className="p">Experience unparalleled value with our unmatched deals. We are committed to delivering exceptional quality products and services without draining your wallet. With our unbeatable offers, you can discover the best deals you'll ever find. Our focus is on providing you with the ultimate renting experience, offering top-quality products and services at prices that won't break the bank. Don't miss out on the opportunity to save big with us.</p>
                    <button className="about-button" onClick={(e) => props.handleClick("herosection", e)}>{`Details >`}</button>
                </div>
                <div className="about-incentive-container">
                    <div className="about-incentive">
                        <FontAwesomeIcon icon={faRoad} size="2xl" style={{color: "#ff3300",}} />
                        <div>
                            <h3>Elevate Your Adventure</h3>
                            <p>Enhance adventures with premium vehicles. Elevate experience with top-notch cars for comfort, reliability, and performance. Explore landscapes and road trips with confidence in our exceptional vehicles.</p>
                        </div>
                    </div>
                    <div className="about-incentive">
                        <FontAwesomeIcon icon={faTags} size="2xl" style={{color: "#ff3300",}} />
                        <div>
                            <h3>Simplify and Enjoy</h3>
                            <p>Enjoy transparent pricing with our all-inclusive policy. Simplify your rental experience with straightforward pricing for peace of mind. With all-inclusive pricing, focus on enjoying your experience without worrying about unexpected charges.</p>
                        </div>
                    </div>
                    <div className="about-incentive">
                        <FontAwesomeIcon icon={faMoneyBill1Wave} size="2xl" style={{color: "#ff3300",}} />
                        <div>
                            <h3>Transparent Pricing, No Surprises</h3>
                            <p>Experience peace of mind with transparent pricing. We provide straightforward pricing with no surprises. Rent with confidence, knowing what you'll pay without hidden fees. Trust our commitment to upfront pricing for a hassle-free experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
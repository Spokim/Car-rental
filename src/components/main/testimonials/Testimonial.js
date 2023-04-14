import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import './Testimonial.css';

export default function Testimonial(props) {
    return (
        <div className="testimonial-container">
            <p>{`"${props.message}"`}</p>
            <div className="testimonial-layout-container">
                <div className="testimonial-text-container">
                    <img src={props.image} alt={props.alt} />
                    <div>
                        <h4 className="h4">{props.name}</h4>
                        <p>{props.location}</p>
                    </div>
                </div>
                <div className="testimonial-image-container">
                    <FontAwesomeIcon icon={faQuoteRight} style={{color: "#ff3300",}} size="2xl"/>
                </div>
            </div>
        </div>
    )
}
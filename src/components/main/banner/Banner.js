import React from "react";
import './Banner.css';

export default function Banner() {
    return (
        <section className="banner-section" id="banner-section">
            <div className="banner-container">
                <h2 className="h2">Save big with <span className="text-color-change">Car's</span> Car Rental!</h2>
                <p className="p">Best rides. Flexible Pick-up/Drop-off locations. <span className="text-color-change">24/7</span> Support.</p>
            </div>
        </section>
    )
}
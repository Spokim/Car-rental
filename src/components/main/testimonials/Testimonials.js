import React from "react";
import Testimonial from './Testimonial';
import Donny from '../../../images/Doony Hepp.jpg';
import CatPic from '../../../images/Smiling cat.jpg';
import './Testimonials.css';

export default function Testimonials() {
    const testimonials = [{
        message: "Renting from Car's Car Rental was a breeze! Seamless process, great condition cars, and top-notch customer service. Highly recommended!",
        name: "Donny Hepp",
        location: "Portland",
        image: Donny,
        alt: "Donny Hepp"
    } , {
        message: "Had a fantastic experience with Car's Car Rental. Quick process, clean cars, and friendly staff. Would choose them again for my future car rentals!",
        name: "Smiling Cat",
        location: "Huston",
        image: CatPic,
        alt: "Smiling Cat"
    }
    ]
    return (
        <section className="testimonials-container" id="testimonials-section">
            <div className="testimonials-main-container">
                <div className="testimonials-text-container">
                    <h3 className="h3">Reviewed by Users</h3>
                    <h2 className="h2">Client's testimonials</h2>
                    <p>Experience the profound impact we've made on our clients by browsing through their heartfelt testimonials. Our satisfied clients have witnessed the exceptional service and remarkable results we've delivered, and they're excited to share their positive experiences with you.</p>
                </div>
                <div className="testimonials-testimonial-container">
                        {testimonials.map((testimonial, index) => (
                            <Testimonial key={index} {...testimonial} />
                        ))}
                    </div>
            </div>
        </section>
    )
}
import React from "react";
import Forminput from "./Forminput";
import Formselect from './Formselect';
import './Book.css';
import { faCar, faCalendarCheck, faLocationDot } from '@fortawesome/free-solid-svg-icons';



export default function Book(props) {
    const handleFormSubmit = e => {
        e.preventDefault();
        props.handleClick("vehicle-models", e)
    }

    const carModels = [{    
        value: 'volvo-XC60',
        optionText: '2022 Volvo XC60'
    } , {
        value: 'volvo-XC90',
        optionText: '2022 Volvo XC90'
    } , {
        value: 'mazda-CX30',
        optionText: '2022 Mazda CX-30'
    } , {
        value: 'mazda-CX5',
        optionText: '2022 Mazda CX-5'
    } , {
        value: 'volkswagen-taos',
        optionText: '2022 Volkswagen Taos'
    }]

    const locations = [{
        value: 'huston-texas',
        optionText: 'Huston, Texas'
    } , {
        value: 'Phoenix-arizona',
        optionText: 'Phoenix, Arizona'
    } , {
        value: 'losangeles-california',
        optionText: 'Los Angeles, California'
    } , {
        value: 'portland-Oregon',
        optionText: 'Portland, Oregon'
    } , {
        value: 'orlando-florida',
        optionText: 'Orlando, Florida'
    }]

    return (
        <section className="book-container shadow" id="book-section">
            <h2 className="h2">Book a car</h2>
            <form onSubmit={handleFormSubmit} className="form-container">
                <Formselect name="Car model" selection={carModels} icon={faCar} />
                <Formselect name="Pick-up" selection={locations} icon={faLocationDot} />
                <Formselect name="Drop-off" selection={locations} icon={faLocationDot} />
                <Forminput name="Pick-up Date" type="date" icon={faCalendarCheck} />
                <Forminput name="Drop-off Date" type="date" icon={faCalendarCheck} />
                <button className="form-button" type="submit">Search</button>
            </form>
        </section>
    )
}
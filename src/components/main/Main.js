import React from "react";
import './Main.css';
import Herosection from "./herosection/Herosection";
import Book from "./book/Book";
import Trip from "./tripplanner/Trip";
import VehicleModels from "./vehicle/VehicleModels";
import Banner from "./banner/Banner";
import About from "./about/About";
import Testimonials from "./testimonials/Testimonials";
import Faq from "./faq/Faq";
import Appdl from "./appdl/Appdl";

export default function Main(props) {
    return (
        <>
            <Herosection handleClick={props.handleClick} />
            <Book handleClick={props.handleClick} />
            <Trip />
            <VehicleModels handleClick={props.handleClick} />
            <Banner />
            <About handleClick={props.handleClick} />
            <Testimonials />
            <Faq />
            <Appdl handleClick={props.handleClick} />
        </>
    )
}
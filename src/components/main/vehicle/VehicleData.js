import React from "react";
import './VehicleData.css';

export default function VehicleData(props) {
    return (
        <section className="vehicledata-container">
            <div className="vehicledata-table-container">
                <p className="vehicle-price">{props.price} / per day</p>
                <div className="vehicledata-table">
                    <div className="table-row">
                        <p>Drivetrain</p>
                        <p>{props.drivetrain}</p>
                    </div>
                    <div className="table-row">
                        <p>Max HP @RPM</p>
                        <p>{props.horsepower}</p>
                    </div>
                    <div className="table-row">
                        <p>Transmission</p>
                        <p>{props.transmission}</p>
                    </div>
                    <div className="table-row">
                        <p>Doors</p>
                        <p>{props.doors}</p>
                    </div>
                    <div className="table-row">
                        <p>Passenger</p>
                        <p>{props.passenger}</p>
                    </div>
                    <div className="table-row">
                        <p>Color</p>
                        <p>{props.color}</p>
                    </div>
                    <div className="table-row">
                        <p>Model</p>
                        <p>{props.model}</p>
                    </div>
                </div>
                <a className="vehicle-table-link" href="/#booking-section" onClick={(e) => props.handleClick("book", e)}>RESERVE NOW</a>
            </div>
        </section>
    )
}
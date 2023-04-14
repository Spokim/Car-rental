import React from "react";
import VehicleData from "./VehicleData";
import './VehicleModels.css';
import Volvoxc60 from '../../../images/Volvo xc 60 B6.png';
import Volvoxc90 from '../../../images/Volvoxc90T6.jpg';
import Mazdacx30 from '../../../images/Mazdacx-30 Turbo.png';
import Mazdacx5 from '../../../images/Mazda cx-5 Turbo.jpg';
import Volkswagentaos from '../../../images/Volkswagentaos SEL.jpg';


export default function VehicleModels(props) {
    const [activeVehicle, setActiveVehicle] = React.useState(0);

    const handleButtonClick = (index) => {
        setActiveVehicle(index);
    }

    React.useEffect(() => {
        localStorage.setItem("activeVehicle", activeVehicle.toString());
    }, [activeVehicle]);

    const vehicles = [
        <VehicleData
          price="70$"
          drivetrain="awd"
          horsepower="295 @ 5400"
          transmission="AT"
          doors="4/5"
          passenger="5"
          color="Black/Silver"
          model="XC60 B6"
          image={Volvoxc60}
          alt="Volvo XC60"
          handleClick={props.handleClick}
        />,
        <VehicleData
          price="100$"
          drivetrain="awd"
          horsepower="316 @ 5700"
          transmission="AT"
          doors="4/5"
          passenger="5"
          color="Black/White"
          model="XC90 T6"
          image={Volvoxc90}
          alt="Volvo XC90"
          handleClick={props.handleClick}
        />,
        <VehicleData
          price="45$"
          drivetrain="awd"
          horsepower="227 @ 5000"
          transmission="AT"
          doors="4/5"
          passenger="5"
          color="Red/White"
          model="CX30 Turbo"
          image={Mazdacx30}
          alt="Mazda CX-30"
          handleClick={props.handleClick}
        />,
        <VehicleData
          price="55$"
          drivetrain="awd"
          horsepower="227 @ 5000"
          transmission="AT"
          doors="4/5"
          passenger="5"
          color="Red/White"
          model="CX5 Turbo"
          image={Mazdacx5}
          alt="Mazda CX-5"
          handleClick={props.handleClick}
        />,
        <VehicleData
          price="40$"
          drivetrain="awd"
          horsepower="158 @ 5500"
          transmission="AT/MT"
          doors="4/5"
          passenger="5"
          color="Black/Blue"
          model="Taos SEL"
          image={Volkswagentaos}
          alt="Volkswagen Taos"
          handleClick={props.handleClick}
        />,
    ];

    return (
        <section className="vehicle-models-conatiner" id="vehicle-models-section">
            <div className="vehicle-text-container">
                <h3 className="h3">Vehicle Models</h3>
                <h2 className="h2">Our rental fleet</h2>
                <p>Looking for the perfect vehicle to make your next adventure or business trip unforgettable? Look no further than our amazing selection of rental vehicles! With a wide variety of options to choose from, we're confident that we have the perfect vehicle to suit your needs.</p>
            </div>
            <div className="vehicle-vehicles-container">
                <div className="vehicle-button-container">
                    <button className={activeVehicle === 0 ? "button1 active" : "button1"} onClick={() => handleButtonClick(0)}>Volvo XC60</button>
                    <button className={activeVehicle === 1 ? "button1 active" : "button1"} onClick={() => handleButtonClick(1)}>Volvo XC90</button>
                    <button className={activeVehicle === 2 ? "button1 active" : "button1"} onClick={() => handleButtonClick(2)}>Mazda CX-30</button>
                    <button className={activeVehicle === 3 ? "button1 active" : "button1"} onClick={() => handleButtonClick(3)}>Mazda CX-5</button>
                    <button className={activeVehicle === 4 ? "button1 active" : "button1"} onClick={() => handleButtonClick(4)}>Volkswagen Taos</button>
                </div>
                <div className="vechicle-image-container">
                    <img src={vehicles[activeVehicle].props.image} alt={vehicles[activeVehicle].props.alt} />
                </div>
                <div className="vehicle-info-container">
                    {vehicles[activeVehicle]}
                </div>
            </div>
        </section>
    )
}
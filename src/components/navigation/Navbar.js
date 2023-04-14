import React from "react";
import Logo from '../../images/CCR.jpg'
import './Navbar.css'

export default function Navbar(props) {
    const [userWindow, setUserWindow] = React.useState(window.innerWidth)

    React.useEffect(() => {
        function handleResize() {
            setUserWindow(window.innerWidth)
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className='navigation-container'>
            <img className="logo" src={Logo} alt="Car's Car Rental" />
            <input type="checkbox" id="nav-toggle" className="nav-toggle" />
            <nav className="link-container">
                <ul>
                    <li><a href="/#home-section" onClick={(e) => props.handleClick("herosection", e)} key="home">Home</a></li>
                    <li><a href="/#about-section" onClick={(e) => props.handleClick("about", e)} key="about">About</a></li>
                    <li><a href="/#vehicle-models-section" onClick={(e) => props.handleClick("vehicle-models", e)} key="vehicle-models">Vehicle Models</a></li>
                    <li><a href="/#testimonials-section" onClick={(e) => props.handleClick("testimonials", e)} key="testimonials">Testimonials</a></li>
                    <li><a href="/#contact-section" onClick={(e) => props.handleClick("contact", e)} key="contact">Contact</a></li>
                    { userWindow < 1100 && <li><a href="/#log-in" key="log-in">Log in</a></li> }
                    { userWindow < 1100 && <li><a href="/#register" key="register" >Register</a></li>}
                </ul>
            </nav>
            { userWindow > 1100 &&
                    <a href="/#log-in" key="log-in" className="button login">Log in</a> }
            { userWindow > 1100 &&
                    <a href="/#register" key="register" className="button register">Register</a> }
            <label htmlFor="nav-toggle" className="nav-toggle-label">
                <span></span>
            </label>
        </section>
    )
}
import './Forminput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';   


export default function Forminput(props) {
    return (
        <div className='form-input'>
            <label htmlFor={props.name} ><FontAwesomeIcon icon={props.icon} style={{color: "#ff3300" }} /> {props.name}<span className="required-indicator">*</span></label>
            <input id={props.name} name={props.name} type={props.type} tabIndex="0" required />
        </div>
    )
}
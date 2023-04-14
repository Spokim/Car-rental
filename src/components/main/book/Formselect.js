import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Formselect.css';

export default function Formselect(props) {
    return (
        <div className='form-select'>
            <label htmlFor={props.name}><FontAwesomeIcon icon={props.icon} style={{color: "#ff3300" }} /> {props.name}<span className="required-indicator">*</span></label>
            <select name={props.name} id={props.name} required tabIndex="0" aria-label={`Select ${props.name}`}>
                <option value=""></option>
                {props.selection.map((sel) => (
                    <option key={sel.value} value={sel.value}>
                        {sel.optionText}
                    </option>
                ))}
            </select>
        </div>
    );
}
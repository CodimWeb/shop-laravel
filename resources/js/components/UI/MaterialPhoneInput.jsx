import { useState, useEffect, useRef } from "react";
import Inputmask from 'inputmask';

const MaterialPhoneInput = ({ type, label, error, handleChange }) => {

    const [isFocus, setFocus] = useState(false)
    const phoneInput = useRef();

    useEffect(() => {
        Inputmask({ "mask": "+7(999) 999-99-99" }).mask(phoneInput.current);
    }, [])

    return (
        <>
            <label className={`materil-group recovery__field ${error.hasError ? 'error' : ''} ${isFocus ? 'active' : ''}`}>
                <span className="materil-group__label">{label}</span>
                <input
                    ref={phoneInput}
                    type={type}
                    className="form-control base-input materil-group__input"
                    onChange={(e) => {handleChange(e.target.value)}}
                    onFocus={() => {setFocus(true)}}
                    onBlur={(e) => { e.target.value == '' ? setFocus(false) : setFocus(true)}}
                />
            </label>
            {error.hasError ? <p className="xs text-danger error-message">{error.errorMessage}</p> : null}
        </>
    )
}

export default MaterialPhoneInput;

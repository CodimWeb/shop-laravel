import { useState } from "react";


const MaterialInput = ({ type, label, error, handleChange }) => {

    const [isFocus, setFocus] = useState(false)
    console.log()

    return (
        <>
            <label className={`materil-group recovery__field ${error.hasError ? 'error' : ''} ${isFocus ? 'active' : ''}`}>
                <span className="materil-group__label">{label}</span>
                <input type={type}
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

export default MaterialInput;

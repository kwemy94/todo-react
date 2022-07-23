import './formInput.css'

const FormInput = (props) =>{
    const {label, id, onChange,errorMessage, ...inputProps } = props
    return (
        <div className="formInput">
            <label>{label}</label>
            <input {...inputProps} onChange={onChange}/>   
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput;
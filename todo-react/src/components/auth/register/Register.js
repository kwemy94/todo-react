import React, { useRef } from "react";
import { object } from "yup";
import { useState } from "react";
import FormInput from "../forms/FormInput";



const Register = () => {  
    const [values, setValues ] = useState({
        name:"",
        surname:"",
        email:"",
        password:"",
        confirmPassword:""
    });
    const inputs = [
        {
            id:1,
            name:"name",
            type:"text",
            placeholder:"Name",
            label:"Name",
            errorMessage:"name should be between 3-16 character and no special character should be present.",
            required: true
        },
        {
            id:2,
            name:"surname",
            type:"text",
            placeholder:"Surname",
            label:"Surname",
            errorMessage:"surname should be between 3-16 character and no special character should be present.",
            required: true

        },
        {
            id:3,
            name:"email",
            type:"text",
            placeholder:"Email",
            label:"Email",
            errorMessage:"It should be a valid email.",
            required: true

        },
        {
            id:4,
            name:"password",
            type:"password",
            placeholder:"Password",
            label:"Password",
            errorMessage:"It should be 3-10 characters and should include at least 1 letter, 1 number and 1 special character.",
            required: true

        },  
        {
            id:5,
            name:"confirmPassword",
            type:"password",
            placeholder:"confirmPassword",
            label:"Confirm Password",
            errorMessage:"Password don't match.",
            required: true

        },
        
    ];
    const handledSubmit = (e)=>{
        e.preventDefault();
        alert("The registration is not yet functional");
    }

    const onChange =(e)=>{
        setValues({...values, [e.target.name]: e.target.value   });
    }
    console.log(values)
    
    return (
      <div className="register">
        <form onSubmit={handledSubmit}>
            <h1>Register</h1>
            {inputs.map((input) =>(
                    <FormInput
                     key={input.id} 
                     {...input} 
                     value={values[input.name]} 
                     onChange={onChange}
                    />
                ))
            }
            <button >Register</button>
        </form>
      </div>
    );
}
export default Register;
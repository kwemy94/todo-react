//import React, { useRef } from "react";
//import { object } from "yup";
//import { useInsertionEffect } from "react";
import { useState, useEffect } from "react";
import FormInput from "../forms/FormInput";



const Register = () => {  

     const [values, setValues ] = useState({
            name:"",
            username:"",
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
            //required: true
        },
        {
            id:2,
            username:"username",
            type:"text",
            placeholder:"username",
            label:"username",
            errorMessage:"username should be between 3-16 character and no special character should be present.",
            //required: true

        },
        {
            id:3,
            name:"email",
            type:"text",
            placeholder:"Email",
            label:"Email",
            errorMessage:"It should be a valid email.",
            //required: true

        },
        {
            id:4,
            name:"password",
            type:"password",
            placeholder:"Password",
            label:"Password",
            errorMessage:"It should be 3-10 characters and should include at least 1 letter, 1 number and 1 special character.",
            //required: true

        },  
        {
            id:5,
            name:"confirmPassword",
            type:"password",
            placeholder:"confirmPassword",
            label:"Confirm Password",
            errorMessage:"Password don't match.",
            //required: true

        },
        
    ];
/*     const handledSubmit = (e)=>{
        e.preventDefault();
       console.log("The registration is not yet functional");

    } */

     const onChange =(e)=>{
        setValues({...values, [e.target.name]: e.target.value   });
    } 
    
    let handledSubmit = (e) =>{
        e.preventDefault();
        console.log(values);
        if(localStorage.getItem('UserData')){
            try {
                let allData = JSON.parse(localStorage.getItem('UserData'))
                console.log(values);
                localStorage.setItem('UserData', JSON.stringify([...allData, values]))

                alert('Created!')
    
            } catch (error) {
                console.log(error);
                alert("This is the " +error)
            }
        } else {
            localStorage.setItem('UserData', JSON.stringify([values]))

            alert('Created!')
        }
        
    }
    
    return (
      <div className="register">
        <form onSubmit={handledSubmit}>
            <h1>Registration</h1>
            {inputs.map((input) =>(
                    <FormInput
                     key={input.id} 
                     {...input} 
                     value={values[input.name]} 
                     onChange={onChange}
                    />
                ))
            }
            <button type="submit">Register</button>
        </form>
      </div>
    );
}
export default Register;
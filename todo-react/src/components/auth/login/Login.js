import React from "react";
import FormInput from "../forms/FormInput";
import { useState } from "react";


const Login = () => {  
  const [values, setValues ] = useState({
 
      email:"",
      password:"",
 
  });
  const inputs = [

      {
          id:3,
          name:"email",
          type:"text",
          placeholder:"Email",
          label:"Email",
          errorMessage:"Invalid email.",
          required: true

      },
      {
          id:4,
          name:"password",
          type:"password",
          placeholder:"Password",
          label:"Password",
          errorMessage:"Wrong password",
          required: true

      }
     
  ];
  const handledSubmit = (e)=>{
      e.preventDefault();
      alert("Login is not yet functional");
  }

  const onChange =(e)=>{
      setValues({...values, [e.target.name]: e.target.value   });
  }
  console.log(values)
  
  return (
    <div className="register">
      <form onSubmit={handledSubmit}>
          <h1>Login</h1>
          {inputs.map((input) =>(
                  <FormInput
                   key={input.id} 
                   {...input} 
                   value={values[input.name]} 
                   onChange={onChange}
                  />
              ))
          }
          <button >Login</button>
          
      </form>
    </div>
  );
}
export default Login;
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../forms/FormInput";
import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from "react-redux";
import {login} from '../../../slices/auth'
import {Navigate} from 'react-router-dom'


const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email requis'),
    password: Yup.string().min(4,'password au moins 4 cara').required('password requis')
})


const Login = () => {
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onblur',
        resolver: yupResolver(validationSchema)
    })

    const dispatch = useDispatch()

    const {isLogin} = useSelector(state => state.auth)
    
    const onFormSubmit = (values) =>{
        console.group('valeur login: ')
        console.log(values)
        dispatch(login(values))

        console.groupEnd()
    }
    const onError = (errors) =>{
        console.group('Erreur login: ')
        console.warn(errors)
        console.groupEnd()
    }

    if (isLogin) {
        return <Navigate to='/create-todo'/>
    }
    



    return (
        <div className="register">
            <form onSubmit={handleSubmit(onFormSubmit, onError)}>
                <h1>Login</h1>
                <div className="formInput">
                    <label>Email</label>
                    <input type='text'
                        name="email"
                        {...register('email')}
                        className={errors.email ? 'input-error' : ''} />
                    <span className="error-message">{errors.email?.message}</span>
                </div>
                <div className="formInput">
                    <label>Password</label>
                    <input type='password'
                        name="password"
                        {...register('password')}
                        className={errors.password ? 'input-error' : ''} />
                    <span className="error-message">{errors.password?.message}</span>
                </div>
                <button type="submit" >Login</button>

            </form>
        </div>
    );
}
export default Login;
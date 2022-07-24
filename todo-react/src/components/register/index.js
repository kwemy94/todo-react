import { TextField } from '@material-ui/core';
// import {useForm} from 'react-hook-form'


function FormValidation(){
    // const { register, handlSubmit, formState: {errors} } = useForm();

    return (
        <div>
            <TextField id='outlined-basic' label='UserName' variant='outlined' />
            <TextField id='outlined-basic' label='Email' variant='outlined' />
            <TextField id='outlined-basic' label='password' variant='outlined' />
        </div>
    )
}

export default FormValidation
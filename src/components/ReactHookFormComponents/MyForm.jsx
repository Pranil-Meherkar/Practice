import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

const MyForm = () => {

    const form = useForm();
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (values) => {
        console.log("Submitted", values)
    }

    return (  
        <>
            <h2>My Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div>
                    <label htmlFor="userName">UserName</label><br />
                    <input type="text" id='userName' name='userName' {...register("userName", {
                        required: "This field is required"
                    })}/>
                </div>

                <div>
                    <label htmlFor="email">Email</label><br />
                    <input type="text" id='email' name='email' {...register("email", {
                        required: "This field is required"
                    })}/>
                </div>

                <div>
                    <label htmlFor="password">Password</label><br />
                    <input type="password" id='password' name='password' {...register("password", {
                        required: "This field is required" 
                    })
                    }/>
                </div>
                <button>Submit</button>
            </form>
            <DevTool control={control}/>
        </>
    );
}
 
export default MyForm;
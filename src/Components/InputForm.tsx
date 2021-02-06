import React from "react";
import { useForm } from "react-hook-form";
import './InputForm.css'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type Profile = {
    firstName: string
    lastName: string
    age: number,
    email: string,
    password: string,
    modeOfContact: '',
    phone: '',
    gender:string
}
const schema = yup.object().shape({
    firstName: yup.string().required('FirstName is Required'),
    lastName: yup.string().required('LastName is Required'),
    email: yup.string().required('Email is Reuired').matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, 'invalid email format').email('Invalid email format'),
    password: yup.string().required('Password is Reuired').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
    age: yup.number().required('Age is Required').typeError("That doesn't look like a  number").positive("Age number can't start with a minus").integer('Age must be real number'),
    modeOfContact: yup.string().required('Reuired'),
    gender:yup.string().required('select option'),
    phone: yup.string().when('modeOfContact',
        {
            is: 'telephonemoc',
            then: yup.string().required('Required')
        })
});

export default function InputForm() {
    const options = [
        {
            key: 'Email', value: 'emailmoc'
        },
        {
            key: 'Telephone', value: 'telephonemoc'
        }
    ]
    const { register, handleSubmit, errors } = useForm<Profile>({
        resolver: yupResolver(schema)
    });

    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data))
    })

    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5 AddStyle"  >
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="firstname">First Name</label>
                        <input ref={register} id="firstName" name="firstName" type="text" />
                        {errors.firstName && <p className="error">{errors.firstName.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="lastname">Last Name</label>
                        <input ref={register} id="lastName" name="lastName" type="text" />
                        {errors.lastName && <p className="error">{errors.lastName.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input ref={register} id="email" name="email" type="email" />
                        {errors.email && <p className="error">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input ref={register} id="lastName" name="password" type="password" />
                        {errors.password && <p className="error">{errors.password.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="age">Age</label>
                        <input ref={register} id="age" name="age" type="text" />
                        {errors.age && <p className="error">{errors.age.message}</p>}
                    </div>
                    <div>
                        <label htmlFor='gender'>Gender</label>
                        <select ref={register} name='gender' id='gender'>
                            <option value=''>Select..</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            {errors.gender && <p className="error">{errors.gender.message}</p>}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="modeOfContact">modeOfContact</label>
                        <input ref={register} id="modeOfContact" name="modeOfContact" type="radio" />
                        {errors.modeOfContact && <p className="error">{errors.modeOfContact.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="phone">Phone No.</label>
                        <input ref={register} id="phone" name="phone" type="text" />
                        {errors.phone && <p className="error">{errors.phone.message}</p>}
                    </div>
                    <button type='submit' className="btn btn-primary btn-block">Save</button>
                </form>
            </div>
        </div>
    );
}
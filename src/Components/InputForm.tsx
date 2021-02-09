import React from "react";
import { useForm } from "react-hook-form";
import './InputForm.css'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

type InputForm = {
    firstName: string
    lastName: string,
    email: string,
    password: string,
    developer: string,
    phone: number,
    gender: string,
    acceptTerms: null
}
const schema = yup.object().shape({
    firstName: yup.string().required('FirstName is Required'),
    lastName: yup.string().required('LastName is Required'),
    email: yup.string().required('Email is Reuired').matches(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, 'invalid email format').email('Invalid email format'),
    password: yup.string().required('Password is Reuired').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"),
    developer: yup.string().required('This Field is Reuired').nullable(),
    gender: yup.string().required('Select Option is Required'),
    acceptTerms: yup.boolean().oneOf([true], "You must accept Terms & Conditions").required('Select checkbox is Required').nullable(),
    phone: yup.number().required('A phone number is required')
        .typeError("That doesn't look like a phone number")
        .positive("A phone number can't start with a minus")
        .integer("A phone number can't include a decimal point")
        .min(8)
});
const theme = createMuiTheme({
    palette: {
        primary: green
    },
});
const useStyles = makeStyles((theme) => ({
    savebtn: {
        color: 'white',
        width: '645px',
        marginLeft: '-75px',
        marginTop: '20px',
    },
    paper: {
        margin: 'auto',
        width: '70%',
        boxShadow: theme.shadows[5],
    },
}))

export default function InputForm() {
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm<InputForm>({
        resolver: yupResolver(schema)
    });

    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify(data))
    })

    return (
        <div className="container">
            <Paper className={classes.paper}>
                <div className="w-75 mx-auto  p-5 AddStyle"  >
                    <form onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input ref={register} name="firstName" type="text" />
                            {errors.firstName && <p className="error">{errors.firstName.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="lastName">Last Name</label>
                            <input ref={register} name="lastName" type="text" />
                            {errors.lastName && <p className="error">{errors.lastName.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input ref={register} name="email" type="email" />
                            {errors.email && <p className="error">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input ref={register} name="password" type="password" />
                            {errors.password && <p className="error">{errors.password.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="phone">Phone No.</label>
                            <input ref={register} name="phone" type="text" />
                            {errors.phone && <p className="error">{errors.phone.message}</p>}
                        </div>
                        <div>
                            <label htmlFor='gender'>Gender</label>
                            <select ref={register} name='gender' className='selectbtn'>
                                <option value=''>Select..</option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                            </select>
                            {errors.gender && <p className="error">{errors.gender.message}</p>}
                        </div>
                        <div className='radiobtn'>
                            <label htmlFor="developer" >Developer:</label>
                            <input type="radio" name="developer" value={'yes'} ref={register} />Yes
                            <input type="radio" name="developer" value={'no'} ref={register} />No
                            {errors.developer && <p className="error">{errors.developer.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="acceptTerms">Accept Terms & Conditions:</label>
                            <input type="checkbox" name="acceptTerms" ref={register} /> Accept Terms & Conditions
                            {errors.acceptTerms && <p className="error">{errors.acceptTerms?.message}</p>}
                        </div>
                        <ThemeProvider theme={theme}>
                            <Button type='submit' color="primary" className={classes.savebtn} variant="contained" >
                                Save
                            </Button>
                        </ThemeProvider>
                    </form>
                </div>
            </Paper>
        </div >
    );
}
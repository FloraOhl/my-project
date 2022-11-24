import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';


const Donate = () => {
    const validate = Yup.object({
        fullName: Yup.string().min(3, 'Must be 15 characters or less').max(15, 'Must be 15 characters or less')
            .required('Required'),
        username: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        email: Yup.string().email('Email is invalid').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 charaters').required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match').required('Confirm password is required'),
    })

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values)
            }}
        >
            {formik => (
                <div>
                    <h1 className="my-4 font-weight-bold .display-4">Donate</h1>
                    <Form>
                        <ul>
                            <input
                                id="Amount"
                                class="form-field"
                                type="number"
                                placeholder="Amount"
                                name="Amount"
                            />
                        </ul>

                        <ul><input
                            id="Card Number"
                            class="form-field"
                            type="text"
                            placeholder="Card Number"
                            name="card number"
                        />
                        </ul>
                        <ul><input
                            id="Expiry date"
                            class="form-field"
                            type="text"
                            placeholder="Expiry Date"
                            name="Valid Thru"
                        />
                        </ul>
                        <ul><input
                            id="CVC"
                            class="form-field"
                            type="number"
                            placeholder="CVC"
                            name="cvc"
                        />
                        </ul>

                        <ul><input
                            id="Card Owner"
                            class="form-field"
                            type="Card Owner"
                            placeholder="Card Owner"
                            name="Card Owner"
                        />
                        </ul>

                        {/* <center><button className="btn btn-dark mt-3" type="submit">Donate</button></center> */}

                        {/* <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button> */}

                        {/* <a href="paypal.me/WIT432" target="_blank" rel="noreferrer">
                            <button>Click</button>
                        </a> */}

                        <div>
                            <center>  <Link to='https://www.paypal.com/signin'>
                                <button type="button" className="btn btn-info"><Link to='/'>Donate</Link></button>
                            </Link></center>
                            <center><img src="images/thx.jpg" className="chains" alt="" /></center>
                        </div>


                    </Form>
                </div>
            )
            }

        </Formik >

    )
}

export default Donate
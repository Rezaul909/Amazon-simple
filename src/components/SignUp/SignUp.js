import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='form-container'>
            <h1 className='mt-4 text-center text-primary'>Sign Up First !</h1>
            <div className="mt-3 w-75 mx-auto">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter your name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" required/>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button className='submit-btn' type="submit">
                        Sign Up
                    </Button>
                </Form>
                <p className='mt-2 mb-5'>
                    Already have an account?  <Link to="/Login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
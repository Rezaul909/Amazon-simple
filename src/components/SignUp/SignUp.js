import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleNameBlur = e =>{
        setName(e.target.value);
        console.log(name);
    }
    const handleEmailBlur = e =>{
        setEmail(e.target.value);
        console.log(email);
    }
    const handlePasswordBlur = e =>{
        setPassword(e.target.value);
        console.log(password);
    }
    const handleError = e =>{
        setError(e.target.value);
        console.log(error);
    }
    return (
        <div className='form-container'>
            <h1 className='mt-4 text-center text-primary'>Sign Up First !</h1>
            <div className="mt-3 w-75 mx-auto">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Enter your name</Form.Label>
                        <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter name" required/>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button className='submit-btn mx-auto' type="submit">
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
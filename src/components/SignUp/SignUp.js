import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user,loading] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

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
    
    const handleFormSubmit = e =>{
        e.preventDefault();
        console.log("submitted");
        if(password < 6){
            setError('Password must be 6 character or more')
        }
        createUserWithEmailAndPassword(email,password);
    }

    if(user){
        navigate('/OrderReview');
    }
    
    return (
        <div className='form-container'>
            <h1 className='mt-4 text-center text-primary'>Sign Up First !</h1>
            <div className="mt-3 w-75 mx-auto">
                <Form onSubmit={handleFormSubmit}>
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

                    <p className='text-danger'>{error}</p>

                    {
                        loading && <p className='text-center'>Loading...</p>
                    }
                    
                    <div className='submit-btn'>
                        <Button className='w-100'  type="submit">
                            Sign Up
                        </Button>
                    </div>
                </Form>
                <p className='mt-2 mb-5'>
                    Already have an account?  <Link to="/Login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
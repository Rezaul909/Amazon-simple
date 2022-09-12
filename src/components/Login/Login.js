import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from= location.state.from.pathname || '/';


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

        signInWithEmailAndPassword(email, password);
    }

    if(user){
        navigate(from, {replace:true});
    }

    return (
        <div className='form-container'>
            <h1 className='mt-4 text-center text-primary'>Login</h1>
            <div className="mt-3 w-75 mx-auto">
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required/>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required/>
                    </Form.Group>
                    <p style={{color:'red'}}>{error}</p>
                    {
                        loading && <p className='text-center'>Loading...</p>
                    }
                    <Button className='submit-btn' type="submit">
                        Submit
                    </Button>
                </Form>
                <p className='mt-2 mb-5'>
                    New at amazon? <Link to="/SignUp">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
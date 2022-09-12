import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState('');
    const [user, loading] = useAuthState(auth)

    const handleNameBlur = e =>{
        setName(e.target.value);
        console.log(name);
    }
    const handleAddressBlur = e =>{
        setAddress(e.target.value);
        console.log(address);
    }
    const handleNumberBlur = e =>{
        setNumber(e.target.value);
        console.log(number);
    }
    
    const handleFormSubmit = e =>{
        e.preventDefault();
        console.log("submitted");
    }

    return (
        <div className='form-container'>
            <h1 className='mt-4 text-center text-primary'>Shipment Information.</h1>
            <div className="mt-3 w-75 mx-auto">
                <Form onSubmit={handleFormSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Enter your name</Form.Label>
                        <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter name" required/>
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={user?.email} readOnly type="email" placeholder="Enter email" required/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Enter your Address</Form.Label>
                        <Form.Control onBlur={handleAddressBlur} type="text" placeholder="Enter Your Address" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Number</Form.Label>
                        <Form.Control onBlur={handleNumberBlur} type="number" placeholder="Enter Your Number" required />
                    </Form.Group>

                    <p className='text-danger'>{error}</p>

                    {
                        loading && <p className='text-center'>Loading...</p>
                    }
                    
                    <Button className='submit-btn mx-auto mb-5' type="submit">
                        Confirm Order
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Shipment;
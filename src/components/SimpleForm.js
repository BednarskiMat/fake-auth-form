import React, {useRef, useState, useEffect} from 'react'
import { Container, Button } from 'react-bootstrap';
import Greeting from './Greeting';

export default function SimpleForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('') 
    const [email, setEmail] = useState('')
    const [fakeAuth, setFakeAuth] = useState(false)


    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const emailRef = useRef(null);
    

    const handleSubmit = e =>{
        e.preventDefault();
        setFirstName(firstNameRef.current.value)
        setLastName(lastNameRef.current.value)
        setEmail(emailRef.current.value)
        e.target.reset();

    }

    const handleFormReset = e =>{
        e.preventDefault();
        setFakeAuth('')
        setFirstName('')
        setLastName('')
        setEmail('')
    }

    const isValidEmail = (email) =>{
        if (email.length >5 && email.includes('@') && email.includes('.') ){
            return true
        }

        
        return false
    }
    function isValidNames(firstName, lastName){
        if (firstName.length>1 && lastName.length>1){
            return true
        }
        return false
    }

    function fakeLogin(email, firstName, lastName){

        
        if (isValidEmail(email)&& isValidNames(firstName, lastName)){
            return true;
        }
        return false    
    }
    
    useEffect(() => {
        
        setFakeAuth(fakeLogin(email, firstName, lastName));
        
        
    }, [firstName, lastName, email]);

    return (
        <div>
            <Container className="d-flex justify-content-center">
            {!fakeAuth&&
            
            <form onSubmit={handleSubmit} className="align-center">
                <div className='mb-3'>
                    <label className="form-label">First Name:
                        <input type='text' ref={firstNameRef} placeholder="First Name" className="form-control"/>
                    </label>
                </div>
                <div className='mb-3'>
                    <label className="form-label">Last Name:
                        <input type='text' ref={lastNameRef} placeholder="Last Name" className="form-control"/>
                    </label>
                </div>
                <div className='mb-3'>
                    <label className="form-label">email:
                        <input type='text' ref={emailRef} placeholder="Email" className="form-control"/>
                    </label>
                </div>
                <button type="submit" name="submit" className='btn btn-success' >Login</button>
            </form>
            }
            {fakeAuth&&
                <Greeting firstName={firstName} lastName ={lastName} email={email}/>
                
            }
            {fakeAuth&&<button onClick={handleFormReset} className="align-center" text="reset">Logout </button>}
            </Container>
           
        </div>
    )
}

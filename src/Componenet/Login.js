import React from 'react';
import '../App.css';

function Login() {
    return (
        <div className='form-container'>
            <form className='form'>
                <div className='form-group'>
                    <label htmlFor='Name'>Username</label>
                    <input type='text' className='form-control' id='name' placeholder='Enter Username'></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' id='email'  className='form-control' placeholder='Enter Email'></input>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='text' name='password' className='form-control' placeholder='Enter Password'></input>
                </div>
            </form>
        
        </div>
        
    )
}

export default Login
import React from 'react';
import './Login.css';
import Auth from './useAuth';

const Login = () => {
    const auth = Auth();
    const handleSignIn= ()=>{
        auth.signInWithGoogle()
        .then(res=>{
            window.location.pathname = './review';
        })
    }
    return (
        <div className='login'>
            <center>
                <h1>Join the party !!!</h1>
                {
                    auth.user? <button className='cart-button' onClick={auth.signOut} >Sign out</button> :
                    <button className='cart-button' onClick={handleSignIn}>Sign in with google</button>
                }
            </center>
        </div>
    );
};

export default Login;
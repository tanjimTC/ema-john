import React from 'react';
import Auth from './use-auth';

const Login = () => {
    const auth = Auth();
    console.log(auth.user);
    return (
        <div>
            <center>
                <h1>Join the party !!!</h1>
                {
                    auth.user? <button onClick={auth.signOut} >Sign out</button> :
                    <button onClick={auth.signInWithGoogle}>Sign in with google</button>
                }
            </center>
        </div>
    );
};

export default Login;
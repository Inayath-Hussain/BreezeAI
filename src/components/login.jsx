import { useState } from "react";
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { signInWithGoogle, signInWithCredentials } from "../firebase";

const Login = () => {
    if (localStorage.getItem('Allow')) return <Navigate to='/' />
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const signInGoogle = () => {
        signInWithGoogle().then((usercred) => {
            console.log(usercred)
            localStorage.setItem('Allow', true)
            navigate('/')
        }).catch(error => {
            console.log(error)
            setErrorMsg(error.message)
        })
    }

    const signIn = () => {
        signInWithCredentials(email, password).then(user => {
            console.log(user)
            localStorage.setItem('Allow', true)
            navigate('/')
        }).catch(error => {
            console.log(error.message)
            setErrorMsg(error.message)
        })
    }

    return (
        <div className="login-container">
            <div className="login-box">

                {errorMsg && <div className="error-container">
                    <p className="error">{errorMsg}</p>
                </div>}

                <label htmlFor="email">Email</label>
                <input type="email" placeholder="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <p><Link to='/register'>Register?</Link></p>

                <button onClick={signIn}
                    style={email && password ? null : { cursor: 'not-allowed' }}
                    disabled={email && password ? false : true}>Login</button>

                <div className="line-container">
                    <div className="line"></div>
                    <div className="or">or</div>
                    <div className="line"></div>
                </div>

                <button onClick={signInGoogle} className="loginbtn">Sign In With Google</button>

            </div>
        </div>
    );
}

export default Login;
import './Login.css'
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setUser: setLoginUser }) => {
    const [user, setUser] = useState({
        email: ``,
        password: ``
    });

    const [loggedIn, setLoggedIn] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const login = async (e) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:4000/login`, user);
        alert(res.data.message);
        setLoginUser(res.data.user);
        setUser({ email: ``, password: `` });
        setLoggedIn(res.data.user ? true : false);
    }

    return (
        <>
            <div className="container">
                <div className='centered-div'>
                    {loggedIn && <Navigate to="/home" />}
                    <h3>Log in to your account</h3>
                    <br />
                    <form onSubmit={login} className="form">
                        <input type="email" id="sign-in-email" name="email" value={user.email} onChange={handleChange} placeholder="Your email" />
                        <br />
                        <input type="password" id="sign-in-password" name="password" value={user.password} onChange={handleChange} placeholder="Your password" />
                        <br />
                        {/* <input type="submit" value="Login" /> */}
                        <br />
                        <button type='submit' value="Login" className='login'>Login</button>
                    </form>
                    <Link to="/register">
                        <button className='register'>Register</button>
                    </Link>
                    <Link to="/chirps">
                        <button className='view'>View Chirps</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Login;
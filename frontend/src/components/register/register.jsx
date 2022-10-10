import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [user, setUser] = useState({
        name: ``,
        email: ``,
        password: ``
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const register = async (e) => {
        e.preventDefault();
        const { name, email, password } = user;
        if (name && email && password) {
            const res = await axios.post(`http://localhost:4000/register`, user);
            alert(res.data.message);
            setUser({ email: ``, password: ``, name: `` });
            return;
        }
        alert(`Invalid input`);
    }

    return (
        <>
            <div className='container'>
                <div className='centered-div'>
                    <h3>Create new account</h3>
                    <form onSubmit={register}>
                        <input type="text" id="create-account-pseudo" name="name" value={user.name} onChange={handleChange} placeholder="FullName" />
                        <br />
                        <input type="email" id="create-account-first-name" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
                        <br />
                        <input type="password" id="create-account-email" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
                        <br />
                        <br />
                        <button className='register' type="submit">
                            Register!
                        </button>
                        <br />
                        <p>
                            Already have an account?&nbsp;
                            <Link to="/login">
                                <button className='login'>Log In</button>
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;
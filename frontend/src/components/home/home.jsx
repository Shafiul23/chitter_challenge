import { Link } from 'react-router-dom';
import './Home.css'

const Home = ({ user, setUser }) => {
    return (
        <>
            <div className="centered-div">
                <br />
                <p>Welcome to the homepage! <br />
                    This is only available when you are logged in</p>
                <br />
                <button className='logout' onClick={() => setUser({})}>Log Out</button>
                <Link to="/chirps">
                    <button className='view'>View Chirps</button>
                </Link>
            </div>
        </>
    )
}

export default Home
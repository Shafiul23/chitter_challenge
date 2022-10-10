import { Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AllChirps from './Components/AllChirps/AllChirps.jsx';
import ChirpBox from './Components/ChirpBox/ChirpBox';

const App = () => {

  const [user, setUser] = useState({});
  const [chirps, setChirps] = useState({});
  const [getError, setGetError] = useState({ message: ``, count: 0 });
  const [postError, setPostError] = useState(``);


  const getChirps = async () => {
    try {
      // const res = await axios.get(`${process.env.REACT_APP_URL}/chirps`); //import from .env file not working?
      const res = await axios.get(`http://localhost:4000/chirps`);
      return res.data.length ? res.data : new Error(`There are no chirps stored`);
    }
    catch (e) {
      setGetError({ message: `Data not available from the server: ${e.message}`, count: 0 });
      return [];
    }
  }

  useEffect(() => {
    const getData = async () => {
      setChirps(await getChirps());
      console.log(chirps)
    }
    setTimeout(() => getData(), 3000);
  }, []);

  const submitChirp = async chirp => {
    try {
      // await axios.post(`${process.env.CHITTER_URL}/chirps`, chirp);
      await axios.post(`http://localhost:4000/chirps`, chirp);
      setPostError(`Chirp added`)
    } catch (e) {
      setPostError(`There was a problem adding the chirp: ${e.message}`);
    } finally {
      setChirps(await getChirps())
    }
  }

  return (
    <div className='app'>
      <h1>
        <Link to='/' className='chitterheader'>Chitter</Link>
      </h1>
      <div className='feed'>
        <Routes>
          <Route path="/" element={
            user && user._id ? <Home user={user} setUser={setUser} />
              :
              <Login setUser={setUser} />
          } />
          <Route path="/chirp" element={
            user && user._id ? <ChirpBox user={user} setUser={setUser} submitAction={submitChirp} />
              :
              <Login setUser={setUser} />
          } />
          <Route path='/chirps' element={<AllChirps user={user} data={{ chirps, error: getError.message }} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/home" element={<Home setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

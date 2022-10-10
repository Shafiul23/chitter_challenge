import './ChirpBox.css';
import React from 'react';
import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';

import ChirpForm from '../ChirpForm/ChirpForm';
import ChirpModel from '../utils/Chirp.model';
// import generateChirpId from '../utils/generateId';



const ChirpBox = ({ user, setUser, submitAction, data }) => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [chirp, setChirp] = useState({});
    const [submitted, setSubmitted] = useState(false)

    const submitChirp = async (chirpId, chirper, chirpDescription, chirpDateCreated) => {
        chirper = user.name
        const id = chirpId;
        const chirpToSubmit = new ChirpModel(id, chirper, chirpDescription, new Date(chirpDateCreated).toUTCString());
        submitAction(chirpToSubmit);
        setSubmitted(true);
    }

    return (
        <>
            {loggedIn}
            {submitted && <Navigate to='/chirps' />}
            <h5>Hello, {user.name}</h5>
            <div className='container'>
                <div className='centered-div'>
                    <ChirpForm submitAction={submitChirp} chirp={chirp} />
                    <Link to="/chirps">
                        <button className='view'>View Chirps</button>
                    </Link>
                    <Link to='/'>
                        <button className='logout' onClick={() => setUser({})}>Log Out</button>
                    </Link>
                </div>
            </div>
        </>

    )

}

export default ChirpBox;
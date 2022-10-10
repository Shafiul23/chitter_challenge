import { useState, useEffect } from 'react';
import './AllChirps.css';

import Chirp from '../Chirp/Chirp.jsx';
import ChirpModel from '../utils/Chirp.model';
import { Link } from 'react-router-dom';

const AllChirps = ({ data: { chirps, error } }) => {

    const [dataStatus, setDataStatus] = useState({ name: `loading`, message: `Data is loading...` });

    useEffect(() => {
        // const { error } = data;
        if (error?.length) {
            return setDataStatus({ name: `error`, message: error });
        }

        setDataStatus({ name: `loading`, message: `Data is loading...` });

    }, [error]);


    const getFeed = () => {
        if (chirps?.length > 0) {
            const displayChirps = chirps.slice(0).reverse().map(currentChirp => {
                const chirp = new ChirpModel(currentChirp._id, currentChirp.chirper, currentChirp.chirpDescription, currentChirp.chirpDateCreated);
                return <Chirp chirp={chirp} key={chirp._id} />
            });
            return displayChirps;
        }

        return (
            <div id={dataStatus.name} colSpan="3">{dataStatus.message}</div>
        );
    }

    return (
        <>
            <div className="chirps-feed">
                <h3>Chirps</h3>
                <br />
                <div className='chirps'>{getFeed()}</div>
            </div>
            <br />
            <div className='centered-div'>
                <Link to="/chirp">
                    <button type="button" className="chirp-btn" id="logged">Make Chirp</button>
                </Link>
            </div>
        </>
    );
};


export default AllChirps;

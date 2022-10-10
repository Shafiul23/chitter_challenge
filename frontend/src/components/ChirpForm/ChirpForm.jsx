import './ChirpForm.css'
import { useState } from 'react';
import DateCreated from '/Users/shafiulmirza/Documents/digitalfutures/challenges/chitter-challenge/frontend/src/Components/utils/DateCreated.jsx'

// const ChirpForm = ({ user, submitAction, chirp }) => {
const ChirpForm = ({ submitAction, chirp }) => {

    const [chirper, setChirper] = useState(``);
    const [chirpDescription, setChirpDescription] = useState(``);
    const [chirpDateCreated, setChirpDateCreated] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();
        submitAction(chirp._id, chirper, chirpDescription, chirpDateCreated);
        setChirpDescription(``);
        setChirpDateCreated(null);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    name="chirpDescription"
                    placeholder="Enter chirp here..."
                    className="form-control"
                    value={chirpDescription}
                    onChange={event => setChirpDescription(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="chirpDateCreated">
                    {<DateCreated updateDateCreated={dateCreated => setChirpDateCreated(dateCreated)} />}
                </label>
            </div>
            <br />
            <div className="form-group">
                <button type='submit' value='submit' className='chirp'>Chirp!</button>
            </div>
        </form>
    );
};

export default ChirpForm;
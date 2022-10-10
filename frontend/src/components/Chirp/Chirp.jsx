const Chirp = ({ user, chirp }) => {
    const { _id, chirper, chirpDescription, chirpDateCreated } = chirp;
    const dateCreated = new Date(chirpDateCreated).toLocaleString();


    return (
        <>
            <div className="chirper" style={{ color: "gray" }}>{chirper}</div>
            <div className="chirpDescription" style={{ fontSize: "large" }}>{chirpDescription}</div>
            <div className="dateCreated" style={{ fontSize: "small" }}>{dateCreated}</div>
            <br />
        </>
    );
};

export default Chirp;
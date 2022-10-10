import mongoose from 'mongoose';

const chirpSchema = new mongoose.Schema({
    chirper: { type: String, required: true },
    chirpDescription: { type: String, required: true },
    chirpDateCreated: {
        type: Date,
        default: Date.now,
        required: true
    }
}, { collection: "chirps" });

const Chirp = mongoose.model(`Chirp`, chirpSchema);
export default Chirp;
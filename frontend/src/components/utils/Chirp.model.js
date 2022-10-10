export default class ChirpModel {
    constructor(_id, chirper, chirpDescription, chirpDateCreated) {
        this._id = _id;
        this.chirper = chirper;
        this.chirpDescription = chirpDescription;
        this.chirpDateCreated = chirpDateCreated;
    }
}
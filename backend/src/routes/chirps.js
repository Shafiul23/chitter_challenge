import express from 'express';
import Chirp from '../models/chirp.model.js';

export const router = express.Router();

router.route(`/`)
    .get((req, res) => {
        Chirp.find({}, (err, chirps) => {
            if (err) {
                res.send(err);
                next();
            }
            res.status(200).json(chirps);
        })
    })

router.route(`/`)
    .post((req, res) => {
        console.log(req.body);
        const chirp = new Chirp(req.body);

        chirp.save(err => {
            err ? res.send(err) : res.send("Chirp added successfully")
        })
    })  

import express from 'express';

const router = express.Router();

import User from '../models/user.model.js';

router.route(`/`)
    .post((req, res) => {
        const { email } = req.body;
        // Stop user registering if email address is already in the database
        User.findOne({ email }, (err, user) => {
            // Send back that the email address is already used
            if (user) {
                res.send({ message: `User already exists` });
            }
            else {
                const user = new User(req.body);
                // Save the new user to the database
                user.save(err => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.send({ message: `Registration successful` });
                    }
                });
            }
        });
    });

export { router as register };
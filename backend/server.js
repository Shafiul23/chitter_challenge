import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

import { login } from './src/routes/login.js'
import { register } from './src/routes/register.js';
import { router as chirps } from './src/routes/chirps.js';

const port = process.env.PORT;
const host = process.env.HOST;
const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());

app.use(`/chirps`, chirps);
app.use(`/login`, login);
app.use(`/register`, register);


const main = async () => {
    console.log(`Connecting to DB @ ${process.env.DB_URI}`);
    await mongoose.connect(process.env.DB_URI);
}

main()
    .then(() => console.log(`Connected to DB`))
    .catch(err => console.log(err))


const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is runnning on http://${SERVERHOST}:${SERVERPORT}`);
});

export default server;
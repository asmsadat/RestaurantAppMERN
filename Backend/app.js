import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { PORT, mongoDBURL } from './config.js';
import reservationRouter from './routers/reservationRoute.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/reservation', reservationRouter);

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
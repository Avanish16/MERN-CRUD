import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import route from "./routes/userRoute.mjs";
import cors from "cors";



const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();


mongoose.connect(process.env.MONGO_URL)
        .then(() =>{
            console.log("DB Connected successfully.");
        app.listen(8000,()=> {
            console.log("Server is running");
        }) 
        })
        .catch((error) => console.log(error));


app.use("/api", route);
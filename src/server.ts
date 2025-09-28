import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

import { Ai } from './Ai';

const ai = new Ai();
ai.init();


app.listen(3000,()=>{
    console.log("Server is runnning on PORT : ",3000)
})
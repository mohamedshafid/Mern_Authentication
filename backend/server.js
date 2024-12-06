import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import { connectDB } from './db/connectDB.js';
import authRoutes from './routes/auth.route.js';

const app = express();


dotenv.config();

const port = process.env.PORT || 5000;
const __dirname=path.resolve();




app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:"http://localhost:5173",credentials:true}));

app.use("/api/auth", authRoutes);


if(process.env.NODE_ENV==="production")
{
    app.use(express.static(path.join(__dirname,"/frontend/dist")));

    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
    })
}

app.listen(port, () => {
    connectDB();

    console.log("Server running on the port 5000");
});
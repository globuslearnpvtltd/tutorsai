import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import authRoutes from './routes/auth_route/auth_routes.js'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import cors from 'cors';
import errorHandler from './utils/error_handling/errorHandler.js';

const app = express();

const port = process.env.PORT;
const Mongo = process.env.MONGO_URI;

app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true
  }));

app.use(session({
    secret: 'my_secret_key',
    resave: false,
    saveUninitialized: true
}));

app.use('/api/auth',authRoutes);

app.use(errorHandler);

mongoose.connect(`${Mongo}`).then(()=>{
    console.log("Connected to mongoDB");
}).catch((error)=>{
    console.log(error);
})

app.listen(port,()=>{
    console.log(`Server Started At ${port}`);
});
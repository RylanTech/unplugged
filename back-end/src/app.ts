import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan';
import { db } from './models';
import userRoutes from './routes/userRoutes'

const app = express();

const cors = require('cors');
app.use(cors());

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use('/api/user', userRoutes)

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end();
});

db.sync().then(() => {
    console.info("connected to the database!")
});

app.listen(3001);
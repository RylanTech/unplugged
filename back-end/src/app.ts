import express, { NextFunction, Request, Response } from 'express'
import morgan from 'morgan';
// import { db } from './models';

const app = express();

const cors = require('cors');
app.use(cors());

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use()

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).end();
});

// Syncing our database
// db.sync().then(() => {
//     console.info("connected to the database!")
// });

app.listen(3001);